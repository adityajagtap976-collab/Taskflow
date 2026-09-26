export function fetchTasks() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, title: "Finish report", isUrgent: true, isDone: false },
        { id: 2, title: "Buy groceries", isUrgent: false, isDone: true },
      ]);
    }, 1000);
  });
}
