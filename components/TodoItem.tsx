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
        <ItemTitle>{todo.title}</ItemTitle>
        <ItemDescription>{todo.description}</ItemDescription>
        <ItemDescription>Due: {todo.dueDate}</ItemDescription>
      </ItemContent>
      <ItemActions>
        <Checkbox checked={checked} onCheckedChange={setChecked} />
      </ItemActions>
      <ItemFooter>
        <Button variant="secondary" onClick={() => setOpenEdit(true)}>
          Edit
        </Button>
      </ItemFooter>

      <UpdateForm {...updateFormProps} />
    </Item>
  );
}
