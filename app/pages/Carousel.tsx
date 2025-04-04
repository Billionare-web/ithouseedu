"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/app/components/ui/carousel";
import Slider from "react-slick";
import Image from "next/image";
import { useEffect, useState } from "react";
import Front from "@/app/components/imgs/front-3.png";
import Back from "@/app/components/imgs/back-3.png";
import AI from "@/app/components/imgs/ai-3.png";
import Grafik from "@/app/components/imgs/grafik-3.png";
import Phyton from "@/app/components/imgs/phyton.png";
import Kyber from "@/app/components/imgs/cybersecurity-3.png";
import Found from "@/app/components/imgs/Foundation-3.png";
import Ingliz from "@/app/components/imgs/Ingliz.png";
import Rus from "@/app/components/imgs/rus.png";
import Math from "@/app/components/imgs/math.png";
import FoundKids from "@/app/components/imgs/Foundkids.png";
import SMM from "@/app/components/imgs/smm-3.png";
import Inter from "@/app/components/imgs/Interior-design-3.png";
import Choise from "@/app/components/imgs/choice.png";
import Study from "@/app/components/imgs/study.png";
import Certik from "@/app/components/imgs/certik.png";
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
import Counter from "@/app/components/ui/counter";
import { PiCursorFill } from "react-icons/pi";
import TypePerson from "@/app/components/imgs/typeperson.png";
import Cap from "@/app/components/imgs/cap.png";
import Prize from "@/app/components/imgs/prize.png";
import Coins from "@/app/components/imgs/coins.png";
import Tasks from "@/app/components/imgs/task.png";
import Certificate from "@/app/components/imgs/certifikate.png";
import Logo from "@/app/components/imgs/logo.png";

const items = [
  {
    text: "Web Frontend ni o‘rganing va web saytlarning dizaynini kashf qiling!",
    img: Front,
  },
  {
    text: "Web Backend ni o‘rganing va web saytlarning ichki qismlari bilan ishlang!",
    img: Back,
  },
  {
    text: "AI ni o‘rganing va sun'iy intellekt bilan yangi imkoniyatlarni kashf qiling!",
    img: AI,
  },
  {
    text: "Grafik dizaynerlik ni biz bilan o‘rganing va dizayn sohasida yangi ufqlarga yo‘l oching!",
    img: Grafik,
  },
  {
    text: "Kiberxavfsizlik ni o‘rganing va xavfsizlik imkoniyatlarini kashf qiling!",
    img: Kyber,
  },
  {
    text: "Foundation ni o‘rganing va kompyuterning asosini bilib oling!",
    img: Found,
  },
  {
    text: "SMM ni biz bilan o‘rganing va brendingizni rivojlantiring!",
    img: SMM,
  },
  {
    text: "Interyer dizayn ni biz bilan o‘rganing – kelajagingiz uchun qadam bosing!",
    img: Inter,
  },
];

