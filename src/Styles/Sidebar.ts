import styled from 'styled-components';

var grayColor = "#818896";
export const Text = styled.p`
        font-family: "Georama",sans-serif;
        font-size: 14px;
        color: ${(props) => props.color};

`
export const Item = styled.div`
    width: inherit;
    margin-left: 10px;
    display:flex;
    padding: 10px 5px;
    display:flex;
    flex-direction: column;
    a,span {
        color: #818896;
        font-weight: bold;
        font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
    }
`
export const Brand = styled.div`
    width: 100%;
    height: 50px;
    display:flex;
    justify-content: center;
    align-items: center;
    a{
        color: #818896;
        font-weight: bold;
    }
`
export const Header = styled.div`
   border-top:1px solid #3a3f48;
   padding: 20px;
   
`
export const UserPicture = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 12px;
    overflow: hidden;
    margin-right: 15px;
    img {
     width :100%;
    }
    display:inline-block;
`
export const SpanRow = styled.span`
display:block;
color:#818896;
`
export const Username = styled(SpanRow)`
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
`
export const UserRole = styled(SpanRow)`
        font-size: 12px;
    font-weight: 400;
    line-height: 1.5;
`
export const UserStatus = styled(SpanRow)`
    font-weight: 400;
    font-size: 11px;
    margin-top: 4px;
    svg{
        
        font-size: 8px;
        margin-right: 4px;
        color: #5cb85c;
    }
`
export const UserInfo = styled.div`
    display:inline-block;
    
`
export const Box = styled.div`
   border-top:1px solid #3a3f48;
  
`
export const Dropdown = styled.ul`
padding: 0;

   width: calc(100% - 10px);
   margin-bottom: 0px;
   margin-top: 10px; 
`
export const DropdownItem = styled.li`
    min-width: 100%;
    max-width: 100%;
    padding: 7px 4px;
    border-radius: 5px;
    display:flex;
    align-items: center;
    
    a {
        color: #818896;
        text-decoration: none;
        font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
        font-size: 1rem;
        font-weight: 400;
        margin-left: 10px;
    }
    &:hover{
        background: #333;
    }
    
`
export const SearchContainer = styled.div`
   border-top: 1px solid #3a3f48;
   height: 70px;
   width: 100%;
   display:flex;
   align-items: center;
   justify-content: center;
`
export const SearchField = styled.input`
   background-color:#3a3f48;
   border: none;
   outline: none;
   border-top-left-radius: 5px;
   border-bottom-left-radius: 5px;
   border-bottom-right-radius: 0px;
   border-top-right-radius: 0px;
   height: 35px;
   width: 175px;
   padding: 5px 15px;
   color: ${grayColor};
   
`
export const SidebarContainer = styled.div`
   min-width: 250px;
   max-width: 250px;
   background-color: rgb(49, 53, 61);
   height: 100vh;
   display:inline-block;
`







