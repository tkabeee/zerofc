import React from 'react'
import { Link } from 'components/Router'

import './style.scss'

export default () => (
  <header class="global-header">
    <div className="header__container">
      <div className="header__main">
        <h1 className="site-title">
          <Link className="site-title__link" to="/" title="TOP">
            <picture className="header__logo"><img src="/images/logo.jpg" /></picture>岡山総合格闘技ジム ゼロ戦クラブ
          </Link>
        </h1>
      </div>
      <ul class="header__menu-list">
        <li class="list-item">
          <a href="mailto:&#122;&#102;&#99;&#100;&#111;&#110;&#103;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;" title="お問い合わせ"><i class="fas fa-envelope" />お問い合わせ</a>
        </li>
        <li class="list-item">
          <Link to="/faq/" title="よくあるご質問"><i class="fas fa-comment fa-flip-horizontal" />よくあるご質問</Link>
        </li>
        <li class="list-item">
          <Link to="/sitemap/" title="サイトマップ"><i class="fas fa-sitemap" />サイトマップ</Link>
        </li>
      </ul>
    </div>
  </header>
)
