import { useContext, useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import _ from 'underscore';

import { ExampleContext } from '../store/example';

import { Button, Container, Grid } from '@mui/material';

import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  box: {
    border: '1px solid red',
  },
}));

const Home = () => {
  const classes = useStyles();
  const { test } = useContext(ExampleContext);

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    getAnimes();
  }, []);

  const getAnimes = () => {
    axios.get('https://anime-on-broadcast.herokuapp.com/animes').then(
      (result) => {
        setIsLoaded(true);

        const alldates = _.groupBy(result.data, function (obj) {
          return obj.date;
        });

        setItems(alldates);
      },

      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    );
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          {Object.keys(items).map((keyName, i) => (
            <li className="travelcompany-input" key={i}>
              {items[keyName].map((item, index) => (
                <Grid item key={index} style={{ maxWidth: '230px' }}>
                  <div>{item.name}</div>
                  <img src={item.image.url} width="100%" />
                  <div>{item.date}</div>
                </Grid>
              ))}
            </li>
          ))}
        </Grid>
      </Container>
    );
  }
};

export default Home;
