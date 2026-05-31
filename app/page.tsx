import TodoForm from "@/components/TodoForm";
import TodoDisplay from "@/components/TodoDisplay";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans dark:bg-black">
      <main className="flex flex-1 gap-6 w-full max-w-3xl flex-col items-center py-32 px-16 bg-white dark:bg-black sm:items-start">
        <TodoForm />
        <TodoDisplay />
      </main>
    </div>
  );
}
