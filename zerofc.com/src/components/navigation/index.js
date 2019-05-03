import React from 'react'
import { Link } from 'components/Router'

import './style.scss'

export default () => (
  <nav class="global-nav">
    <div className="nav__container">
      <ul class="nav__menu-list">
        <li class="nav-item"><Link to="/" title="トップ">トップ</Link></li>
        <li class="nav-item"><Link to="/admission/" title="入会案内">入会案内</Link></li>
        <li class="nav-item"><Link to="/guide/" title="施設案内">施設案内</Link></li>
        <li class="nav-item"><Link to="/schedule/" title="練習スケジュール">練習スケジュール</Link></li>
        <li class="nav-item"><Link to="/kids/" title="キッズ">キッズ</Link></li>
        <li class="nav-item"><Link to="http://www.youtube.com/user/zerofighterclub?feature=mhee" title="動画" target="_blank">動 画</Link></li>
        <li class="nav-item"><Link to="/access/" title="アクセスマップ">アクセスマップ</Link></li>
        <li class="nav-item"><Link to="/link/" title="リンク">リンク</Link></li>
      </ul>
    </div>
  </nav>
)
