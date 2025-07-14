function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 p-2 rounded">
      <span
        onClick={onToggle}
        className={`flex-1 cursor-pointer ${task.completed ? 'line-through text-gray-400' : ''}`}
      >
        {task.text}
      </span>
      <button
        onClick={onDelete}
        className="bg-red-500 text-white px-2 py-1 rounded ml-4"
      >
        Delete
      </button>
    </li>
  );
}

export default TaskItem;
