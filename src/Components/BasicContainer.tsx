import Container, { Wrapper } from "../Styles/Container";

const BasicContainer: React.FC = (props) => {
    return (
        <Container mw="1200px">
            <Wrapper margin="10px" padding="10px">
                {props.children}
            </Wrapper>
        </Container>
    );
};

export default BasicContainer;