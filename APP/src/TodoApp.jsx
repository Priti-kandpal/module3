function TodoApp() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (!todo) return;
    setTodos([...todos, { text: todo, completed: false }]);
    setTodo("");
  };

  const toggleTodo = (index) => {
    const updated = [...todos];
    updated[index].completed = !updated[index].completed;
    setTodos(updated);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Todo List</CardTitle>
      </CardHeader>

      <CardContent className="space-y-3">
        <div className="flex gap-2">
          <Input
            placeholder="Add todo"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <Button onClick={addTodo}>Add</Button>
        </div>

        {todos.map((t, i) => (
          <div key={i} className="flex gap-2 items-center">
            <Checkbox
              checked={t.completed}
              onCheckedChange={() => toggleTodo(i)}
            />
            <span className={t.completed ? "line-through" : ""}>
              {t.text}
            </span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
