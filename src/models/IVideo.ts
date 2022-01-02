export interface IServerResponse {
    videos: IVideo[]
}

export interface IVideo {
        id: string,
        title: string,
        keywords: string,
        url: string,
        default_thumb: {
            size: string,
            width: number,
            height: number,
            src: string
        }
}