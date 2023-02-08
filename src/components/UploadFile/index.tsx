import { Dispatch, SetStateAction } from "react"
import Dropzone from "react-dropzone"
import { ContentInput, Preview } from "./styles"
import { NewPostData } from "../NewPost"

interface PostProps {
    postContent: NewPostData
    setPostContent: Dispatch<SetStateAction<NewPostData>>
}

export function UploadFile(props: PostProps){
    return (
        <Dropzone onDrop={acceptedFiles => {
            props.setPostContent({...props.postContent, content: acceptedFiles[0]})
        }}>
            {({getRootProps, getInputProps}) => (
                <ContentInput {...getRootProps()}>
                    <input {...getInputProps()} />
                    {
                        props.postContent.content?
                            <Preview alt="preview" src={URL.createObjectURL(props.postContent.content)}/>
                        :
                            <svg height={64} width={64} fill="#6C00FF" clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11 11h-7.25c-.414 0-.75.336-.75.75s.336.75.75.75h7.25v7.25c0 .414.336.75.75.75s.75-.336.75-.75v-7.25h7.25c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-7.25v-7.25c0-.414-.336-.75-.75-.75s-.75.336-.75.75z" fillRule="nonzero"/></svg>
                    }
                    <p>Clique aqui e selecione ou arraste a imagem que deseja enviar</p> 
                </ContentInput>
            )}
        </Dropzone>
    )
}
