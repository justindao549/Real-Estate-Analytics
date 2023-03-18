import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import { LocationOnOutlinedIcon } from '@material-ui/icons/LocationOnOutlined';
import { Rating } from '@material-ui/lab';
import {
	useLoadScript,
	GoogleMap,
	Marker,
	InfoWindow,
} from '@react-google-maps/api';

const Map = () => {
	<div>
		{/* const isMobile = useMediaQuery('(min-width:600px)');
	const coordinates = { lat: 33.88004, lng: -117.83755 };
	return (
		<div style={styles.mapContainer}>
			<GoogleMapReact
				bootstrapURLKeys={{ key: 'AIzaSyBIzjwB2z-594xXDJph_DYhJu688jOFzO4' }}
				defaultCenter={coordinates}
				center={coordinates}
				defaultZoom={14}
				margin={[50, 50, 50, 50]}
				options={''}
				onChange={''}
				onChildClick={''}></GoogleMapReact>
			This is where the map goes
		</div>
		
	); */}
	</div>;
	const coordinates = { lat: 33.8885, lng: -117.8133 };
	const { isLoaded, loadError } = useLoadScript({
		googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
	});
	if (loadError) return 'Error loading Maps';
	if (!isLoaded) return 'Loading Maps';
	return (
		<GoogleMap
			mapContainerStyle={styles.mapContainer}
			zoom={10}
			center={coordinates}
			margin={[50, 50, 50, 50]}>
			<Marker position={{ coordinates }} />
		</GoogleMap>
	);
};

const styles = {
	paper: {
		padding: '10px',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		width: '100px',
	},
	mapContainer: {
		height: '91vh',
		width: '88vw',
	},
	markerContainer: {
		position: 'absolute',
		transform: 'translate(-50%, -50%)',
		zIndex: 1,
		'&:hover': { zIndex: 2 },
	},
	pointer: {
		cursor: 'pointer',
	},
};

export default Map;
