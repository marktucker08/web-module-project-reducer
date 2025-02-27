import React, { useReducer } from 'react';
import reducer, { initialState } from '../reducers';
import { addOne, applyNumber, changeOperation, clearDisplay, memoryAdd, memoryClear, memoryStore } from '../actions';

import './App.css';

import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const applyHandler = (number) => {
    dispatch(applyNumber(number));
  }
  const changeOperatorHandler = (operator) => {
    dispatch(changeOperation(operator));
  }

  const clearDisplayHandler = () => {
    dispatch(clearDisplay());
  }

  const memoryStoreHandler = (total) => {
    dispatch(memoryStore(total))
  }

  const memoryAddHandler = (stored) => {
    dispatch(memoryAdd(stored))
  }

  const memoryClearHandler = () => {
    dispatch(memoryClear())
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick={() => memoryStoreHandler(state.total)}/>
              <CalcButton value={"MR"} onClick={() => memoryAddHandler(state.memory)}/>
              <CalcButton value={"MC"} onClick={() => memoryClearHandler()}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={() => applyHandler(1)}/>
              <CalcButton value={2} onClick={() => applyHandler(2)}/>
              <CalcButton value={3} onClick={() => applyHandler(3)}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => applyHandler(4)}/>
              <CalcButton value={5} onClick={() => applyHandler(5)}/>
              <CalcButton value={6} onClick={() => applyHandler(6)}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => applyHandler(7)}/>
              <CalcButton value={8} onClick={() => applyHandler(8)}/>
              <CalcButton value={9} onClick={() => applyHandler(9)}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={() => changeOperatorHandler("+")}/>
              <CalcButton value={"*"} onClick={() => changeOperatorHandler("*")}/>
              <CalcButton value={"-"} onClick={() => changeOperatorHandler("-")}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={() => clearDisplayHandler()}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
