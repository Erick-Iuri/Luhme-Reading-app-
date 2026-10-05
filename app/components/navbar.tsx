"use client";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-center mt-15 relative">
      {/* Menu lateral */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer
      rounded-full border-2 border-white p-3
      absolute top-5 left-15"
      >
        <Image
          src="/icons/config.svg"
          alt="botão de config"
          width={80}
          height={80}
          className="w-5"
        />
      </div>
      <div>
        {/* Menu simples */}
        {isOpen && (
          <div
            className="absolute top-20 left-20 z-1 font-mono
          w-85 bg-[#153241] text-white p-6 rounded-2xl border border-[#153241] shadow-2xl space-y-5"
          >
            {/* Cabeçalho */}
            <div className="flex justify-between items-center">
              <h2 className="text-lg text-white">Configurações</h2>
              <button className="text-white hover:text-[#60635D] text-xl">
                ✕
              </button>
            </div>

            {/* Som de Chuva */}
            <div className="space-y-2">
              <label className="text-md text-[#9DA49A] font-medium block">
                Ativar som de chuva
              </label>
              <div className="flex items-center gap-3">
                <button className="text-white text-md">▶</button>
                <input
                  type="range"
                  className="w-full h-1 bg-[#3A453F] accent-white rounded-lg cursor-pointer"
                />
              </div>
            </div>

            {/* Duração do Foco */}
            <div className="space-y-3">
              <label className="text-md text-[#9DA49A] block">
                Duração do foco.
              </label>
              <div className="flex justify-between items-center">
                <button className="w-9 h-9 rounded-full bg-white text-[#1A231E] font-medium text-sm flex items-center justify-center">
                  5
                </button>
                <button className="w-9 h-9 rounded-full border border-white text-white font-medium text-sm flex items-center justify-center">
                  10
                </button>
                <button className="w-9 h-9 rounded-full border border-white text-white font-medium text-sm flex items-center justify-center">
                  15
                </button>
                <button className="w-9 h-9 rounded-full border border-white text-white font-medium text-sm flex items-center justify-center">
                  20
                </button>
                <button className="w-9 h-9 rounded-full border border-white text-white font-medium text-sm flex items-center justify-center">
                  25
                </button>
                <button className="w-9 h-9 rounded-full border border-white text-white font-medium text-sm flex items-center justify-center">
                  30
                </button>
              </div>
            </div>

            {/* Pausa para Descanso */}
            <div className="space-y-3">
              <label className="text-md text-[#9DA49A] block">
                Pausa para descanso!
              </label>
              <div className="flex justify-start gap-3 items-center">
                <button className="w-9 h-9 rounded-full bg-white text-[#1A231E] font-medium text-sm flex items-center justify-center">
                  1
                </button>
                <button className="w-9 h-9 rounded-full border border-white text-white font-medium text-sm flex items-center justify-center">
                  3
                </button>
                <button className="w-9 h-9 rounded-full border border-white text-white font-medium text-sm flex items-center justify-center">
                  5
                </button>
                <button className="w-9 h-9 rounded-full border border-white text-white font-medium text-sm flex items-center justify-center">
                  25
                </button>
                <button className="w-9 h-9 rounded-full border border-white text-white font-medium text-sm flex items-center justify-center">
                  30
                </button>
              </div>
            </div>

            {/* Botões de Ação */}
            <div className="flex justify-end gap-3 pt-2">
              <button className="px-5 py-2 bg-white text-[#031D2E] text-sm font-semibold rounded-full hover:bg-gray-200">
                Limpar
              </button>
              <button className="px-5 py-2 bg-[#F08F3C] text-white text-sm font-semibold rounded-full hover:bg-[#FFBE47]">
                Aplicar
              </button>
            </div>
          </div>
        )}
      </div>
      {/* Titulo da página */}
      <div className="flex justify-center items-center text-white flex-col gap-1">
        <h1 className="font-itim text-4xl">Luhme.</h1>
        <h2 className="font-italianno text-3xl">focus on your story</h2>
      </div>
    </div>
  );
}
