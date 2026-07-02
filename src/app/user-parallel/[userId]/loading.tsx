export default function LoadingPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950">
      <div
        className="h-16 w-16 animate-spin rounded-full border-4 border-slate-300 border-t-sky-500"
        aria-label="Loading"
      />
    </div>
  );
}
