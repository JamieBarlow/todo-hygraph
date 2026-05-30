import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const ToDoForm = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Create Todo items</CardTitle>
        <CardDescription>Type below to add items</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="todo">Todo</Label>
              <div className="flex gap-2">
                <Input
                  id="todo"
                  type="text"
                  placeholder="Enter item"
                  required
                />
                <Button type="submit" className="">
                  Add Item
                </Button>
              </div>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default ToDoForm;
