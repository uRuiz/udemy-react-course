import React, { Component} from 'react';


// Class Component
class LoginButon extends Component {

    onLoginHandler = (e) => {
        e.preventDefault();
        this.props.login();
    }

    render() {
        return <button onClick={this.onLoginHandler}>Iniciar Sesión</button>
    }
}



// Functional Component
const LogoutButton = (props) => {

    const onLogoutHandler = (e) => {
        e.preventDefault();
        props.changeHandler();
    } 

    return (
        <div>
            <p>Bienvenido, {props.user}</p>
            <button onClick={onLogoutHandler}>Log out</button>
        </div>
    )

}



export default class ConditionalSection extends Component {

    state = {
        isUserLogged: true
    }    

    onClickHandler = () => {
        (this.state.isUserLogged === true) 
        ? this.setState({ isUserLogged : false })
        : this.setState({ isUserLogged : true })
    }


    render() {
        return (
            <div>
                <h1>Conditional Rendering</h1>
                {this.state.isUserLogged
                    ? <LogoutButton user="Urko" changeHandler={this.onClickHandler}/>
                    : <LoginButon login={this.onClickHandler}/>
                }
            </div>
        )
    }
}