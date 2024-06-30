import { useAppSelector } from "../store/hooks"

const Header = () => {

    const { data } = useAppSelector(state => state.todoSlices)

    return (
        <header className="flex items-center justify-between py-5 px-8">
            <h1 className="font-bold text-xl">Logo</h1>

            <div>
                <h2>Görev Sayısı : {data.length}</h2>
            </div>
        </header>
    )
}

export default Header