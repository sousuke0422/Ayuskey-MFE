import { URL } from 'url';
import * as parse5 from 'parse5';
import treeAdapter = require('parse5/lib/tree-adapters/default');
import { urlRegex, urlRegexFull } from './prelude';

export function fromHtml(html: string, hashtagNames?: string[]): string {
	const dom = parse5.parseFragment(html);

	let text = '';

	for (const n of dom.childNodes) {
		analyze(n);
	}

	return text.trim();

	function appendChildren(childNodes: any,): void {
		if (childNodes) {
			for (const n of childNodes) {
				analyze(n);
			}
		}
	}

	//function getText(node: any): string {
	//	if (node.nodeName == '#text') return node.value;
	function getText(node: parse5.Node): string {
		if (treeAdapter.isTextNode(node)) return node.value;
		if (!treeAdapter.isElementNode(node)) return '';

		if (node.childNodes) {
			return node.childNodes.map(n => getText(n)).join('');
		}

		return '';
	}

	function analyze(node: parse5.Node) {
		if (treeAdapter.isTextNode(node)) {
			text += node.value;
			return;
		}

		// Skip comment or document type node
		if (!treeAdapter.isElementNode(node)) return;

		switch (node.nodeName) {
			case 'br':
				text += '\n';
				break;

			case 'a':
				const txt = getText(node);
				const rel = node.attrs.find(x => x.name === 'rel');
				const href = node.attrs.find(x => x.name === 'href');

				// ハッシュタグ
				if (hashtagNames && href && hashtagNames.map(x => x.toLowerCase()).includes(txt.toLowerCase())) {
					text += txt;
				// メンション
				} else if (txt.startsWith('@') && !(rel && rel.value.match(/^me /))) {
					const part = txt.split('@');

					if (part.length === 2 && href) {
						//#region ホスト名部分が省略されているので復元する
						const acct = `${txt}@${(new URL(href.value)).hostname}`;
						text += acct;
						//#endregion
					} else if (part.length === 3) {
						text += txt;
					}
				// その他
				} else {
					const generateLink = () => {
						if (!href && !txt) {
							return '';
						}
						if (!href) {
							return txt;
						}
						if (!txt || txt === href.value) {
							if (href.value.match(urlRegexFull)) {
								return href.value;
							} else {
								return `<${href.value}>`;
							}
						}
						if (href.value.match(urlRegex) && !href.value.match(urlRegexFull)) {
							return `[${txt}](<${href.value}>)`;
						} else {
							return `[${txt}](${href.value})`;
						}
					};

					text += generateLink();
				}
				break;

			case 'p':
				text += '\n\n';
				if (node.childNodes) {
					for (const n of node.childNodes) {
						analyze(n);
					}
				}
				break;

			case 'marquee': {
				const direction = getValue(node, 'direction');
				const behavior = getValue(node, 'behavior');

				const attr
					= behavior === 'alternate' ? ' alternate'
					: behavior === 'slide'
						? direction === 'right' ? ' reverse-slide' : ' slide'
						: direction === 'right' ? ' reverse' : ''

						text += `<marquee${attr}>`;
					appendChildren(node.childNodes);
					text += `</marquee>`;
				break;
			}

			default:
				if (node.childNodes) {
					for (const n of node.childNodes) {
						analyze(n);
					}
				}
				break;
		}
	}
}

function getValue(node: any, name: string): string | undefined {
	return node.attrs.find((x: any) => x.name == name)?.value || undefined;
}
