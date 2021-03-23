interface IResponse<T> {
    count: int,
    next?: string,
    previous?: string,
    results: T[],
}

export {
    IResponse
}