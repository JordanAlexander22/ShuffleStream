import React, {useState} from 'react';
import {AppBar, Tabs, Tab, Box, Typography, Toolbar} from '@material-ui/core';
import styles from "../NavBar/NavBar.module.css";
import pngwave from '../../images/pngwave.png';
import {withRouter} from 'react-router-dom';
import Registration from '../Registration/Registration';
import Home from '../Home/Home';

const NavBar = (props) => {
    const {match, history} = props;
    const {params} = match;
    const { page } = params;

    const tabNameToIndex = {
        0: "Registration",
        1: "Home"
      };

      const indexToTabName = {
        Registration: 0,
        Home: 1
      };


    const [selectedTab, setSelectedTab] = React.useState(indexToTabName[page]);

    const handleChange = (event, newValue) => {
        history.push(`/${tabNameToIndex[newValue]};`)
        setSelectedTab(newValue)
    }
	return (
        <>
		    <AppBar title= {<img className= {styles.image} src= {pngwave} alt= 'Logo'/>} position= 'relative' style={{backgroundColor: 'black', display: 'flex', justifyContent: 'flex-end'}}>
                <Toolbar style= {{display:'flex', justifyContent: 'space-between'}}>
                <img className= {styles.image} src= {pngwave} alt= 'Logo'/>
                  <Tabs value= {selectedTab} onChange= {handleChange}>
                      <Tab style= {{color: "#00ffff"}} label= "SignUp/Login"></Tab>
                  </Tabs>
                </Toolbar>
            </AppBar>
        {selectedTab === 0 && <Registration/>}
        {selectedTab === 1 && <Home/>}
        </>
	);
};

export default NavBar;
