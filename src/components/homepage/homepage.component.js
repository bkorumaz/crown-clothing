import React from 'react';
import './homepage.styles.scss'

function HomePage () {
    return(
        <div className="homepage">
            <div className="directory-menu">
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">SHOES</h1>
                        <span>SHOP NOW</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">HATS</h1>
                        <span>SHOP NOW</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">JACKETS</h1>
                        <span>SHOP NOW</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">BAGS</h1>
                        <span>SHOP NOW</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;