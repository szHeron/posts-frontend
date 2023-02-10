import { Dispatch, FormEvent, SetStateAction } from "react"
import Dropzone from "react-dropzone"
import { Preview, ContentButton } from "./styles"
import PhotoIcon from "../../assets/photo.svg";
import { NewPostData } from "../NewPost"

interface PostProps {
    postContent: NewPostData
    setPostContent: Dispatch<SetStateAction<NewPostData>>
}


export function UploadFile(props: PostProps){
    function handleDeleteSelectImage(e: FormEvent){
        e.stopPropagation();
        props.setPostContent({...props.postContent, content: null})
    }

    return (
        <Dropzone onDrop={acceptedFiles => {
            props.setPostContent({...props.postContent, content: acceptedFiles[0]})
        }}>
            {({getRootProps, getInputProps}) => (
                <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    {
                        props.postContent.content&&
                            <Preview>
                                <img alt="preview" src={URL.createObjectURL(props.postContent.content)}/>
                                <button onClick={handleDeleteSelectImage}>
                                    <svg fill="#fff" width={32} height={32} clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z"/></svg>
                                </button>
                            </Preview>
                    }
                    <ContentButton type="button">
                        <img src={PhotoIcon} alt="Selecione uma foto para o post"/>
                        Foto
                    </ContentButton>
                </div>
            )}
        </Dropzone>
    )
}
