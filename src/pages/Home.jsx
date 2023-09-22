import { useState, useEffect } from 'react'
import { post } from '../api/api'
import SectionBanner from '../components/Banner'
import { Carrusel } from '../components/homeCarrousel/Carrusel'
import { Cargando } from '../components/Cargando'

const Home = () => {
    const [seccionCategoria, setSeccionCategoria] = useState([])
    const [contentVideo, setContentVideo] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                await post('/categorias', setSeccionCategoria);
                await post('/videos', setContentVideo);
                setIsLoading(false);
            } catch (error) {
                console.error("Error al cargar datos:", error);
                setIsLoading(false); 
            }
        };
        fetchData();
    }, []);

    return (
        <main>
            <SectionBanner />
            {
            isLoading ? (
                <Cargando />
            ) : (
            <>
            {seccionCategoria.map((categoria) => {
                return <Carrusel key={categoria.id} nombre={categoria.nombre} color={categoria.color} videos={contentVideo.filter(contentVideo => contentVideo.categoria === categoria.nombre)} />
            })}
            </>
            )}
        </main>
    )
}

export default Home