import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

//?exercice three
//import Eventos from "./components/exercice-four/Eventos";

//?excerice Formik y yup
import { FormikComp } from "./components/formik/Formik";


//?exercice three
//import HomeList from "./components/exercide-tree/HomeList";

//?exercice one
// import UserComponent from './components/User';
//?exercice two
// import ClockFuncional from './components/exercise-two/ClockFuncional';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <UserComponent/> */}
        {/* <ClockFuncional/> */}
        {/* <HomeList /> */}
        {/* <Eventos/> */}
        <FormikComp/>
      </header>
    </div>
  );
}

export default App;
