import { styled } from "styled-components"
import { colorBlanco, colorNegro, colorPrimario } from "./Variables"
import BannerImg from "../assets/img/banner.png"

export const HeaderStyle = styled.header`
            background-color: ${colorNegro};
            color: ${colorBlanco};
            padding: 1rem 4rem;
            border-bottom: 1px solid ${colorPrimario};
        `
export const Navbar = styled.nav`
            display: flex;
            justify-content: space-between;
            align-items: center;  
            @media (width < 481px) {
                flex-direction: column;
                gap: .7rem;
                a:first-child{
                    width: auto !important;
                }
                a:nth-last-child(1){
                    width: 100%;
                }
            }
        `
export const ImgLogo = styled.img`
            width: auto;
            height: auto;
            will-change: filter;
            transition: filter 300ms;
            &:hover{
                filter: drop-shadow(0 0 1em #0086D4);
            }
        `

export const BtnVideo = styled.div`
            display: flex;
            justify-content: center;
            align-items: center;
            width: 180px;
            height: 55px;
            background-color: ${colorNegro};
            color: ${colorBlanco};
            font-family: inherit;
            font-size: 1em;
            font-weight: 500;
            border: 1px solid white;
            border-radius: 7px;
            transition: all 0.25s;
            cursor: pointer;
            will-change: filter;
            &:hover{
                filter: drop-shadow(0 0 1em ${colorBlanco});
                font-size: 1.1rem;
            }
            @media (width < 481px) {
                width: 100%;
            }
        `

export const Banner = styled.div`
            width: 100%;
            height: 52rem;
            display: flex;
            justify-content: space-between;
            gap: 1.2rem;
            padding: 3rem 0;
            align-items: flex-end;
            background: url(${BannerImg}) center / cover no-repeat scroll;
            background-color: rgb(50,50,50) !important;
            background-blend-mode: soft-light;
            @media (width < 1024px) {
                padding: 3rem 4rem;
                align-items: center;
            }
            @media (width < 790px) {
                height: auto;
            }
            @media (width < 481px) {
                flex-direction: column;
            }
        `
export const BannerContent = styled.div`
            flex: 1;
            margin-left: 4rem;
            display: flex;
            flex-direction: column;
            height: 30%;
            h1{
                font-size: 3rem;
                margin: 1.1rem 0;
            }
            @media (width < 1024px) {
                flex: none;
                margin: 0;
                width: 50%;
                height: 35%;
            }
            @media (width < 790px) {
                width: 40%;
                height: auto;
            }
            @media (width < 481px) {
                width: 100%;
                h1{
                    text-align: center;
                    font-size: 2rem;
                }
                p{
                    text-align: center;
                    font-size: .8rem;
                }
            }
        `
export const BannerContentVideo = styled.div`
            flex: 1;
            margin-right: 4rem;
            width: 550px;
            height: 315px;
            @media (width < 1024px) {
                flex: none;
                margin: 0;
                width: 50%;
            }
            @media (width < 790px) {
                width: 60%;
            }
            @media (width < 481px) {
                width: 100%;
            }
        `
export const BoxCarr = styled.div`
            height: 211px;
            /*position: relative;
            padding-top: 56.25%;*/ /* Player ratio: 100 / (1280 / 720) */
        `
export const FooterStyle = styled.footer`
            width: 100%;
            background: linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 100%);
            padding: 1rem 4rem;
            border-top: 1px solid ${colorPrimario};
        `

export const ContentFooter = styled.div`
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 1.063rem;
        `

export const SpanCopy = styled.span`
            font-size: 17px;
        `

export  const CargandoStyle = styled.div`
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
        gap: 1.5rem;
        padding: 4rem;
        img{
            width: 100px;
            height: 100px;
        }
    `