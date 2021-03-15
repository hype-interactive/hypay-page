import React, {useState} from 'react'


export default function Sckeleton (props) {

        const [hovered,setHovered]= useState(false);
        const toggleHover =()=> setHovered(!hovered);
        const animeClass= hovered ? props.anime:"";
        return(
            <div className="sckeleton" onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
                <img className={animeClass} src={props.img} alt="animation"/>
                <div className="separator"></div>
                <div className="body">{props.content}</div>
            </div>
        );
    }




function SckeletonTitle() {
    return(
        <h2>Something you waited</h2>
    );
}

function Content(props) {
    return(
        <div>
            <h2>{props.title}</h2>
            <p>{props.content}</p>
        </div>
    )
    
}
export  {SckeletonTitle,Content}