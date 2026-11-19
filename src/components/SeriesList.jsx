import SeriesCard from "./SeriesCard";

const SeriesList = ({ series }) => {
  return (
    <section className="series-list">
     {series.map(item => 
        <SeriesCard
          key={item.id}
          title={item.title}
          genre={item.genre}
          startYear={item.startYear}
          creator={item.creator.name}
          ended={item.ended}
          nextYear={item.nextSeason?.year}
          seasons={item.seasons}
        />
     )}
    </section>
  );
};

export default SeriesList;