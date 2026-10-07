export default function AboutEpisode({ selectedEpisode }) {
  if (!selectedEpisode) {
    <div className="about-episode">
      <p>Please, select episode from the List of opisodes</p>
    </div>;
  } else {
    <div className="details">
      <h2>{selectedEpisode.title}</h2>
      <p>{selectedEpisode.description}</p>
      <button>Watch now</button>
    </div>;
  }
}
