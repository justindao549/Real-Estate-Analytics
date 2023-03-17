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
import LowerBackground_HomePage from '../app/assets/LowerBackground_HomePage.jpg';
import React from 'react';

const HomePage = () => {
	return (
		<Container fluid className="px-0">
			{/* <SubHeader className="mx-2" current="Home" /> */}
			<Row
				style={{
					position: 'relative',
					backgroundColor: '#343434',
				}}>
				<div style={{ position: 'relative' }}>
					<img
						className="responsive-img"
						src={Background_HomePage}
						alt="Background"></img>
				</div>
				<div
					style={{
						position: 'absolute',
						background:
							'linear-gradient(105deg, #23201f 50%, rgba(52, 52, 52, 0) 50%)',
						height: '100%',
						aspectRatio: 1 / 1,
						left: 0,
						padding: 0,
						margin: 0,
					}}></div>
				<div
					className="Logo"
					style={{
						position: 'absolute',
						top: '20%',
						left: '50%',
						transform: 'translate(-50%, -50%)',
						zIndex: 1,
						fontSize: '50px',
						color: 'white',
					}}>
					Real Estate Analytics
				</div>
				<div
					style={{
						position: 'absolute',
						top: '50%',
						left: '50%',
						transform: 'translate(-50%, -50%)',
						zIndex: 1,
					}}>
					<input
						className="SearchBar"
						type="text"
						placeholder="Enter an address,neighborhood, city, or ZIP code..."
						style={{
							width: '600px',
							height: '40px',
							borderRadius: '20px',
							padding: '10px',
							fontSize: '16px',
							textAlign: 'center',
						}}
					/>
				</div>
			</Row>
			<Row
				className="py-2 back"
				style={{
					backgroundImage: `url(${LowerBackground_HomePage})`,
					backgroundPosition: 'top',
					backgroundSize: '100% 100%',
					backgroundRepeat: 'no-repeat',
					// height: '20vh',
					width: '100%',
				}}>
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
