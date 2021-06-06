import { Box, Button, Container, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './navbar';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const Page2 = () => {
    return ( 
        <div>
            <Navbar />
            <div>
                <Grid container>
                    <Grid item xs={2} style={{backgroundColor:"#000", height:"800px"}}>
                        <Grid container style={{paddingRight:"20px"}}>
                            <Grid item xs={12} style={{margin:"20px 10px", display:"flex", flexDirection:"row", justifyContent:"flex-end"}}>
                                <Link to="#" style={{textDecoration:"none"}}>
                                    <Typography style={{fontSize:"15px", color:"gray"}}>
                                        <ArrowBackIosIcon style={{fontSize:"10px", color:"gray"}} />Back
                                    </Typography>
                                </Link>
                            </Grid>
                            <Grid item xs={12} style={{display:"flex", flexDirection:"row", justifyContent:"flex-end"}}>
                                <Typography variant="h6" style={{color:"#FFF", marginRight:"10px"}}>
                                    Logic
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={6}>
                        <Box border={1} style={{height:"800px"}}>
                            <Grid container>
                                <Grid item xs={12}>
                                    <Typography style={{padding:"20px"}} variant="h6">Joseph, Kevin, and Nicholas are 3 brothers, and the following statements about them are all true:</Typography>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid item xs={4} />
                </Grid>
            </div>
        </div>
     );
}
 
export default Page2;