/**
 * Label_Check
 * Update : 2014/11/25
 * Version : 0.1
 * About : ページ内の label for の値と、対応するidのフォームに色をつけて、値が正しく設定されているか確認するためのブックマークレット
 */

// Compress by Online JavaScript/CSS Compression Using YUI Compressor [http://refresh-sf.com/yui/]
// javascript:(function(){!function(n,i,c){c=n.createElement('script');c.src='bit.ly/1rW8thS';c.onload=function(){i(jQuery.noConflict(1))};n.body.appendChild(c)}(document,function(c){});var g=['#E51400','#FA6800','#F0A30A','#60A917','#008A00','#00ABA9','#1BA1E2','#0050EF','#6A00FF','#AA00FF','#F472D0','#D80073','#A20025','#E3C800','#825A2C','#6D8764','#647687','#76608A','#A4C400','#87794E'];var m='<div>forの設定値が不正です</div>';var k='labelkun_error';var l={display:'block','text-align':'center','font-size':'18px','line-height':'1.4','background-color':'#ff0000',color:'#ffffff',padding:'10px'};var d={color:'#ff0000 !important','font-size':'48px',position:'relative','font-weight':'bold'};var e='[';var b=[];$('label').each(function(n){var c=0;var o=$(this).attr('for');if(typeof o==='undefined'){c=1}else{if(o.indexOf(e)==-1){if(o.length){b.push(o)}else{c=1}}else{c=1}}if(c){m=$(m).addClass(k);$(this).css(d).append(m);$('.'+k).css(l)}});var a=b.filter(function(c,o,n){return n.indexOf(c)===o});label_array_filter_length=a.length;var f=g.length-1;var j=0;for(var h=0;h<label_array_filter_length;h++){if(j<f){j=j+1}else{j=0}label=a[h].replace('.','\\.');if(label.length){$('[for='+label+']').css({color:g[j]+'!important','font-size':'18px','font-weight':'bold'});$('#'+label).css({border:'4px solid '+g[j],outline:'4px solid '+g[j]})}}})();

javascript:(function(){

  // jQuery 1.11.1
  !function(d,f,s){s=d.createElement('script');s.src='bit.ly/1rW8thS';s.onload=function(){f(jQuery.noConflict(1))};d.body.appendChild(s)}(document,function($){});

  // Setting
  var color = ['#E51400','#FA6800','#F0A30A','#60A917','#008A00','#00ABA9','#1BA1E2','#0050EF','#6A00FF','#AA00FF','#F472D0','#D80073','#A20025','#E3C800','#825A2C','#6D8764','#647687','#76608A','#A4C400','#87794E'];
  var error_txt = '<div>forの設定値が不正です</div>';
  var error_classname = 'labelkun_error';
  var error_blockcolor = {'display':'block','text-align':'center','font-size':'18px','line-height':'1.4','background-color':'#ff0000','color':'#ffffff','padding':'10px'};
  var error_txtcolor = {'color': '#ff0000 !important','font-size':'48px','position':'relative','font-weight':'bold'};
  var error_word = '[';
  var label_array = [];

  // label for の値を取得＆エラーチェック
  $('label').each(function (i) {
    var error = 0;
    var label_for_val = $(this).attr('for');
    if (typeof label_for_val === 'undefined') {
      error = 1;
    }else{
      if(label_for_val.indexOf(error_word) == -1){
        if(label_for_val.length){
          label_array.push(label_for_val);
        }else{
          error = 1;
        }
      }else{
        error = 1;
      }
    }
    if(error){
      error_txt = $(error_txt).addClass(error_classname);
      $(this).css(error_txtcolor).append(error_txt);
      $('.'+error_classname).css(error_blockcolor);
    }
  });

  // 重複チェック
  var label_array_filter = label_array.filter(function (x, i, self) {return self.indexOf(x) === i;});
  label_array_filter_length = label_array_filter.length;
  var color_length = color.length - 1;
  var c = 0;

  // 対応するlabel for と id を色付け
  for (var i = 0; i < label_array_filter_length; i++) {
    if(c < color_length){
      c = c+1;
    }else{
      c = 0;
    }
    label = label_array_filter[i].replace('.','\\.');
    if(label.length){
      $('[for='+label+']').css({
        'color': color[c]+'!important',
        'font-size':'18px',
        'font-weight':'bold'
      });
      $('#'+label).css({'border':'4px solid '+color[c],'outline':'4px solid '+color[c]});
    }
  };

})();