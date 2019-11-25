import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {
  constructor(){
    super()
  }

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {
          this.props.stocks.map((stock, idx) =>  <Stock buyStock={this.props.buyStock} stockInfo={stock} key={idx} />)
        }
      </div>
    );
  }

}

export default StockContainer;
