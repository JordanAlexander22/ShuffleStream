import React, {useState} from 'react';
import {AppBar, Tabs, Tab, Toolbar} from '@material-ui/core';
import styles from "../NavBar/NavBar.module.css";
import pngwave from '../../images/pngwave.png';
import Registration from '../Registration/Registration';
import Login from '../Login/Login';

const NavBar = (props) => {
    const {match, history} = props;
    const {params} = match;
    const { page } = params;

    const tabNameToIndex = {
        0: "Registration",
        1: "Login"
      };

      const indexToTabName = {
        Registration: 0,
        Home: 1
      };


    const [selectedTab, setSelectedTab] = useState(indexToTabName[page]);

    const handleChange = (event, newValue) => {
        history.push(`/${tabNameToIndex[newValue]};`)
        setSelectedTab(newValue)
    }
	return (
        <>
		    <AppBar title= {<img className= {styles.image} src= {pngwave} alt= 'Logo'/>} position= 'relative' style={{backgroundColor: 'black', display: 'flex', justifyContent: 'flex-end'}}>
                <Toolbar style= {{display:'flex', justifyContent: 'space-between'}}>
                <img className= {styles.image} src= {pngwave} alt= 'Logo'/>
                  <Tabs  value= {selectedTab} onChange= {handleChange}>
                      <Tab style= {{color: "#00ffff"}} label= "SignUp"></Tab>
                      <Tab style= {{color: "#00ffff"}} label= "Login"></Tab>
                  </Tabs>
                </Toolbar>
            </AppBar>
        {selectedTab === 0 && <Registration/>}
        {selectedTab === 1 && <Login/>}
        </>
	);
};

export default NavBar;
