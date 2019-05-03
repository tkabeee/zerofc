import React from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
//
import { Link, Router } from 'components/Router'
import Header from 'components/header'
import Footer from 'components/footer'
import Navigation from 'components/navigation'
import FbPage from 'components/widgets/fb-page'

import './app.css'

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

function App() {
  return (
    <Root>
      <Header />
      <Navigation />
      <div className="main__wrapper">
        <main class="main__container">
          <div class="main-content">
            <React.Suspense fallback={<em>Loading...</em>}>
              <Router>
                <Routes path="*" />
              </Router>
            </React.Suspense>
          </div>
          <div className="side-content">
            <div className="side__column side__column-unit col-unit-diary">
              <a href="http://zfcj.blog98.fc2.com/" title="『零日記』岡山のゼロ戦クラブの日常をつづっているブログ" target="_blank">
                <span>零日記</span>
              </a>
            </div>
            <div className="side__column side__column-unit col-unit-instructor">
              <Link to="/instructor/" title="インストラクターの紹介"><span>インストラクター紹介</span></Link>
            </div>
            <div className="side__column">
              <FbPage />
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </Root>
  )
}

export default App
