import { Link } from "wouter";
import { feed } from '../../Layout/home.module.css'
import { card, image, media, figure } from './card.module.css'

export function Card({ machine: { name, description, posted, src, alt } }) {
  return <Link href='/box/Late' >
    <a className={`card ${feed} ${card}`}>
      <div className="card-content">
        <div className={`media ${media}`}>
          <div className="media-left">
            <figure className={`image is-3by2 ${figure}`}>
              <img
                className={`${image}`}
                src={src}
                alt={alt}
              />
            </figure>
          </div>
          <div className="media-content">
            <p className="title">{name}</p>
            <p>@late</p>
          </div>
        </div>
        <div className="content">
          {description}
          <br />
          <time className="subtitle is-6" dateTime={posted}>{posted}</time>
        </div>

      </div>
    </a>
  </Link>
}