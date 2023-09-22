import { FooterStyle, ContentFooter, SpanCopy } from '../css/UI'
import LogoMain from '../assets/img/logoMain.png'

const Footer = () => {
    return <FooterStyle>
        <ContentFooter>
            <img src={LogoMain} alt='Logotipo' />
            <SpanCopy>Desarrollado por Ecc97 &copy; 2023</SpanCopy>
        </ContentFooter>
    </FooterStyle>
}

export default Footer