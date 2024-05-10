import Logo from '@/assets/images/logo.svg'
import ListIcon from '@/assets/images/list.svg'
import FacebookIcon from '@/assets/images/facebook.svg'
import IgIcon from '@/assets/images/instagram.svg'

const Footer = () => {
  return (
    <div className="footer-bg">
      <div className="footer container">
        <div className="about">
          <img src={Logo} alt="" />
          <p>若有數位產品設計和開發相關問題<br/>歡迎填寫表單，或直接與我聯絡！</p>
          <p className="contact">service@hexschool.com</p>
        </div>
        <ul className="social-list">
          <li className='active'>
            <a href="#">
              <div className="icon"><img src={ListIcon} alt="" /></div>
              <p>填寫表單</p>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="icon"><img src={IgIcon} alt="" /></div>
              <p>hexschool_demo</p>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="icon"><img src={FacebookIcon} alt="" /></div>
              <p>hexschoolTW</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer