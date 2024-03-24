import Header from "../components/header";
import Sidebar from "../components/sideBar";

export default function Home() {
  const sidebarItems = ["Início", "Alunos", "Professores", "Notas"];

  return (
    <div className="flex min-h-screen">
      <Sidebar items={sidebarItems} />

      <main className="flex flex-col bg-white w-full">
        <Header title="Sistema Escolar" />
        <div className="text-center">
          <h1 className="text-white text-2xl">Hello World</h1>
        </div>
      </main>
    </div>
  );
}
