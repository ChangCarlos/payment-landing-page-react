import { DownloadBtn } from '../Buttons'
import './Feature.css'

const Feature = () => {
    return (
        <div class="app-container">
            <div class="app-info-container">
                <p>START SAVING MONEY</p>
                <h1>Smart Credit Card</h1> 
                <h1>For your Daily Life.</h1>
                <DownloadBtn />
            </div>
            <div class="image-container">
                <img src="public\assets\app-image.png" alt="image of the app" />
            </div>
        </div>
    )
}

export default Feature;