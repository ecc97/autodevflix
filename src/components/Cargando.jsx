import CargandoLoading from '../assets/img/loading.gif'
import { CargandoStyle } from '../css/UI'
import { Typography } from '@mui/material'

export const Cargando = () => {
    return <CargandoStyle>
        <img src={CargandoLoading} alt='Cargando...' />
        <Typography variant='h4'>Cargando...</Typography>
</CargandoStyle>
}