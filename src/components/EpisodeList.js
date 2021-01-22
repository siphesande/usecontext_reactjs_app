import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import Loading from './Loading';
import NothingToShow from './NothingToShow';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import useStyles from "./styles";


const EpisodeList = () => {
  const classes = useStyles();
  const { episodes, loading, error } = useContext(GlobalContext);

  if (error) {
    return <Typography variant="p" color="inherit">Error! Failed to load episodes!</Typography>
  }

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
          <div>

            { episodes.length === 0 ?
              <NothingToShow />
              :
              <List className={classes.root}>
                {
                  episodes.map((item) => (

                    <ListItem
                      className={classes.listItem}
                      key={item.id}
                      alignItems="center"
                      divider
                      button
                      component={Link}
                      to={`/detailedepisodeinformation/${item.id}`}
                    >

                      <img src={item.image.medium} alt="img" />
                      <ListItemText primary={`Title: ${item.name}`} />
                      <ListItemText primary={`Number: ${item.number}`} />
                      <Button
                        variant="outlined"
                        color="primary"
                      >
                        more
                      </Button>

                    </ListItem>
                  ))
                }
              </List>
            }
          </div>
        )}
    </div>


  );
};




export default EpisodeList;