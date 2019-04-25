import * as React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import { Main } from '../Main/Main'

export class App extends React.PureComponent {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={Main} />
        </div>
      </Router>
    )
  }
}