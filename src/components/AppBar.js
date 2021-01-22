import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';
import useStyles from "./styles";


export default function DenseAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.appBarRoot}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" className={classes.menuButton} component={Link} to="/" color="inherit" aria-label="menu">
            <HomeIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.title}>Rick and Morty Episodes</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}