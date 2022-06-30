import React from "react";
import './DataAlgoApp..css'


const DataAlgo = () => {
    return (
        <div className="App">
        <h1>DataAlgo App</h1>
           <div className="love">
              <div className="flex">
                  <ul className="link">
                   <li><a href="#home"> Home </a></li>
                   <li><a href="#services"> Services</a></li>
                    <li><a href="#connections"> Connections</a></li>
                    <li><a href="#contact"> Contact Us</a></li>
                   </ul>
                  </div>
               </div>
               <div>
       <div className="sol">
          <p>PowerFul Digital Solutions With DataAlgo</p>
          <p>We are a Team of talented digital Masters</p>
        </div>
    </div>
    <div className="tc">
        <button type="button" className="btn">
        <p>
        Get  Started
        </p>
        </button>
    </div>
            </div>
    )
}

export default DataAlgo