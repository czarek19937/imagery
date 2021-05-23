// TODO fix types
export const PhotosError = (errors: any) => (
    <div>
        <div>{errors[0]}</div>
        <div>PS: Make sure to set your access token!</div>
    </div>
)