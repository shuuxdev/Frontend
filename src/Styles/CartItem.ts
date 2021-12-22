import { useRef } from 'react';
import styled from "styled-components";


const orangeColor = '#ee4d2d'

export const ItemImage = styled.div<{ size: number }>`
    width: ${props => props.size + 'px'};
    height: ${props => props.size + 'px'};
    img {
        height: 100%;
        width: 100%;
    }
`
export const Name = styled.h4`
    
    color: #505050; 
`
export const Price = styled.p`
    font-size: 16px;
    color: ${orangeColor};
    

`
interface IText {
    color?: string;
    fontSize?: string;
    fontFamily?: string;

}
export const HeaderText = styled.h3<IText>`
     font-family: ${props => props.fontFamily ?? 'Montserrat'};
     color: ${props => props.color};
     font-size: ${props => props.fontSize};

`
