import { Navbar } from './Components/Navbar'
import { Route, Switch } from "wouter"
import { DinamicMachine } from './DinamicMachine'
import { Home } from './Home'

export default function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/box/:name" component={DinamicMachine} />
      </Switch>
    </>
  )
}
