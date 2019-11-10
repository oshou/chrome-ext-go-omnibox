chrome.omnibox.onInputChanged.addListener(function(text, suggest) {
  console.log("onInputChanged: " + text);
  suggest([
    {
      content: "src",
      description: "src : [公式] Githubソース"
    },
    {
      content: "std",
      description: "std : [公式] 標準パッケージ一覧"
    },
    {
      content: "sub",
      description: "sub : [公式] 準標準パッケージ一覧"
    },
    {
      content: "vendor",
      description: "vendor : [公式] 外部ベンダー製パッケージ検索"
    },
    {
      content: "spec",
      description: "spec : [公式] 言語仕様"
    },
    {
      content: "faq",
      description: "faq : [公式] FAQ"
    },
    {
      content: "go-way",
      description: "go-way : [非公式] Go-Way"
    },
    {
      content: "review",
      description: "review : [非公式] レビューコメント(和訳)"
    },
    {
      content: "effective",
      description: "effective : [公式] 実践Go言語(和訳)"
    },
    {
      content: "test",
      description: "test : [非公式] テスト概要"
    },
    {
      content: "sample",
      description: "sample : [非公式] サンプル"
    },
    {
      content: "tutorial",
      description: "tutorial : [公式] チュートリアル"
    },
    {
      content: "proverb",
      description: "proverb: [非公式] 格言(和訳)"
    }
  ]);
});

chrome.omnibox.onInputEntered.addListener(function(text) {
  console.log("onInputEntered: ", text);
  var url;
  switch (text) {
    // [公式] Githubソース
    case "src":
      newURL = "https://github.com/golang/go/tree/master/src";
      break;
    // [公式] 標準パッケージ一覧
    case "std":
      newURL = "https://golang.org/pkg/#stdlib";
      break;
    // [公式] 準標準パッケージ一覧
    case "sub":
      newURL = "https://golang.org/pkg/#subrepo";
      break;
    // [公式] 外部ベンダー製パッケージ一覧
    case "vendor":
      newURL = "https://godoc.org/";
      break;
    // [公式] 言語仕様
    case "spec":
      newURL = "http://golang.jp/go_spec";
      break;
    // [公式] FAQ
    case "faq":
      newURL = "http://golang.jp/go_faq";
      break;
    // [非公式] Go-Way
    case "go-way":
      newURL = "https://ukai-go-talks.appspot.com/2014/gocon.slide#1";
      break;
    // [非公式] レビューコメント(和訳)
    case "review":
      newURL = "https://qiita.com/knsh14/items/8b73b31822c109d4c497";
      break;
    // [公式] 実践Go言語(和訳)
    case "effective":
      newURL = "http://golang.jp/effective_go";
      break;
    // [非公式] テスト概要
    case "test":
      newURL = "https://inside.dmm.com/entry/2019/03/28/review-go-test";
      break;
    // [非公式] サンプル
    case "sample":
      newURL = "https://oohira.github.io/gobyexample-jp/";
      break;
    // [公式] チュートリアル(日本語版)
    case "tutorial":
      newURL = "https://go-tour-jp.appspot.com/";
      break;
    // [非公式] 格言(和訳)
    case "proverb":
      newURL = "http://nametake-1009.hatenablog.com/entry/2016/12/11/203328";
      break;
    // [公式] 標準パッケージ詳細
    default:
      newURL = "https://golang.org/pkg/" + text;
      console.log("test");
  }
  chrome.tabs.create({ url: newURL });
});
