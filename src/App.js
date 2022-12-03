import style from './App.module.css';
import Header from "./components/Header/Header";
import Area from "./components/Area/Area";
import AreaNew from "./components/Area/AreaNew";

function App() {
  return (
      <div className={style.app}>
        <Header/>
        <Area/>
      </div>
  )
}
export default App;
