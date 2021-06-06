import React from 'react';
import { Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Navbar from './navbar';

const Home = () => {
    return ( 
        <React.Fragment>
            <Navbar />
            <Grid container style={{marginTop:"20px"}}>
				<Grid item xs={6} display="flex" justify="center" style={{display:"flex", justifyItems:"center"}}>
					<Link to="/page1" style={{textDecoration:"none"}}><Button variant = "contained">Page 1</Button></Link>
				</Grid>
				<Grid item xs={6} display="flex" justify="center" style={{display:"flex", justifyItems:"center"}}>
					<Link to="/page2" style={{textDecoration:"none"}}><Button variant = "contained">Page 2</Button></Link>
				</Grid>
			</Grid>
        </React.Fragment>
     );
}
 
export default Home;