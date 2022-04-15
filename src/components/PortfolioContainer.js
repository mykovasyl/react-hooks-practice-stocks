import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ portfolioStocks, onStockClick }) {
  const stocksToDisplay = portfolioStocks.map((stock) => (
    <Stock
      key={stock.name}
      name={stock.name}
      ticker={stock.ticker}
      price={stock.price}
      onStockClick={onStockClick}
    />
  ));

  return (
    <div>
      <h2>My Portfolio</h2>
      {stocksToDisplay}
    </div>
  );
}

export default PortfolioContainer;
