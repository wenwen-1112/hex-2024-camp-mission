import {Link} from 'react-router-dom'

import Logo from '@/assets/images/logo.svg'

const Header = () => {
  return (
    <div className="header container">
      <h1><a href="#"><img src={Logo} alt="logo" /></a></h1>
      <ul className="menu">
        <li><Link to="/">首頁</Link></li>
        <li><Link to="/collection">作品集</Link></li>
        <li><Link to="/service">服務項目</Link></li>
        <li><Link to="/blog">部落格</Link></li>
        <li>聯絡我</li>
      </ul>
    </div>
  )
}

export default Header