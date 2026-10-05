import Navbar from "./components/navbar";
import Content from "./components/content";

export default function Home() {
  return (
    <div className="w-full max-w-360 mx-auto 
    h-screen overflow-hidden">
      {/* Barra de navegação */}
      <Navbar />
      {/* Conteúdo da página */}
      <Content />
    </div>
  );
}
