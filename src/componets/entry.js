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
                        < WaitDots/>
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
            <p>HyPay is the all-new way to digital payments , get paid instantly through WhatsApp messenger</p>
            {/* <Email/> */}
        </div>

    );
}
function Email() {
    return(
        <div className="email-box">
            <input type="email" placeholder="Enter business email !"/>
            <button type="submit" className="btn-hypay"><img  src={send_button}/></button>
        </div>
    )
}

function WaitDots() {
    return(
        <div className="wait_dots animate__animated animate__pulse animate__infinite">
            <i class="fa fa-circle tiny" aria-hidden="true"></i>
            <i class="fa fa-circle small" aria-hidden="true"></i>
            <i class="fa fa-circle medium" aria-hidden="false"></i>
            <i class="fa fa-circle large" aria-hidden="true"></i>
        </div>
    );
    
}


export default Entry;