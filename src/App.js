import React from 'react';
import HomePage from './pages/HomePage';
import MapPage from './pages/MapPage';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/map" element={<MapPage />} />
			</Routes>
			{/* <Footer /> */}
		</div>
	);
}

export default App;

//Micro Filters:
//For Sale, For Rent, Sold
//Price Range
//Beds & Baths
//

//Macro Filters:
//Business revenue Heatmap
//Population Growth Heatmap [at least 10k residents & 15 yrs of past growth rates]
/////// increased job opps->better pay, higher individual wealth->real estate increase
/////// conversely, economic decline, de-industrialization. depopulation, overpopulation
//Criminal Heatmap
