import React from 'react';
import {AppBar, Tabs, Tab, Box, Typography, Toolbar} from '@material-ui/core';


const NavBar = () => {
	return (
		<Box component= 'nav'>
			<AppBar title= 'shuffle' style={{backgroundColor: 'black'}}>
                <Toolbar>
                    <Typography variant= 'h5' style= {{color: "#00FFFF"}}> Login/Signup </Typography>
                </Toolbar>
            </AppBar>
		</Box>
	);
};

export default NavBar;
