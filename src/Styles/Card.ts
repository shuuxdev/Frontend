import styled from 'styled-components';



export const Header = styled.div`
height: 50px;
background: #3a3f48;
padding: 3px 7px;
display:flex;
justify-content: center;
align-items: center;
p {
    color: white;
}

`
export const Body = styled.div`
   border-radius: 3px;
   height: 100%;
   
`
export const Column = styled.div`
display:block;
height: 50px;
display:flex;
justify-content: center;
align-items: center;
`

export const ProductTitle = styled.p<{ mr: number }>`
  overflow: hidden;
  text-overflow: ellipsis;
  display:-webkit-box;
  -webkit-line-clamp: ${props => props.mr};
  line-clamp:  ${props => props.mr}; 
   -webkit-box-orient: vertical;
   font-size: 12px;
   color: #505050;


`
export const Price = styled.p`
   color : #ee4d2d;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-weight: 500;

`
export const Sold = styled.p`
font-weight: 400;

color: #505050;
font-size: 10px;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`