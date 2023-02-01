import { FormEvent, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Avatar, { genConfig } from "react-nice-avatar"
import { EditAvatar } from "../components/EditAvatar"
import useAuth from "../hook/useAuth"
import AsideImage from "../assets/post-online.svg"
import { Container, Form, SubTitle, Title, Input, Main, Aside, ControledInput } from "../styles/pages/styled.login_register"
import { Button } from "../styles/Button"

interface UserData {
    name: string;
    email: string;
    password: string;
    avatar: object;
}

export default function Register(){
    const [newUser, setNewUser] = useState<UserData>({name: "", email: "", password: "", avatar: genConfig()})
    const [error, setError] = useState({errorInName:"", errorInEmail: "", errorInPassword: "", errorInResponse: ""})
    const { signUpWithEmailAndPasswordFirebase } = useAuth();
    const navigate = useNavigate()

    async function handleLogin(e: FormEvent){
        e.preventDefault()
        let erros = {errorInName:"", errorInEmail: "", errorInPassword: "", errorInResponse: ""}
        if(newUser.email && newUser.password && newUser.name){
            try{
                const response = await signUpWithEmailAndPasswordFirebase(newUser.email, newUser.password, newUser.name, newUser.avatar)
                navigate("/")
            }catch(e){
                console.log("Erro ao cadastrar usuario, tente novamente mais tarde!", e)
                setError({...error, errorInResponse: "Erro ao cadastrar usuario, tente novamente mais tarde!"})
            }
        }else{
            if(!newUser.email)
                erros = {...erros, errorInEmail: "Insira o email corretamente!"}
            if(!newUser.name)
                erros = {...erros, errorInName: "Nome não pode está vazio!"}
            if(!newUser.password)
                erros = {...erros, errorInPassword: "Senha não pode está vazia!"}
        }   
        setError(erros)
    }

    return(
        <Container>
            <Aside>
                <img width="70%" height="70%" src={AsideImage} alt="Ilustração de upload de posts"/>
            </Aside>
            <Main>
                <Title>
                    Olá, bem-vindo!
                </Title>
                <SubTitle>
                    Realize o cadastro da sua conta!
                </SubTitle>
                <Form onSubmit={handleLogin}>
                    <ControledInput>
                        <label>Nome</label>
                        <Input maxLength={255} onChange={e => setNewUser({...newUser, name: e.target.value})} placeholder="Seu nome"/>
                        {error.errorInName&&<span>{error.errorInName}</span>}
                    </ControledInput>
                    <ControledInput>
                        <label>Email</label>
                        <Input maxLength={128} onChange={e => setNewUser({...newUser, email: e.target.value})} placeholder="Seu email"/>
                        {error.errorInEmail&&<span>{error.errorInEmail}</span>}
                    </ControledInput>
                    <ControledInput>
                        <label>Senha</label>
                        <Input maxLength={128} onChange={e => setNewUser({...newUser, password: e.target.value})} placeholder="Sua senha" type="password"/>
                        {error.errorInPassword&&<span>{error.errorInPassword}</span>}
                        {error.errorInResponse&&<span>{error.errorInResponse}</span>}
                    </ControledInput>
                    <label>Seu avatar</label>
                    <Avatar style={{ width: '8rem', height: '8rem' }} {...newUser.avatar} />
                    <EditAvatar/>
                    <Button type="submit">
                        CADASTRAR
                    </Button>
                    <SubTitle>
                        Já possui uma conta? <Link to="/login"> Clique aqui e entre nela!</Link>
                    </SubTitle>
                </Form>
            </Main>
        </Container>
    )
}