# アプリ概要

## Letter Box について

顧客が従業員に対して匿名でメッセージを送れるアプリ。  
メッセージをやり取りする機能はないが  
ログイン不要で誰に送るのかがURLに反映される。  
そのため、QRコードを読み取るだけでメッセージを誰に送るのか指定できる。  

## Letter Box を構成する要素

Letter Box は以下のリポジトリがある

### 客側フロントエンド

顧客が感謝を伝える際に利用する画面  
https://github.com/yudai-nakajima/letter-box-frontend-client

### 管理画面フロントエンド

従業員が感謝を確認するための画面
※本リポジトリ

### バックエンド

Letter Box のバックエンド
フロントエンドは客側・管理画面と分かれるが、バックエンドは 1 つのみ  
https://github.com/yudai-nakajima/letter-box-backend

### API 仕様書

https://github.com/yudai-nakajima/letter-box-api

# 作成目的
店員に対して気軽にメッセージを送れるアプリを作成したいと思ったため。

# 使用技術

※本リポジトリで利用している技術のみ記述

- React
- Typescript
- ESLint
- Prettier
- Material UI
- Emotion
- React-Router-Dom
- storybook
- chromatic
  - スナップショットテスト
- axios 

# 機能一覧

- ログイン機能
- メッセージ確認機能
