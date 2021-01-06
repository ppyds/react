import React, {Component} from "react";
import './index.css';

export default class event extends Component {
    constructor() {
        super();
        this.state = {
            isShow: false
        }
    }

    show() {
        this.setState({
            isShow: true
        });
    }

    hide() {
        this.setState({
            isShow: false
        });
    }

    self(e) {
        e.target.className === 'cover active' && this.hide();
    }

    render() {
        return (
            <div>
                <button onClick={() => this.show()}>出现</button>
                <div
                    className={"cover " + (this.state.isShow ? "active" : '')}
                    onClick={(e) => this.self(e)}>
                    <div className="con">
                        <h2>我是标题</h2>
                        <button>确定</button>
                        <button onClick={() => this.hide()}>取消</button>
                    </div>
                </div>
            </div>
        );
    }
}