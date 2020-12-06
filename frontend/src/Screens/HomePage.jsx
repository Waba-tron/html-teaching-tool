import React from 'react';
import './HomePage.styles.scss';
import homecover from '../imgs/home-header.jpg';
import '../design-tokens/_scss-varibles.scss';
import Button from '../components/Buttons/Button.component';
let homeCoverStyle = {
    backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.555),rgba(0, 0, 0, 0.555)),url(${homecover})`
}
const HomePage = ({history}) => {
    return (
        <div>
            <header className="main-header" style={homeCoverStyle}>
                <div className="main-header-content">
                <div className="header-logo">
                    <i class="fab fa-codepen"></i> 
                    </div>
                    <div className="header-text">
                        <h1>Jot</h1>
                        <span>A fun  interactive tool to teach people HTML</span>
                        <Button text={'Tutorials'}></Button>
                    </div>
                 
                </div>
            </header>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde incidunt iusto quasi tempora illum corporis similique consectetur! Sed provident dolorum sunt libero maxime obcaecati. Repudiandae illum quam eos dignissimos saepe!</p>
        </div>
    )
}

export default HomePage;
