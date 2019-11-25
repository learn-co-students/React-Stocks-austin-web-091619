import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            this.props.portfolio.map((portfolio, idx) => <Stock sellStock={this.props.sellStock} stockInfo={portfolio} key={idx} />)
          }
      </div>
    );
  }

}

export default PortfolioContainer;
