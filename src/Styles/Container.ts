import styled from 'styled-components';

interface IWrapper {
   margin?: string;
   padding?: string;
}
const Container = styled.div<{ mw: string }>`
   margin: 0 auto;
   max-width:${(props) => props.mw}; 
   `
export const Wrapper = styled.div<IWrapper & { background?: string }>`
   margin: ${props => props.margin};
   padding: ${props => props.padding};
   height: 100%;
   width: 100%;
   overflow:hidden;
`
export const MailBorder = styled.div`
    height: 3px;
    width: 100%;
    background-position-x: -30px;
    background-size: 116px 3px;
    background-image: repeating-linear-gradient(45deg,#6fa6d6,#6fa6d6 33px,transparent 0,transparent 41px,#f18d9b 0,#f18d9b 74px,transparent 0,transparent 82px);
`

export interface IFlexbox {
   justifyContent?: string;
   alignItems?: string;
   height?: string;
   width?: string;
   background?: string;
   flex?: number;
}
interface ICenter {
   centerX?: boolean;
   centerY?: boolean;
}
export interface IBorder {
   borderRadius?: string;
   border?: string;

}
export interface ITranslate {
   margin?: string;
   padding?: string;
   position?: "absolute" | "relative" | "fixed";
   left?: number;
   top?: number;
   bottom?: number;
   right?: number;
   zIndex?: number;
}
export const FlexboxColumn = styled.div<IFlexbox & ITranslate>`
   display: flex;
   flex-direction: column;
   justify-content: ${props => props.justifyContent ?? 'flex-start'};
   align-items: ${props => props.alignItems ?? 'flex-start'};
   height: ${props => props.height ?? 'auto'};
   width: ${props => props.width};
   overflow:hidden;
   position: ${props => props.position};
   left: ${props => props.left};
   right: ${props => props.right};
   bottom: ${props => props.bottom};
   top: ${props => props.top};
   z-index: ${props => props.zIndex ?? 0};

`


export const FlexboxRow = styled.div<IFlexbox & ITranslate>`
   display: flex;
   justify-content: ${props => props.justifyContent ?? 'flex-start'};
   align-items: ${props => props.alignItems ?? 'flex-start'};
   height: ${props => props.height ?? 'auto'};
   width: ${props => props.width};
   background: ${props => props.background ?? 'white'};
   position: ${props => props.position};
   left: ${props => props.left};
   right: ${props => props.right};
   bottom: ${props => props.bottom};
   top: ${props => props.top};
   z-index: ${props => props.zIndex ?? 0};

`
export const Row = styled.div<ICenter & ITranslate & IFlexbox>`
width: 100%;

margin: ${props => props.margin};
   height: ${props => props.height};
   ${props => props.centerX && 'display: flex;justify-content:center;'};
   ${props => props.centerY && 'display: flex;align-items:center;'};
   flex: ${props => props.flex};
   position: ${props => props.position};
   left: ${props => props.left + 'px'};
   right: ${props => props.right + 'px'};
   bottom: ${props => props.bottom + 'px'};
   top: ${props => props.top + 'px'};
   justify-content: ${props => props.justifyContent};
   align-items: ${props => props.alignItems};
`
export const Column = styled.div<ICenter & ITranslate & IFlexbox>`
   height: 100%;
   margin: ${props => props.margin};
   ${props => props.width && `width: ${props.width};`};
   ${props => props.centerY && 'display: flex;align-items:center;'};
   ${props => props.centerX && 'display: flex;justify-content:center;'};
   flex: ${props => props.flex};
   position: ${props => props.position};
   left: ${props => props.left + 'px'};
   right: ${props => props.right + 'px'};
   bottom: ${props => props.bottom + 'px'};
   top: ${props => props.top + 'px'};
   justify-content: ${props => props.justifyContent};
   align-items: ${props => props.alignItems};
`

export const Search = styled.input`
                    color: black !important;
                    width: 100%;
                    height: 40px;
                    font-size: 15px;
                    padding: 0px 10px;
                    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
                        "Open Sans", "Helvetica Neue", sans-serif;
                 :focus {
                    outline: none;
                 }
`

export default Container