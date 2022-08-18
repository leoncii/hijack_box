
export function Profile() {
  return <div className={`card`}>
    <div className={`card-image`}>
      <figure className="image is-4by3 ">
        <img
          src="/Late.webp"
          alt="Placeholder image"
        />
      </figure>
    </div>
    <div className="card-content">
      <div className="media">
        <div className="media-content">
          <p className="title is-4">Leonardo Torrico</p>
          <p className="subtitle is-6">@kanon</p>
        </div>
      </div>
      <div className="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Phasellus nec iaculis mauris. <a>@bulmaio</a>.
        <a href="#">#css</a> <a href="#">#responsive</a>
      </div>
    </div>
  </div>
}