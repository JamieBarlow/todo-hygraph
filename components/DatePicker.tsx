import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { format } from "date-fns";

interface DatePickerProps {
  dueDate: Date | undefined;
  setDueDate: (date: Date | undefined) => void;
}

export default function DatePicker({ dueDate, setDueDate }: DatePickerProps) {
  return (
    <>
      <Label>Due Date</Label>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              "w-full justify-start text-left font-normal",
              !dueDate && "text-muted-foreground",
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {dueDate ? format(dueDate, "PPP") : "Pick a date (optional)"}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar mode="single" selected={dueDate} onSelect={setDueDate} />
        </PopoverContent>
      </Popover>
    </>
  );
}
