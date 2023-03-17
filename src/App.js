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
				<Route path="map" element={<MapPage />} />
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
//