import React from 'react';
import {
	Button,
	Grid,
	Avatar,
	Typography,
	Checkbox,
	Link,
	TextField,
	Container
} from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import TwitterIcon from '@material-ui/icons/Twitter';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.info.light
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1)
	},
	submit: {
		margin: theme.spacing(3, 0, 2)
    }
}));

function Registration() {
	const classes = useStyles();

	return (
		<Container component="main" maxWidth="xs">
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<AccountCircleIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Sign Up
				</Typography>
				<form className={classes.form} noValidate>
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
					/>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="name"
						label="Username"
						name="name"
						autoComplete="username"
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
					/>
					<FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
					<Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
						Register Now!
					</Button>
					<Grid container justify= 'center'>
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
