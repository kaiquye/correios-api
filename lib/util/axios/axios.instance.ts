import axios, {RawAxiosRequestHeaders} from "axios";


export class AxiosInstance {
    private readonly baseUrl: string;
    private readonly axiosInstance;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
        this.axiosInstance = axios.create({})
    }

    GET(url: string, query?: any, params?: string | object, headers?: RawAxiosRequestHeaders) {
        return this.axiosInstance({
            method: 'GET',
            params,
            headers,
            url: `${this.baseUrl}${url}${new URLSearchParams(query).toString()}`
        })
    }
}