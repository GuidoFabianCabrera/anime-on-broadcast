import { useContext } from 'react';
import { makeStyles } from '@mui/styles';

import { ExampleContext } from '../store/example';

import data from '../data.json';
import { Grid } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  box: {
    border: '1px solid red',
  },
}));

const Home = () => {
  const classes = useStyles();
  const { test } = useContext(ExampleContext);

  return (
    <Grid container spacing={3}>
      {data.map((item, index) => (
        <Grid item xs={3} key={index}>
          <div>{item.name}</div>
          <img src={item.image} />
          <div>{item.date}</div>
        </Grid>
      ))}
    </Grid>
  );
};

export default Home;
