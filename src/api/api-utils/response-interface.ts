export interface successInterface<T> {
    state: string,
    data?: T,
    message?: string,
    // statusCode?: undefined,
    // type?: undefined
}

export interface errorInterface {
    state: string,
    statusCode: number,
    message: string,
    type: string,
    // data?: undefined
}

// export interface responseInterface {
//     state: string,
//     statusCode: number,
//     message: string,
//     type: string,
// }

export type responseInterface<T> = successInterface<T> | errorInterface;