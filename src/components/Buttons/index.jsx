import { DownloadButton, NavButton } from "./Buttons"


export const LoginBtn = () => {
    return (
        <NavButton>
            Log In
        </NavButton>
    )
}

export const SignupBtn = () => {
    return (
        <NavButton>
            Sign Up
        </NavButton>
    )
}

export const DownloadBtn = () => {
    return (
        <DownloadButton>
            Download
            <img src="public\assets\download.png" alt="download button" />
        </DownloadButton>
    )
}