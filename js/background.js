chrome.omnibox.onInputChanged.addListener(function(text, suggest) {
  console.log("onInputChanged: " + text);
  suggest([
    {
      content: "src",
      description: "src : [公式] Githubソース"
    },
    {
      content: "builtin",
      description: "src : [公式] Githubソース(組み込み)"
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
      content: "spec_jp",
      description: "spec : [公式] 言語仕様(日本語版サイト)"
    },
    {
      content: "faq",
      description: "faq : [公式] FAQ"
    },
    {
      content: "faq_jp",
      description: "faq : [公式] FAQ(日本語版サイト)"
    },
    {
      content: "review",
      description: "review : [公式] レビューコメント"
    },
    {
      content: "review_jp",
      description: "review : [非公式] レビューコメント(和訳記事)"
    },
    {
      content: "effective",
      description: "effective : [公式] 実践Go言語"
    },
    {
      content: "effective_jp",
      description: "effective : [公式] 実践Go言語(日本語版サイト)"
    },
    {
      content: "tutorial",
      description: "tutorial : [公式] Tour of Go チュートリアル"
    },
    {
      content: "tutorial_jp",
      description: "tutorial : [公式] Tour of Go チュートリアル(日本語版サイト)"
    },
    {
      content: "test",
      description: "test : [非公式] DMM 社ブログの「Go の API テスト技法」記事"
    },
    {
      content: "sample",
      description: "sample : [非公式] Go by Example"
    },
    {
      content: "proverb",
      description:
        "proverb: [非公式] Go 作者 RobPike の「Go Provers」の和訳記事"
    },
    {
      content: "go-way",
      description: "go-way : [非公式] 「Go に入っては Go に従え」の slide 参照"
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
    // [公式] Githubソース(組み込み)
    case "builtin":
      newURL =
        "https://github.com/golang/go/tree/master/src/builtin/builtin.go";
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
      newURL = "https://golang.org/ref/spec";
      break;
    // [公式] 言語仕様(日本語版サイト)
    case "spec_jp":
      newURL = "http://golang.jp/go_spec";
      break;
    // [公式] FAQ
    case "faq":
      newURL = "https://golang.org/doc/faq";
      break;
    // [公式] FAQ(日本語版サイト)
    case "faq_jp":
      newURL = "http://golang.jp/go_faq";
      break;
    // [公式] レビューコメント
    case "review":
      newURL = "https://github.com/golang/go/wiki/CodeReviewComments";
      break;
    // [非公式] レビューコメント(和訳記事)
    case "review_jp":
      newURL =
        "https://gist.github.com/knsh14/0507b98c6b62959011ba9e4c310cd15d";
      break;
    // [公式] 実践Go言語
    case "effective":
      newURL = "https://golang.org/doc/effective_go.html";
      break;
    // [公式] 実践Go言語(日本語版サイト)
    case "effective_jp":
      newURL = "http://golang.jp/effective_go";
      break;
    // [公式] Tour of Go チュートリアル
    case "tutorial":
      newURL = "https://tour.golang.org";
      break;
    // [公式] Tour of Go チュートリアル(日本語版サイト)
    case "tutorial_jp":
      newURL = "https://go-tour-jp.appspot.com/";
      break;
    // [非公式] Go-Way
    case "go-way":
      newURL = "https://ukai-go-talks.appspot.com/2014/gocon.slide#1";
      break;
    // [非公式] テスト概要
    case "test":
      newURL = "https://inside.dmm.com/entry/2019/03/28/review-go-test";
      break;
    // [非公式] サンプル
    case "sample":
      newURL = "https://oohira.github.io/gobyexample-jp/";
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
