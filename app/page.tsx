"use client";
import Button from "@/components/ui/Button";
import useCurrentUser from "@/store/use-current-user";

export default function Home() {
  const currentUser = useCurrentUser((state) => state);
  return (
    <section className="min-h-screen grid place-items-center">
      <h1 className="text-4xl font-bold">
        {currentUser.currentUser?.role.toUpperCase()}
      </h1>
      <div className="w-fit">
        <Button
          className="px-4"
          onClick={() => currentUser?.clearCurrentUser()}
        >
          Logout
        </Button>
      </div>
    </section>
  );
}
