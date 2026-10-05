"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

type Modo = "foco" | "pausa";

export default function Content() {
  const [modo, setModo] = useState<Modo>("foco");
  const [tempoRestante, setTempoRestante] = useState(25 * 60); // em segundos
  const [isRunning, setIsRunning] = useState(false);

  // Guardamos o timestamp final para evitar atrasos no browser
  const endTimeRef = useRef<number | null>(null);

  // Alterna os tempos padrão ao mudar de modo
  const trocarModo = (novoModo: Modo, minutos: number) => {
    setModo(novoModo);
    setIsRunning(false);
    endTimeRef.current = null;
    setTempoRestante(minutos * 60);
  };

  // Iniciar / Pausar
  const toggleTimer = () => {
    if (!isRunning) {
      // Define o momento exato em que vai terminar
      endTimeRef.current = Date.now() + tempoRestante * 1000;
      setIsRunning(true);
    } else {
      setIsRunning(false);
      endTimeRef.current = null;
    }
  };

  // Resetar
  const resetTimer = () => {
    setIsRunning(false);
    endTimeRef.current = null;
    setTempoRestante(modo === "foco" ? 25 * 60 : 5 * 60);
  };

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      if (!endTimeRef.current) return;

      const agora = Date.now();
      const diferenca = Math.max(
        0,
        Math.round((endTimeRef.current - agora) / 1000),
      );

      setTempoRestante(diferenca);

      if (diferenca === 0) {
        setIsRunning(false);
        endTimeRef.current = null;
        // Opcional: tocar som aqui
        alert(modo === "foco" ? "Hora do descanso!" : "Hora de focar!");
      }
    }, 200);

    return () => clearInterval(interval);
  }, [isRunning, modo]);

  // Formatação (MM:SS) e atualização do título da aba
  const minutos = String(Math.floor(tempoRestante / 60)).padStart(2, "0");
  const segundos = String(tempoRestante % 60).padStart(2, "0");
  const tempoFormatado = `${minutos}:${segundos}`;

  useEffect(() => {
    document.title = `${tempoFormatado} - ${modo === "foco" ? "Foco" : "Pausa"}`;
  }, [tempoFormatado, modo]);

  return (
    <div className="flex items-center flex-col h-full gap-4 mt-30">
      {/* Tela */}
      <div
        className="flex justify-center items-center
      bg-[#000000] w-130 h-95 rounded-lg"
      >
        <div className="flex justify-center items-center bg-[#677859] w-125 h-90 rounded-lg relative">
          {/* Relogio do pomodoro */}
          <div className="absolute top-5 text-5xl text-white">
            <p className="font-mono">{tempoFormatado}</p>
          </div>
          {/* Gif */}
          <Image
            src="/gifs/bonfire.gif"
            alt="gif fogueira"
            width={300}
            height={300}
            className="w-125 h-90"
          />
          {/* Seletor de modo */}
          <div className="flex font-mono gap-2 bg-white/10 backdrop-blur-md p-1 rounded-full text-sm absolute bottom-4">
            <button
              onClick={() => trocarModo("foco", 25)}
              className={`cursor-pointer px-4 py-1.5 rounded-full transition-all ${
                modo === "foco"
                  ? "bg-white text-[#1A231E] font-bold"
                  : "text-gray-400"
              }`}
            >
              Foco (25m)
            </button>
            <button
              onClick={() => trocarModo("pausa", 5)}
              className={`cursor-pointer px-4 py-1.5 rounded-full transition-all ${
                modo === "pausa"
                  ? "bg-white text-[#1A231E] font-bold"
                  : "text-gray-400"
              }`}
            >
              Pausa (5m)
            </button>
          </div>
          {/* Som de fogueira */}
          <div
            className="absolute bottom-5 left-5
          cursor-pointer"
          >
            <Image
              src="/icons/som on.svg"
              alt="ligar som"
              width={300}
              height={300}
              className="w-7"
            />
          </div>
        </div>
      </div>
      {/* Botões */}
      <div className="flex justify-center items-center gap-3">
        <div
          onClick={toggleTimer}
          className="
        text-white border-black shadow-lg font-mono relative
          border-3 rounded-lg w-63 h-21 text-lg cursor-pointer

          bg-[radial-gradient(circle_at_50%_50%,#FFC24A_0%,#FFA938_50%,#FF9228_100%)]

          active:bg-[linear-gradient(135deg,#494C4A_0%,#7A7D7A_50%,#494C4A_100%)]

          hover:bg-[radial-gradient(circle_at_50%_50%,#FFC24A_100%,#FFA938_50%,#FF9228_0%)]
          
          transition-all duration-300
          "
        >
          <div className="absolute top-2 left-4">
            {isRunning ? "Pausar" : "Play"}
          </div>
          <Image
            src="icons/play.svg"
            alt="botão de config"
            width={80}
            height={80}
            className="w-3 absolute bottom-3 right-4"
          />
        </div>

        <div
          onClick={resetTimer}
          className="bg-[linear-gradient(135deg,#5A5E5B_0%,#8E928E_50%,#5A5E5B_100%)]
        text-white border-black shadow-lg font-mono relative
          border-3 rounded-lg w-63 h-21 text-lg cursor-pointer
          active:bg-[linear-gradient(135deg,#494C4A_0%,#7A7D7A_50%,#494C4A_100%)]
          hover:bg-[linear-gradient(135deg,#6B6F6C_0%,#9FA39F_50%,#6B6F6C_100%)] transition-all duration-300"
        >
          <div className="absolute top-2 left-4">Reset</div>
          <Image
            src="icons/reset.svg"
            alt="botão de config"
            width={80}
            height={80}
            className="w-4 absolute bottom-3 right-4"
          />
        </div>
      </div>
    </div>
  );
}
