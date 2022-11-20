import NavItem from "./NavItem";
import { useState } from 'react';

type NavBarProps = {
    links: {
        text: string,
        href: string,
    }[]
}

export default function NavBar(props: NavBarProps) {
    const [isNavVisible, setIsNavVisible] = useState<boolean>(false);

    return(
        <header className='header'>
            <span>Sky Education</span>
            <div
                onClick={() => {
                    console.log('clicking the open button')
                    setIsNavVisible(true);
                }}
                className='open_primary_nav_button'
            >
                <div style={{background: 'white', width: '100%', height: '0.25rem'}}></div>
                <div style={{background: 'white', width: '100%', height: '0.25rem'}}></div>
                <div style={{background: 'white', width: '100%', height: '0.25rem'}}></div>
            </div>
            <nav className={`primary_nav ${isNavVisible ? "active" : ""}`}>
                {props.links.map((link, index) => (
                    <NavItem 
                        key={index} 
                        text={link.text} 
                        href={link.href}
                    ></NavItem>
                ))}
                <div 
                    onClick={() => {
                        console.log('clicking the close button')
                        setIsNavVisible(false);
                    }}
                    className='hide_primary_nav_button'
                >
                    X
                </div>
            </nav>
        </header>
    )
}