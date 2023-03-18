import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Map from '../components/Map';

const MapPage = () => {
	return (
		<Container style={styles.Container}>
			<Row>
				<Col md={2}>List</Col>
				<Col md={4}>
					<Map />
				</Col>
			</Row>
		</Container>
	);
};

const styles = {
	Container: {
		padding: '0px',
		margin: '0px',
	},
};

export default MapPage;
