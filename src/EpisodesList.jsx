import { episodeList } from "./data";

export default function EpisodesList() {
  const episodesList = data.map((episode) => (
    <li key={episode.title} className="episode">
      {episode.title}
    </li>
  ));
}

return <ul>{episodeList}</ul>;
