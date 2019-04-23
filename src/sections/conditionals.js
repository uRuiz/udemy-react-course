import React, { Component} from 'react';

class LoginButon extends Component {

    onClickHandler = () => {
        this.props.change();
    }


    render() {
        return <button onClick={this.onClickHandler}>Iniciar Sesión</button>
    }
}

class LogoutButton extends Component {

    onClickHandler = () => {
        this.props.change();
    }

    render() {
        return <div>
            <p>Bienvenido, {this.props.user}</p>
            <button onClick={this.onClickHandler}>Log out</button>
        </div>
    }
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
                    ? <LogoutButton user="Urko" change={this.onClickHandler}/>
                    : <LoginButon change={this.onClickHandler}/>
                }
            </div>
        )
    }
}