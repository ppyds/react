import React, {Component} from "react";
import './index.css'

export default class form extends Component {
    state = {
        user: {
            username: 'admin',//str
            password: 'root',//str
            nickname: 'cxk',//str
            like: ['1', '3'],//str
            sex: 2//number
        },
        checkboxData: [
            {
                name: "唱",
                id: '1',
                checked: false
            }, {
                name: "跳",
                id: '2',
                checked: false

            }, {
                name: "rap",
                id: '3',
                checked: false

            }, {
                name: "篮球",
                id: '4',
                checked: false
            }
        ]
    }

    componentDidMount() {
        //页面渲染完成 将like字段中包含的checkboxData的id的checked值赋值为true
        this.state.checkboxData.forEach(item => this.state.user.like.includes(item.id) && (item.checked = true));
        this.setState({});//触发setState重新渲染页面
    }

    userChange(e, prop) {
        this.state.user[prop] = prop === 'sex' ? Number(e.target.value) : e.target.value;//sex字段要求是数字
        this.setState({});//触发setState重新渲染页面
    }

    checkboxToArray(e, id) {
        this.state.user.like = [];//清空数据
        this.state.checkboxData.forEach(item => {
            item.id === id && (item.checked = e.target.checked);//改变checkboxData的checked值为所属多选框的checked值
            item.checked && (this.state.user.like.push(item.id));//将所有checked值为true的id 添加到like字段中(重新赋值)
        });
        this.setState({});//触发setState重新渲染页面
    }
    //提交数据
    add(){
        console.log(this.state.user);
    }

    render() {
        return (
            <div>
                <p>{JSON.stringify(this.state.user)}</p>
                <label>
                    <span>账户名:</span>
                    <input type="text"
                           value={this.state.user.username}
                           onChange={(e) => this.userChange(e, 'username')}/>
                </label><br/>
                <label>
                    <span>密码</span>
                    <input type="text"
                           value={this.state.user.password}
                           onChange={(e) => this.userChange(e, 'password')}/>
                </label><br/>
                <label>
                    <span>昵称</span>
                    <input type="text"
                           value={this.state.user.nickname}
                           onChange={(e) => this.userChange(e, 'nickname')}/>
                </label><br/>
                <div>
                    <label><span>性别</span></label>
                    <div className={'list'}>
                        <label>
                            <span>男</span>
                            <input type="radio"
                                   checked={Number(this.state.user.sex) === Number(1)}
                                   value={1}
                                   onChange={(e) => this.userChange(e, 'sex')}
                                   name={'sex'}/>
                        </label>
                        <label>
                            <span>女</span>
                            <input type="radio"
                                   checked={Number(this.state.user.sex) === Number(2)}
                                   value={2}
                                   onChange={(e) => this.userChange(e, 'sex')}
                                   name={'sex'}/>
                        </label>
                    </div>
                </div>
                <div>
                    <label><span>爱好</span></label>
                    <div className={'list'}>
                        {
                            this.state.checkboxData.map((item) => (
                                <label key={item.id} style={{margin: "20px"}}>
                                    {item.name}
                                    <input checked={item.checked}
                                           type="checkbox"
                                           onChange={(e) => this.checkboxToArray(e, item.id)}/>
                                </label>
                            ))
                        }
                    </div>
                </div>
                <button onClick={this.add.bind(this)}>提交</button>
            </div>
        )
    }
}