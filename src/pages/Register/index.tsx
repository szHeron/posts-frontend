import { FormEvent, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Dropzone from "react-dropzone"
import useAuth from "../../hook/useAuth"
import AsideImage from "../../assets/post-online.svg"
import { AvatarContent, AvatarAndPassword, Container, Redirect, Form, SubTitle, Title, Main, Aside, ControledInput } from "./styles"
import { Input } from "../../styles/Input"
import { Button } from "../../styles/Button"
import { Avatar } from "../../components/Avatar"

interface UserData {
    name: string;
    email: string;
    password: string;
    avatar: Blob | string;
}

export default function Register(){
    const [newUser, setNewUser] = useState<UserData>({name: "", email: "", password: "", avatar: ""})
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState({errorInName:"", errorInEmail: "", errorInPassword: "", errorInResponse: ""})
    const { signUpWithEmailAndPasswordFirebase } = useAuth()
    const navigate = useNavigate()

    async function handleLogin(e: FormEvent){
        e.preventDefault()
        let erros = {errorInName:"", errorInEmail: "", errorInPassword: "", errorInResponse: ""}
        if(newUser.email && newUser.password && newUser.name && newUser.password === confirmPassword){
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
            if(newUser.password !== confirmPassword)
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
                    <AvatarAndPassword>
                        <ControledInput>
                            <label>Confirme sua senha</label>
                            <Input maxLength={128} onChange={e => setConfirmPassword(e.target.value)} placeholder="Confirme sua senha" type="password"/>
                            {error.errorInPassword&&<span>{error.errorInPassword}</span>}
                            {error.errorInResponse&&<span>{error.errorInResponse}</span>}
                        </ControledInput>
                        <Dropzone onDrop={acceptedFiles => {
                            setNewUser({...newUser, avatar: acceptedFiles[0]})
                        }}>
                            {({getRootProps, getInputProps}) => (
                                <AvatarContent {...getRootProps()}>
                                    <label>Seu avatar</label>
                                    <input {...getInputProps()} />
                                    <Avatar url={newUser.avatar instanceof Blob?URL.createObjectURL(newUser.avatar):""}/>
                                    <svg fill="#000" clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m4.481 15.659c-1.334 3.916-1.48 4.232-1.48 4.587 0 .528.46.749.749.749.352 0 .668-.137 4.574-1.492zm1.06-1.061 3.846 3.846 11.321-11.311c.195-.195.293-.45.293-.707 0-.255-.098-.51-.293-.706-.692-.691-1.742-1.74-2.435-2.432-.195-.195-.451-.293-.707-.293-.254 0-.51.098-.706.293z" fillRule="nonzero"/></svg>
                                </AvatarContent>
                            )}
                        </Dropzone>
                    </AvatarAndPassword>
                    <Button type="submit">
                        CADASTRAR
                    </Button>
                    <Redirect>
                        Já possui uma conta? <Link to="/login"> Clique aqui e entre nela!</Link>
                    </Redirect>
                </Form>
            </Main>
        </Container>
    )
}