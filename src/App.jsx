import { useState } from "react";
import logo from "../public/logo.svg";
import favicon from "../public/favicon-32x32.png";
import dollar from "../public/icon-dollar.svg";
import person from "../public/icon-person.svg";
import "./App.css";

import Datosp from "./assets/components/Datosp/Datosp";
import Resultadosf from "./assets/components/Resultadosf/Resultadosf";

function App() {

  const borrar = 0;
  const [tipAmount, setTipAmount] = useState(borrar);

  const [totalAmount, setTotalAmount] = useState(borrar);


  const handleReset = () => {
    setTipAmount(borrar);
    setTotalAmount(borrar);
  };

  return (
    <>
      <header>

        <img src={logo} alt="" />
      </header>

      <div className="principalContainer">

        <Datosp />
        <div className="result">
          <Resultadosf tipAmount={tipAmount} totalAmount={totalAmount} reset={handleReset} />


        </div>
      </div>
    </>
  );
}

export default App;

