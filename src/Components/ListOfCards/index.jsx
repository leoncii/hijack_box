import { MACHINES } from '../../../const/machines'
import { Card } from '../Card'

export function ListOfCards() {
  return <>{MACHINES.map(machine => <Card
    key={machine.name}
    machine={machine}
  />)}</>
}