import { 
    Container,
    Row,
    BuscarInputContainer,
    Menu,
    MenuRight,
    UserPicture,
    Wrapper,
    Input
 } from "./styles";
 import { Button } from "../Button";
import { useAuth } from "../../hooks/useAuth";

const Header = () => {
    const {user, handlerSignOut} =useAuth();

    return(
        <Wrapper>
            <Container>
                <Row>
                    {user.id ? (
                        <>
                            <img src="http://www.w3.org/2000/svg" alt="" />
                            <BuscarInputContainer>
                            <Input placeholder="Buscar..." />
                            </BuscarInputContainer>
                            <Menu>Live Code</Menu>
                            <Menu>Global</Menu>
                    </>
                    ): null}
                    
                </Row>
                <Row>
                    {user.id ? 
                    (
                        <>
                            <UserPicture src="https://avatars.githubusercontent.com/u/118990742?s=400&u=5b801a2e2acd11e04ade433a100d70620c32c720&v=4"/>{" "}
                            <a href="#" onClick={handlerSignOut}> Sair </a> 
                        </>
                    )
                    :
                    (
                        <>
                            <MenuRight href="$" > Home</MenuRight>
                            <Button title="Entrar" />
                            <Button title="Cadastrar" />
                        </>
                    )}
                </Row>
            </Container>
        </Wrapper>
    )
}

export {Header};