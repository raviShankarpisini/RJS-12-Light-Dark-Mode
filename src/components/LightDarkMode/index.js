// Write your code here
// Write your code here
import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {darkModeStatus: true}

  onClickChangeMode = () => {
    const {darkModeStatus} = this.state
    if (darkModeStatus === true) {
      this.setState(prevState => ({darkModeStatus: false}))
    } else {
      this.setState(prevState => ({darkModeStatus: true}))
    }
  }

  render() {
    const {darkModeStatus} = this.state

    const darkMode = (
      <div className="bg-container">
        <div className="dark-card-container">
          <h1 className="dark-heading">Click To Change Mode</h1>
          <button
            type="button"
            className="button"
            onClick={this.onClickChangeMode}
          >
            Light Mode
          </button>
        </div>
      </div>
    )
    const lightMode = (
      <div className="bg-container">
        <div className="light-card-container">
          <h1 className="light-heading">Click To Change Mode</h1>
          <button
            type="button"
            className="button"
            onClick={this.onClickChangeMode}
          >
            Dark Mode
          </button>
        </div>
      </div>
    )

    return darkModeStatus ? darkMode : lightMode
  }
}

export default LightDarkMode
