export type ResponseSimple<T> = {

    code: number;
    status: string;
    data: Array<T>;

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

export type ResponseError<T= null> = {

    code: number;
    status: number;
    message: string;
    data? : Array<T>;

}