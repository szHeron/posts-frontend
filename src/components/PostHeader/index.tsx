import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { UserProps } from "../../context/AuthContext";
import { HeaderPostContainer } from "./styles";
import { Avatar } from "../Avatar";
import { Timestamp } from "firebase/firestore";

interface PostHeader{
    author: UserProps
    createdAt: Timestamp
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
            <Avatar url={props.author.avatar}/>
            <div>
                <p>{props.author.name}</p>
                <span>{createdAt}</span>
            </div>
        </HeaderPostContainer>
    )
}