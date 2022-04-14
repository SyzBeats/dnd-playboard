import { Bareer } from "./components/Bareer";
import Controller from "./components/Controller";
import { Playground } from "./components/Playground";
import { PreviewToggle } from "./components/PreviewToggle";

function App() {
  return (
    <div className="App">
      <Playground />
      <Controller />
      <PreviewToggle />
      <Bareer />
    </div>
  );
}

export default App;
