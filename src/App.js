import React,{useEffect,useState} from 'react';
import { CssBaseline,Grid } from '@material-ui/core';
import Header from './Components/Header/Header'
import Map from './Components/Map/Map'
import List from './Components/List/List'

import {getPlacesDate} from './API'

const App = ()=>{
const [places,setPlaces] = useState([]||0)
const [coordinates,setCoordinates] = useState()
const [bounds,setBounds]= useState("")
const [childClick,setChildClick]= useState("")
const [isLoading,setIsLoading]= useState(false)

useEffect(()=>{
    navigator.geolocation.getCurrentPosition(({coords:{latitude,longitude}})=>{
        setCoordinates({lat:latitude,lng:longitude})
    })
},[])
    useEffect(()=>{
        setIsLoading(true)
        getPlacesDate(bounds.sw, bounds.ne)
        .then((data)=>{
            console.log(data);
            setPlaces(data)
            setIsLoading(false)
        })
    },[coordinates,bounds])
    return (
        <>
        <CssBaseline/>
        <Header />
        <Grid container spacing={3} style={{width: '100%'}}>
            <Grid item xs={12} md={4}>
                <List places={places}
                childClick={childClick}
                isLoading={isLoading}
                />
            </Grid>
            <Grid item xs={12} md={8}>
                <Map
                setCoordinates={setCoordinates}
                setBounds={setBounds}
                coordinates = {coordinates}
                places={places}
                setChildClick={setChildClick}
                />
            </Grid>
        </Grid>
        </>
    )
}

export default App