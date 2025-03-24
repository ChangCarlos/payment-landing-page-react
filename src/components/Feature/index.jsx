import { DownloadBtn } from '../Buttons'
import { AppContainer, AppInfo, AppInfoContainer, AppInfoTitle } from './Feature'


const Feature = () => {
    return (
        <AppContainer>
            <AppInfoContainer>
                <AppInfo>
                    START SAVING MONEY
                </AppInfo>
                <AppInfoTitle>
                    Smart Credit Card
                </AppInfoTitle>
                <AppInfoTitle>
                    For your Daily Life.
                </AppInfoTitle>
                <DownloadBtn />
            </AppInfoContainer>
            <div class="image-container">
                <img src="public\assets\app-image.png" alt="image of the app" />
            </div>
        </AppContainer>
    )
}

export default Feature;