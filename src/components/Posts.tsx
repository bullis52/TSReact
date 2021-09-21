import {useEffect, useState} from "react";
import {IPost} from "../model/model";
import {getPosts} from "../services/axios";
import {Post} from "./Post";

export function Posts(){
    let [posts,setPosts] = useState<IPost[]>([]);
    useEffect(()=>{
        getPosts().then(value => setPosts(value.data))
    },[])
    return(
        <div>
            {
                posts.map(value => <Post {...value}/>)
            }
        </div>
    )
}