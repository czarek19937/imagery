import {DesktopLayoutContainer} from '../../components/Layout'
import {
    ImageContent,
    ImageContentContainer,
    ImageLink,
    ImageSubtitle,
    ImageSubtitleDataContent,
    ImageSubtitleExtraContent,
    ImageTitle
} from "../../components/Image";

interface IDesktopLayout {
    photoUrl: string;
    username: string;
    name: string;
    createdFormattedDate: string;
}

export const DesktopLayout = ({ photoUrl, username, name, createdFormattedDate}: IDesktopLayout) => {
    return (
        <DesktopLayoutContainer photoUrl={photoUrl}>
            <ImageContentContainer>
                <ImageContent>
                    <ImageTitle>Description</ImageTitle>
                    <ImageSubtitle>
                        <ImageSubtitleExtraContent>
                            by
                        </ImageSubtitleExtraContent>
                        <ImageSubtitleDataContent>
                            <ImageLink href={`https://unsplash.com/${username}`}>{name}</ImageLink>
                        </ImageSubtitleDataContent>
                        <ImageSubtitleExtraContent>
                            on
                        </ImageSubtitleExtraContent>
                        <ImageSubtitleDataContent>
                            {createdFormattedDate}
                        </ImageSubtitleDataContent>
                    </ImageSubtitle>
                </ImageContent>
            </ImageContentContainer>
        </DesktopLayoutContainer>
    );
};