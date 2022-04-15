import { Bareer } from "./components/Bareer";
import { BareerLayer } from "./components/BareerLayer";
import Controller from "./components/Controller";
import { Playground } from "./components/Playground";

function App() {
  return (
    <div className="App">
      <Playground />
      <Controller />
      <BareerLayer />
    </div>
  );
}

export default App;
