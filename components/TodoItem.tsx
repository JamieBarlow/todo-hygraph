"use client";

import { useState } from "react";
import type { CheckedState } from "@radix-ui/react-checkbox";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
  ItemFooter,
} from "@/components/ui/item";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "./ui/button";
import { Todo } from "@/lib/types";
import UpdateForm from "./UpdateForm";

export default function TodoItem(todo: Todo) {
  const [checked, setChecked] = useState<CheckedState>(todo.completed);
  const [openEdit, setOpenEdit] = useState(false);
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);

  const handleDelete = async () => {
    const response = await fetch(`/api/todos/${todo.id}`, {
      method: "DELETE",
    });
    await response.json();
  };

  const handleToggle = async (value: CheckedState) => {
    setChecked(value);
    await fetch(`/api/todos/${todo.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: todo.title,
        description: todo.description,
        completed: value,
      }),
    });
  };

  const updateFormProps = {
    openEdit,
    setOpenEdit,
    title,
    setTitle,
    description,
    setDescription,
    todo,
    checked,
  };

  return (
    <Item variant="outline">
      <ItemContent>
        <ItemTitle
          className={checked ? "line-through text-muted-foreground" : ""}
        >
          {todo.title}
        </ItemTitle>
        <ItemDescription
          className={checked ? "line-through text-muted-foreground" : ""}
        >
          {todo.description}
        </ItemDescription>
        <ItemDescription
          className={checked ? "line-through text-muted-foreground" : ""}
        >
          Due: {todo.dueDate}
        </ItemDescription>
      </ItemContent>
      <ItemActions>
        <Checkbox checked={checked} onCheckedChange={handleToggle} />
      </ItemActions>
      <ItemFooter>
        <Button variant="secondary" onClick={() => setOpenEdit(true)}>
          Edit
        </Button>
        <Button variant="destructive" onClick={handleDelete}>
          Delete
        </Button>
      </ItemFooter>

      <UpdateForm {...updateFormProps} />
    </Item>
  );
}
