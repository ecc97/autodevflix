import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { BoxCarr } from "../../css/UI";
import { colorBlanco, espacio } from "../../css/Variables";
import SliderCarrusel from './Slider';
import VideoCard from "./VideoCard";
import { HashLink } from "react-router-hash-link";

export const Carrusel = ({url, categoria, nombre, color, videos}) => {

  return <>
    {videos.length > 0 &&
      <Box sx={{
        padding: `${espacio}`,
        color: `${colorBlanco}`,
        width: '100%',
        height: '100%'
      }} component='section'>
        <Typography variant="h3" children={nombre} sx={{backgroundColor:`${color}`}} gutterBottom/>
        <SliderCarrusel >
          {
            videos.map((video) => {
              const {id, titulo, url, miniatura, categoria, descripcion } = video;
              return (
                <BoxCarr key={id}>
                  <HashLink to={`/videos/${id}#${titulo}`}>
                    <VideoCard miniatura={miniatura} url={url} />
                  </HashLink>
                </BoxCarr>
              )
            })
          }
        </SliderCarrusel>
      </Box>
    }
  </>
}