import { FaCheck } from "react-icons/fa6";
import Image from "next/image";
import Girl from "@/app/components/imgs/girl.png";
import Boy from "@/app/components/imgs/Boy.png";
import Women from "@/app/components/imgs/Women.png";

const courseDetails = [
  {
    image: Girl,
    title: "0 Dan o'rganmoqchi bo'lganlar uchun",
    points: [
      "Boshlash uchun maxsus bilim talab etilmaydi",
      "Barcha hujum va ximoya usullar amaliy tarzda o'rgatiladi",
      "Hozirgi kundagi eng dolzarb methodlarga ega bo'ling",
    ],
  },
  {
    image: Boy,
    title:
      "Kasbini o'zgartirib zamonaviy va talabgir yunalishni o'rganmoqchi bo'lganlar uchun",
    points: [
      "Kelajak kasbini egallang",
      "Ish topish imkoniyatlari keng",
      "Masofaviy va mustaqil ishlash imkoniyati",
    ],
  },
  {
    image: Women,
    title: "Marketolog, muharrir va boshqa kasblar uchun qo'shimcha oling",
    points: [
      "O'z biznesingizni o'zingiz himoya qiling",
      "Kiberhujumlar orqali moliyaviy yuqotishlarni oldini oling",
      "Mijozlarning maxfiy malumotlarini himoya qilishni o'rganing",
    ],
  },
];

export default function CourseTarget() {
  return (
    <div className="px-64 mt-10 max-md:px-5">
      <h1 className="text-4xl font-bold">Ushbu kurs kimlarga to'g'ri keladi</h1>
      <h1 className="mt-8">
        Biz Kiberxavfsizlikni shu narsalarni istagan o'quvchilar uchun qildik
      </h1>
      <div className="flex justify-between mt-7 gap-5 max-md:flex-col">
        {courseDetails.map((course, index) => (
          <div
            key={index}
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="bg-gray-300 rounded-2xl px-3 py-8 w-full"
          >
            <Image
              src={course.image}
              alt={course.title}
              className="rounded-full w-24 h-24"
            />
            <h1 className="text-xl font-bold mt-4 whitespace-pre-line">
              {course.title}
            </h1>
            {course.points.map((point, i) => (
              <h1 key={i} className="flex mt-6 gap-2 pb-2">
                <FaCheck />
                <span className="whitespace-pre-line">{point}</span>
              </h1>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
