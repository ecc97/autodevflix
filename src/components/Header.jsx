import { HeaderStyle, Navbar, ImgLogo } from "../css/UI";
import BtnNuevoVideo from "./ButtonVideo";
import LogoMain from '../assets/img/logoMain.png'
import { Link, useLocation } from "react-router-dom";


const Header = () => {
    const location = useLocation();
    const isHome = location.pathname === '/';
    
    return <HeaderStyle>
        <Navbar>
            <Link to='/'>
                <ImgLogo src={LogoMain} alt="Logotipo" />
            </Link>
            {isHome && <BtnNuevoVideo />}
        </Navbar>
    </HeaderStyle>
}

export default Header