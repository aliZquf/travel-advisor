import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';

import useStyles from './style.js';

const Map = ({coordinates,places,setCoordinates,setBounds, setChildClick}) =>{
  const isDesktop = useMediaQuery('(min-width:600px)')
const classes = useStyles()
    return (
      <div className={classes.mapContainer}>
        <GoogleMapReact
        bootstrapURLKeys={{key:"AIzaSyAzkmHjohmWoTf0v4Bjs9By-GOIRLtVQpQ"}}
        //
        // AIzaSyBFunsUmQ7n12nT21zMLRFg_srdOdtHSUo
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50,50,50,50]}
        options={''}
        onChange={(e)=>{
          setCoordinates({ lat: e.center.lat, lng: e.center.lng })
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });

        }}
        onChildClick={(child) => {setChildClick(child)
          
        }}
          
        >

          {
             places?.map((place,i)=>(
              <div className={classes. markerContainer} 
               lat={Number(place.latitude)}
               lng={Number(place.longitude)}
               key={i}
              >
                {
                  !isDesktop?(
                    <LocationOnOutlinedIcon color="primary" fontSize="large"/>
                  ):(
                    <Paper className={classes.paper} elevation={3}>
                      <Typography className={classes.typography} variant="subtitle2">{place.name}</Typography>
                      <img className={classes.pointer}
                      src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'} 
                      alt={place.name}
                      />
                      <Rating size="small" value={Number(place.rating)} readonly/>
                    </Paper>
                  )
                }
              </div>
             ))
          }

        </GoogleMapReact>
      </div>
    )
}

export default Map