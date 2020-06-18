import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  state={
    stocks:[],
    stocksOwned:[],
    sort:"name",
    filter:""
  }

  componentDidMount=()=>{
    fetch('http://localhost:3000/stocks')
    .then(resp=>resp.json())
    .then(stocks=>{
      this.setState({ stocks })
    })
  }
  handleStockPurchase=(id)=>{
    this.setState({
      stocksOwned:[...this.state.stocksOwned, this.state.stocks.find(stock=>stock.id===id)]
    })
  }
  handleStockSale=(id)=>{
    this.setState({
      stocksOwned: this.state.stocksOwned.filter(stock=> stock.id !== id)
    })
  }

  handleFilterChange=(event)=>{
    const filter = event.target.value==="All" ? "" : event.target.value 
    this.setState({
      filter
    })
  }
  handleSortChange=(event)=>{
    this.setState({
      sort: event.target.value
    })
  }

  updatedStocks=()=>{
      const sorted = this.state.stocks.sort((stock1, stock2)=>{
        if(stock1[this.state.sort] > stock2[this.state.sort]){
          return 1
        }else {
          return -1
        }
      })
    console.log(sorted)
    console.log(this.state.filter)
    if(this.state.filter.length>0){
      return sorted.filter(stock=>stock.type===this.state.filter)
    } else {
      return sorted
    }
    
  }

  render() {
    return (
      <div>
        <SearchBar sort={this.state.sort} handleSortChange={this.handleSortChange} handleFilterChange={this.handleFilterChange}/>

          <div className="row">
            <div className="col-8">

              {this.state.stocks.length>0 && <StockContainer handleStockPurchase={this.handleStockPurchase} stocks={this.updatedStocks()}/>}

            </div>
            <div className="col-4">

              <PortfolioContainer handleStockSale={this.handleStockSale} stocksOwned={this.state.stocksOwned}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
