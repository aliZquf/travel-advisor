import React,{useEffect,useState} from 'react';
import { CssBaseline,Grid } from '@material-ui/core';
import Header from './Components/Header/Header'
import Map from './Components/Map/Map'
import List from './Components/List/List'

import {getPlacesDate} from './API'
import {getWeatherData} from './API'


const App = ()=>{
const [places,setPlaces] = useState([]);
const [WeatherData,setWeatherData] = useState([]);
const [coordinates,setCoordinates] = useState({});
const [bounds,setBounds]= useState(null);
const [childClick,setChildClick]= useState(null);
const [isLoading,setIsLoading]= useState(false);
const [type, setType] = useState('restaurants');
const [rate,setRate]= useState("");
const [filterPlace,setFilterPlace]= useState([])

useEffect(()=>{
    navigator.geolocation.getCurrentPosition(({coords:{latitude,longitude}})=>{
        setCoordinates({lat:latitude,lng:longitude})
    })
},[])

useEffect(()=>{
    const filter = places.filter((place) => Number(place.rating) > rate);
    setFilterPlace(filter)
},[rate])

    useEffect(()=>{
      if(bounds){  
        setIsLoading(true);
        getWeatherData(coordinates.lat,coordinates.lng)
        .then((data)=>(
            setWeatherData({data})
        ))

        getPlacesDate(type,bounds.sw, bounds.ne)
        .then((data)=>{
            setPlaces(data?.filter((place) => place.name && place.num_reviews > 0));
            setFilterPlace([])
            setIsLoading(false);
        })
    }
    },[bounds,type])
    return (
        <>
        <CssBaseline/>
        <Header setCoordinates={setCoordinates} />
        <Grid container spacing={3} style={{width: '100%'}}>
            <Grid item xs={12} md={4}>
                <List
                     isLoading={isLoading}
                     childClick={childClick}
                     places={filterPlace.length ? filterPlace : places}
                     type={type}
                     setType={setType}
                     rate={rate}
                     setRate={setRate}

                />
            </Grid>
            <Grid item xs={12} md={8}>
                <Map
                setChildClick={setChildClick}
                setCoordinates={setCoordinates}
                setBounds={setBounds}
                coordinates = {coordinates}
                places={filterPlace.length ? filterPlace : places}
                WeatherData={WeatherData}
                />
            </Grid>
        </Grid>
        </>
    )
}

export default App