
import { Layout } from './Layout/Layout.jsx'
import { Suspense, lazy } from 'react'
import { useLocation } from 'wouter'

export function DinamicMachine({ params: { name } }) {
  const location = useLocation()
  console.log('DinamicMachine', location, name)
  const Dinamic = lazy(() => import(`./Machines/${name}`))
  return (<div>
    <h1>Lazy</h1>
    <Suspense fallback='loading....'>
      <Dinamic />
    </Suspense>
  </div>
  )
}