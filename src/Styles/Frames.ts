import styled from 'styled-components';

export const IconFrame = styled.div<{ height?: string; width?: string; iconColor?: string; mergeRadius?: boolean, location?: string }>`
   background: #3a3f48;
   border-radius:5px;
   width: ${props => props.width ?? "30px"};
   height: ${props => props.height ?? "30px"};
   display:flex;
   justify-content: center;
   align-items: center;
   align-self: center;
   ${props => props.mergeRadius && 'border-top-left-radius: 0;border-bottom-left-radius: 0;'}
   ${props => props.location == "rightSide" && 'position: absolute; right: 10px;'}
   svg {
      color: ${props => props.iconColor ?? "#818896"}
   }
`
export const TextFrame = styled.div`
position:relative;
   background: #3a3f48;
   border-radius:5px;
   width: calc(100% - 10px);
   height: 35px;
   display:flex;
   align-items: center;
   padding: 0px 10px;
`