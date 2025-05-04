import React, { useState } from "react";
import Image from "next/image";
import Logo from "@/app/components/imgs/logo.png";

function contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault(); // Formani qayta yuklanishdan to'xtatadi
    // Yuborish logikasi
    console.log("Ism:", name);
    console.log("Telefon raqam:", phone);

    // Inputlarni tozalash
    setName("");
    setPhone("");

    // Saytni yangilash
    window.location.reload(); // Sahifani yangilash
  };

  return (
    <div
      id="contact"
      className="bg-red-600 flex items-center justify-between pt-32 mt-28 pb-20 px-44 max-md:px-5 max-md:pr-5"
    >
      <h1
        data-aos="zoom-in"
        data-aos-duration="1000"
        className="text-4xl font-bold text-white max-md:hidden"
      >
        Kurslar haqida to'liq ma'lumotga <br />
        ega bo'lishni istasangiz <br />
        formani to'ldiring
      </h1>
      <div
        data-aos="zoom-in"
        data-aos-duration="1000"
        className="bg-white rounded-2xl px-4 py-5 w-96 max-md:w-[361px]"
      >
        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="flex items-center gap-2 ml-5"
        >
          <Image className="w-12 h-12" src={Logo} alt="" />
          <h1 className="font-bold text-2xl">IT HOUSE</h1>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <input
              className="border-b-2 border-b-black mt-12 outline-none w-full"
              type="text"
              placeholder="Ism"
              value={name}
              onChange={(e) => setName(e.target.value)} // Inputni boshqarish
            />
            <input
              className="border-b-2 border-b-black mt-8 outline-none w-full"
              type="number"
              placeholder="Telefon raqam"
              value={phone}
              onChange={(e) => setPhone(e.target.value)} // Inputni boshqarish
            />
            <button
              type="submit"
              className="bg-gray-400 text-white rounded-lg mt-20 mx-20 mb-12 px-16 py-3"
            >
              Yuborish
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default contact;
