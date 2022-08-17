import { Dynamic } from '../Components/Dynamic'
import { LeftAside } from './Left_Aside'
import { RightAside } from './Right_Aside'
import { grid, feed, posts } from '../Layout/home.module.css'

export function DinamicMachine({ params: { name } }) {
  return (
    <div className={`${grid}`}>
      <LeftAside />
      <div className={`${posts}`}>
        <figure className={`image 5by4 block`}>
          <img src={`/${name}.webp`} />
        </figure>
        <div className={`${feed}`}>
          <Dynamic name={name} />
        </div>
      </div>
      <RightAside />
    </div >
  )
}