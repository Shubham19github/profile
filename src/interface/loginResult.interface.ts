export interface ILoginResult {
    success?: boolean,
    User?: {
        email? : string,
        password?: string,
        profileUploaded?: string,
        userName?: string
    }
}