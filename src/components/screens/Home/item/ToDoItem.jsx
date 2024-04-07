import React from "react";
import cn from 'classnames';
import {BsTrash} from 'react-icons/bs';
import { MdEdit } from "react-icons/md";

import Check from "./Check";

const TodoItem = ({todo, changeTodo, removeTodo, startEditing}) => {
    return (
        <div className='flex items-center justify-between mb-4 rounded-2xl bg-zinc-800 p-5 w-full'>
			<button
				className='flex items-center'
				onClick={() => changeTodo(todo._id)}
			>
				<Check isCompleted={todo.isCompleted} />
				<span
					className={cn({
						'line-through': todo.isCompleted,
					})}
				>
					{todo.title}
				</span>
			</button>
			<div className='flex space-x-2'>
				
			<button onClick={() => removeTodo(todo._id)}>
				<BsTrash
					size={22}
					className='text-gray-600 hover:text-red-700 transition-colors ease-in-out duration-300'
				/>
			</button>
			<button onClick={() => startEditing(todo._id)}>
				<MdEdit
					size={22}
					className='text-gray-600 hover:text-red-700 transition-colors ease-in-out duration-300'
				/>
			</button>
			</div>
		</div>
    )
}

export default TodoItem