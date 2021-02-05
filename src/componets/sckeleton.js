import React from 'react'

class Sckeleton extends React.Component{
    render(props){
        return(
            <div className="sckeleton">
                <img  src={this.props.img} alt="animation"/>
                <div className="separator"></div>
                <div className="body">{this.props.content}</div>
            </div>
        );
    }


}

function SckeletonTitle() {
    return(
        <h2>Some thing you waited</h2>
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

export default Sckeleton;
export  {SckeletonTitle,Content}