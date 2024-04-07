import React, {useState, useEffect} from "react";

const EditTodo = ({setTodos, id, initialTitle, stopEditing}) => {
    const [title, setTitle] = useState(initialTitle);

    useEffect(() => {
        setTitle(initialTitle);
    }, [initialTitle]);

    const editTask = () => {
        setTodos(prev => 
        prev.map(todo => 
        todo._id === id ? {...todo, title: title}: todo))
        setTitle('');
        stopEditing();
    }

    return (
        <div className="flex items-center justify-between mb-4 rounded-2xl border-zinc-800 border-2 px-5 py-3 w-full mt-20">
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && editTask()}
                className="bg-transparent w-full border-none outline-none"
                placeholder="Edit task"
            />
        </div>
    );
}

export default EditTodo