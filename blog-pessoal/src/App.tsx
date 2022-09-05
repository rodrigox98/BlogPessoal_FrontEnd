import React from 'react';
import {Grid} from '@material-ui/core'
import Home  from './paginas/home/Home';
import Navbar from './components/estatico/navbar/Navbar'
import Footer from './components/estatico/footer/Footer'
import './App.css';
/*
function App() {
  return (
    <>
    <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
            <Home/>
        </Grid>
        <Grid item xs={12} sm={6}>
            <Home/>
        </Grid>
        <Grid item xs={12} sm={6}>
            <Home/>
        </Grid>
        <Grid item xs={12} sm={3}>
            <Home/>
        </Grid>
        <Grid item xs={12} sm={3}>
            <Home/>
        </Grid>
        <Grid item xs={12} sm={3}>
            <Home/>
        </Grid>
        <Grid item xs={12} sm={3}>
            <Home/>
        </Grid>
    </Grid>
    </>
  );
}*/

function App(){
  return(
    <>
      <Navbar></Navbar>
      <Home></Home>
      <Footer></Footer>
    </>
  )
}

export default App;