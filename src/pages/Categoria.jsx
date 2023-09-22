import { useState, useEffect } from "react"
import { post, crear, actualizar, eliminar, getData } from "../api/api"
import { Container, Typography } from "@mui/material"
import RegistroCategoria from "../components/Registro/RegistroCategoria"
import Tabla from "../components/Tabla"

export const Categoria = ({url}) => {
    const [categorias, setCategorias] = useState([])
    
    useEffect(() => {
        post(url, setCategorias)
     }, [url])

    const handleCreate = ( valores ) => {
        const datosDuplicados = categorias.some((categoria) => {
            return (
                categoria.nombre === valores.nombre ||
                categoria.descripcion === valores.descripcion ||
                categoria.color === valores.color
            );
        });

        if (datosDuplicados) {
            alert("Estos datos ya existen en la lista.");
        } else {
            console.log('DATOS CATEGORÍA CREADOS');
            crear(url, {
                nombre: valores.nombre,
                descripcion: valores.descripcion,
                color: valores.color
            }).then(() => {
                getData(url, setCategorias);
            })
        }
    }

    const [modoEdicion, setModoEdicion] = useState(false);
    const [categoriaEditada, setCategoriaEditada] = useState(null);
    const handleEditarClick = (categoria) => {
        setModoEdicion(true);
        setCategoriaEditada(categoria);
    };

    const handleUpdate = ( valores, id ) => {
        console.log('DATOS ACTUALIZADOS');
        actualizar(`/categorias/${id}`, {
            nombre: valores.nombre,
            descripcion: valores.descripcion,
            color: valores.color
        }).then(() => {
            getData(url, setCategorias);
        })
    }

    const onDelete = (id) => {
        const confirmarEliminacion = window.confirm("¿Estás seguro de que deseas eliminar esta categoría?");
        if (confirmarEliminacion) {
            console.log('ELIMINADO');
            eliminar(`/categorias/${id}`).then(() => {
                getData(url, setCategorias);
            })
        }
    }
    
    return <Container id="categoria" component='section' sx={{marginBottom: '2rem', scrollMarginTop: '3rem'}}>
        <Typography variant="h3" align="center" margin='3rem'>Nueva Categoría</Typography>
        <RegistroCategoria handleCreate={handleCreate} handleUpdate={(valores, id) => handleUpdate(valores, id)} modoEdicion={modoEdicion} categoriaEditada={categoriaEditada} />
        <Tabla categorias={categorias} setCategorias={setCategorias} onEditarClick={handleEditarClick} onDelete={onDelete} />
    </Container>
}