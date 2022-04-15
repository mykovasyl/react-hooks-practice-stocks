import React from "react";
import Stock from "./Stock";

function StockContainer({ stocksToDisplay, onStockClick }) {
  const displayStocks = stocksToDisplay.map((stock) => (
    <Stock
      key={stock.ticker}
      name={stock.name}
      ticker={stock.ticker}
      price={stock.price}
      onStockClick={onStockClick}
    />
  ));
  return (
    <div>
      <h2>Stocks</h2>
      {displayStocks}
    </div>
  );
}

export default StockContainer;
