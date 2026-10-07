import { data } from "./data.js";
import EpisodesList from "./EpisodesList.jsx";

export default function App() {
  // TODO
  const [episodes] = useState(data);
  const [selectedEpisode, setSelectedEpisode] = useState();
  <div>
    <h1>Dark Echoes</h1>
    <h2>Episodes</h2>
    <EpisodesList />
    <AboutEpisode />
  </div>;
}
