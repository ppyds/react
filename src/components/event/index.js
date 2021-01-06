import React, {Component} from "react";

export default class click extends Component {
    constructor() {
        super();
        this.state = {
            name:"哈哈"
        }
    }

    cName(name){
        this.setState({
            name
        })
    }
    render() {
        return (
            <div className="box">
                <h2>{this.state.name}</h2>
                <button onClick={() =>this.cName('哈哈哈哈')}>哈哈哈哈</button>
                <button onClick={() =>this.cName('ee')}>ee</button>
            </div>
        )
    }
}