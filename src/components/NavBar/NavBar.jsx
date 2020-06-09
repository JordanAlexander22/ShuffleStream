import React from 'react';
import {AppBar, Link, Box, Typography, Toolbar} from '@material-ui/core';
import "../NavBar/NavBar.module.css"



const NavBar = () => {
	return (
        <>
		<Box component= 'nav'  >
			<AppBar title= 'shuffle' position= 'relative' style={{backgroundColor: 'black', display: 'flex', justifyContent: 'flex-end'}}>
                <Toolbar style= {{display:'flex', justifyContent: 'flex-end'}}>
                    <Typography variant= 'h6'>
                        <Link href= '#'  style= {{color: "#00FFFF",display:'flex'}} variant= 'inherent' >
                            Login/SignUp
                        </Link>
                    </Typography>
                </Toolbar>
            </AppBar>
		</Box>
        </>
	);
};

export default NavBar;
