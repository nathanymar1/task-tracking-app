export function Task({ task }) {
  return (
    <div>
      <h1>{task.name}</h1>
      <p>{task.description}</p>
    </div>
  );
}
