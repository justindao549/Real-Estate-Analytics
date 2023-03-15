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
import Background_HomePage from '../app/assets/Background_HomePage.jpg';
import React from 'react';

const HomePage = () => {
	return (
		<Container fluid className="px-0">
			{/* <SubHeader className="mx-2" current="Home" /> */}
			<Row style={{ position: 'relative' }}>
				<Col
					style={{
						position: 'absolute',
						background:
							'linear-gradient(115deg, #23201f 50%, rgba(52, 52, 52, 0) 50%)',
						height: '100%',
						aspectRatio: 1 / 1,
						top: 0,
						left: 0,
						padding: 0,
						margin: 0,
					}}></Col>
				<Col>
					<img
						className="p-0"
						src={Background_HomePage}
						style={{ height: '65vh', width: 'auto' }}
						alt="logo"></img>
				</Col>
			</Row>
			<Row className="py-2 mx-5 ">
				<Col md="4" sm="6">
					<Card body className="">
						<CardTitle>Special Title Treatment</CardTitle>
						<CardText>
							With supporting text below as a natural lead-in to additional
							content.
						</CardText>
						<Button className="">Go somewhere</Button>
					</Card>
				</Col>
				<Col md="4" sm="6">
					<Card body className="">
						<CardTitle>Special Title Treatment</CardTitle>
						<CardText>
							With supporting text below as a natural lead-in to additional
							content.
						</CardText>
						<Button className="">Go somewhere</Button>
					</Card>
				</Col>
				<Col md="4" sm="6">
					<Card body className="">
						<CardTitle>Special Title Treatment</CardTitle>
						<CardText>
							With supporting text below as a natural lead-in to additional
							content.
						</CardText>
						<Button className="">Go somewhere</Button>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

export default HomePage;
