import { Button,Container, Divider, Grid, List, ListItem, ListItemText, makeStyles, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './navbar';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import background from '../static/images/background.png'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({
    gridMargin:{
        marginBottom:"25px",
        paddingRight:"10px"
    },
    listItem:{
        fontSize:"18px",
        color:"GrayText",
    },
    media:{
        height:254,
        // paddingTop:"56.25%"
    },
    avatar:{
        backgroundColor:"lightblue",
        color:"rgb(117, 139, 255)"
    },
    cardTypo:{
        color:"GrayText",
        fontSize:"12px"
    }
}))

const Page1 = () => {
    const [readMore, setReadMore] = useState(false)
    const classes = useStyles()

    const handleReadClick = () => {
        setReadMore(true)
    }
    return ( 
        <div>
            <Navbar />
            <div style={{backgroundColor:"#F8F8F8"}}>
                <Container style={{padding:"40px 0px"}}>
                    <Grid container style={{}}>
                        <Grid item xs={12} style={{marginBottom:"40px"}}>
                            <Link to="#" style={{textDecoration:"none", color:"GrayText"}}>
                                <Typography style={{fontSize:"15px"}}>
                                    <ArrowBackIosIcon style={{fontSize:"10px"}} />Back to all courses
                                </Typography>
                            </Link>
                        </Grid>
                        <Grid item xs={7}>
                            {(readMore)?(
                                <Grid container>
                                    <Grid item xs={12} className={classes.gridMargin}>
                                        <Typography style={{fontWeight:"bold"}} variant="h2">Logic</Typography>
                                    </Grid>
                                    <Grid item xs={12} className={classes.gridMargin}>
                                        <Typography style={{fontSize:"24px"}}>Stretch your analytic muscles with knights, knaves, logic gates, and more!</Typography>
                                    </Grid>
                                    <Grid item xs={12} className={classes.gridMargin}>
                                        <Typography style={{fontSize:"18px", color:"GrayText"}}>The beginning of our introductory math journey is Logic. Through these
                                        challenging problem solving exercises, you'll construct the critical thinking skills
                                        that are the basis for mathematical reasoning.</Typography>
                                    </Grid>
                                    <Grid item xs={12} className={classes.gridMargin}>
                                        <Typography style={{fontSize:"18px", color:"GrayText"}}>You'll use limited information to make predictions – eliminating the
                                        impossible to uncover the truth. This course builds
                                        up to some truly mind-bending challenges!</Typography>
                                    </Grid>
                                    <Grid item xs={12} className={classes.gridMargin}>
                                        <Typography style={{fontSize:"18px", color:"GrayText"}}>By the end of this course, you'll be able to spot logical fallacies, navigate some strategic game theory, understand machine logic, and use the symbolic languages of logic to understand fun riddles.</Typography>
                                    </Grid>
                                    <Grid item xs={12} style={{marginBottom:"15px"}}>
                                        <Typography style={{fontSize:"18px"}}>Topics covered</Typography>
                                    </Grid>
                                    <Grid item xs={6} style={{marginBottom:"20px"}}>
                                        <List>
                                            <ListItem style={{padding:"0px"}}><ListItemText className={classes.listItem}>Binary</ListItemText></ListItem>
                                            <ListItem style={{padding:"0px"}}><ListItemText className={classes.listItem}>Truth Tables</ListItemText></ListItem>
                                            <ListItem style={{padding:"0px"}}><ListItemText className={classes.listItem}>Logic Gates</ListItemText></ListItem>
                                            <ListItem style={{padding:"0px"}}><ListItemText className={classes.listItem}>Venn and Euler Diagrams</ListItemText></ListItem>
                                            <ListItem style={{padding:"0px"}}><ListItemText className={classes.listItem}>Propositional Logic</ListItemText></ListItem>
                                            <ListItem style={{padding:"0px"}}><ListItemText className={classes.listItem}>The Square of Opposition</ListItemText></ListItem>
                                        </List>
                                    </Grid>
                                    <Grid item xs={6} style={{marginBottom:"20px"}}>
                                        <List>
                                            <ListItem style={{padding:"0px"}}><ListItemText className={classes.listItem}>DeMorgans Laws</ListItemText></ListItem>
                                            <ListItem style={{padding:"0px"}}><ListItemText className={classes.listItem}>Inclusive and Exclusive OR</ListItemText></ListItem>
                                            <ListItem style={{padding:"0px"}}><ListItemText className={classes.listItem}>Combinatorics</ListItemText></ListItem>
                                            <ListItem style={{padding:"0px"}}><ListItemText className={classes.listItem}>Knight and Knave Puzzles</ListItemText></ListItem>
                                            <ListItem style={{padding:"0px"}}><ListItemText className={classes.listItem}>Combinatorial Game Algorithms</ListItemText></ListItem>
                                        </List>
                                    </Grid>
                                </Grid>
                            ):(
                                <Grid container>
                                    <Grid item xs={12} className={classes.gridMargin}>
                                        <Typography style={{fontWeight:"bold"}} variant="h2">Logic</Typography>
                                    </Grid>
                                    <Grid item xs={12} className={classes.gridMargin}>
                                        <Typography style={{fontSize:"24px"}}>Stretch your analytic muscles with knights, knaves, logic gates, and more!</Typography>
                                    </Grid>
                                    <Grid item xs={12} className={classes.gridMargin}>
                                        <Typography style={{fontSize:"18px", color:"GrayText"}}>The beginning of our introductory math journey is Logic. Through these
                                        challenging problem solving exercises, you'll construct the critical thinking skills
                                        that are the basis for mathematical reasoning.</Typography>
                                    </Grid>
                                    <Grid item xs={12} className={classes.gridMargin}>
                                        <Typography style={{fontSize:"18px", color:"GrayText"}}>You'll use limited information to make predictions – eliminating the
                                        impossible to uncover the truth. This course builds
                                        up to some truly mind-bending challenges! <Link to="#" onClick={handleReadClick} style={{fontSize:"18px", color:"GrayText"}}>Read More!</Link></Typography>
                                    </Grid>
                                </Grid>
                            )}
                            <Grid item xs={12} className={classes.gridMargin}>
                                <Typography><Link to="#"  style={{fontSize:"16px", color:"GrayText"}}>View prerequisites and next steps</Link></Typography>
                            </Grid>
                        </Grid>
                        <Grid item xs={5} style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
                            <Card variant="outlined" style={{width:"400px"}}>
                                <img src={background} height="244px" width="254px" alt="cardImage" style={{padding:"15px 0px 15px 20%"}} />
                                <CardContent>
                                    <Grid container>
                                        <Grid item xs={6}>
                                            <Typography variant="h5">37</Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography variant="h5">265+</Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography variant="caption">Interactive quizzes</Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography variant="caption">Concepts and Exercises</Typography>
                                        </Grid>
                                        <Grid item xs={12} style={{display:"flex", flexDirection:"row", justifyContent:"center", padding:"20px"}}>
                                            <Button variant="contained" style={{color:"#fff", backgroundColor:"#000", width:"328px", height:"44px"}}>Start Course</Button>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <div>
                <Container style={{paddingTop:"40px"}}>
                    <Card elevation={0} style={{margin:"20px 0px"}}>
                        <CardHeader 
                            avatar={
                                <Avatar className={classes.avatar}>1</Avatar>
                            }
                            title="Introduction"
                            subheader="Put your logic to the test with these warmups!"
                        />
                        <CardContent>
                            <Grid container>
                                <Grid item xs={4}>
                                    <Card elevation={0} width="297px" height="304px">
                                        <img src={background} width="261px" height="156px" alt="cardImage" style={{padding:"15px 0px 15px 20%"}} />
                                        <CardContent>
                                            <Grid container>
                                                <Grid item xs={12}>
                                                    <Typography variant="h5">Warmup Puzzles</Typography>
                                                    <Typography className={classes.cardTypo}>Get started with some logic warmings</Typography>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={4}>
                                    <Card elevation={0} width="297px" height="304px">
                                        <img src={background} width="261px" height="156px" alt="cardImage" style={{padding:"15px 0px 15px 20%"}} />
                                        <CardContent>
                                            <Grid container>
                                                <Grid item xs={12}>
                                                    <Typography variant="h5">Warmup Puzzles</Typography>
                                                    <Typography className={classes.cardTypo}>Get started with some logic warmings</Typography>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={4}>
                                    <Card elevation={0} width="297px" height="304px">
                                        <img src={background} width="261px" height="156px" alt="cardImage" style={{padding:"15px 0px 15px 20%"}} />
                                        <CardContent>
                                            <Grid container>
                                                <Grid item xs={12}>
                                                    <Typography variant="h5">Warmup Puzzles</Typography>
                                                    <Typography className={classes.cardTypo}>Get started with some logic warmings</Typography>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                    <Card elevation={0} style={{margin:"20px 0px"}}>
                        <CardHeader 
                            avatar={
                                <Avatar className={classes.avatar}>2</Avatar>
                            }
                            title="The Rational Detective"
                            subheader="Eliminate the impossible and uncover the truth!"
                        />
                        <CardContent>
                            <Grid container>
                                <Grid item xs={4}>
                                    <Card elevation={0} width="297px" height="304px">
                                        <img src={background} width="261px" height="156px" alt="cardImage" style={{padding:"15px 0px 15px 20%"}} />
                                        <CardContent>
                                            <Grid container>
                                                <Grid item xs={12}>
                                                    <Typography variant="h5">Warmup Puzzles</Typography>
                                                    <Typography className={classes.cardTypo}>Get started with some logic warmings</Typography>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={4}>
                                    <Card elevation={0} width="297px" height="304px">
                                        <img src={background} width="261px" height="156px" alt="cardImage" style={{padding:"15px 0px 15px 20%"}} />
                                        <CardContent>
                                            <Grid container>
                                                <Grid item xs={12}>
                                                    <Typography variant="h5">Warmup Puzzles</Typography>
                                                    <Typography className={classes.cardTypo}>Get started with some logic warmings</Typography>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={4}>
                                    <Card elevation={0} width="297px" height="304px">
                                        <img src={background} width="261px" height="156px" alt="cardImage" style={{padding:"15px 0px 15px 20%"}} />
                                        <CardContent>
                                            <Grid container>
                                                <Grid item xs={12}>
                                                    <Typography variant="h5">Warmup Puzzles</Typography>
                                                    <Typography className={classes.cardTypo}>Get started with some logic warmings</Typography>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                    <Card elevation={0} style={{margin:"20px 0px"}}>
                        <CardHeader 
                            avatar={
                                <Avatar className={classes.avatar}>3</Avatar>
                            }
                            title="Puzzles and Riddles"
                            subheader="Even trickier puzzles and the tools you need to solve them."
                        />
                        <CardContent>
                            <Grid container>
                                <Grid item xs={4}>
                                    <Card elevation={0} width="297px" height="304px">
                                        <img src={background} width="261px" height="156px" alt="cardImage" style={{padding:"15px 0px 15px 20%"}} />
                                        <CardContent>
                                            <Grid container>
                                                <Grid item xs={12}>
                                                    <Typography variant="h5">Warmup Puzzles</Typography>
                                                    <Typography className={classes.cardTypo}>Get started with some logic warmings</Typography>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={4}>
                                    <Card elevation={0} width="297px" height="304px">
                                        <img src={background} width="261px" height="156px" alt="cardImage" style={{padding:"15px 0px 15px 20%"}} />
                                        <CardContent>
                                            <Grid container>
                                                <Grid item xs={12}>
                                                    <Typography variant="h5">Warmup Puzzles</Typography>
                                                    <Typography className={classes.cardTypo}>Get started with some logic warmings</Typography>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={4}>
                                    <Card elevation={0} width="297px" height="304px">
                                        <img src={background} width="261px" height="156px" alt="cardImage" style={{padding:"15px 0px 15px 20%"}} />
                                        <CardContent>
                                            <Grid container>
                                                <Grid item xs={12}>
                                                    <Typography variant="h5">Warmup Puzzles</Typography>
                                                    <Typography className={classes.cardTypo}>Get started with some logic warmings</Typography>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                    <Card elevation={0} style={{margin:"20px 0px"}}>
                        <CardHeader 
                            avatar={
                                <Avatar className={classes.avatar}>4</Avatar>
                            }
                            title="Multi-Level Thinking"
                            subheader="If you know that I know that you know... what then?"
                        />
                        <CardContent>
                            <Grid container>
                                <Grid item xs={4}>
                                    <Card elevation={0} width="297px" height="304px">
                                        <img src={background} width="261px" height="156px" alt="cardImage" style={{padding:"15px 0px 15px 20%"}} />
                                        <CardContent>
                                            <Grid container>
                                                <Grid item xs={12}>
                                                    <Typography variant="h5">Warmup Puzzles</Typography>
                                                    <Typography className={classes.cardTypo}>Get started with some logic warmings</Typography>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={4}>
                                    <Card elevation={0} width="297px" height="304px">
                                        <img src={background} width="261px" height="156px" alt="cardImage" style={{padding:"15px 0px 15px 20%"}} />
                                        <CardContent>
                                            <Grid container>
                                                <Grid item xs={12}>
                                                    <Typography variant="h5">Warmup Puzzles</Typography>
                                                    <Typography className={classes.cardTypo}>Get started with some logic warmings</Typography>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={4}>
                                    <Card elevation={0} width="297px" height="304px">
                                        <img src={background} width="261px" height="156px" alt="cardImage" style={{padding:"15px 0px 15px 20%"}} />
                                        <CardContent>
                                            <Grid container>
                                                <Grid item xs={12}>
                                                    <Typography variant="h5">Warmup Puzzles</Typography>
                                                    <Typography className={classes.cardTypo}>Get started with some logic warmings</Typography>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                    <Card elevation={0} style={{margin:"20px 0px"}}>
                        <CardHeader 
                            avatar={
                                <Avatar className={classes.avatar}>5</Avatar>
                            }
                            title="Competitive Games"
                            subheader="What will your opponent do? Logic it out!"
                        />
                        <CardContent>
                            <Grid container>
                                <Grid item xs={4}>
                                    <Card elevation={0} width="297px" height="304px">
                                        <img src={background} width="261px" height="156px" alt="cardImage" style={{padding:"15px 0px 15px 20%"}} />
                                        <CardContent>
                                            <Grid container>
                                                <Grid item xs={12}>
                                                    <Typography variant="h5">Warmup Puzzles</Typography>
                                                    <Typography className={classes.cardTypo}>Get started with some logic warmings</Typography>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={4}>
                                    <Card elevation={0} width="297px" height="304px">
                                        <img src={background} width="261px" height="156px" alt="cardImage" style={{padding:"15px 0px 15px 20%"}} />
                                        <CardContent>
                                            <Grid container>
                                                <Grid item xs={12}>
                                                    <Typography variant="h5">Warmup Puzzles</Typography>
                                                    <Typography className={classes.cardTypo}>Get started with some logic warmings</Typography>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={4}>
                                    <Card elevation={0} width="297px" height="304px">
                                        <img src={background} width="261px" height="156px" alt="cardImage" style={{padding:"15px 0px 15px 20%"}} />
                                        <CardContent>
                                            <Grid container>
                                                <Grid item xs={12}>
                                                    <Typography variant="h5">Warmup Puzzles</Typography>
                                                    <Typography className={classes.cardTypo}>Get started with some logic warmings</Typography>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                    <Card elevation={0} style={{margin:"20px 0px"}}>
                        <CardHeader 
                            avatar={
                                <Avatar className={classes.avatar}>6</Avatar>
                            }
                            title="Logic Machines"
                            subheader="Turn logic into arithmetic machines."
                        />
                        <CardContent>
                            <Grid container>
                                <Grid item xs={4}>
                                    <Card elevation={0} width="297px" height="304px">
                                        <img src={background} width="261px" height="156px" alt="cardImage" style={{padding:"15px 0px 15px 20%"}} />
                                        <CardContent>
                                            <Grid container>
                                                <Grid item xs={12}>
                                                    <Typography variant="h5">Warmup Puzzles</Typography>
                                                    <Typography className={classes.cardTypo}>Get started with some logic warmings</Typography>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={4}>
                                    <Card elevation={0} width="297px" height="304px">
                                        <img src={background} width="261px" height="156px" alt="cardImage" style={{padding:"15px 0px 15px 20%"}} />
                                        <CardContent>
                                            <Grid container>
                                                <Grid item xs={12}>
                                                    <Typography variant="h5">Warmup Puzzles</Typography>
                                                    <Typography className={classes.cardTypo}>Get started with some logic warmings</Typography>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={4}>
                                    <Card elevation={0} width="297px" height="304px">
                                        <img src={background} width="261px" height="156px" alt="cardImage" style={{padding:"15px 0px 15px 20%"}} />
                                        <CardContent>
                                            <Grid container>
                                                <Grid item xs={12}>
                                                    <Typography variant="h5">Warmup Puzzles</Typography>
                                                    <Typography className={classes.cardTypo}>Get started with some logic warmings</Typography>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                    <Card elevation={0} style={{margin:"20px 0px"}}>
                        <CardHeader 
                            avatar={
                                <Avatar className={classes.avatar}>7</Avatar>
                            }
                            title="Advanced Knights and Knaves"
                            subheader="Uncover liars on this island of logic!"
                        />
                        <CardContent>
                            <Grid container>
                                <Grid item xs={4}>
                                    <Card elevation={0} width="297px" height="304px">
                                        <img src={background} width="261px" height="156px" alt="cardImage" style={{padding:"15px 0px 15px 20%"}} />
                                        <CardContent>
                                            <Grid container>
                                                <Grid item xs={12}>
                                                    <Typography variant="h5">Warmup Puzzles</Typography>
                                                    <Typography className={classes.cardTypo}>Get started with some logic warmings</Typography>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={4}>
                                    <Card elevation={0} width="297px" height="304px">
                                        <img src={background} width="261px" height="156px" alt="cardImage" style={{padding:"15px 0px 15px 20%"}} />
                                        <CardContent>
                                            <Grid container>
                                                <Grid item xs={12}>
                                                    <Typography variant="h5">Warmup Puzzles</Typography>
                                                    <Typography className={classes.cardTypo}>Get started with some logic warmings</Typography>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={4}>
                                    <Card elevation={0} width="297px" height="304px">
                                        <img src={background} width="261px" height="156px" alt="cardImage" style={{padding:"15px 0px 15px 20%"}} />
                                        <CardContent>
                                            <Grid container>
                                                <Grid item xs={12}>
                                                    <Typography variant="h5">Warmup Puzzles</Typography>
                                                    <Typography className={classes.cardTypo}>Get started with some logic warmings</Typography>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Container>
            </div>
            <div style={{paddingBottom:"40px"}}>
                <Container style={{display:"flex", flexDirection:"column", alignContent:"center"}}>
                    <Grid container style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
                        <Grid item xs={1} />
                        <Grid item xs={10}>
                            <Grid container>
                                <Grid item xs={12} style={{marginBottom:"30px"}}>
                                    <Typography style={{color:"GrayText"}}>Next Steps</Typography>
                                </Grid>
                                <Grid item xs={2} style={{margin: "5px"}}>
                                    <img src={background} height="92px" width="92px" alt="last" />
                                </Grid>
                                <Grid item xs={3} style={{margin: "5px"}}>
                                    <Grid container>
                                        <Grid item xs={12}>
                                            <Typography style={{fontSize:"15px"}}>MATHEMATICAL FUNDAMENTALS</Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography style={{fontSize:"10px", color:"GrayText"}}>The essential tools for learning algebra,logic, and number theory</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={2} style={{marginLeft: "10px"}}>
                                    <img src={background} height="92px" width="92px" alt="last" />
                                </Grid>
                                <Grid item xs={3} style={{margin: "5px"}}>
                                    <Grid container>
                                        <Grid item xs={12}>
                                            <Typography style={{fontSize:"15px"}}>COMPUTER SCIENCE AND FUNDAMENTALS</Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography style={{fontSize:"10px", color:"GrayText"}}>Wrap your mind around computational thinking, from everyday tasks to algorithms</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </div>
     );
}
 
export default Page1;