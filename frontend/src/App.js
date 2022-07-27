import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
// import componentns
import Todos from './components/todos/Todos';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import NavBar from './components/navBar/Navbar';
import { loadUser } from './store/actions/authActions';
//import toast for ui effects
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// set styles
const useStyles = makeStyles({
	contentStyle: {
		margin: '30px auto'
	}
});
// main app
function App() {
	const classes = useStyles();
	const dispatch = useDispatch();

	useEffect(
		() => {
			dispatch(loadUser());
		},
		[ dispatch ]
	);
// return the data
	return (
		<BrowserRouter>
			<ToastContainer />
			<Container maxWidth="md">
				<NavBar />
				<Container className={classes.contentStyle} maxWidth="sm">
					<Routes>
						<Route path="/signin" element={<SignIn />} />
						<Route path="/signup" element={<SignUp />} />
						<Route path="/" element={<Todos />} />
					</Routes>
				</Container>
			</Container>
		</BrowserRouter>
	);
}

export default App;