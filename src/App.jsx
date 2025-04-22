
import React, { useState } from 'react';
import Nav from './components/ecom/Navigation/Nav';
import './index.css';
import Products from './components/ecom/Products/Products';
import Recommended from './components/ecom/Recommended/Recommended';
import Sidebar from './components/ecom/Sidebar/Sidebar';
import products from './components/db/data';
import { Card } from './components/ecom/Card';

export const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState('');

  const handleinputchange = (e) => {
    setQuery(e.target.value);
  };

  const filteredItems = products.filter((product) =>
    product.title.toLowerCase().indexOf(query.toLowerCase())!==-1
  );

  const handlechange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleclick = (e) => {
    setSelectedCategory(e.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredproducts = products;
    if(query){
      filteredproducts = filteredItems;
    }

    if (selected) {
      filteredproducts = filteredproducts.filter(
        ({ category, colour, newPrice, title, company }) =>
          category === selected ||
          colour === selected ||
          newPrice === selected ||
          title === selected ||
          company === selected
      );
    }

    return filteredproducts.map(
      ({ img, title, star, reviews, newPrice, prevPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          newPrice={newPrice}
          prevPrice={prevPrice}
        />
      )
    );
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <>
      <Sidebar handlechange={handlechange} />
      <Nav query={query} handleinputchange={handleinputchange} />
      <Recommended handleclick={handleclick} />
      {/* <div className="products-container">{result}</div> */}
      <Products result = {result}/>
    </>
  );
};

export default App;
