// Write your code here
import {Component} from 'react'
import ConfigurationContext from '../../context/ConfigurationContext'

import Header from '../Header'
import Body from '../Body'
import Footer from '../Footer'

class Layout extends Component {
  state = {showContent: true, showLeftNavbar: true, showRightNavbar: true}

  onToggleShowContent = event => {
    this.setState({showContent: event})
  }

  onToggleShowLeftNavbar = value => {
    this.setState({showLeftNavbar: value})
  }

  onToggleShowRightNavbar = value => {
    this.setState({showRightNavbar: value})
  }

  render() {
    const {showContent, showLeftNavbar, showRightNavbar} = this.state

    return (
      <ConfigurationContext.Provider
        value={{
          showContent,
          showLeftNavbar,
          showRightNavbar,
          onToggleShowContent: this.onToggleShowContent,
          onToggleShowLeftNavbar: this.onToggleShowLeftNavbar,
          onToggleShowRightNavbar: this.onToggleShowRightNavbar,
        }}
      >
        <div className="layout-bg">
          <Header />
          <Body />
          <Footer />
        </div>
      </ConfigurationContext.Provider>
    )
  }
}

export default Layout
