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
    const element=< Content title="Secured" content="Goodbye sending. Hello typing.Messages appear live as you type."/>
    return(
        < div className="col-md-4">
            <div className="card pale_purple">
                <Sckeleton content={element} img={lock}/>
            </div>
        </div>
    );
}
function Speed() {
    const element=< Content title="Instantly" content="Goodbye sending. Hello typing.Messages appear live as you type."/>
    return(
        < div className="col-md-4">
            <div className="card pale_orange">
                <Sckeleton content={element} img={speed}/>
            </div>
        </div>
    );
}
function Coverage() {
    const element=< Content title="Coverage" content="Goodbye sending. Hello typing.Messages appear live as you type."/>
    return(
        < div className="col-md-4">
            <div className="card pale_red">
                <Sckeleton content={element} img={people}/>
            </div>
        </div>
    );
}
export default Services;