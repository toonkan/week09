import React,{Component} from 'react';

class Footer extends Component{
    constructor(props){
        super(props);
        //console.log('Constructor,',props.college);
    }
    render(){
        const {college, name, address} = this.props;
        return(
            <div className="container-fluid">
                <hr/>
                <div className="text-center">Design: {name}</div>
                <div className="text-center">&copy; 2020 Copyright {college} {address}</div>
            </div>
        )
    }   
}
export default Footer;