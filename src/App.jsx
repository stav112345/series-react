import { useState } from "react";
import Header from "./components/Header";
import SeriesList from "./components/SeriesList";
import { platform, series } from "./data/series";

function App() {
  const [onlyRunning, setOnlyRunning] = useState(false);
  const [sortByYear, setSortByYear] = useState(false);

  let displayedSeries = [...series];

  if (onlyRunning) {
    displayedSeries = displayedSeries.filter((item) => !item.ended);
  }

  if (sortByYear) {
    displayedSeries.sort((a, b) => a.startYear - b.startYear);
  }

  return (
    <>
      <Header platform={platform} count={series.length} />

      <main className="page">
        <div className="toolbar">
          <button
            className={onlyRunning ? "btn btn--active" : "btn"}
            onClick={() => setOnlyRunning(!onlyRunning)}
          >
            רק סדרות משודרות
          </button>

          <button
            className={sortByYear ? "btn btn--active" : "btn"}
            onClick={() => setSortByYear(!sortByYear)}
          >
            מיון לפי שנה
          </button>
        </div>

        <h2 className="page__title">הסדרות ({displayedSeries.length})</h2>
        <SeriesList series={displayedSeries} />
      </main>
    </>
  );
}

export default App;