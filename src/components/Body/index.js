// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      return (
        <div className="body-card-bg">
          {showLeftNavbar ? (
            <div className="left-bg">
              <h1 className="left-heading">Left Navbar Menu</h1>
              <ul className="ul-list">
                <li className="list-item">Item 1</li>
                <li className="list-item">Item 2</li>
                <li className="list-item">Item 3</li>
                <li className="list-item">Item 4</li>
              </ul>
            </div>
          ) : (
            ''
          )}
          {showContent ? (
            <div className="content-bg">
              <h1 className="left-heading">Content</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipscing elite, sed do
                elusmod tempor incididunt ut labour et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
            </div>
          ) : (
            ''
          )}
          {showRightNavbar ? (
            <div className="right-bg">
              <h1 className="left-heading">Right Navbar</h1>
              <div className="add-bg">
                <p>Ad 1</p>
              </div>
              <div className="add-bg">
                <p>Ad 2</p>
              </div>
            </div>
          ) : (
            ''
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
