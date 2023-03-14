import React from 'react';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/" element={<HomePage />} />
				{/* <Route path="contact" element={<ContactPage />} /> */}
			</Routes>
			{/* <Footer /> */}
		</div>
	);
}

export default App;
