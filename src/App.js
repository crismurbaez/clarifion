import logo from './logo.svg';
import './App.css';
import { Route } from "react-router-dom";
import Upsell from './components/Upsell/upsell';
import UpBar from './components/UpBar/upBar';
import BottomBar from './components/BottomBar/bottomBar';

function App() {
  return (
    <div>
      <UpBar />
      <Upsell />
      <BottomBar />

    </div>
  );
}

export default App;
