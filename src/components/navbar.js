import React from 'react';
import { AppBar, Button, Container, Grid, makeStyles, Menu, MenuItem, Toolbar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    navTypo:{
        padding:"7px 15px 0px 25px",
        color:"#6D7E8E"
    }
}))

const Navbar = () => {
    const classes = useStyles()
    return ( 
        <AppBar position="static" color="transparent" elevation={1}>
            <Toolbar>
                <Container maxWidth="lg" style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                    <Grid container>
                        <Grid item xs={1} />
                        <Grid item xs={6} style={{display:"flex", flexDirection:"row", justifyContent:"flex-start"}}>
                            <Link to="#" style={{textDecoration:"none"}}>
                                <Typography variant="h5" style={{color:"#000"}}>
                                    BRILLIANT
                                </Typography>
                            </Link>
                            <Link to="#" style={{textDecoration:"none"}}>
                                <Typography variant="subtitle2" className={classes.navTypo}>
                                    TODAY
                                </Typography>
                            </Link>
                            <Link to="#" style={{textDecoration:"none"}}>
                                <Typography variant="subtitle2" className={classes.navTypo}>
                                    COURSES
                                </Typography>
                            </Link>
                            <Link to="#" style={{textDecoration:"none"}}>
                                <Typography variant="subtitle2" className={classes.navTypo}>
                                    PRACTICE
                                </Typography>
                            </Link>
                        </Grid>
                        <Grid item xs={5} style={{display:"flex", flexDirection:"row", justifyContent:"flex-end"}}>
                            <Button variant="outlined" style={{width:"35%", marginRight:"5px" ,color:"#039BEF", borderColor:"#039BEF"}}>Log In</Button>
                            <Button variant="contained" style={{width:"35%", marginLeft:"5px", backgroundColor:"#039BEF", color:"#fff"}}>Sign Up</Button>
                        </Grid>
                    </Grid>
                </Container>
            </Toolbar>
        </AppBar>
     );
}
 
export default Navbar;