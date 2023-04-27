// Write your code here
import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isSubcribed: false}

  onbuttonclick = () => {
    this.setState(prevState => ({isSubcribed: !prevState.isSubcribed}))
  }

  getbuttontext = () => {
    const {isSubcribed} = this.state

    return isSubcribed ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const onbuttonclick = this.getbuttontext()
    return (
      <div className="bg_container">
        <h1 className="heading">Welcome</h1>
        <p className="para">Thank you! Happy Learning</p>
        <button className="button" type="button" onClick={this.onbuttonclick}>
          {onbuttonclick}
        </button>
      </div>
    )
  }
}

export default Welcome
