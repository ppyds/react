import React, {Component} from "react";
import "./index.css"
export default class List extends Component {
    constructor() {
        super();
        this.state = {
            arr: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
        }
    }
    remove(index){
        let arr = this.state.arr;
        arr.splice(index,1)
        this.setState({
            arr
        })
    }
    render() {
        return (
            <div className={"list_box"}>
                {
                    this.state.arr.map((item,index) =>
                        <div key={index}>
                            {item}
                            <button onClick={()=> this.remove(index)}>删除</button>
                        </div>
                    )
                }
            </div>
        )
    }
}