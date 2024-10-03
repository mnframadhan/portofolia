export type ResponseSimple<T> = {

    code: number;
    status: string;
    data: T;

}

export type ResponsePagination<T> = {

    code: number;
    status: string;
    data: Array<T>;
    pagination: {
        page: number;
        total_page: number;
        size: number;
    }
}

export type ErrorResponse<T=null> = {

    code: number;
    status: string;
    message: string;
    data? : T;

}