const courses = [
  {
    id: 1,
    name: "Foundation",
    duration: "2 oy",
    image: Found,
    description:
      "Foundation – bu kompyuterdan to‘g‘ri foydalanish, fayllar bilan ishlash, internet xavfsizligi va ofis dasturlaridan foydalanish ko‘nikmalaridir.",
  },
  {
    id: 2,
    name: "Grafik Dizayn",
    duration: "6 oy",
    image: Grafik,
    description:
      "Grafik dizayn – bu tasvir, rang va shriftlar yordamida ma’lumotni estetik va ta’sirli tarzda yetkazish san’ati. U reklama, brending va digital kontent yaratishda muhim rol o‘ynaydi.",
  },
  {
    id: 3,
    name: "Web Frontend",
    duration: "7 oy",
    image: Front,
    description:
      "Web frontend — bu veb-saytning foydalanuvchi ko‘radigan qismidir. Frontend dasturchilar foydalanuvchi interfeysini yaratadi va foydalanuvchi tajribasini ta’minlaydi.",
  },
  {
    id: 4,
    name: "Web Backend",
    duration: "6 oy",
    image: Back,
    description:
      "Web backend — bu server tomonida ishlaydigan qism bo‘lib, ma’lumotlarni saqlash, qayta ishlash va foydalanuvchining so‘rovlariga javob berishni ta’minlaydi.",
  },
  {
    id: 5,
    name: "AI",
    duration: "6 oy",
    image: AI,
    description:
      "Sun’iy intellekt (AI) – bu mashinalarning o‘z-o‘zidan o‘rganishi, tahlil qilishi va aqlli qarorlar qabul qilishi imkonini beruvchi texnologiya. U robototexnika, ma’lumotlar tahlili va avtomatlashtirishda qo‘llaniladi.",
  },
  {
    id: 6,
    name: "Phyton",
    duration: "3 oy",
    image: Phyton,
    description:
      "Python – sodda va kuchli dasturlash tili bo‘lib, veb-ishlanmalar, sun’iy intellekt, ma’lumotlar tahlili va avtomatlashtirishda keng qo‘llaniladi. ",
  },
  {
    id: 7,
    name: "Kiberxavfsizlik",
    duration: "11 oy",
    image: Kyber,
    description:
      "Kiberxavfsizlik – ma’lumotlarni himoya qilish va kiberhujumlarning oldini olishga qaratilgan texnologiyalar va usullar majmuasi.  ",
  },
  {
    id: 8,
    name: "Ingliz tili",
    duration: "8 oy",
    image: Ingliz,
    description:
      "Ingliz tili – xalqaro muloqot, ta’lim va biznes tili bo‘lib, dunyoning ko‘plab mamlakatlarida qo‘llaniladi.",
  },
  {
    id: 9,
    name: "Rus Tili",
    duration: "6 oy",
    image: Rus,
    description:
      "Rus tili – dunyoda keng tarqalgan va MDH davlatlarida asosiy tillardan biri bo‘lib, biznes, ta’lim va madaniyat sohalarida qo‘llaniladi.",
  },
  {
    id: 10,
    name: "Matematika",
    duration: "5 oy",
    image: Math,
    description:
      "Matematika – mantiqiy fikrlash va muammolarni hal qilishga asoslangan fan bo‘lib, hisob-kitob, algebra, geometriya va tahlilni o‘z ichiga oladi.",
  },
  {
    id: 11,
    name: "Foundation Kids",
    duration: "6 oy",
    image: FoundKids,
    description:
      "Foundation – bu kompyuterdan to‘g‘ri foydalanish, fayllar bilan ishlash, internet xavfsizligi va ofis dasturlaridan foydalanish ko‘nikmalaridir.",
  },
  {
    id: 12,
    name: "SMM",
    duration: "3 oy",
    image: SMM,
    description:
      "SMM (Social Media Marketing) – ijtimoiy tarmoqlarda brendni targ‘ib qilish, auditoriya bilan aloqa o‘rnatish va mahsulot yoki xizmatlarni reklama qilish strategiyasidir.",
  },
  {
    id: 13,
    name: "Interyer Dizayn",
    duration: "6 oy",
    image: Inter,
    description:
      "Interyer dizayn — bu bino ichki makonlarini estetik va funksional jihatdan qulay qilish san’ati. Dizaynerlar rang, yorug‘lik, mebel va dekor elementlarini uyg‘unlashtirib, qulay va jozibali muhit yaratadilar.",
  },
];

