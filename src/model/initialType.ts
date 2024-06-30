export type InitialType<T> = {
    isLoading: boolean,
    data: T,
    error: string | null
}; 