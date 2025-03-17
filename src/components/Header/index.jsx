import { LoginBtn, SignupBtn } from '../Buttons';
import './Header.css'

const options = [
    'Features',
    'Pricing',
    'Help',
    'Blog',
    'About Us'
]

const Header = () => {
    const showOptions = options.map(option =>
        <a href='#'>{option}</a>
    )
    return (
        <header>
            <div class="navbar">
                <img src="\src\assets\logo.png" alt="" class="logo" />
                    <div class="nav-links">
                        {showOptions}
                    </div>
                    <div class="nav-btn">
                        <LoginBtn />
                        <SignupBtn />
                    </div>
            </div>
        </header>
    )
}

export default Header;