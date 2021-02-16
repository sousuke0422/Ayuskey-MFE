import { parseFragment } from 'parse5';
import { urlRegexFull } from './prelude';

export function fromHtml(html: string, hashtagNames?: string[]): string {
	const dom = parseFragment(html);

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

	function getText(node: any): string {
		if (node.nodeName == '#text') return node.value;

		if (node.childNodes) {
			return node.childNodes.map((n: any) => getText(n)).join('');
		}

		return '';
	}

	function analyze(node: any) {
		switch (node.nodeName) {
			case '#text':
				text += node.value;
				break;

			case 'br':
				text += '\n';
				break;

			case 'a':
				const txt = getText(node);
				const rel = node.attrs.find((x: any) => x.name == 'rel');
				const href = node.attrs.find((x: any) => x.name == 'href');

				// ハッシュタグ
				if (hashtagNames && href && hashtagNames.map(x => x.toLowerCase()).includes(txt.toLowerCase())) {
					text += txt;
				// メンション
				} else if (txt.startsWith('@') && !(rel && rel.value.match(/^me /))) {
					const part = txt.split('@');

					if (part.length == 2) {
						//#region ホスト名部分が省略されているので復元する
						const acct = `${txt}@${(new URL(href.value)).hostname}`;
						text += acct;
						//#endregion
					} else if (part.length == 3) {
						text += txt;
					}
				// その他
				} else {
					text += !href ? txt
						: txt === href.value
							? txt.match(urlRegexFull) ? txt
							: `<${txt}>`
						: `[${txt}](${href.value})`;
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
