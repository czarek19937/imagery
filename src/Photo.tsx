import {Basic} from "unsplash-js/dist/methods/photos/types";
import {useViewport} from "./hooks/useViewport";
import {LAPTOP_RESOLUTION} from "./utils/constants";
import {DesktopLayout} from "./modules/layout/DesktopLayout";
import {MobileLayout} from "./modules/layout/MobileLayout";

export const Photo = ({ photo} : { photo: Basic}) => {
    const { width } = useViewport()
    const { user: {username, name}, urls: {regular: photoUrl}, created_at } = photo;
    const createdFormattedDate = new Intl.DateTimeFormat('en-US').format(new Date(created_at))
    return width > LAPTOP_RESOLUTION ?
        <DesktopLayout photoUrl={photoUrl} username={username} name={name} createdFormattedDate={createdFormattedDate} />
        : <MobileLayout photoUrl={photoUrl} username={username} name={name} createdFormattedDate={createdFormattedDate} />
}