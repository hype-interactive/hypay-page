import React from 'react'
import mockup from '../assets/images/mockup-light.png'
import message_bubble from '../assets/images/message-bubble.png'
import send_button from '../assets/images/send.svg'
import Sckeleton,{SckeletonTitle} from './sckeleton';
import 'animate.css';

class Entry extends React.Component{

    constructor(props){
        super(props);
    }
    render(){
    const element=<SckeletonTitle/>

        return(
            <div className="row">
                <div className="col-md-8">
                    <div className="card pale_blue">
                        <Right/>
                        <div className="mockup">
                            <img src={mockup} alt="hypay mockup"/>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card pale_green">
                        <Sckeleton content={element} img={message_bubble}/>
                    </div>
                </div>
            </div>

        )
    }
}

function Right() {
    return(
        <div className="section_right">
            <div className="logo"></div>
            <h1>Instant <br/> Payments </h1>
            <p>Hypay is the all-new way to digital payments , get paid instantly throught Whatsapp messenger</p>
            <Email/>
        </div>

    );
}
function Email() {
    return(
        <div className="email-box">
            <input type="email" placeholder="Enter business email !"/>
            <button type="submit" className="btn-hypay"><img className="animate__fadeOutRight" src={send_button}/></button>
        </div>
    )
}


export default Entry;