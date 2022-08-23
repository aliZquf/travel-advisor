import axios from "axios";



export const getPlacesDate = async (type,sw,ne) => {
    try {
        const { data : {data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
          params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
          },
          headers: {
            'X-RapidAPI-Key': '41040107e3msh489980735cd8cb8p1e9517jsn5641c61bbe94',
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