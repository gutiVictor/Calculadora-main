import React, { useState } from "react";
import "../Datosp/Datos.css";



export default function Datosp() {

  
  const [billValue, setBillValue] = useState(0);
  const [peopleValue, setPeopleValue] = useState(1);

 

  return (
    <section class="general-wrapper">
      <div class="data-wrapper">
        <h1>Bill</h1>
        <label for="input-bill">
          <input
            class="input-bill"
            id="input-bill"
            type="number"
            value={billValue}
            onChange={(event) => setBillValue(event.target.value)}
            min="0"
          />


        </label>
        
        <h2>Select Tip %</h2>  
        <ul>
          <li id="percentage-5">
            <button type="button" class="percentage-button-calc" value="5">
              5%
            </button>
          </li>
          <li id="percentage-10">
            <button type="button" class="percentage-button-calc" value="10">
              10%
            </button>
          </li>
          <li id="percentage-15">
            <button type="button" class="percentage-button-calc" value="15">
              15%
            </button>
          </li>
          <li id="percentage-25">
            <button type="button" class="percentage-button-calc" value="25">
              25%
            </button>
          </li>
          <li id="percentage-50">
            <button type="button" class="percentage-button-calc" value="50">
              50%
            </button>
          </li>
          <li>
            <input
              type="number"
              placeholder="Custom"
              id="custom-percentage-button"
              class="percentage-button-calc"
            />
          </li>
        </ul>
        <h2>Number of People</h2>
        <label for="input-people">
          <input
            id="input-people"
            class="input-people"
            type="number"
            value={peopleValue}
            min="1"
            onChange={(event) => setPeopleValue(event.target.value)}
          />
        </label>
      </div>
    </section>
  );
}
