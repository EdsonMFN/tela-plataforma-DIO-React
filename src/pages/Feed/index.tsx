
import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";

import {
    Container,
    Column,
    Title,
    TitleHighlight
} from './styles'

const Feed = () => {

    return (
        <>
            <Header />
            <Container>
                <Column flex={3}>
                    <Title>Feed</Title>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </Column>
                <Column flex={1}>
                    <TitleHighlight># RANKING </TitleHighlight>
                    <UserInfo percentual={50} nome= "Edson Machado" image="https://avatars.githubusercontent.com/u/118990742?s=400&u=5b801a2e2acd11e04ade433a100d70620c32c720&v=4"/>
                    <UserInfo percentual={30} nome= "Edson Machado" image="https://avatars.githubusercontent.com/u/118990742?s=400&u=5b801a2e2acd11e04ade433a100d70620c32c720&v=4"/>
                    <UserInfo percentual={80} nome= "Edson Machado" image="https://avatars.githubusercontent.com/u/118990742?s=400&u=5b801a2e2acd11e04ade433a100d70620c32c720&v=4"/>
                    <UserInfo percentual={60} nome= "Edson Machado" image="https://avatars.githubusercontent.com/u/118990742?s=400&u=5b801a2e2acd11e04ade433a100d70620c32c720&v=4"/>
                    <UserInfo percentual={20} nome= "Edson Machado" image="https://avatars.githubusercontent.com/u/118990742?s=400&u=5b801a2e2acd11e04ade433a100d70620c32c720&v=4"/>
                </Column>
            </Container>
        </>
    );
}

export {Feed};