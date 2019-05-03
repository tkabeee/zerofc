import React from 'react'
import { Link } from 'components/Router'

import './style.scss'

export default () => (
  <header class="global-header">
    <div className="header-main">
      <h1 className="site-title">
        <Link to="/" title="TOP"><img className="header__logo" src="/images/logo.jpg" />岡山総合格闘技ジム ゼロ戦クラブ</Link>
      </h1>
    </div>
    <ul class="header__menu-list">
      <li class="list-item"><a href="mailto:&#122;&#102;&#99;&#100;&#111;&#110;&#103;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;" title="お問い合わせ"><span>お問い合わせ</span></a></li>
      <li class="list-item"><Link to="/faq/" title="よくあるご質問">よくあるご質問</Link></li>
      <li class="list-item"><Link to="/sitemap/" title="サイトマップ">サイトマップ</Link></li>
    </ul>
  </header>
)
