export default function PostCard() {
  return (
    <article className="post-card" aria-label="Post by S.M.F.Asra">
      <header className="post-header">
        <img
          className="profile-picture"
          src={`${import.meta.env.BASE_URL}assets/my.jpeg`}
          alt="S.M.F.Asra's profile picture: Asra"
          width="48"
          height="48"
        />
        <div>
          <h2 className="username">S.M.F.Asra</h2>
          <p className="timestamp">Just now</p>
        </div>
      </header>

      <p className="post-caption">
        Making beautiful memories by the lake, one adventure at a time!
      </p>
      <img
        className="post-image"
        src={`${import.meta.env.BASE_URL}assets/lakeside-holiday.jpg`}
        alt="A wooden cabin beside a calm lake surrounded by forest and mountains"
        width="1200"
        height="800"
      />
    </article>
  )
}
