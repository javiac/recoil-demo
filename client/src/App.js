import "./App.css";
import { Consumer1 } from "./Consumer1";
import { Consumer2 } from "./Consumer2";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <Consumer1 />
      <Consumer2 />
    </RecoilRoot>
  );
}

export default App;
