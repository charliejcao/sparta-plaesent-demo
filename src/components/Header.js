import React from 'react';
import { slide as Menu } from 'react-burger-menu';

export class Header extends React.Component {
    render() {
        return (
            <header>
                <nav>
                    <a href="/">
                        <div className="nav-logo" />
                    </a>
                    <div className="nav-items">
                        <div>212.555.5555</div>
                        <div>LOGIN</div>
                        <Menu right>
                            <a id="home" href="/">Home</a>
                            <a id="about" href="/">About</a>
                            <a id="contact" href="/">Contact</a>
                        </Menu>
                    </div>
                </nav>
            </header>
        );
    }
}
