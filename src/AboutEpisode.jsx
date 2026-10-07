export default function AboutEpisode({ selectedEpisode }) {
  if (!selectedEpisode) {
    return (
      <div className="about-episode">
        <p>Please, select episode from the List of opisodes</p>
      </div>
    );
  } else {
    return (
      <div className="about-episode">
        <h2>{selectedEpisode.title}</h2>
        <p>{selectedEpisode.description}</p>
        <button>Watch now</button>
      </div>
    );
  }
}
