type ErrorProps = {
    error: string
}

const Error = ({ error }: ErrorProps) => {
    return (
        <div className="w-full h-screen absolute top-0 flex justify-center items-center bg-black bg-opacity-30">
            <div className="flex flex-col gap-4 justify-center items-center border p-9 rounded-lg animate-pulse">
                <h1 className="text-white text-2xl font-semibold">Bir hata oluştu</h1>
                <p className="text-red-400 text-lg font-semibold">{error}</p>
            </div>
        </div>
    )
}

export default Error