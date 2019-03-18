import React from 'react';
import banner from '../images/banner.png'

export class Banner extends React.Component {
    render() {
        return (
            <div>
                <img src={banner} alt="banner" />
            </div>
        );
    }
}