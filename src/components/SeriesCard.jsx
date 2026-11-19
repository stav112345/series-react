const SeriesCard = ({ title, genre, startYear, creator, ended, nextYear, seasons }) => {
  return (
    <article className="series-card">
      <div className="series-card__top">
        <h2 className="series-card__title">{title}</h2>
        {ended ? (
          <span className="badge badge--ended">הסתיימה</span>
        ) : (
          <span className="badge badge--running">משודרת</span>
        )}
      </div>
      <p className="series-card__meta">
        {genre} · {startYear} · {creator}
      </p>
      <p className="series-card__meta">
        {seasons.length > 0 ? `${seasons.length} עונות` : "עוד אין עונות"}
      </p>
      {nextYear && (
        <p className="series-card__next">עונה חדשה ב-{nextYear}</p>
      )}
    </article>
  );
};

export default SeriesCard;