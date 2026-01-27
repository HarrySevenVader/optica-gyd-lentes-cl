export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-neutral-950">
      <div className="flex flex-col items-center gap-6 animate-fade-in">
        <div className="h-16 w-16 rounded-full border-4 border-neutral-700 border-t-white animate-spin" />

        <h1 className="text-xl font-medium text-neutral-200 tracking-wide">
          Proyecto en desarrollo
        </h1>

        <p className="text-sm text-neutral-400">
          Optica GYD
        </p>
      </div>
    </main>
  );
}

