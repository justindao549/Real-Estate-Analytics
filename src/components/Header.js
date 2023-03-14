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
				<h1 className="mt-1 text-[#fb5a6e] font-thin">DAO</h1>
			</NavbarBrand>

			<NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
			<Collapse isOpen={menuOpen} navbar>
				<Nav className="ms-auto navbar">
					<NavItem>
						<NavLink className="nav-link" to="/">
							<i className="fa fa-file" /> Resume
						</NavLink>
					</NavItem>

					<NavItem>
						<NavLink className="nav-link" to="/directory">
							<i className="fa fa-linkedin" /> Linked
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink className="nav-link" to="/contact">
							<i className="fa fa-address-card fa-lg" /> Contact
						</NavLink>
					</NavItem>
				</Nav>
			</Collapse>
		</Navbar>
	);
};

export default Header;
