import { LoginBtn, SignupBtn } from '../Buttons';
import './Header.css'

const options = [ {
    id: 0,
    name: 'Features'
},
{
    id: 1,
    name: 'Pricing'
},
{
    id: 2,
    name: 'Help'
},
{
    id: 3,
    name: 'Blog'
},
{
    id: 4,
    name: 'About Us'
}
]

const Header = () => {
    const showOptions = options.map(option =>
        <a key={option.id} href='#'>{option.name}</a>
    )
    return (
        <header>
            <div class="navbar">
                <img src="public\assets\logo.png" alt="" class="logo" />
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