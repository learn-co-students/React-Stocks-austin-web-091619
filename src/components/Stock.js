import React from 'react'

const Stock = (props) => (
  // props.handleStockClick will be either handle purchase or handle sail
  //  and both have a parameter of the stock id
  <div onClick={()=>props.handleStockClick(props.stock.id)}>

    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{
            props.stock.name
          }</h5>
        <p className="card-text">{
            props.stock.price
          }</p>
      </div>
    </div>


  </div>
);

export default Stock
