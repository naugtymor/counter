import style from './App.module.css';
import Header from "./components/Header/Header";
import Area from "./components/Area/Area";

function App() {
  return (
      <div className={style.app}>
        <Header/>
        <Area/>
      </div>
  )
}
export default App;
