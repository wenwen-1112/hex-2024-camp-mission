import QuoteLeft from '@/assets/images/quote-left.png'
import QuoteRight from '@/assets/images/quote-right.png'
import WorkImage1 from '@/assets/images/work-image1.png'
import WorkImage2 from '@/assets/images/work-image2.png'
import WorkImage3 from '@/assets/images/work-image3.png'
import WorkImage4 from '@/assets/images/work-image4.png'
import WorkImage5 from '@/assets/images/work-image5.png'
import WorkImage6 from '@/assets/images/work-image6.png'

const Collection = () => {
  return (
    <div className="collection">
      <div className="intro-bg">
        <div className="intro container">
          <div className="slogan">
            <div className="left mark">
              <img src={QuoteLeft} alt="" />
            </div>
            <h2>
              <span>讓使用者在觀賞與使用的旅程中，發現設計的價值</span>
              <span>而我在設計與開發的過程中，看見自己的價值</span>
            </h2>
            <div className="right mark">
              <img src={QuoteRight} alt="" />
            </div>
          </div>
          <ul className="serve-list">
            <li>
              <h3>2B經驗</h3>
              <p>內部監控系統、庫存系統、採購系統、行銷整合系統</p>
            </li>
            <li>
              <h3>2C經驗</h3>
              <p>跨國美妝保養電商、個人品牌網站、醫美網站、電子商務</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="product container">
        <ul className="product-list">
          <li>
            <img src={WorkImage1} alt="" />
            <h2>星際旅行訂票平台</h2>
            <p className="subtitle">悠遊宇宙的夢想，從這裡開始實現</p>
            <ul className="product-tag-list">
              <li>網頁設計</li>
              <li>響應式設計</li>
              <li>Bootstrap</li>
            </ul>
          </li>
          <li>
            <img src={WorkImage2} alt="" />
            <h2>理財App</h2>
            <p className="subtitle">連動帳戶與行動支付，讓 AI 提供您最好的理財建議</p>
            <ul className="product-tag-list">
              <li>APP設計</li>
              <li>iOS</li>
              <li>React</li>
            </ul>
          </li>
          <li>
            <img src={WorkImage3} alt="" />
            <h2>醫美診所官網</h2>
            <p className="subtitle">永保青春的秘密，從粹究開始</p>
            <ul className="product-tag-list">
              <li>網頁設計</li>
              <li>響應式設計</li>
              <li>ＷordPress</li>
            </ul>
          </li>
          <li>
            <img src={WorkImage4} alt="" />
            <h2>美美美早餐店 POS 機 UI Design</h2>
            <p className="subtitle">訂單送單一目瞭然，自動報表分析好輕鬆</p>
            <ul className="product-tag-list">
              <li>UI 設計</li>
              <li>前端開發</li>
              <li>Wix</li>
            </ul>
          </li>
          <li>
            <img src={WorkImage5} alt="" />
            <h2>電影院訂票系統</h2>
            <p className="subtitle">三步驟完成訂票，電腦手機都支援</p>
            <ul className="product-tag-list">
              <li>前端開發</li>
              <li>後端支援</li>
              <li>Vue</li>
            </ul>
          </li>
          <li>
            <img src={WorkImage6} alt="" />
            <h2>巧克巧克形象官網設計</h2>
            <p className="subtitle">三步驟完成訂票，電腦手機都支援</p>
            <ul className="product-tag-list">
              <li>UI設計</li>
              <li>設計系統</li>
              <li>網路電商</li>
            </ul>
          </li>
        </ul>
        <ul className="pagination">
          <li className="active">
            <a href="#">1</a>
          </li>
          <li>
            <a href="#">2</a>
          </li>
          <li>
            <a href="#">3</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Collection
