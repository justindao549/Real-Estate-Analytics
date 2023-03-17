import React from 'react';
import { useLoadScript } from '@react-google-maps/api';

const MapPage = () => {
	const { isLoaded } = useLoadScript({
		googleMapsApiKey: process.env.googleMapsApiKey,
	});

	return <div>f;alskdjf;alksjdf;alskjdf;laskdjf</div>;
};

export default MapPage;
