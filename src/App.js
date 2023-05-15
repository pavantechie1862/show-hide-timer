import {Component} from 'react'
import Clock from './components/Clock'

import './App.css'

class App extends Component {
  state = {clock: false}

  toggleState = () => {
    const {clock} = this.state
    this.setState({clock: !clock})
  }

  render() {
    const {clock} = this.state

    return (
      <div className="app-container">
        <button
          type="button"
          className="toggle-button"
          onClick={this.toggleState}
        >
          {clock ? 'Hide Clock' : 'Show Clock'}
        </button>
        {clock && <Clock />}
      </div>
    )
  }
}

export default App
