// Function that returns the full html <table> element needed to display portfolio allocations. Takes a JSON string as input.
function getPortfolioHtml(portfolioJSON) {
  var portfolioObj = JSON.parse(portfolioJSON);

  var portfolioTableHtml = "<table id='portfolioTable'>"
  portfolioTableHtml += "<th colspan='2'>Asset</th>"
  portfolioTableHtml += "<th>Allocation</th>"
  for (i = 0; i < portfolioObj.assets.length; i++) {
    portfolioTableHtml += "<tr>"
    portfolioTableHtml += "<td class='assetSymbol'>" + portfolioObj.assets[i].assetSymbol + "</td>"
    portfolioTableHtml += "<td class='assetName'>" + portfolioObj.assets[i].assetName + "</td>"
    portfolioTableHtml += "<td class='assetAlloc'>" + portfolioObj.assets[i].assetAlloc + "%</td>"
    portfolioTableHtml += "</tr>"
  }
  portfolioTableHtml += "</table>"

  return portfolioTableHtml;
}

function getAssetNameArray(portfolioJSON) {
  var portfolioObj = JSON.parse(portfolioJSON);

  var assetNameArray = [];
  for (i = 0; i < portfolioObj.assets.length; i++) {
    assetNameArray.push(portfolioObj.assets[i].assetName + " (" + portfolioObj.assets[i].assetSymbol + ")");
  }

  return assetNameArray;
}

function getAssetDataArray(portfolioJSON) {
  var portfolioObj = JSON.parse(portfolioJSON);

  var assetDataArray = [];
  for (i = 0; i < portfolioObj.assets.length; i++) {
    assetDataArray.push(parseFloat(portfolioObj.assets[i].assetAlloc));
  }

  return assetDataArray;
}

$( document ).ready(function() {

  //sample portfolios: A=Conservative; B=Aggressive
  var portfolioA = '{ "assets" : [' +
    '{ "assetSymbol":"BTC" , "assetName":"Bitcoin" , "assetAlloc":"20"},' +
    '{ "assetSymbol":"ETC" , "assetName":"Ethereum" , "assetAlloc":"21"},' +
    '{ "assetSymbol":"DASH" , "assetName":"Dash" , "assetAlloc":"19"},' +
    '{ "assetSymbol":"XRP" , "assetName":"Ripple" , "assetAlloc":"15"},' +
    '{ "assetSymbol":"XMR" , "assetName":"Monero" , "assetAlloc":"25"}]}';
  var portfolioB = '{ "assets" : [' +
    '{ "assetSymbol":"BTC" , "assetName":"Bitcoin" , "assetAlloc":"40"},' +
    '{ "assetSymbol":"ETC" , "assetName":"Ethereum" , "assetAlloc":"34.5"},' +
    '{ "assetSymbol":"XMR" , "assetName":"Monero" , "assetAlloc":"25.5"}]}';

  //display portfolioA onload
  $("#portfolioTableWrapper").html(getPortfolioHtml(portfolioA));


  //change portfolio allocations table display when user toggles profile radio buttons
  $("input[name='profile']").change(function() {
    var selectedProfile = $('input[name=profile]:checked', '#profileChooser').val();

    if (selectedProfile == "A") {

      $(".portfolioType").text("Conservative");
      $(".portfolioDescription").text("A Conservative profile is best suited for risk-averse investors who value stability and preservation of capital. We recommend a relatively stable asset mix that has a past performance of minimal fluctuations. This type of profile is willing to trade high returns for investment safety.");

      $("#portfolioTableWrapper").html(getPortfolioHtml(portfolioA));

      $("#portfolioChart").remove();
      $('#portfolioChartWrapper').append("<canvas id='portfolioChart' width='200' height='200'></canvas>");
      var ctx = $("#portfolioChart");
      var myChart = new Chart(ctx, {
           type: 'pie',
           data: {
             labels: getAssetNameArray(portfolioA),
             datasets: [
               {
                 data: getAssetDataArray(portfolioA),
                 backgroundColor: [
                     "#36A2EB",
                     "#FFCE56",
                     "#31a57b",
                     "#d8462f",
                     "#953099"
                 ],
                 hoverBackgroundColor: [
                     "#36A2EB",
                     "#FFCE56",
                     "#31a57b",
                     "#d8462f",
                     "#953099"
                 ]
               }
             ]
           },
       });
    } else if (selectedProfile == "B") {

      $(".portfolioType").text("Aggressive");
      $(".portfolioDescription").text("An Aggressive profile is best suited for high-capital investors who have a greater than average risk tolerance. Expect price fluctuations in the asset mix. This type of profile has potential for high gain, at the risk of high loss.");

      $("#portfolioTableWrapper").html(getPortfolioHtml(portfolioB));

      $("#portfolioChart").remove();
      $('#portfolioChartWrapper').append("<canvas id='portfolioChart' width='200' height='200'></canvas>");
      var ctx = $("#portfolioChart");
      var myChart = new Chart(ctx, {
          type: 'pie',
          data: { labels: getAssetNameArray(portfolioB),
            datasets: [
              {
                data: getAssetDataArray(portfolioB),
                backgroundColor: [
                    "#36A2EB",
                    "#FFCE56",
                    "#31a57b",
                ],
                hoverBackgroundColor: [
                    "#36A2EB",
                    "#FFCE56",
                    "#31a57b",
                ]
              }
            ]
          },
      });
    }
  })

  Chart.defaults.global.maintainAspectRatio = false;
  var ctx = document.getElementById("portfolioChart");
  var myChart = new Chart(ctx, {
       type: 'pie',
       data: {
         labels: getAssetNameArray(portfolioA),
         datasets: [
           {
             data: getAssetDataArray(portfolioA),
             backgroundColor: [
                 "#36A2EB",
                 "#FFCE56",
                 "#31a57b",
                 "#d8462f",
                 "#953099"
             ],
             hoverBackgroundColor: [
                 "#36A2EB",
                 "#FFCE56",
                 "#31a57b",
                 "#d8462f",
                 "#953099"
             ]
           }
         ]
       },
   });

});
