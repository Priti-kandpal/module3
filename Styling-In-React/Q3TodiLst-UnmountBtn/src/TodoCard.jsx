function TodoCard({ userId, title, completed }) {
  return (
    <div
      style={{
        border: "1px solid #e66767ff",
        padding: "15px",
        margin: "10px",
        width: "250px",
        borderRadius: "8px",
        boxShadow: "0 3px 6px rgba(0,0,0,0.1)",
        backgroundColor: completed ? "#799580ff" : "#f79090ff",
      }}
    >
      <h4>User ID: {userId}</h4>
      <p>{title}</p>
      <p>Status: {completed ? "Completed" : "Pending"}</p>
    </div>
  );
}

export default TodoCard;
