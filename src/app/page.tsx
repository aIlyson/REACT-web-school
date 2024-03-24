import Header from "../components/header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header title="Início" />
      <h1 className="text-2xl text-white">hello world</h1>
    </main>
  );
}
