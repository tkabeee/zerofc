import React from 'react'

document.write('<div id="fb-root"></div>');
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v2.9";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

export default () => (
  <div className="zero-facebook">
    <div class="fb-page" data-href="https://www.facebook.com/&#x30bc;&#x30ed;&#x6226;&#x30af;&#x30e9;&#x30d6;-294718787233613" data-height="800" data-tabs="timeline" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true">
      <blockquote cite="https://www.facebook.com/&#x30bc;&#x30ed;&#x6226;&#x30af;&#x30e9;&#x30d6;-294718787233613" class="fb-xfbml-parse-ignore">
      <a href="https://www.facebook.com/&#x30bc;&#x30ed;&#x6226;&#x30af;&#x30e9;&#x30d6;-294718787233613">ゼロ戦クラブ Facebookページ</a>
      </blockquote>
    </div>
  </div>
)
