import axios from "axios";



const getPlacesDate = async (type,sw,ne) => {
    try {
        const { data : {data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
          params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
          },
          headers: {
            'X-RapidAPI-Key': 'fded04264amshbc6c345926bef4fp15a4c8jsn9e5e129e492e',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }
        });
  
        return data;
    } catch (error) {
        console.log(error);
    }
}

export default getPlacesDate