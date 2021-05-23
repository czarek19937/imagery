/// <reference types="react-scripts" />
declare module 'unsplash-react' {
    export class UnsplashReact extends React.Component<BarChartProps & any, any> {

    }

    interface Base64Uploader {}
    interface withDefaultProps {}
}

declare namespace NodeJS {
    interface ProcessEnv {
        NODE_ENV: 'development' | 'production' | 'test'
        PUBLIC_URL: string
        REACT_APP_UNSPLASH_ACCESS_KEY: string
    }
}

