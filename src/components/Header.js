import { useState } from 'react';
import {
	Navbar,
	NavbarBrand,
	Collapse,
	NavbarToggler,
	Nav,
	NavItem,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import React from 'react';
const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<Navbar className="bg-white" light sticky="top" expand="md">
			<NavbarBrand href="/">
				<h1 className="mt-1 Logo" style={{ color: '#343434' }}>
					REA
				</h1>
			</NavbarBrand>

			<NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
			<Collapse isOpen={menuOpen} navbar>
				<Nav className="ms-auto navbar">
					<NavItem>
						<NavLink className="nav-link" to="/map">
							Map
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink className="nav-link" to="/">
							Saved
						</NavLink>
					</NavItem>

					<NavItem>
						<NavLink className="nav-link" to="/directory">
							Top Picks
						</NavLink>
					</NavItem>
				</Nav>
			</Collapse>
		</Navbar>
	);
};

export default Header;
