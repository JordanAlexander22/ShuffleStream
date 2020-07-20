import React, {useState} from 'react';
import { Button, Grid, Avatar, Typography, Checkbox, Link, TextField, Container } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TwitterIcon from '@material-ui/icons/Twitter';
import { makeStyles } from '@material-ui/core/styles';
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';
//import axiosWithAuth from '../../api/axiosWithAuth';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.info.dark
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1)
	},
	submit: {
		margin: theme.spacing(3, 0, 2)
	}
}));

const Registration = (props) => {
	const [user, setUser] = useState({
		email: "",
		username: "",
		password: ""
	});;

	const handleChange = e => {
		setUser({
			...user,
			[e.target.name]: e.target.value
		});
	};
	
	
	const classes = useStyles();


	const onSubmit = e => {
		e.preventDefault();
		axios
			.post("http://localhost:5000/users/add",{user})
			.then(res => {
				console.log(res.response);
				Registration({
					email: "",
					username: "",
					password:""
				})
			})
			.catch(error => console.log(error))

	}
	

	return (
		<Container component="main" maxWidth="xs">
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<VideogameAssetIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Sign Up
				</Typography>
				<form className={classes.form} onSubmit= {onSubmit} noValidate>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="email"
						label="Email Address"
						name="email"
						autoComplete="email"
						autoFocus
						onChange= {handleChange}
					/>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="username"
						label="username"
						name="username"
						autoComplete="username"
						onChange= {handleChange}
					/>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						name="password"
						label="Password"
						type="password"
						id="password"
						autoComplete="current-password"
						onChange= {handleChange}
					/>
					<FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
					<Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
						Register Now!
					</Button>
					<Grid container justify="center">
						<Grid item>
							<Link href="#" variant="body2">
								{'Have a twitter? Sign in With Twitter here'}
								<TwitterIcon />
							</Link>
						</Grid>
					</Grid>
				</form>
			</div>
		</Container>
	);
}

export default Registration;
