import { AxiosInstance } from "axios";

export interface ApiResponse<T> {
    data: T;
    status: number;
    statusText: string;
}

export interface ZoomTokenResponse {
    access_token: string;
    token_type: string;
    expires_in: number;
}
