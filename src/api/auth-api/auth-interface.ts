export type signupState = {
    name: string;
    email: string;
    password: string;
};

export type loginState = {
    email: string;
    password: string;
};

export type currentUser = {
    id: string;
    name: string;
    email: string;
};