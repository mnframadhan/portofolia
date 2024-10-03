export type UserRegisterRequest = {

    username: string;
    email: string;
    password: string;
    full_name: string;
    nick_name: string;

}

export type UserResponse = {

    id: string;
    username: string;
    email: string;
    full_name: string;
    nick_name: string;
    created_at: string;

}

export type UserRegisterResponse = {

    username: string;
    email: string;
    full_name: string;
    nick_name: string;

}


export type UserLoginRequest = {

    email?: string;
    username?: string;
    password: string;

}

export type UserLoginResponse = {

    email: string;
    username: string;
    token: string;
    
}