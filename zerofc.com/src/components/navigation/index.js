import React from 'react'
import { Link } from 'components/Router'

import './style.scss'

export default () => (
  <nav class="global-nav">
    <div className="nav__container">
      <ul class="nav__menu-list">
        <li class="nav-item nav-item-home"><Link to="/" title="トップ">トップ</Link></li>
        <li class="nav-item nav-item-admission"><Link to="/admission/" title="入会案内">入会案内</Link></li>
        <li class="nav-item nav-item-guide"><Link to="/guide/" title="施設案内">施設案内</Link></li>
        <li class="nav-item nav-item-schedule"><Link to="/schedule/" title="練習スケジュール">練習スケジュール</Link></li>
        <li class="nav-item nav-item-kids"><Link to="/kids/" title="キッズ">キッズ</Link></li>
        <li class="nav-item nav-item-video"><Link to="http://www.youtube.com/user/zerofighterclub?feature=mhee" title="動画" target="_blank">動 画</Link></li>
        <li class="nav-item nav-item-access"><Link to="/access/" title="アクセスマップ">アクセスマップ</Link></li>
        <li class="nav-item nav-item-link"><Link to="/link/" title="リンク">リンク</Link></li>
      </ul>
    </div>
  </nav>
)
