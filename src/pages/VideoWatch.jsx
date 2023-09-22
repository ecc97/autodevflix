import { useEffect, useState } from "react";
import { post } from "../api/api";
import { Box, Typography } from "@mui/material";
import { espacio } from '../css/Variables'
import ReactPlayer from "react-player";
import { MdPlayArrow } from "react-icons/md";
import { useParams } from "react-router-dom";

const VideoWatch = () => {

    const [video, setVideo] = useState({})

    const {id} = useParams()

    useEffect(() => {
        post(`/videos/${id}`, setVideo)
    }, [id])

    return <Box component='section' sx={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', padding: `${espacio}`, '@media(width <= 790px)': {gap: '0.3rem'}}}>
        <Typography id={video.titulo} variant="h2" gutterBottom align="center" sx={{display: 'flex', justifyContent:'center', alignItems: 'center', scrollMarginTop: `${espacio}`, '@media(width <= 790px)': {fontSize: '1.75rem'}, '@media(width <= 480px)': {fontSize: '1.3rem'}}}><MdPlayArrow /> {video.titulo}</Typography>
        <div className='player-wrapper'>
            <ReactPlayer className='reactPlayer videoRP' url={video.url} light={video.miniatura} playing controls width='100%' height='100%'/> 
        </div>
        <span className="categoria">Área: {video.categoria}</span>
        <Typography variant="body1" component='p' align="center" gutterBottom children={video.descripcion} />
    </Box>
}

export default VideoWatch