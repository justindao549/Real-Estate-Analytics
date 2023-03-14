import {
	Container,
	Row,
	Col,
	Card,
	Button,
	CardTitle,
	CardText,
} from 'reactstrap';
import SubHeader from '../components/Subheader';
import React from 'react';

const HomePage = () => {
	return (
		<Container fluid>
			<SubHeader current="Home" />
			<Row>
				<h1>Turning ideas into real life products is my calling!</h1>
			</Row>

			<Row className="py-2 mx-5 ">
				<Col md="4" sm="6">
					<Card body className="shadow card-style mt-3">
						<CardTitle>Special Title Treatment</CardTitle>
						<CardText>
							With supporting text below as a natural lead-in to additional
							content.
						</CardText>
						<Button className="redAccentBg">Go somewhere</Button>
					</Card>
				</Col>
				<Col md="4" sm="6">
					<Card body className="shadow card-style mt-3">
						<CardTitle>Special Title Treatment</CardTitle>
						<CardText>
							With supporting text below as a natural lead-in to additional
							content.
						</CardText>
						<Button className="redAccentBg">Go somewhere</Button>
					</Card>
				</Col>
				<Col md="4" sm="6">
					<Card body className="shadow card-style mt-3">
						<CardTitle>Special Title Treatment</CardTitle>
						<CardText>
							With supporting text below as a natural lead-in to additional
							content.
						</CardText>
						<Button className="redAccentBg">Go somewhere</Button>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

export default HomePage;
