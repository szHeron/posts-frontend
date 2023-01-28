import { FormEvent, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Avatar, { genConfig } from 'react-nice-avatar'
import useAuth from "../hook/useAuth"
import AsideImage from "../assets/post-online.svg"
import { Container, Form, SubTitle, Title, Input, Main, Aside } from "../styles/pages/styled.login"
import { Button } from "../styles/Button"

interface UserData {
    name: string;
    email: string;
    password: string;
    avatar: object;
}

export default function Register(){
    const [newUser, setNewUser] = useState<UserData>({name: "", email: "", password: "", avatar: genConfig()})
    const [error, setError] = useState("")
    const { signInWithEmailAndPasswordFirebase } = useAuth();
    const navigate = useNavigate()

    async function handleLogin(e: FormEvent){
        e.preventDefault()
        if(newUser.email && newUser.password && newUser.name){
            //const response = await signInWithEmailAndPasswordFirebase(email, password)
            navigate("/")
        }else{
            setError("Insira o email e senha!")
        }
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
                    <label>Nome</label>
                    <Input onChange={e => setNewUser({...newUser, name: e.target.value})} placeholder="Seu nome"/>
                    <label>Email</label>
                    <Input onChange={e => setNewUser({...newUser, email: e.target.value})} placeholder="Seu email"/>
                    <label>Senha</label>
                    <Input onChange={e => setNewUser({...newUser, password: e.target.value})} placeholder="Sua senha" type="password"/>
                    {error&&<span>{error}</span>}
                    <label>Seu avatar</label>
                    <Avatar style={{ width: '8rem', height: '8rem' }} {...newUser.avatar} />
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