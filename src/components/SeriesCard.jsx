import { useState } from "react";
import  SeasonList  from "./SeasonList";

const SeriesCard = ({ title, genre, startYear, creator, ended, nextYear, seasons }) => {
  const [saved, setSaved] = useState(false);
  const [showSeasons, setShowSeasons] = useState(false);

  return (
    <article className={saved ? "series-card series-card--saved" : "series-card"}>
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

      <div className="series-card__actions">
        <button className="btn" onClick={() => setSaved(!saved)}>
          {saved ? "★ שמורה" : "☆ לשמור"}
        </button>

        <button className="btn" onClick={() => setShowSeasons(!showSeasons)}>
          {showSeasons ? "הסתר פרקים" : "הצג פרקים"}
        </button>
      </div>

      {showSeasons && <SeasonList seasons={seasons} />}
    </article>
  );
};

export default SeriesCard;