import React, {useState} from 'react';
import {AppBar, Tabs, Tab, Toolbar} from '@material-ui/core';
import styles from "../NavBar/NavBar.module.css";
import pngwave from '../../images/pngwave.png';
import Registration from '../Registration/Registration';
import Login from '../Login/Login';
import Home from '../Home/Home';
import Games from '../Games';
import store from '../../store'

const NavBar = (props) => {
    const {match, history} = props;
    const {params} = match;
    const { page } = params;

    const tabNameToIndex = {
        0: "Home",
        1: "Sign Up",
        2: "Login",
        3: "Games",
      };

      const indexToTabName = {
        Home: 0,
        Registration: 1,
        Login: 2, 
        Games: 3,
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
                      <Tab style= {{color: "#00ffff"}} label= "Home"></Tab>
                      <Tab style= {{color: "#00ffff"}} label= "SignUp"></Tab>
                      <Tab style= {{color: "#00ffff"}} label= "Login"></Tab>
                      <Tab style= {{color: "#00ffff"}} label= "Games"></Tab>
                  </Tabs>
                </Toolbar>
            </AppBar>
        {selectedTab === 0 && <Home/>}
        {selectedTab === 1 && <Registration/>}
        {selectedTab === 2 && <Login/>}
        {selectedTab === 3 && <Games store= {store}/>}
        </>
	);
};

export default NavBar;