export default function Card() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 2,
    speed: 500,
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="pt-32 px-56 md:px-5">
        <Carousel className="h-[500px]">
          <CarouselContent className="max-md:flex-col max-md:gap-5">
            {items.map((item, index) => (
              <CarouselItem
                key={index}
                className={`basis-full ${
                  index === currentIndex ? "block" : "hidden"
                }`}
              >
                <div className="w-full flex items-center justify-between flex-row-reverse">
                  <Image
                    src={item.img}
                    alt="Kurs rasmi"
                    width={400}
                    height={350}
                    className="rounded-lg max-md:flex-none"
                  />
                  <h1 className="text-5xl font-bold mb-3">{item.text}</h1>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <h1 className="text-center text-4xl font-bold mt-12 max-md:flex-none">
          IT HOUSE qanday ishlaydi?
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-between mt-10 md:mt-20 gap-6">
          {[
            {
              id: 1,
              text: "O'zingizga mos kursni tanlaysiz",
              src: Choise,
              rotate: "rotate-12",
            },
            {
              id: 2,
              text: "Berilgan darslarni o'rganib, vazifalarni bajarasiz",
              src: Study,
              rotate: "",
            },
            {
              id: 3,
              text: "Kurs ohirida sertifikatga ega bo'lasiz",
              src: Certik,
              rotate: "rotate-12",
            },
          ].map((item) => (
            <div
              key={item.id}
              className="shadow-2xl rounded-2xl px-4 py-6 w-full max-w-[350px] h-[450px] flex flex-col justify-between relative overflow-hidden"
            >
              <div className="flex gap-4 items-center">
                <h1 className="bg-red-600 rounded-full w-10 h-10 text-white text-center px-3 py-2 font-bold">
                  {item.id}
                </h1>
                <h1 className="text-xl md:text-2xl font-bold">{item.text}</h1>
              </div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
                <Image
                  className={`w-full h-full transition-transform duration-500 ease-in-out hover:scale-110 ${item.rotate}`}
                  src={item.src}
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row px-4 md:px-6 gap-6 justify-center mt-16 md:mt-32">
          <div className="shadow-2xl px-6 py-5 rounded-2xl w-full max-w-xs mx-auto">
            <h1 className="text-center">Umumiy o'quvchilar soni</h1>
            <Counter target={6453} />
          </div>
          <div className="shadow-2xl px-6 py-5 rounded-2xl w-full max-w-xs mx-auto">
            <h1 className="text-center">Yozilgan darslar soni</h1>
            <Counter target={245} />
          </div>
          <div className="shadow-2xl px-6 py-5 rounded-2xl w-full max-w-xs mx-auto">
            <h1 className="text-center">O'rtacha jamoaviy tajriba</h1>
            <Counter target={5} suffix=" yil" />
          </div>
        </div>

        <div className="w-full flex flex-col items-center mt-8">
          <h1 id="mentors" className="text-4xl font-bold">
            Bizning Jamoa
          </h1>
          <div className="">
            <Slider {...settings}>
              <div className="flex items-center gap-5 max-lg:flex-col max-lg:px-4">
                <div className="px-4 py-6 bg-white shadow w-full max-w-[300px] mx-auto">
                  <Image
                    className="rounded-2xl w-28 h-28 mx-auto"
                    src={Temurbek}
                    alt=""
                  />
                  <h1 className="font-bold text-xl text-center">
                    Temurbek Yorkulov
                  </h1>
                  <h1 className="text-sm text-center">Kiberxavfsizlik</h1>
                </div>
                <div className="px-4 py-6 bg-white shadow w-full max-w-[300px] mx-auto">
                  <Image
                    className="rounded-2xl w-28 h-28 mx-auto"
                    src={Nodirbek}
                    alt=""
                  />
                  <h1 className="font-bold text-xl text-center">
                    Nodirbek Kuchkarov
                  </h1>
                  <h1 className="text-sm text-center">AI, Foundation Kids</h1>
                </div>
                <div className="px-4 py-6 bg-white shadow w-full max-w-[300px] mx-auto">
                  <Image
                    className="rounded-2xl w-28 h-28 mx-auto"
                    src={Jaloliddin}
                    alt=""
                  />
                  <h1 className="font-bold text-xl text-center">
                    Jaloliddin Abdurahmonov
                  </h1>
                  <h1 className="text-sm text-center">Web Dasturlash</h1>
                </div>
                <div className="px-4 py-6 bg-white shadow w-full max-w-[300px] mx-auto">
                  <Image
                    className="rounded-2xl w-28 h-28 mx-auto"
                    src={Hikmatillo}
                    alt=""
                  />
                  <h1 className="font-bold text-xl text-center">
                    Hikmatillo Bobomurodov
                  </h1>
                  <h1 className="text-sm text-center">Matematika</h1>
                </div>
                <div className="px-4 py-6 bg-white shadow w-full max-w-[300px] mx-auto">
                  <Image
                    className="rounded-2xl w-28 h-28 mx-auto"
                    src={Mahmudjon}
                    alt=""
                  />
                  <h1 className="font-bold text-xl text-center">
                    Mahmudjon Naimjonov
                  </h1>
                  <h1 className="text-sm text-center">Foundation</h1>
                </div>
                <div className="px-4 py-6 bg-white shadow w-full max-w-[300px] mx-auto">
                  <Image
                    className="rounded-2xl w-28 h-28 mx-auto"
                    src={Abror}
                    alt=""
                  />
                  <h1 className="font-bold text-xl text-center">
                    Abror Narziqulov
                  </h1>
                  <h1 className="text-sm text-center">Grafik Dizayn</h1>
                </div>
                <div className="px-4 py-6 bg-white shadow w-full max-w-[300px] mx-auto">
                  <Image
                    className="rounded-2xl w-28 h-28 mx-auto"
                    src={Sevara}
                    alt=""
                  />
                  <h1 className="font-bold text-xl text-center">
                    Sevara Jo'rayeva
                  </h1>
                  <h1 className="text-sm text-center">Ingliz Tili</h1>
                </div>
                <div className="px-4 py-6 bg-white shadow w-full max-w-[300px] mx-auto">
                  <Image
                    className="rounded-2xl w-28 h-28 mx-auto"
                    src={Xumoyun}
                    alt=""
                  />
                  <h1 className="font-bold text-xl text-center">Xumoyun</h1>
                  <h1 className="text-sm text-center">Phython</h1>
                </div>
                <div className="px-4 py-6 bg-white shadow w-full max-w-[300px] mx-auto">
                  <Image
                    className="rounded-2xl w-28 h-28 mx-auto"
                    src={Jonibek}
                    alt=""
                  />
                  <h1 className="font-bold text-xl text-center">
                    Jonibek To'rapov
                  </h1>
                  <h1 className="text-sm text-center">Web Dasturlash</h1>
                </div>
                <div className="px-4 py-6 bg-white shadow w-full max-w-[300px] mx-auto">
                  <Image
                    className="rounded-2xl w-28 h-28 mx-auto"
                    src={Zuxra}
                    alt=""
                  />
                  <h1 className="font-bold text-xl text-center">Zuxra</h1>
                  <h1 className="text-sm text-center">Rus Tili</h1>
                </div>
                <div className="px-4 py-6 bg-white shadow w-full max-w-[300px] mx-auto">
                  <Image
                    className="rounded-2xl w-28 h-28 mx-auto"
                    src={Laylo}
                    alt=""
                  />
                  <h1 className="font-bold text-xl text-center">Laylo</h1>
                  <h1 className="text-sm text-center">Call Center</h1>
                </div>
                <div className="px-4 py-6 bg-white shadow w-full max-w-[300px] mx-auto">
                  <Image
                    className="rounded-2xl w-28 h-28 mx-auto"
                    src={Nigina}
                    alt=""
                  />
                  <h1 className="font-bold text-xl text-center">Nigina</h1>
                  <h1 className="text-sm text-center">Call Center</h1>
                </div>
              </div>
            </Slider>
          </div>
        </div>

        <h1 className="text-4xl font-bold">Kurslar</h1>
        <div
          id="courses"
          className="grid grid-cols-3 gap-7 mt-7 max-md:grid-cols-1"
        >
          {courses.map((course) => (
            <div
              key={course.id}
              className="relative shadow-2xl rounded-2xl px-6 py-3 hover:shadow-xl transition-all"
              onMouseEnter={() => setHovered(course.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="flex items-center justify-between text-lg font-bold max-md:flex-col">
                <Image
                  className="w-28 h-28 mx-auto"
                  src={course.image}
                  alt={course.name}
                />
                <div className="text-center max-md:mt-3">
                  <h1>{course.name}</h1>
                  <h1>{course.duration}</h1>
                </div>
              </div>
              <div>
                <PiCursorFill className="text-red-600 text-2xl ml-52 rotate-12 max-md:ml-0" />
              </div>
              {/* Modal */}
              {hovered === course.id && (
                <div className="absolute bottom-0 left-0 right-0 bg-gray-900 text-white p-3 rounded-b-2xl text-sm transition-all">
                  {course.description}
                </div>
              )}
            </div>
          ))}
        </div>

        <h1 className="text-4xl font-bold mt-8">
          Nima uchun "IT HOUSE" da o'qish kerak?
        </h1>
        <div className="flex items-center justify-between mt-9 gap-3 max-md:flex-col">
          <div className="shadow-2xl w-[520px] h-40 pl-6 pr-10 pt-4 pb-10 rounded-2xl max-md:w-full">
            <Image
              className="w-12 h-12 bg-white rounded-full"
              src={TypePerson}
              alt=""
            />
            <h1 className="text-2xl font-semibold">Bepul Coworking</h1>
            <h1 className="text-gray-400">
              24/7 formatida tun-u kun ishlaydigan bepul coworking va wifi.
            </h1>
          </div>
          <div className="shadow-2xl w-[520px] h-40 pl-6 pr-10 pt-4 pb-10 rounded-2xl max-md:w-full">
            <Image
              className="w-12 h-12 bg-white rounded-full"
              src={Cap}
              alt=""
            />
            <h1 className="text-2xl font-semibold">Sifatli ta'lim</h1>
            <h1 className="text-gray-400">
              Doimiy yangilanib boradigan kurslar va katta tajribaga ega
              ustozlar.
            </h1>
          </div>
        </div>
        <div className="flex items-center justify-between mt-6 gap-3 max-md:flex-col">
          <div className="shadow-2xl w-[520px] h-40 pl-6 pr-10 pt-4 pb-10 rounded-2xl max-md:w-full">
            <Image
              className="w-12 h-12 bg-white rounded-full"
              src={Prize}
              alt=""
            />
            <h1 className="text-2xl font-semibold">Doimiy musobaqalar</h1>
            <h1 className="text-gray-400">
              Zakovat, Futbol va boshqa o'yinlar bo'yicha haftalik sovrinli
              musobaqalar.
            </h1>
          </div>
          <div className="shadow-2xl w-[520px] h-40 pl-6 pr-10 pt-4 pb-10 rounded-2xl max-md:w-full">
            <Image
              className="w-12 h-12 bg-white rounded-full"
              src={Coins}
              alt=""
            />
            <h1 className="text-2xl font-semibold">Coin tizimi</h1>
            <h1 className="text-gray-400">
              "IT HOUSE" barcha o'quvchilari uchun coin tizimi mavjud
            </h1>
          </div>
        </div>
        <div className="flex items-center justify-between mt-6 gap-3 max-md:flex-col">
          <div className="shadow-2xl w-[520px] h-40 pl-6 pr-10 pt-4 pb-10 rounded-2xl max-md:w-full">
            <Image
              className="w-12 h-12 bg-white rounded-full"
              src={Tasks}
              alt=""
            />
            <h1 className="text-2xl font-semibold">Amaliyotga taklif qilish</h1>
            <h1 className="text-gray-400">
              “IT HOUSE” intensiv kurslarni muvaffaqiyatli bitirgan
              o‘quvchilarga amaliyot taklif qilish kafolatini beradi.
            </h1>
          </div>
          <div className="shadow-2xl w-[520px] h-40 pl-6 pr-10 pt-4 pb-10 rounded-2xl max-md:w-full">
            <Image
              className="w-12 h-12 bg-white rounded-full"
              src={Certificate}
              alt=""
            />
            <h1 className="text-2xl font-semibold">Sertifikat</h1>
            <h1 className="text-gray-400">
              Kursni muvaffaqiyatli tamomlagan o‘quvchilar “IT HOUSE" diplomi va
              sertifikatiga ega bo‘ladi.
            </h1>
          </div>
        </div>

        <h1 id="#3" className="text-4xl font-bold text-center mt-8">
          "IT HOUSE" o'quv markazi bitiruvchilari
        </h1>
        <div className="flex justify-center items-center mt-10">
          <video
            className="max-md:w-full max-md:mx-7 max-md:h-[250px]"
            width="800"
            height="450"
            controls
          >
            <source
              src="https://www.youtube.com/watch?v=TBlDJTgiFZU"
              type="video/mp4"
            />
          </video>
        </div>

        <h1 className="text-4xl font-bold text-center mt-16 max-sm:flex-none">
          <span className="text-red-600">IT HOUSE</span> - KELAJAK SHU YERDA
        </h1>
      </div>

      <div
        id="contact"
        className="mt-16 bg-red-600 flex items-center justify-between pt-16 pb-20 px-8 max-md:flex-col"
      >
        <h1 className="text-4xl font-bold text-white sm:flex-none">
          Kurslar haqida to'liq ma'lumotga <br />
          ega bo'lishni istasangiz <br />
          formani to'ldiring
        </h1>
        <div className="bg-white rounded-2xl px-4 py-5 w-96 max-md:w-full max-md:px-6">
          <div className="flex items-center gap-2 ml-5">
            <Image className="w-12 h-12" src={Logo} alt="" />
            <h1 className="font-bold text-2xl">IT HOUSE</h1>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              location.reload();
            }}
          >
            <input
              className="w-full outline-none mt-7 border-b-2 border-b-black"
              type="text"
              placeholder="Ism"
              required
            />
            <br />
            <input
              className="w-full outline-none mt-5 border-b-2 border-b-black"
              type="number"
              placeholder="Telefon raqam"
              required
            />
            <button
              type="submit"
              className="bg-gray-500 w-48 h-14 px-7 py-1 rounded-xl text-lg font-bold text-white mt-20 mx-20 mb-12 max-md:w-full max-md:mx-0"
            >
              Yuborish
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
