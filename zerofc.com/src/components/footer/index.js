import React from 'react'
import { Link } from 'components/Router'

import './style.scss'

export default () => (
  <footer id="footer">
    <div class="footer-container">
      <ul>
        <li><Link to="/" title="TOP">TOP</Link></li>
        <li>｜</li>
        <li><Link to="/admission/" title="入会案内">入会案内</Link></li>
        <li>｜</li>
        <li><Link to="/guide/" title="施設案内">施設案内</Link></li>
        <li>｜</li>
        <li><Link to="/schedule/" title="練習スケジュール">練習スケジュール</Link></li>
        <li>｜</li>
        <li><Link to="/instructor/" title="インストラクター">インストラクター</Link></li>
        <li>｜</li>
        <li><Link to="/kids/" title="キッズ">キッズ</Link></li>
        <li>｜</li>
        <li><a href="http://www.youtube.com/user/zerofighterclub?feature=mhee" title="動画" target="_blank">動画</a></li>
        <li>｜</li>
        <li><Link to="/access/" title="アクセスマップ">アクセスマップ</Link></li>
        <li>｜</li>
        <li><Link to="/link/" title="リンク">リンク</Link></li>
        <li>｜</li>
        <li><a href="mailto:&#122;&#102;&#99;&#100;&#111;&#110;&#103;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;" title="お問い合わせ">お問い合わせ</a></li>
        <li>｜</li>
        <li><Link to="/faq/" title="よくあるご質問">よくあるご質問</Link></li>
        <li>｜</li>
        <li><Link to="/sitemap/" title="サイトマップ">サイトマップ</Link></li>
      </ul>
      <h2>打撃・グラップリング・柔術・レスリング・キックボクシングなど各自の希望に合わせた練習を行っています。<br />初心者や未経験の方でも楽しく練習ができる格闘技ジムです。　日本修斗協会公認オフィシャルジムとして岡山・倉敷・水島・総社で活動中です。</h2>
      <p>岡山総合格闘技ジム ゼロ戦クラブ &copy; 2012 ZERO FIGHTER CLUB All rights reserved.</p>
    </div>
  </footer>
)
