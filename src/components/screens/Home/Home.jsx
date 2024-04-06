import React, {useState} from "react";
import TodoItem from "./item/ToDoItem";
import CreateTodoField from "./create-todo-task/CreateTodoTask";

const data = [
    {
        _id: 'dasfsd',
        title: 'Create smth',
        isCompleted: false,
    },
    {
        _id: 'dasfsdsdf',
        title: 'Create task',
        isCompleted: false,
    },
    {
        _id: 'dasfsd23d',
        title: 'Create site',
        isCompleted: false,
    },
]

const Home = () => {
    const [todos, setTodos] = useState(data)

    const changeTodo = id => {
        const copy = [...todos]
        const current = copy.find(t=> t._id === id)
        current.isCompleted = !current.isCompleted
        setTodos(copy)
    }

    const removeTodo = id => setTodos([...todos].filter(t => t._id !== id))

    return (
        <div className='text-white w-4/5 mx-auto'>
            <h1 className='text-2xl font-bold text-center mb-10'>Todo list</h1>
            {
                todos.map(todo => (
                    <TodoItem
                    key={todo.key}
                    todo={todo}
                    changeTodo={changeTodo}
                    removeTodo={removeTodo}
                    />
                ))
            }
            <CreateTodoField setTodos={setTodos} />
        </div>
    )
}

export default Home