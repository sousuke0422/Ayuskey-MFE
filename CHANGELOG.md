# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).


## [Unreleased]

## [11.37.1-rei0784-5.15.1] 2021-08-28

### Security

- XSS GHSA-669q-w6qc-75h3

## [11.37.1-rei0784-5.15.0] 2021-08-22

### Added

- pizzaxを部分的に移植
- Array ActivityStreams typeのサポート

### Fixed

- dockerのコンテナがビルドできない
- ドキュメント内のgithubへ飛ぶリンクが古いのが修正されました。
- InBoxのDelayed発生が軽減されました
  - not reacted な Undo.Like がinboxに滞留するのを修正
  - AP Delate Activityの修正
  - 存在しないユーザーの削除をリトライしない
- リモートドライブの不具合修正
- AP Actorの修正
- inboxのバグ修正
- roomの不具合修正
- 特定条件でログアウトさせられる問題を修正

### Changed

- 音の鳴らし方がv12と同様になりました。
  - 古い音源は次のバージョンで削除予定です。
- ActivityPub: ジョブキューの試行タイミングを調整
- bioと名前の上限を緩和
- job queueの調整

### Removed

- 不要になったためコンテナ内からvipsを削除

## [11.37.1-rei0784-5.14.0] - 2021-08-12

### Added

- 5.11.2からたくさんの機能が追加されました

### Fixed

- 5.11.2から検索した際プログレスバーが検索し終わっても消えないなどのいくつかのバグが修正されています。
- beta.6からの修正
  - 仕様を以前の戻し、絵文字表示バグに終止符を打ちました。

## [11.37.1-rei0784-5.14.0-beta.6] - 2021-08-12

### Added

- 言語ファイルにwelcomeのタグリストが空の際の言語を追加
- ウィジェットにv12仕様のjob queueを追加
- キャッシュを消す機能を追加
- フォロー/ミュート/ブロック インポートでファイル名を見るように

### Fixed

- 同じインスタンスからの絵文字が通知欄に表示されない
- 検索した際プログレスバーが検索し終わっても消えない
- welcomeページのタイムラインで画像が表示されない
- welcomeページで管理者が設定されていない場合空白が表示される
- パスワードを空に変更できてしまうのを修正 Fix [mei23#1455](https://github.com/mei23/misskey-v11/issues/1455)
- 投票に数字で終わるリプライを付けられているとinboxで処理できないのを修正 Fix [mei23#1522](https://github.com/mei23/misskey-v11/issues/1522)

### Changed

- Tokenの生成方法を変更
- Twitterウィジットが使える時はプレイヤーを使わないように

### Removed

- テーマの状態をログに出していた物を削除

## [11.37.1-rei0784-4.0.0] - 2020-11-01

### Added

- お嬢様スイッチを追加
- 検索窓がびよ～んするようになった

### Fixed

- docker環境においてfilesをマウントするように
- 内部的な修正をたくさん

[Unreleased]: https://github.com/TeamBlackCrystal/misskey/compare/11.37.1-rei0784-5.15.0...HEAD
[11.37.1-rei0784-5.15.1]: https://github.com/TeamBlackCrystal/misskey/compare/11.37.1-rei0784-5.15.0...11.37.1-rei0784-5.15.1
[11.37.1-rei0784-5.15.0]: https://github.com/TeamBlackCrystal/misskey/compare/11.37.1-rei0784-5.14.0...11.37.1-rei0784-5.15.0
[11.37.1-rei0784-5.14.0]: https://github.com/TeamBlackCrystal/misskey/compare/11.37.1-rei0784-5.14.0-beta.6...11.37.1-rei0784-5.14.0
[11.37.1-rei0784-5.14.0-beta.6]: https://github.com/TeamBlackCrystal/misskey/compare/11.37.1-rei0784-5.14.0-beta.5...11.37.1-rei0784-5.14.0-beta.6
[11.37.1-rei0784-4.0.0]: https://github.com/TeamOrangeServer/misskey/compare/v3.6.0...v11.37.1-rei0784-4.0.0
