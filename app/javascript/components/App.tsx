import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Poutines from './Poutines/Poutines'
import Poutine from './Poutine/Poutine'

const App: React.FC = () => {
  return(
    <Switch>
      <Route exact path="/" component={Poutines} />
      <Route exact path="/poutines/" component={Poutines} />
      <Route exact path="/poutines/:slug" component={Poutine} />
    </Switch>
  )

}

export default App


