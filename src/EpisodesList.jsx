export default function EpisodeList({
  episodes,
  selectedEpisode,
  onSelectEpisode,
}) {
  return (
    <section className="episodes">
      <h2>Episodes</h2>
      <ul>
        {episodes.map((episode) => (
          <li
            key={episode.id}
            onClick={() => onSelectEpisode(episode)}
            className={selectedEpisode?.id === episode.id ? "selected" : ""}
          >
            {episode.title}
          </li>
        ))}
      </ul>
    </section>
  );
}
