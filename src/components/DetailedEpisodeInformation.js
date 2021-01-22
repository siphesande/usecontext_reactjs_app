import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import Loading from './Loading';
import NothingToShow from './NothingToShow';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Card from '@material-ui/core/Card';
import useStyles from "./styles";
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';

const DetailedEpisodeInformation = (props) => {
  const classes = useStyles();
  const { episodes, loading } = useContext(GlobalContext);
  let detailed_episode_array = episodes.filter(episodes_item => episodes_item.id == props.match.params.episode_id)

  return (
    
      <div>
        {loading ? (
          <Loading />
        ) : (
            <div>

              { detailed_episode_array.length === 0 ?
                <NothingToShow />
                :
                <List className={classes.root}>
                  {
                    detailed_episode_array.map((episode_item) => (
                      <ListItem
                        className={classes.listItem}
                        key={episode_item.id}
                        alignItems="center"
                      >
                        <Card className={classes.cardRoot}>
                          <CardHeader
                            avatar={
                              <Avatar aria-label="episode" className={classes.avatar}>
                                {episode_item.number}
                              </Avatar>
                            }
                            title={episode_item.name}
                            subheader={episode_item.airdate}
                          />
                          <CardMedia
                            className={classes.media}
                            image={episode_item.image.original}
                            title={episode_item.name}
                          />
                          <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                              <span dangerouslySetInnerHTML={{ __html: episode_item.summary }} />
                            </Typography>
                          </CardContent>
                          <CardActions disableSpacing>
                            <Button
                              component={Link}
                              to="/"
                              variant="outlined"
                              color="primary"
                              startIcon={<ArrowBackIcon />}
                            >
                              Back
                            </Button>
                          </CardActions>

                        </Card>
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

export default DetailedEpisodeInformation;