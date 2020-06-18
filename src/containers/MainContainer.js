import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  constructor(){
    super()

    this.state = {
      stocks: [],
      portfolio: [],
      unfilteredStocks: []
    }
  }

  componentDidMount = () => {
    fetch('http://localhost:3000/stocks')
    .then(r => r.json())
    .then(data => {
      const dataArr = data.map(s => {
        s.owned = false
        return s
      })
      this.setState({stocks: dataArr, unfilteredStocks: dataArr})
    })
    .catch(e => console.log(e))
  }


  buyStock = (stockInfo) => {
    stockInfo.owned = true

    const portArr = this.state.portfolio
    portArr.push(stockInfo)
    this.setState({portfolio: portArr})
  }

  sellStock = (stockInfo) => {
    
      this.setState({portfolio: this.state.portfolio.filter(function(stock) { 
          return stock !== stockInfo
      })});

      this.setState({stocks: this.state.stocks.map(s => {
        if (s.name === stockInfo.name){
            s.owned = false
            return s
        }
        return s
      })})

    
  }


  alphSort = (event) => {
    const stocksArray = this.state.stocks
    stocksArray.sort(function(a, b){
      if(a.name < b.name) { return -1; }
      if(a.name > b.name) { return 1; }
      return 0;
  })
  this.setState({stocks: stocksArray})
  }

  priceSort = (event) => {
    const stocksArr = this.state.stocks
    stocksArr.sort(function(a, b){
      if(a.price < b.price) {return -1;}
      if(a.price > b.price) {return 1;}
      return 0;
    })
    this.setState({stocks: stocksArr})
  }


  filterType = (event) => {
   

    this.setState({stocks: this.state.unfilteredStocks.filter(function(stock) { 
      return stock.type === event.target.value
  })});
  
  }



  render() {
    return (
      <div>
        <SearchBar filterType={this.filterType} priceSort={this.priceSort} alphSort={this.alphSort} />

          <div className="row">
            <div className="col-8">

              <StockContainer buyStock={this.buyStock} stocks={this.state.stocks}/>

            </div>
            <div className="col-4">

              <PortfolioContainer sellStock={this.sellStock} portfolio={this.state.portfolio}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
