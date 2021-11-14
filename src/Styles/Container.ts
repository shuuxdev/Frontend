import styled from 'styled-components';

interface IWrapper {
   padding: string;
}

const Container = styled.div`
   margin: 0 auto;
   width: 100%;
   max-width:1000px; 
`
export const Wrapper = styled.div<IWrapper>`
   padding: ${props => props.padding};
`

export default Container