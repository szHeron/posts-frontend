import { FormEvent, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import useAuth from "../../hook/useAuth"
import AsideImage from "../../assets/post-online.svg"
import { Container, Form, SubTitle, Title, Main, Aside, ControledInput } from "./styles"
import { Input } from "../../styles/Input"
import { Button } from "../../styles/Button"
import { Redirect } from "../Register/styles"
import ActivityIndicator from "../../components/ActivityIndicator/ActivityIndicator"

export default function Login(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const { signInWithEmailAndPasswordFirebase, user } = useAuth();
    const navigate = useNavigate()

    async function handleLogin(e: FormEvent){
        e.preventDefault()
        if(email && password){
            setLoading(true)
            try {
                await signInWithEmailAndPasswordFirebase(email, password)
                navigate("/posts")
            }catch (err: any) {
                setError(err.message)
            }
        }else{
            setError("Insira o email e senha!")
        }
        setLoading(false)
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
                        <Input onChange={e => setEmail(e.target.value)} placeholder="Seu email"/>
                    </ControledInput>
                    <ControledInput>
                        <label>Senha</label>
                        <Input onChange={e => setPassword(e.target.value)} placeholder="Sua senha" type="password"/>
                        {error&&<span>{error}</span>}
                    </ControledInput>
                    <Button disabled={loading} type="submit">
                        {loading?<ActivityIndicator absolute={false}/>:<>ENTRAR</>}
                    </Button>
                    <Redirect>
                        Não possui uma conta? <Link to="/cadastro"> Clique aqui e crie ela!</Link>
                    </Redirect>
                </Form>
            </Main>
        </Container>
    )
}