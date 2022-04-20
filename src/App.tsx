import { Game } from "./components/Game";
import { Uploader } from "./components/Uploader";
import { useAppCssState } from "./state";

function App() {
  // check if a background image is set
  const appState = useAppCssState((state) => ({
    backgroundImage: state.backgroundImage,
  }));

  return <div className="App">{!!appState.backgroundImage ? <Game /> : <Uploader />}</div>;
}

export default App;
