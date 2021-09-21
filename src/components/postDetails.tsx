import {RouteComponentProps} from "react-router";

export function PostDetails(props:RouteComponentProps){
   let {history}=props
    console.log(history)
    return(
        <div>
            posts
        </div>
    )
}