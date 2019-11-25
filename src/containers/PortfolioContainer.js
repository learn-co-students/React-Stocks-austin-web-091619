import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {
  stocks=()=>{
    return this.props.stocksOwned.map(stock=><Stock handleStockClick={this.props.handleStockSale} key={stock.id} stock={stock} />)
  }
  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            this.stocks()
          }
      </div>
    );
  }

}

export default PortfolioContainer;
