export interface ApiResponse<T> {
    data: T;
    status: number;
    statusText: string;
}


export interface RegisterInstitutionBody {
    id: number;
    name: string;
    email: string;
    publicAddress: string;
    password: string;
    latitude: string;
    longitude: string;
}


export interface RegisterInstitutionResponse {
    id: number;
    name: string;
    email: string;
    token: null | string;
    createdAt: string;
    updatedAt?: string;
}

export interface LoginInstitutionResponse {
    id: number;
    name: string;
    email: string;
    publicAddress: string;
    token: string;
    type: string;
    createdAt: string;
    updatedAt: string;
}

export interface LoginInstitutionBody {
    email: string,
    password: string,
    type: string
}

