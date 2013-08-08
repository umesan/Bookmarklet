/**
 * Open_Window_320x480
 * Update : 2013/08/05
 * Version : 0.1
 * About : 開いているページを、320x480サイズで開くブックマークレット
 */

// 0. ブラウザに下記ブックマークレットを登録
javascript:win=window.open(location.href,'mywin','directories=no,location=no,menubar=no,scrollbars=yes,status=no,toolbar=no,personalbar=no,width=336,height=480');win.focus();

// 1. ページを閲覧時に、上記ブックマークレットをクリック
// 2. 表示領域が 320x480 となるサイズで表示されます。