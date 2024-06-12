import { useForm } from "react-hook-form"
import {MdEmail, MdLock} from 'react-icons/md';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import {useContext} from "react";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";


import {
    Container,
    Column,
    CriarText,
    EsqueciText,
    Row,
    SubTitle,
    Title,
    TitleLogin,
    Wrapper,
    Line
} from './styles'
import { IFormData } from "./types";
import { useAuth } from "../../hooks/useAuth";

const schema = yup.object({
    email: yup.string().email('email invalido').required('Campo obrigatório'),
    password: yup.string().required('Campo obrigatório')
}).required();

const Login = () => {
    const {handlerLogin} = useAuth();

    const { 
        control, 
        handleSubmit, 
        formState: {errors}} 
        = useForm<IFormData>({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });
    const onSubmit = async (formData: IFormData) => {
        handlerLogin(formData);
    };

    return (
        <>
            <Header />
            <Container>
                <Column>
                    <Title> 
                    A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais 
                    rápido nas empresas mais desejadas.
                    </Title>
                </Column>
                <Column>
                    <Wrapper>
                        <Line />
                        <TitleLogin>Faça seu cadastro</TitleLogin>
                        <SubTitle>Faça seu login e make the change.</SubTitle>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input name="email" control={control} errorMessage={errors?.email?.message} placeholder="E-mail" leftIcon={<MdEmail />} />
                            <Input name="password" control={control} errorMessage={errors?.password?.message} placeholder="Senha" type="password" leftIcon={<MdLock />}/>
                            <Button title="Entrar" variant="secondary" type="submit" />
                        </form>
                        <Row>
                            <EsqueciText>Esqueci minha senha</EsqueciText>
                            <CriarText>Criar Conta</CriarText>
                        </Row>
                    </Wrapper>
                </Column>
            </Container>
        </>
    );
}

export {Login};