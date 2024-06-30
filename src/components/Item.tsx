import { FaRegTrashCan } from "react-icons/fa6";
import { TodoType } from "../model/todoType";
import { useAppDispatch } from "../store/hooks";
import { deleteTodo, updateTodo } from "../store/actions/todoAction";
import Swal from 'sweetalert2';

type ItemProps = {
    data: TodoType;
};

const Item = ({ data }: ItemProps) => {

    const dispatch = useAppDispatch()

    const handleDelete = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.stopPropagation(); 
        Swal.fire({
            title: "Dikkat !",
            text: "Silmek istediğinize emin misiniz?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sil",
            cancelButtonText: "İptal"
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteTodo(data.id))
            }
        });
    }

    const handleClick = () => {
        let tempData:TodoType = {
            ...data,
            completed: !data.completed
        }

        dispatch(updateTodo(tempData))
    }

    return (
        <div onClick={handleClick} className="flex justify-between items-center w-[39%] border border-blue-300 py-6 px-4 rounded-md cursor-pointer transition duration-300 hover:scale-105">
            <h4 className={data.completed ? 'line-through' : ''}>{data.title}</h4>
            <div className="flex gap-2">
                <button onClick={(e)=> handleDelete(e)} className="py-2 px-4 rounded-md text-black font-semibold bg-red-300 transition hover:bg-red-200 "><FaRegTrashCan className="size-5" /></button>
            </div>
        </div>
    )
}

export default Item