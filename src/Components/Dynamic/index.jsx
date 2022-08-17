import { Suspense, lazy } from 'react'

export function Dynamic({ name }) {
  const Component = lazy(() => import(`../../Machines/${name}/index.jsx`))
  return <Suspense fallback='loading'>
    <Component />
  </Suspense>
}