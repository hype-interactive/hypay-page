import React from 'react';
import Sckeleton,{Content} from './sckeleton';
import lock from '../assets/images/lock.svg'
import people from '../assets/images/people.svg'
import speed from '../assets/images/speedometer.svg'


class Services extends React.Component{
    render(){
        return(
            <div className="row">
                <Speed/>
                <Coverage/>
                <Security/>
            </div>
        );
    }
}

function Security() {
    const element=< Content title="Secured" content="End to end encrypted payments, We embrace Privacy"/>
    var animation="animate__animated  animate__infinite animate__tada"
    return(
        < div className="col-md-4">
            <div className="card pale_purple">
                <Sckeleton content={element} img={lock} anime={animation}/>
            </div>
        </div>
    );
}
function Speed() {
    const element=< Content title="Instantly" content="Every second is worthy, Receive instant payments from your customers"/>
    var animation="animate__animated animate__infinite animate__lightSpeedInLeft "
    return(
        < div className="col-md-4">
            <div className="card pale_orange">
                <Sckeleton content={element} img={speed} anime={animation}/>
            </div>
        </div>
    );
}
function Coverage() {
    const element=< Content title="Coverage" content="Everyone belongs to WhatsApp Family , It's easy to get paid here "/>
    var animation="animate__animated animate__infinite animate__bounceIn"
    return(
        < div className="col-md-4">
            <div className="card pale_red">
                <Sckeleton content={element} img={people} anime={animation}/>
            </div>
        </div>
    );
}
export default Services;