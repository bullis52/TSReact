import {FC ,MouseEvent}from "react";
import { Link } from "react-router-dom";
import {IPost} from "../model/model";

const Post:FC<IPost> = (props:IPost) =>{
    let {id,userId,title,body}= props
    let onClick = (e: MouseEvent<HTMLButtonElement>):void => {
    }
    return(
        <div>
            <h2>{id}</h2>
            <h3>{userId}</h3>
            <h4>{title}</h4>
            <h5>{body}</h5>
            <Link to={'/posts'+ id}>details</Link>
        </div>
    )
}
export {Post}