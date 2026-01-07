function FeedbackForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    feedback: "",
  });
  const [submitted, setSubmitted] = useState(null);

  const handleSubmit = () => {
    setSubmitted(form);
    setForm({ name: "", email: "", feedback: "" });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Feedback Form</CardTitle>
      </CardHeader>

      <CardContent className="space-y-3">
        <Input
          placeholder="Name"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <Input
          placeholder="Email"
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <Textarea
          placeholder="Feedback"
          value={form.feedback}
          onChange={(e) =>
            setForm({ ...form, feedback: e.target.value })
          }
        />

        <Button onClick={handleSubmit}>Submit</Button>

        {submitted && (
          <div className="text-sm">
            <p><b>Name:</b> {submitted.name}</p>
            <p><b>Email:</b> {submitted.email}</p>
            <p><b>Feedback:</b> {submitted.feedback}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
