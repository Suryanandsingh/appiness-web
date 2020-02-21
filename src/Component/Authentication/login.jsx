import PropsType from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { login } from '../../Redux/action/authentication';
import '../../Styles/styles.css';

class Login extends Component{
    constructor(){
        super()
        this.state = {
            username:'',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.onPress = this.onPress.bind(this);
    }
    componentDidMount(){
        document.title = 'Login | Appiness'
    }
    title(){
        return(
            <h1>Continue to login</h1>
        )
    }
    handleChange(e){
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
    async onPress(e){
        e.preventDefault();
        const { username, password } = this.state;
        await this.props.login(username, password, this.props.history);
    }
    _renderContainer(){
        const { username, password } = this.state;
        return(
            <form onSubmit={this.onPress}>
                <div>
                    <input
                        required
                        placeholder={'username or email'}
                        type={'email'}
                        name={"username"}
                        onChange={this.handleChange}
                        value={username}
                    />
                </div>
                <div>
                    <input
                        required
                        placeholder={'password'}
                        type={'password'}
                        name={"password"}
                        onChange={this.handleChange}
                        value={password}
                    />
                </div>
                <button>
                    Login
                </button>
            </form>
        )
        
    }
    render(){
        if(localStorage.getItem('ISAUTH')){
            this.props.history.push('/')
        }
        return(
           <div className="login-container">
               {this.title()}
               {this._renderContainer()}
           </div> 
        )
    }
}

Login.propsType = {
    username: PropsType.string,
    password: PropsType.string,
    Auth: PropsType.object.isRequired
}
const mapStateToProps = (state) => {
    return{
        isAuthenticated: state.Auth.isAuthenticated,
        userDatails: state.Auth.userDatails
    }
}

export default withRouter(connect(mapStateToProps, {
    login
})(Login));