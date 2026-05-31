"use client";

import { useState } from "react";
import type { CheckedState } from "@radix-ui/react-checkbox";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { Checkbox } from "@/components/ui/checkbox";
import { Todo } from "@/lib/types";

export default function TodoItem(todo: Todo) {
  const [checked, setChecked] = useState<CheckedState>(todo.completed);
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
    </Item>
  );
}
