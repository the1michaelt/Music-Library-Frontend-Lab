import "./MusicTable.css"
import React from "react";
import Post from "../Post/Post";

const PostList = (props) => {
    return (
        <div>
            {props.parentList.map((entry, index) => {
                return (
                    <React.Fragment>
                        <p>{entry.index}</p>
                        <p className='userName'>{entry.userName}</p>
                        <p>{entry.userPost}</p>
                        <span>
                            <i className=" hover glyphicon glyphicon-thumbs-up"> </i>
                            <i className=" hover glyphicon glyphicon-thumbs-down"> </i>
                        </span>
                        <hr />
                    </React.Fragment>
                )
            })}
        </div>
    )