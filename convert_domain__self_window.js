/**
 * Convert_Domain_Self_Window
 * Update : 2013/08/05
 * Version : 0.1
 * About : テスト（ローカル）環境と本番環境を、同じ画面で行ったり来たりできるブックマークレット
 */

// 0. ブラウザに下記ブックマークレットを登録
javascript:(function(){var link1 = "★★★★★";var link2 = "☆☆☆☆☆";var nowurl = location.href;if(nowurl.indexOf(link1) !== -1){gotourl = nowurl.replace(link1,link2);location.href= gotourl;}else if(nowurl.indexOf(link2) !== -1){gotourl = nowurl.replace(link2,link1);location.href= gotourl;}})();

// 1. ローカル環境のURL（http://test.dev）の一部を ★★★★★ の部分に入力（例：.dev）
// 2. 本番環境のURL（http://test.net）の一部を ★★★★★ の部分に入力（例：.net）
// 3. ローカル環境にいる状態(例： http://test.dev/test/test.html)で、ブックマークレットを呼び出すと。。。
// 4. 同一ウィンドウで、本番環境(例： http://test.net/test/test.html)が開きます。
// 5. 逆に本番環境にいる場合(例： http://test.net/category/index.html)に、ブックマークレットを呼び出すと。。。
// 6. 同一ウィンドウで、ローカル環境(例： http://test.dev/category/index.html)が開きます。
// 7. ブックマークバーに配置しておくと、ローカル・本番の切り替えがボタン一発で移動できて便利！