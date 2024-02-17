import React from "react";

import "./Resultados.css";

export default function Resultadosf( {reset} ) {
  return (
    <div>
      <div class="result-wrapper">
        <div class="result-txt">
          <div class="text-amount">
            <div>
              <h2>Tip Amount</h2>
              <p>/ person</p>
            </div>
            <h3>
              $<span id="tip-amount">0</span>
            </h3>
          </div>
          <div class="total-amount">
            <div>
              <h2>Total</h2>
              <p>/ person</p>
            </div>
            <h3>
              $<span id="total"></span>
            </h3>
          </div>
        </div>
        <button type="button" id="reset-button" class="reset-button" onClick={reset}>
          RESET
        </button>
      </div>
    </div>
  );
}

