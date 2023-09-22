import { Typography } from "@mui/material";
import { Banner, BannerContent, BannerContentVideo } from "../css/UI";
import ReactPlayer from "react-player";
import Video from '../assets/video/consejosProgramadoresNovatos.mp4'


const SectionBanner = () => {
    return (
    <Banner>
        <BannerContent>
            <Typography variant="h3" component='h1' gutterBottom>Programación Web</Typography>
            <Typography variant="body1" component='p'>Aquí navegarás en una fuente de aprendizaje en desarrollo web y programación, una experiencia única y valiosa para tu viaje en el mundo del desarrollo web y la programación. Simplificando tu búsqueda de conocimiento. Inicia tu aventura de aprendizaje explorando nuestros videos y recursos que te ayuda a mejorar tus habilidades.</Typography>
        </BannerContent>
        <BannerContentVideo>
            <ReactPlayer className='reactPlayer' url={Video} light='https://i3.ytimg.com/vi/6Bh0iP5eyew/maxresdefault.jpg' playing controls width='100%' height='100%' />
        </BannerContentVideo>
    </Banner>
    );
}

export default SectionBanner