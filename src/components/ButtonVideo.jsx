import { Link } from "react-router-dom"
import { BtnVideo } from "../css/UI"

const BtnNuevoVideo = () => {
    return <Link to='/nuevo-video'>
        <BtnVideo> Nuevo vídeo </BtnVideo>
    </Link>
}

export default BtnNuevoVideo