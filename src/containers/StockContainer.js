import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {
  stocks=()=>{
      return this.props.stocks.map(stock=><Stock handleStockClick={this.props.handleStockPurchase} key={stock.id} stock={stock} />)
  }

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        { this.stocks() }
      </div>
    );
  }

}

export default StockContainer;
