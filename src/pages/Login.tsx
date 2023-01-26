import { FormEvent } from "react"
import AsideImage from "../assets/post-online.svg"
import { Container, Form, SubTitle, Title, Input, Main, Aside } from "../styles/styled.login"
import { Button } from "../styles/Button"

export default function Login(){
    function handleLogin(e: FormEvent){
        e.preventDefault()
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
                    <Input placeholder="Senha"/>
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