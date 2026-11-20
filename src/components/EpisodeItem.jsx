import { useState } from "react";

function EpisodeItem({title, rating, duration}) {
const [votes, setVotes] = useState(0);
  const addVote = () => {
    setVotes(votes + 1);
    console.log("votes:", votes);
  };

  return (
    <li className="episode">
      <span className="episode__title">{title}</span>
      <span className="episode__info">
        <span className="episode__rating">★ {rating}</span> · {duration} דק'
      </span>
      <button className="episode__vote" onClick={addVote}>
        👍 {votes}
      </button>
    </li>
  );
}

export default EpisodeItem;