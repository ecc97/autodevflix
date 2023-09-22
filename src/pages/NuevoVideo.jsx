import { useState, useEffect } from "react";
import { crear, post, getData } from "../api/api";
import { Container, Typography } from "@mui/material"
import RegistroVideo from "../components/Registro/RegistroVideo"


export const VideoNuevo = ({url}) => {
    const [videos, setVideos] = useState([])
    const [categorias, setCategorias] = useState([])

    useEffect(() => {
        post('/categorias', setCategorias)
     }, ['/categorias'])

    const handleCreate = ( valores ) => {
        const datosDuplicados = videos.some((video) => {
            return (
                (video.titulo === valores.titulo &&
                video.url === valores.url &&
                video.miniatura === valores.miniatura &&
                video.descripcion === valores.descripcion) ||
                video.categoria === valores.categoria 
                );
        });

        if (datosDuplicados) {
            alert("Estos datos ya existen en la lista.");
        } else {
            crear(url, {
                titulo: valores.titulo,
                url: valores.video,
                miniatura: valores.imagen,
                categoria: valores.categoria,
                descripcion: valores.descripcion
            }).then(() => {
                getData(url, setVideos);
            })
        }
    }
    return <Container component='section' sx={{marginBottom: '2rem'}}>
        <Typography variant="h3" align="center" margin='3rem'>Nuevo Vídeo</Typography>
        <RegistroVideo handleCreate={handleCreate} videos={videos} setVideos={setVideos} categorias={categorias.map((categoria) => categoria.nombre)} />
    </Container>
}