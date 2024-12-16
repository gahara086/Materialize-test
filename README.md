# タスク管理アプリ
UIフレームワーク[Materialize](https://materializecss.com/)を使用したTOODアプリです。  
画面イメージ確認用に作成しました。

## 機能
- TODOアプリ

## 技術スタック
- JSP
- jQuery
- Materialize CSS
- JavaScript

## プロジェクト構成
```
/my-sample-project
├── /src
│ ├── /components
│ │ ├── Header.jsp // ヘッダー部分
│ │ ├── TaskTable.jsp // タスク一覧
│ │ ├── TaskForm.jsp // タスク追加/編集フォーム
│ ├── /js
│ │ ├── main.js // jQueryの操作スクリプト
│ ├── /css
│ │ ├── style.css // カスタムCSS
├── index.jsp // メインページ
```

## セットアップ方法
1. プロジェクトをクローンまたはダウンロード
2. Webサーバー（Tomcatなど）にデプロイ
3. ブラウザで`index.jsp`にアクセス
