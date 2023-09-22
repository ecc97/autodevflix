import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from "@mui/material";
import { TbEyeEdit } from "react-icons/tb";
import { TbTrashX } from "react-icons/tb";
import { colorPrimario } from "../css/Variables";

const Tabla = ({categorias, setCategorias, onEditarClick, onDelete}) => {

    return (
        <TableContainer sx={{marginTop: '1rem'}}>
            <Table sx={{ minWidth: '100%' }} >
                <TableHead sx={{backgroundColor: `${colorPrimario}`}}>
                    <TableRow>
                        <TableCell sx={{color: 'inherit', '@media(width <= 399px)': {padding: '3px'}}}>Categoría</TableCell>
                        <TableCell sx={{color: 'inherit', '@media(width <= 399px)': {padding: '3px'}}}>Descripción</TableCell>
                        <TableCell sx={{color: 'inherit', '@media(width <= 399px)': {padding: '3px'}}}>Editar</TableCell>
                        <TableCell sx={{color: 'inherit', '@media(width <= 399px)': {padding: '3px'}}}>Eliminar</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {categorias.map((categoria) => {
                        const {id, nombre, descripcion, color} = categoria
                        return(
                        <TableRow key={id}>
                            <TableCell sx={{color:'inherit', '@media(width <= 399px)': {padding: '3px'}}}>{nombre}</TableCell>
                            <TableCell sx={{color:'inherit', '@media(width <= 399px)': {padding: '3px'}}}>{descripcion}</TableCell>
                            <TableCell sx={{'@media(width <= 399px)': {padding: '3px'}}}>
                                <Button onClick={() => { onEditarClick(categoria);}}><TbEyeEdit id="icon-edit" /></Button>
                            </TableCell>
                            <TableCell sx={{'@media(width <= 399px)': {padding: '3px'}}}>
                                <Button onClick={() => {onDelete(categoria.id)}}>
                                    <TbTrashX id="icon-elim" />
                                </Button>
                            </TableCell>
                        </TableRow>
                    )})}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default Tabla