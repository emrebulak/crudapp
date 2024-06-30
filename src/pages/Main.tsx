import { IoIosAdd } from "react-icons/io";
import Item from "../components/Item";
import { useEffect } from "react";
import { createTodo, getTodos } from "../store/actions/todoAction";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import Loader from "../components/Loader";
import Error from "../components/Error";
import { useFormik } from 'formik';
import schema from "../constant/schema";
import { TodoType } from "../model/todoType";
import { v4 } from "uuid";


const Main = () => {
    const { isLoading, data, error } = useAppSelector(state => state.todoSlices)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getTodos())
    }, [])

    const formik = useFormik({
        initialValues: {
            todo: ''
        },
        validationSchema: schema,
        onSubmit: values => {
            let data: TodoType = {
                id: v4(),
                title: values.todo,
                completed: false
            }

            dispatch(createTodo(data))
            formik.resetForm()
        },
    });

    if (isLoading) {
        return <Loader />
    }

    if (error) {
        return <Error error={error} />
    }

    return (
        <section className="py-6 px-8">
            <form onSubmit={formik.handleSubmit} className="flex flex-col gap-2 justify-center items-center m-2">
                <div className="flex gap-4 justify-center items-center w-full">
                    <input name="todo" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.todo} className="w-1/3 py-2 px-4 rounded-md text-black border-none outline-none focus:shadow-sm focus:shadow-white " type="text" placeholder="Ne yapmak istersin" />
                    <button title="Ekle" disabled={formik.touched['todo'] && formik.errors['todo'] ? true : false} type="submit" className="py-2 px-4 rounded-md text-black font-semibold bg-blue-300 transition hover:bg-blue-200 disabled:bg-blue-800"><IoIosAdd className="size-6" /></button>
                </div>
                <h6 className="text-red-400 mt-1">
                    {formik.touched['todo'] && formik.errors['todo'] && formik.errors['todo']} &nbsp;
                </h6>

            </form>

            <div className="flex gap-4 justify-center items-center flex-col">
                {
                    data.map((item) => (
                        <Item data={item} key={item.id} />
                    ))
                }
            </div>
        </section>
    )
}

export default Main