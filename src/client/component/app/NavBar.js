import React, {Component} from 'react';
import logo from '../../images/logo.svg';

class NavBar extends Component {

    componentDidMount() {
        window.addEventListener("scroll", () => {
            this.nav.classList.toggle("fix", window.pageYOffset > 70 );
        });
    }

    render() {
        return(<div ref={n => this.nav = n}>
            <div className="NavHeader">
                <div className="headerLogo">
                    <img src={logo} className="App-logo" alt="logo"/>
                </div>
                <div className="fixedHeader">
                    <h2 className="titleText">Welcome to HostMaker</h2>
                </div>
            </div>
        </div>)
    }
}


export default NavBar;