import { useState, useEffect } from "react";
import { Box, TextField, FormControl, InputLabel, Select, MenuItem, FormHelperText, ButtonGroup, Button } from "@mui/material";
import { validarTexto, validarUrl, validarTextArea, validarSelect } from "./validaciones";
import { colorBlanco, colorNegro } from "../../css/Variables";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const RegistroVideo = (props) => {
    const { handleCreate, categorias } = props
    const [titulo, setTitulo] = useState('');
    const [video, setVideo] = useState('');
    const [imagen, setImagen] = useState('');
    const [categoria, setCategoria] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [errortitle, setErrorTitle] = useState({
        titulo:{
            error: false,
            mensaje: 'Este campo es requerido'
        }
    })
    const [errorVideo, setErrorVideo] = useState({
        link:{
            error: false,
            mensaje: 'La url del video es requerida'
        }
    })
    const [errorImg, setErrorImg] = useState({
        link:{
            error: false,
            mensaje: 'La url de la imagen es requerida'
        }
    })
    const [errorCtg, setErrorCtg] = useState({
        categoria:{
            error: false,
            mensaje: 'Debes seleccionar la categoría'
        }
    })
    const [errorDes, setErrorDes] = useState({
        descripcion:{
            error: false,
            mensaje: 'Este campo es requerido'
        }
    })
    const handleChange = (e) => {
        setCategoria(e.target.value);
    };
    const handleBlur = () => {
        const validationErrors = validarSelect(categoria);
        setErrorCtg(validationErrors);
    };
    const manejarCambio = (e) => {
        const maxLength = 300;
        const minLength = 1;
        const inputValue = e.target.value;
        if (inputValue.length <= maxLength && inputValue.length >= minLength) {
            setDescripcion(inputValue);
        }
    }
    const limpiarCampos = () => {
        setTitulo('');
        setVideo('');
        setImagen('');
        setCategoria('');
        setDescripcion('');
    }
    
    return (
    <Box component='form' onSubmit={(e) => {e.preventDefault(); handleCreate({titulo, video, imagen, categoria, descripcion})}}>
        <TextField id='titulo' className='inputRegistro' label='Título' variant="outlined" fullWidth margin="normal" type='text' onChange={(e) => { setTitulo(e.target.value); }} value={titulo} error={errortitle.titulo.error} helperText={errortitle.titulo.error ? errortitle.titulo.mensaje : ''} onBlur={(e) => {setErrorTitle(validarTexto(e.target.value))}} required />
        <TextField id='urlVideo' className='inputRegistro' label='Link del vídeo' variant="outlined" fullWidth margin="normal" type='url' onChange={(e) => { setVideo(e.target.value); }} value={video} error={errorVideo.link.error} helperText={errorVideo.link.error ? errorVideo.link.mensaje : ''} onBlur={(e) => {setErrorVideo(validarUrl(e.target.value))}} required />
        <TextField id='urlMiniatura' className='inputRegistro' label='Link de la miniatura del vídeo' variant="outlined" fullWidth margin="normal" type='url' onChange={(e) => { setImagen(e.target.value); }} value={imagen} error={errorImg.link.error} helperText={errorImg.link.error ? errorImg.link.mensaje : ''} onBlur={(e) => {setErrorImg(validarUrl(e.target.value))}} required />
        <FormControl sx={{ minWidth: 130 }} margin="normal" className='inputRegistro'>
            <InputLabel>Categoría</InputLabel>
            <Select autoWidth value={categoria} onChange={handleChange} label="Categoría" onBlur={handleBlur} error={errorCtg.categoria.error} required>
                <MenuItem disabled selected value="">
                    <em>None</em>
                </MenuItem>
                {categorias.map((categoria, index) => {
                    return (
                        <MenuItem key={index} value={categoria}>{categoria}</MenuItem>
                    )
                })}
            </Select>
            {errorCtg.categoria.error && (
            <FormHelperText error>{errorCtg.categoria.mensaje}
            </FormHelperText>
            )}
        </FormControl>
        <TextField label='Descripción' className='inputRegistro' multiline rows={4} fullWidth margin="normal" onChange={manejarCambio} value={descripcion} error={errorDes.descripcion.error} helperText={errorDes.descripcion.error ? errorDes.descripcion.mensaje : ''} onBlur={(e) => {setErrorDes(validarTextArea(e.target.value))}} required />
        <ButtonGroup sx={{ marginTop: '2rem', justifyContent: 'space-between', gap:'1rem', '@media(width <= 480px)': {flexDirection: 'column'}}} fullWidth>
            <Button sx={{width: '180px', height: '54px', '@media(width <= 480px)': {width: '100%'}}} variant="contained" type="submit">Guardar</Button>
            <Button sx={{width: '180px', height: '54px', backgroundColor: `${colorBlanco} !important`, color: `${colorNegro} !important`, marginRight: 'auto !important', '@media(width <= 480px)': {width: '100%'}}} variant="outlined" type="reset" onClick={limpiarCampos}>Limpiar</Button>
            <HashLink to='/nueva-categoria#categoria'>
                <Button sx={{width: '254px', height: '54px', '@media(width <= 480px)': {width: '100%'} }} variant="contained">Nueva Categoría</Button>
            </HashLink>
        </ButtonGroup>
    </Box>
    )
}

export default RegistroVideo