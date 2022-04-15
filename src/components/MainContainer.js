import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([]);
  const [portfolioStocks, setPortfolioStocks] = useState([]);
  const [sortBy, setSortBy] = useState("");
  const [filterBy, setFilterBy] = useState("All");

  const stocksToDisplay = [...stocks]
    .sort((stockA, stockB) => {
      if (sortBy === "Alphabetically") {
        return stockA.name.localeCompare(stockB.name);
      } else {
        return stockA.price - stockB.price;
      }
    })
    .filter((stock) => filterBy === "All" || stock.type === filterBy);

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then((resp) => resp.json())
      .then((data) => setStocks(data));
  }, []);

  function addPortfolioStock(stockTicker) {
    if (!portfolioStocks.find((stock) => stock.ticker === stockTicker)) {
      const newStock = stocks.find((stock) => stock.ticker === stockTicker);
      setPortfolioStocks([...portfolioStocks, newStock]);
    }
  }

  function deletePortfolioStock(stockTicker) {
    setPortfolioStocks(
      portfolioStocks.filter((stock) => stock.ticker !== stockTicker)
    );
  }

  return (
    <div>
      <SearchBar onSort={setSortBy} onFilter={setFilterBy} sortBy={sortBy} />
      <div className="row">
        <div className="col-8">
          <StockContainer
            stocksToDisplay={stocksToDisplay}
            onStockClick={addPortfolioStock}
          />
        </div>
        <div className="col-4">
          <PortfolioContainer
            portfolioStocks={portfolioStocks}
            onStockClick={deletePortfolioStock}
          />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
