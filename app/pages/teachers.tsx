"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Temurbek from "@/app/components/imgs/temurbek.png";
import Nodirbek from "@/app/components/imgs/Nodirbek.png";
import Jaloliddin from "@/app/components/imgs/Jaloliddin.png";
import Hikmatillo from "@/app/components/imgs/Hikmattilo.png";
import Mahmudjon from "@/app/components/imgs/Mahmud.png";
import Abror from "@/app/components/imgs/Abror.png";
import Sevara from "@/app/components/imgs/Sevara.png";
import Xumoyun from "@/app/components/imgs/Xumoyun.png";
import Jonibek from "@/app/components/imgs/Jonibek.png";
import Zuxra from "@/app/components/imgs/Zuxra.png";
import Laylo from "@/app/components/imgs/Laylo.png";
import Nigina from "@/app/components/imgs/Nigina.png";

export default function TeachersCarousel() {
  const teachers = [
    { name: "Temurbek Yorkulov", subject: "Kiberxavfsizlik", img: Temurbek },
    {
      name: "Nodirbek Kuchkarov",
      subject: "AI, Foundation Kids",
      img: Nodirbek,
    },
    {
      name: "Jaloliddin Abdurahmonov",
      subject: "Web Dasturlash",
      img: Jaloliddin,
    },
    { name: "Hikmatillo Bobomurodov", subject: "Matematika", img: Hikmatillo },
    { name: "Mahmudjon Naimjonov", subject: "Foundation", img: Mahmudjon },
    { name: "Abror Narziqulov", subject: "Grafik Dizayn", img: Abror },
    { name: "Sevara Jo'rayeva", subject: "Ingliz Tili", img: Sevara },
    { name: "Xumoyun", subject: "Phython", img: Xumoyun },
    { name: "Jonibek To'rapov", subject: "Web Dasturlash", img: Jonibek },
    { name: "Zuxra", subject: "Rus Tili", img: Zuxra },
    { name: "Laylo", subject: "Call Center", img: Laylo },
    { name: "Nigina", subject: "Call Center", img: Nigina },
  ];

  const [offset, setOffset] = useState(0);
  const cardWidth = 300; // har bir kartaning eni
  const cardMargin = 20; // kartalar orasidagi bo'shliq
  const fullCardWidth = cardWidth + cardMargin; // to'liq karta
  const halfCardWidth = cardWidth / 2 + cardMargin; // yarim karta

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prevOffset) => {
        if (
          prevOffset + fullCardWidth * 2 + halfCardWidth * 2 >=
          fullCardWidth * teachers.length + cardMargin
        ) {
          return 0; // Tugagandan keyin boshidan boshlashni oldini olish
        }
        return prevOffset + fullCardWidth * 2 + halfCardWidth * 2;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [teachers.length]);

  return (
    <div className="w-full max-w-[880px] mx-auto overflow-hidden py-10">
      <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${offset}px)` }}
      >
        {teachers.map((teacher, index) => (
          <div key={index} className="flex-none">
            <div className="bg-white shadow px-4 py-6 rounded-2xl text-center w-[300px] mx-2">
              <Image
                className="rounded-2xl mx-auto"
                src={teacher.img}
                alt={teacher.name}
              />
              <h1 className="font-bold text-xl mt-2">{teacher.name}</h1>
              <h2 className="text-sm">{teacher.subject}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
