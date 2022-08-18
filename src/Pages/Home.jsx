import { ListOfCards } from '../Components/ListOfCards'
import { grid } from '../Layout/home.module.css'
import { LeftAside } from './Left_Aside'
import { RightAside } from './Right_Aside'

export function Home() {
  return <div className={`${grid}`}>
    < LeftAside />
    <ListOfCards />
    <RightAside />
  </div >
}