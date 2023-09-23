import { useState, useEffect } from "react";
import { Box, TextField, ButtonGroup, Button } from "@mui/material";
import { colorBlanco, colorNegro } from "../../css/Variables";
import { validarTexto, validarTextArea } from "./validaciones";

const RegistroCategoria = (props) => {
    const { handleCreate, handleUpdate, modoEdicion, categoriaEditada } = props
    const [id, setID] = useState(null);
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [color, setColor] = useState("#000000");
    const [errorName, setErrorName] = useState({
        titulo:{
            error: false,
            mensaje: 'Este campo es requerido'
        }
    })
    const [errorDes, setErrorDes] = useState({
        descripcion:{
            error: false,
            mensaje: 'Este campo es requerido'
        }
    })

    useEffect(() => {
        if (modoEdicion && categoriaEditada) {
            setID(categoriaEditada.id);
            setNombre(categoriaEditada.nombre);
            setDescripcion(categoriaEditada.descripcion);
            setColor(categoriaEditada.color);
        } else {
            setID(null);
            setNombre('');
            setDescripcion('');
            setColor('#000000');
        }
}, [modoEdicion, categoriaEditada]);

    const handleColorChange = (value) => {
        setColor(value);
    };

    const limpiarCampos = () => {
        setNombre('');
        setDescripcion('');
        setColor('#000000')
    }
    return <Box component='form' onSubmit={(e) => {e.preventDefault(); handleCreate({nombre, color, descripcion})}}>
        <TextField id='titulo' className='inputRegistro' label='Título' variant="outlined" fullWidth margin="normal" type='text' onChange={(e) => { setNombre(e.target.value); }} value={nombre} error={errorName.titulo.error} helperText={errorName.titulo.error ? errorName.titulo.mensaje : ''} onBlur={(e) => {setErrorName(validarTexto(e.target.value))}} required />
        <TextField id='color' className='inputRegistro' label='Color' value={color} variant="outlined" fullWidth margin="normal" type='color' onChange={(e) => {handleColorChange(e.target.value)}} />
        <TextField label='Descripción' className='inputRegistro' multiline rows={4} fullWidth margin="normal" onChange={(e) => {
        setDescripcion(e.target.value)}} value={descripcion} error={errorDes.descripcion.error} helperText={errorDes.descripcion.error ? errorDes.descripcion.mensaje : ''} onBlur={(e) => {setErrorDes(validarTextArea(e.target.value))}} required />
        <ButtonGroup sx={{ marginTop: '2rem', justifyContent: 'space-between', gap:'1rem', '@media(width <= 480px)': {flexDirection: 'column'}}} fullWidth>
            <Button sx={{width: '180px', height: '54px', '@media(width <= 480px)': {width: '100%'}}} variant="contained" type="submit">Guardar</Button>
            <Button sx={{width: '180px', height: '54px', '@media(width <= 480px)': {width: '100%'}}} variant="contained" type="button" onClick={() => handleUpdate({nombre, color, descripcion}, id)}>Actualizar</Button>
            <Button sx={{width: '180px', height: '54px', backgroundColor: `${colorBlanco} !important`, color: `${colorNegro} !important`, marginRight: 'auto !important', '@media(width <= 480px)': {width: '100%'}}} variant="outlined" type="reset" onClick={limpiarCampos}>Limpiar</Button>
            <></>
        </ButtonGroup>
    </Box>
}

export default RegistroCategoria