import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogClose } from "@radix-ui/react-dialog";
import { useState } from "react";

export default function TodoModal({ todo, onSave }) {
  const [title, setTitle] = useState(todo?.title || "");

  const handleSave = () => {
    onSave(title);
  };

  return (
    <Dialog open={!!todo}>
      <DialogContent className="bg-white p-6 rounded-lg shadow-lg w-96">
        <DialogTitle>Edit Todo</DialogTitle>
        <input
          type="text"
          className="border p-2 mt-4 w-full rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="flex justify-end mt-4 gap-2">
          <button
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
            onClick={handleSave}
          >
            Save
          </button>
          <DialogClose className="px-4 py-2 bg-red-200 rounded hover:bg-red-300">Cancel</DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}
