import { episodeList as data } from "./data.js";
import { useState } from "react";
import EpisodeList from "./EpisodeList.jsx";
import AboutEpisode from "./AboutEpisode.jsx";

export default function App() {
  // TODO
  const [episodes] = useState(data);
  const [selectedEpisode, setSelectedEpisode] = useState(null);
  return (
    <div>
      <h1>Dark Echoes</h1>
      <h2>Episodes</h2>
      <main>
        <EpisodeList
          onSelectEpisode={setSelectedEpisode}
          episodes={episodes}
          selectedEpisode={selectedEpisode}
        />
        <AboutEpisode selectedEpisode={selectedEpisode} />
      </main>
    </div>
  );
}
