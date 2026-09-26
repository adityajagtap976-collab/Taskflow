function TaskCard({ id, title, isUrgent, isDone, onToggleDone, onDelete }) {
  return (
    <div className="task-card">
      <h3>{title}</h3>
      {isUrgent && <span>🔥 Urgent</span>}
      <p>Status: {isDone ? "Done" : "Pending"}</p>
      <button onClick={() => onToggleDone(id)}>
        {isDone ? "Mark Pending" : "Mark Done"}
      </button>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}

export default TaskCard;
