interface IResponse<T> {
    count: int,
    next: string | null,
    previous: string | null,
    results: T[],
}

export {
    IResponse
}