import Header from "./components/Header";
import SeriesList from "./components/SeriesList";
import { platform, series } from "./data/series";

function App() {
  return (
    <>
      <Header platform={platform} count={series.length} />

      <main className="page">
        <h2 className="page__title">הסדרות ({series.length})</h2>
        <SeriesList series={series} />
      </main>
    </>
  );
}

export default App;