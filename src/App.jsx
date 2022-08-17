import { Navbar } from './Components/Navbar'
import { Suspense } from 'react'
import { Route, Switch } from "wouter"
import { DinamicMachine } from './Pages/DinamicMachine'
import { Home } from './Pages/Home'
import { Agua } from './Pages/Agua'

export default function App() {
  return (
    <>
      <Navbar />
      <Suspense fallback='loading....'>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/box/:name" component={DinamicMachine} />
          <Route path="/agua/:name" component={Agua} />
          <Route>404, Not Found!</Route>
        </Switch>
      </Suspense>

    </>
  )
}
