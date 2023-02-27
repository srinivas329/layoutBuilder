// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      const onChangeContent = event => {
        onToggleShowContent(event.target.checked)
      }

      const onChangeLeftNavbar = event => {
        onToggleShowLeftNavbar(event.target.checked)
      }

      const onChangeRightNavbar = event => {
        onToggleShowRightNavbar(event.target.checked)
      }

      return (
        <div className="check-bg">
          <h1 className="layout-text">Layout</h1>
          <div className="options-tab">
            <input
              type="checkbox"
              id="content"
              value={showContent}
              onChange={onChangeLeftNavbar}
            />
            <label htmlFor="content">Left Navbar</label>

            <br />
            <input
              type="checkbox"
              value={showLeftNavbar}
              id="left"
              onChange={onChangeContent}
            />
            <label htmlFor="left">Content</label>
            <br />
            <input
              type="checkbox"
              id="right"
              value={showRightNavbar}
              onChange={onChangeRightNavbar}
            />
            <label htmlFor="right">Right Navbar</label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
