import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import './navbar.styles.scss';
import { Link, useHistory } from 'react-router-dom';
import icon from '../../assets/leaf51.svg'
import { useSelector, useDispatch } from 'react-redux'
import { logOut } from '../../redux/actions'

const Navbar = () => {
	const dispatch = useDispatch()
	const isLoggedIn = useSelector(state => state.isLoggedIn)
	const history = useHistory()
	const handleLogOut = () => {
		dispatch(logOut(history))
	}
	return (
		<AppBar position="static" id="app-bar" color="secondary" id='navbar'>
			<Toolbar>
				<IconButton edge="start" color="inherit" aria-label="menu" id="icon">
					<Link className="nav-link" to="/">
						<img src={icon} alt='icon' className='icon'></img>
					</Link>
				</IconButton>
				{
					isLoggedIn ?
						<div id="nav-links">
							<Button color="inherit" position="end">
								<Link className="nav-link" to="/add-property">
									ailments
								</Link>
							</Button>
							<Button color="inherit" >
								<Link className="nav-link" to="/strains">
									strains
								</Link>
							</Button>
							<Button color="inherit" onClick={handleLogOut}>Log Out</Button>
						</div>
						:

						<div id="nav-links">
							<Button color="inherit" >
								<Link className="nav-link" to="/strains">
									strains
								</Link>
							</Button>
							<Button color="inherit" position="end">
								<Link className="nav-link" to="/login">
									Login
								</Link>
							</Button>
							<Button color="inherit">
								<Link className="nav-link" to="/register">
									Register
							</Link>
							</Button>
						</div>
				}
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
