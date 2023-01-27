import { FormEvent, useState } from "react"
import { redirect } from "react-router-dom"
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";
import AsideImage from "../assets/post-online.svg"
import { Container, Form, SubTitle, Title, Input, Main, Aside } from "../styles/pages/styled.login"
import { Button } from "../styles/Button"

export default function Login(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    function handleLogin(e: FormEvent){
        e.preventDefault()
        if(email && password){
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    return redirect("/");
                })
                .catch((error) => {
                    console.log(error.code, error.message)
                });
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
                    <label>Email</label>
                    <Input placeholder="Example.email.com"/>
                    <label>Senha</label>
                    <Input placeholder="Senha" type="password"/>
                    <Button type="submit">
                        ENTRAR
                    </Button>
                    <SubTitle>
                        Ou clique aqui e crie uma!
                    </SubTitle>
                </Form>
            </Main>
        </Container>
    )
}