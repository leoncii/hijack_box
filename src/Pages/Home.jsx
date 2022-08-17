import { Link } from 'wouter'
import { feed, grid } from '../Layout/home.module.css'
import { LeftAside } from './Left_Aside'
import { RightAside } from './Right_Aside'

export function Home() {
  return <div className={`${grid}`}>
    < LeftAside />
    <Link href='/box/Late' >
      <a>
        <div className={`card ${feed}`}>
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure className="image is-48x48">
                  <img
                    src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"
                  />
                </figure>
              </div>
              <div className="media-content">
                <p className="title">Late</p>
                <p>@late</p>
              </div>
            </div>

            <div className="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Phasellus nec iaculis mauris.
              <br />
              <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </div>
          </div>
        </div>
      </a>
    </Link>
    <RightAside />
  </div >
}