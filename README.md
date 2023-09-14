# Noby JavaScript Clientとは何ですか？ (What is Noby JavaScript Client?)

Noby JavaScript Clientは、NOBY APIへのアクセスを簡単にするためのJavaScriptライブラリです。(The Noby JavaScript Client is a JavaScript library that provides easy access to the NOBY API.)

<img src="https://raw.githubusercontent.com/cotogoto/noby-java-client/master/noby_image/noby_neutral_a.jpg" width='200'>

* CotoGoto
    * [https://www.cotogoto.ai/](https://www.cotogoto.ai/)

* Noby API
    * [https://webapi.cotogoto.ai/](https://webapi.cotogoto.ai/)

## 更新日 (Updates)

* 2023/09/14 0.1.0 released

## インストール方法 (Installation)

このライブラリは現在、直接ソースコードとして提供されています。将来的にはnpmやyarnを使用してインストールできるようになる予定です。

## 使い方 (Usage)

基本的な使い方は以下の3ステップです：

1. Noby APIに従ったパラメータを設定します。(Set parameters according to the Noby API.)
2. NobyAPIオブジェクトを生成します。(Generate a NobyAPI object.)
3. 会話を設定して実行します。(Set up the conversation and execute it.)

以下にサンプルコードを示します：

```JavaScript
const appKey = "YOUR_APP_KEY";
const api = new NobyAPI(appKey);

async function sendMessageToNoby(text) {
    try {
        const response = await api.talk(text);
        console.log("Noby's Response:", response);
    } catch (error) {
        console.error("Error:", error.message);
    }
}

sendMessageToNoby("こんにちは");
```

# ライセンス (License)

ソースコードはMITライセンスの下でライセンスされており、ウェブサイトのコンテンツはCC BY 4.0でライセンスされています。(The source code is licensed under the MIT license, and the website content is licensed under CC BY 4.0.)
