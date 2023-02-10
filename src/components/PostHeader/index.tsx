import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Timestamp } from "firebase/firestore";
import { UserProps } from "../../context/AuthContext";
import { HeaderPostContainer } from "./styles";
import { Avatar } from "../Avatar";
import { PostOptions } from "../PostOptions";

interface PostHeader{
    author: UserProps
    createdAt: Timestamp
    postId: string
}

function getDateFormat(date: Date){
    dayjs.extend(relativeTime)
    const today = dayjs(new Date())
    return dayjs(date).from(today)
}

export function PostHeader(props: PostHeader){
    const date = new Date(props.createdAt.seconds*1000)
    const createdAt = getDateFormat(date)

    return (
        <HeaderPostContainer>
            <section>
                <Avatar url={props.author.avatar}/>
                <div>
                    <p>{props.author.name}</p>
                    <span>{createdAt}</span>
                </div>
            </section>
            <PostOptions postId={props.postId} authorId={props.author.id}/>
        </HeaderPostContainer>
    )
}