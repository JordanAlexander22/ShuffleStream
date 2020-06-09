import React from 'react';
import {AppBar, Link, Tabs, Tab, Box, Typography, Toolbar} from '@material-ui/core';
import styles from "../NavBar/NavBar.module.css"
import pngwave from '../../images/pngwave.png'


const NavBar = () => {
	return (
        <>
		<Box component= 'nav'  >
			<AppBar title= {<img className= {styles.image} src= {pngwave} alt= 'Logo'/>} position= 'relative' style={{backgroundColor: 'black', display: 'flex', justifyContent: 'flex-end'}}>
                <Toolbar style= {{display:'flex', justifyContent: 'space-between'}}>
                <img className= {styles.image} src= {pngwave} alt= 'Logo'/>
                  <Tabs>
                      <Tab href= "#" style= {{color: "#00ffff"}} label= "SignUp/Login"></Tab>
                  </Tabs>
                </Toolbar>
            </AppBar>
		</Box>
        </>
	);
};

export default NavBar;
