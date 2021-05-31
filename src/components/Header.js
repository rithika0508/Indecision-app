import React from 'react'

//stateless functional components
const Header = (props) =>(
        <div className="Header">
            <div className="container">
                <h1 className="Header__title">{props.title}</h1>
                <h2 className="Header__subtitle">{props.subtitle}</h2>
            </div>
        </div>
    );

Header.defaultProps = {
    title: "Indecision-App"
}
export default Header;
// class Header extends React.Component{
//     render() {
//         return (

//         );
//     }
// }