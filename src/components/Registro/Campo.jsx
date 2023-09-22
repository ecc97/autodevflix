import { useState } from "react";
import { Box, TextField } from "@mui/material";
import { FormControl, InputLabel, Select, MenuItem, FormHelperText } from "@mui/material";
import { validarTexto, validarTextArea, validarUrl, validarSelect } from "./validaciones";

export const Campo = (props) => {
    const [titulo, setTitulo] = useState('');
    const [errors, setErrors] = useState({
        titulo:{
            error: false,
            mensaje: 'Este campo es requerido'
        }
    })

    const {type = 'text'} = props

    const manejarCambio = (e) => {
        props.actualizaValor(e.target.value)
    }

    return <Box component='div'>
        <TextField id={props.id} label={props.camp} variant="outlined" fullWidth margin="normal" type={type} onChange={(e) => { setTitulo(e.target.value); }} value={titulo} error={errors.titulo.error} helperText={errors.titulo.error ? errors.titulo.mensaje : ''} onBlur={(e) => {setErrors(validarTexto(e.target.value))}} required />
    </Box>
}

export const CampoUrl = (props) => {
    const [link, setLink] = useState('');
    const [errors, setErrors] = useState({
        link:{
            error: false,
            mensaje: 'La url del video es requerida'
        }
    })

    const {type = 'url'} = props

    return <Box component='div'>
        <TextField id={props.id} label={props.camp} variant="outlined" fullWidth margin="normal" type={type} onChange={(e) => { setLink(e.target.value); }} value={link} error={errors.link.error} helperText={errors.link.error ? errors.link.mensaje : ''} onBlur={(e) => {setErrors(validarUrl(e.target.value))}} required />
    </Box>
}

export const CampoSelect = (props) => {
    const [categoria, setCategoria] = useState('');
    const [errors, setErrors] = useState({
        categoria:{
            error: false,
            mensaje: 'Debes seleccionar la categoría'
        }
    })
    const handleChange = (e) => {
        setCategoria(e.target.value);
    };
    const handleBlur = () => {
        const validationErrors = validarSelect(categoria);
        setErrors(validationErrors);
    };

    return  <FormControl sx={{ minWidth: 130 }} margin="normal">
    <InputLabel>{props.categoria}</InputLabel>
    <Select autoWidth value={categoria} onChange={handleChange} label="Categoría" onBlur={handleBlur} error={errors.categoria.error} required>
        <MenuItem disabled selected value="">
            <em>None</em>
        </MenuItem>
        <MenuItem value="HTML">HTML</MenuItem>
        <MenuItem value="CSS">CSS</MenuItem>
        <MenuItem value="JavaScript">JavaScript</MenuItem>
    </Select>
    {errors.categoria.error && (
        <FormHelperText error>{errors.categoria.mensaje}</FormHelperText>
    )}
  </FormControl>
}

export const CampoTextArea = (props) => {
    const [descripcion, setDescripcion] = useState('');
    const [errors, setErrors] = useState({
        descripcion:{
            error: false,
            mensaje: 'Este campo es requerido'
        }
    })
    const manejarCambio = (e) => {
        setDescripcion(e.target.value)
    }
    return <div>
        <TextField label={props.descripcion} multiline rows={4} fullWidth margin="normal" onChange={manejarCambio} value={descripcion} error={errors.descripcion.error} helperText={errors.descripcion.error ? errors.descripcion.mensaje : ''} onBlur={(e) => {setErrors(validarTextArea(e.target.value))}} required />
    </div>
}

export const CampoColor = (props) => {

    const manejarCambio = (e) => {
        props.actualizaValor(e.target.value)
    }

    return <Box component='div'>
        <TextField id={props.id} label={props.color} value={props.valor} variant="outlined" fullWidth margin="normal" type={props.tipo} onChange={manejarCambio} />
    </Box>
}

/*
const [titulo, setTitulo] = useState('')
    const [errors, setErrors] = useState({
        titulo:{
            error: false,
            mensaje: 'Este campo no puede estar vacío'
        }
    })

    function validarTitulo(titulo){
        if (titulo.length >= 3) {
            return {titulo: {error: false, mensaje: ''}}
        } else {
            return {titulo: {error: true, mensaje: 'Este campo no puede estar vacío'}}
        }
    }

<TextField id={props.id} label={props.camp} variant="outlined" fullWidth margin="normal" type={type} onChange={(e) => { setTitulo(e.target.value); }} value={titulo} error={errors.titulo.error} helperText={errors.titulo.error ? errors.titulo.mensaje : ''} onBlur={(e) => {setErrors(validarTitulo(e.target.value))}} />
*/