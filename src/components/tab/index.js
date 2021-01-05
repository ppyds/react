import React, {Component} from "react"
import "./index.css"

let index = 0
let arr = [
    {
        title:"标题一",
        id:1,
        content:{
            id:11,
            name:"一"
        }
    },{
        title:"标题二",
        id:2,
        content:{
            id:22,
            name:"二"
        }
    },{
        title:"标题三",
        id:3,
        content:{
            id:33,
            name:"三"
        }
    },{
        title:"标题四",
        id:4,
        content:{
            id:44,
            name:"四"
        }
    },
];

export default class tab extends Component {
    constructor() {
        super();
        this.state = {
            index,
            arr
        }
        this.clc = function (i) {
            console.log(this)
            this.setState({
                index: i
            })
        }
    }

    render() {
        return (
            <div>
                <ul className={"box"}>
                    {
                        arr.map((item, i) => (
                            <li onClick={() => this.clc(i)} key={item.id}
                                className={this.state.index === i ? 'active' : ''}>
                                {item.title}
                            </li>
                        ))
                    }
                </ul>
                <div className="content">
                    {
                        arr.map((item, i) => (
                            <div className={'item '+ (i === this.state.index?"active":'')} key={item.content.id}>
                                {item.content.name}
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}
