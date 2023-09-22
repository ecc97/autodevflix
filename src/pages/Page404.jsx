import { Box, Typography, Button } from "@mui/material"
import { Link } from "react-router-dom"
import paginaNoEncontrada from "../assets/img/404-nofound.gif"

const Page404 = () => {
    return <Box sx={{backgroundImage: `url(${paginaNoEncontrada})`, backgroundSize: 'cover', backgroundRepeat: 'none', backgroundPosition: 'center', width: '100%', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '3rem'}}>
        <Typography variant="h3" sx={{'@media(width < 480px)': {fontSize: '1.5rem'}}}>Esta página no existe</Typography>
        <Link to='/'>
            <Button sx={{opacity: '.7'}} variant="contained">Volver al inicio</Button>
        </Link>
    </Box>
}

export default Page404