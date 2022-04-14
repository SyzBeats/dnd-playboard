import { Bareer } from "./components/Bareer";
import { BareerLayer } from "./components/BareerLayer";
import Controller from "./components/Controller";
import { Playground } from "./components/Playground";
import { PreviewToggle } from "./components/PreviewToggle";

function App() {
  return (
    <div className="App">
      <Playground />
      <Controller />
      <PreviewToggle />
      <BareerLayer />
    </div>
  );
}

export default App;
