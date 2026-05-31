"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const TodoForm = () => {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();
    await fetch("/api/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description: "", dueDate: null }),
    });
    setTitle("");
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Create Todo items</CardTitle>
        <CardDescription>Type below to add items</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="todo">Todo</Label>
              <div className="flex gap-2">
                <Input
                  id="todo"
                  type="text"
                  placeholder="Enter title"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <Button type="submit">Add Item</Button>
              </div>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default TodoForm;
