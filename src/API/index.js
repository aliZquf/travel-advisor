import axios from "axios";
const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'


export const getPlacesDate = async (sw,ne) => {
    try {
        const { data : {data}} = await axios.get(URL, {
          params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
          },
          headers: {
            'X-RapidAPI-Key': 'eb81524684msh7a7a6ac234074dap11a3d1jsn5758e06c8646',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }
        });
        
        // 'eb81524684msh7a7a6ac234074dap11a3d1jsn5758e06c8646'
        // 41040107e3msh489980735cd8cb8p1e9517jsn5641c61bbe94
    
        
        return data;
    } catch (error) {
        console.log(error);
    }
}
 
export default getPlacesDate;