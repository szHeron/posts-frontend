import { FormEvent, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import useAuth from "../hook/useAuth"
import AsideImage from "../assets/post-online.svg"
import { Container, Form, SubTitle, Title, Main, Aside, ControledInput } from "../styles/pages/styled.login_register"
import { Input } from "../styles/Input"
import { Button } from "../styles/Button"

export default function Login(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const { signInWithEmailAndPasswordFirebase, user } = useAuth();
    const navigate = useNavigate()

    useEffect(()=>{
        function userIsConected(){
            if(user) {
                navigate("/")
            }
        }
        userIsConected()
    },[user])

    async function handleLogin(e: FormEvent){
        e.preventDefault()
        if(email && password){
            try {
                const response = await signInWithEmailAndPasswordFirebase(email, password)
                navigate("/")
            }catch (err: unknown) {
                if (err instanceof Error) {
                    setError(err.message)
                };
            }
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
                    Faça o login para entrar na sua conta
                </SubTitle>
                <Form onSubmit={handleLogin}>
                    <ControledInput>
                        <label>Email</label>
                        <Input onChange={e => setEmail(e.target.value)} placeholder="Example.email.com"/>
                    </ControledInput>
                    <ControledInput>
                        <label>Senha</label>
                        <Input onChange={e => setPassword(e.target.value)} placeholder="Senha" type="password"/>
                        {error&&<span>{error}</span>}
                    </ControledInput>
                    <Button type="submit">
                        ENTRAR
                    </Button>
                    <SubTitle>
                        Não possui uma conta? <Link to="/cadastro"> Clique aqui e crie ela!</Link>
                    </SubTitle>
                </Form>
            </Main>
        </Container>
    )
}