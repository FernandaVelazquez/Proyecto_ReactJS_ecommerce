import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Filters from "../../components/Filters/Filters";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";


const Home = () => {
  return (
    <div>
      <div>
          <Filters/>
        </div>
        <div >
          <ItemListContainer/>
        </div>
    </div>
  )
}

export default Home