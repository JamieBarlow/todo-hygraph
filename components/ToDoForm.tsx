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
import { format } from "date-fns";
import DatePicker from "./DatePicker";
import { useRouter } from "next/navigation";

import { useSession } from "next-auth/react";

const TodoForm = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState<Date | undefined>(undefined);

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();
    const response = await fetch("/api/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        description,
        dueDate: dueDate ? format(dueDate, "yyyy-MM-dd") : null,
        userId: session?.user.id,
      }),
    });
    if (response.ok) {
      setTitle("");
      setTimeout(() => router.refresh(), 500);
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Create Todo item</CardTitle>
        <CardDescription>Type below to add items</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              placeholder="Enter title"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Input
              id="description"
              placeholder="Enter description (optional)"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <DatePicker dueDate={dueDate} setDueDate={setDueDate} />
          </div>

          <Button type="submit" className="w-full sm:w-auto">
            Add Item
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default TodoForm;
