import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <div className="header">
      <h1><a href=""><img src="" alt="" /></a></h1>
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