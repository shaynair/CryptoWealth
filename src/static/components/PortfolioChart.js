import React from 'react';
import Pie from 'react-chartjs-2';


class PortfolioChart extends React.Component {
  static propTypes = {
    portfolio: React.PropTypes.array
  };

  render(){
    //console.log(this.props.portfolio);

    let assetSymbolArray = [];
    let assetNameArray = [];
    let assetAllocArray = [];
    let colourWheel = ['#3399ff','#00cc00','#ffcc00','#ff3399','#666699','#33cccc','#996633','#993399','#ccffff','#ffffcc'];

    //check if portfolio is not null
    if (this.props.portfolio){
      let numAssets = this.props.portfolio.length;
      colourWheel = colourWheel.slice(0,numAssets);

      this.props.portfolio.forEach( function (value, index) {
          assetSymbolArray.push(value.symbol);
          assetNameArray.push(value.name);
          assetAllocArray.push(value.alloc);
      });
    }

    //console.log("assetNameArray: " + assetNameArray);
    console.log("assetAllocArray: " + colourWheel);

    let pieChartData = {
      labels: assetSymbolArray,
      datasets: [
          {
              data: assetAllocArray,
              backgroundColor: colourWheel,
              hoverBackgroundColor: colourWheel
          }]
    };

    return(
      <Pie data={pieChartData} />
    )
  }

}

export default PortfolioChart;
