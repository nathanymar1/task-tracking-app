export function TaskContent({
  task,
  isEditing,
  newName,
  setNewName,
  newDescription,
  setNewDescription
}) {
  return (
    <div className="flex flex-col justify-start h-20 gap-1">
      {isEditing ? (
        <input
          className="text-lg font-semibold leading-normal h-6 p-0 focus:outline-none "
          value={newName}
          onChange={(event) => setNewName(event.target.value)}
        />
      ) : (
        <p className="text-lg font-semibold text-left truncate leading-normal h-6">
          {task.name}
        </p>
      )}
      {isEditing ? (
        <textarea
          className="text-left text-gray-600 leading-snug h-10 p-0  resize-none focus:outline-none"
          value={newDescription}
          onChange={(event) => setNewDescription(event.target.value)}
        />
      ) : (
        <p className="text-left text-sm text-gray-600 line-clamp-2 leading-snug h-10">
          {task.description}
        </p>
      )}
    </div>
  );
}
