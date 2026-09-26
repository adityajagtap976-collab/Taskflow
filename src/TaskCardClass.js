import React from "react";

class TaskCardclass extends React.Component {
  render() {
    const { title, isUrgent, isDone } = this.props;
    return (
      <div className="task-card">
        <h3>{title}</h3>
        {isUrgent && <span>🔥 Urgent</span>}
        <p>Status: {isDone ? "Done" : "Pending"}</p>
      </div>
    );
  }
}

export default TaskCardclass;
