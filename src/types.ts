export interface ApiResponse<T> {
    data: T;
    status: number;
    statusText: string;
}

export interface User {
    id: number;
    name: string;
    email: string;
}
