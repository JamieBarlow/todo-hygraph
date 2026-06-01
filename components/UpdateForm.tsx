"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogDescription,
  DialogTitle,
  DialogFooter,
} from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Todo } from "@/lib/types";
import type { CheckedState } from "@radix-ui/react-checkbox";
import DatePicker from "./DatePicker";
import { format } from "date-fns";

interface UpdateFormProps {
  openEdit: boolean;
  setOpenEdit: (open: boolean) => void;
  title: string;
  setTitle: (title: string) => void;
  description: string;
  setDescription: (description: string) => void;
  todo: Todo;
  checked: CheckedState;
}

export default function UpdateForm({
  openEdit,
  setOpenEdit,
  title,
  setTitle,
  description,
  setDescription,
  todo,
  checked,
}: UpdateFormProps) {
  const [dueDate, setDueDate] = useState<Date | undefined>(
    todo.dueDate ? new Date(todo.dueDate) : undefined,
  );

  const handleUpdate = async (e: React.SubmitEvent) => {
    e.preventDefault();
    await fetch(`/api/todos/${todo.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        description,
        dueDate: dueDate ? format(dueDate, "yyyy-MM-dd") : null,
        completed: checked,
      }),
    });
    setOpenEdit(false);
  };

  const handleCancel = () => {
    setTitle(todo.title);
    setDescription(todo.description);
    setOpenEdit(false);
  };

  return (
    <Dialog open={openEdit} onOpenChange={setOpenEdit}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Todo</DialogTitle>
          <DialogDescription>
            Update the fields below and click Save.
          </DialogDescription>
        </DialogHeader>
        <form id="edit-todo-form" onSubmit={handleUpdate} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Input
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <DatePicker dueDate={dueDate} setDueDate={setDueDate} />
          </div>
          <DialogFooter>
            <Button variant="secondary" onClick={() => handleCancel()}>
              Cancel
            </Button>
            <Button form="edit-todo-form" onClick={() => setOpenEdit(false)}>
              Save
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
