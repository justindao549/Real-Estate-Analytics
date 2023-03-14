import { Col, Row, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import React from 'react';

const SubHeader = ({ current, detail }) => {
	return (
		<Row>
			<Col>
				<Breadcrumb>
					<BreadcrumbItem>
						<Link to="/" className="">
							Home
						</Link>
					</BreadcrumbItem>
					{detail && (
						<BreadcrumbItem>
							<Link to="/directory">Directory</Link>
						</BreadcrumbItem>
					)}
					<BreadcrumbItem className="" active>
						{current}
					</BreadcrumbItem>
				</Breadcrumb>
				{/* <h2>{current}</h2>
				<hr /> */}
			</Col>
		</Row>
	);
};

export default SubHeader;
