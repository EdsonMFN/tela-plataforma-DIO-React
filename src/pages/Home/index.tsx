import { useNavigate } from "react-router-dom";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import {
    Container,
    TextContent,
    Title,
    TitleHighlight
} from './styles'

const Home = () => {

    const navigate = useNavigate();

    const hondleClickSignIn = () => {
        navigate('/login')
    }
    return (
        <>
            <Header />
            <Container>
                <div>
                    <Title> 
                        <TitleHighlight>
                            Implemente
                            <br />
                        </TitleHighlight>
                        o seu futuro global agora!!
                    </Title>
                    <TextContent>
                        texto do conteudo.
                    </TextContent>
                    <Button title="Começar agora" variant="secondary" onClick={hondleClickSignIn}/>
                </div>
            </Container>
        </>
    );
}

export {Home};