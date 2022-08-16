import React, { useState, useEffect, createRef } from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';

import PlaceDetails from '../PlaceDetails/PlaceDetails';
import useStyles from './style.js';

const List = ({places,childClick,isLoading}) =>{
    console.log({childClick});
    const classes = useStyles()
    const [type,setType]= useState("resturant");
    const [rate,setRate]= useState("0");
    const [elRef,setElRef]= useState([]);

    useEffect(() => {
        // 
        setElRef((refs) => Array(places?.length).fill().map((_, i) => refs[i] || createRef()));
      }, [places]);
    return (
        <div className={classes.container}>
            <Typography variant="h4" className={classes.title}>
            Food & Dining around you
            </Typography>
            {isLoading?(
                <div className={classes.loading}>
                    <CircularProgress size="5rem"/>
                </div>
            ):(
                <>
            <FormControl className={classes.formControl}>
                <Select value={type} onChange={(e)=>setType(e.target.value)}>
                    <MenuItem value="resturant">Resturant</MenuItem>
                    <MenuItem value="hotels">Hotels</MenuItem>
                    <MenuItem value="attractions">Attractions</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <Select value={rate} onChange={(e)=>setRate(e.target.value)}>
                <MenuItem value="0">All</MenuItem>
              <MenuItem value="3">Above 3.0</MenuItem>
              <MenuItem value="4">Above 4.0</MenuItem>
              <MenuItem value="4.5">Above 4.5</MenuItem>
                </Select>
            </FormControl>
            <Grid container spacing={3} className={classes.list}>
                {places?.map((place, i)=>(
                    <Grid item key={i} xs={12}>
                        <PlaceDetails place={place}
                        selected={Number(childClick === i)}
                        refProp={elRef[i]}
                        />
                    </Grid>
                ))}
            </Grid>
            </>
            )}
        </div>
    )
}

export default List