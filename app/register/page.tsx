import RegisterForm from "@/components/RegisterForm";

export default function Register() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans dark:bg-black">
      <main className="flex flex-1 gap-6 w-full max-w-3xl flex-col items-center py-32 px-16 bg-white dark:bg-black">
        <RegisterForm></RegisterForm>
      </main>
    </div>
  );
}
