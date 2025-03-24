import { LoginBtn, SignupBtn } from '../Buttons';
import { Links, NavBar, NavBtnContainer, NavLinks } from './Header';


const options = [{
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
        <Links key={option.id} href='#'>{option.name}</Links>
    )
    return (
        <NavBar>
            <img src="public\assets\logo.png" alt="" class="logo" />
            <NavLinks>
                {showOptions}
            </NavLinks>
            <NavBtnContainer>
                <LoginBtn />
                <SignupBtn />
            </NavBtnContainer>
        </NavBar>
    )
}

export default Header;