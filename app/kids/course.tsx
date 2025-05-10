import { FaCheck } from "react-icons/fa6";
import Image from "next/image";
import Girl from "@/app/components/imgs/girl.png";
import Boy from "@/app/components/imgs/Boy.png";
import Women from "@/app/components/imgs/Women.png";

const courseDetails = [
  {
    image: Girl,
    title: "Kasbni noldan boshlab o'rganish",
    points: [
      "Boshlash uchun maxsus bilim talab etilmaydi",
      "Amaliy ko'nikmalarga ega bo'lasiz",
      "Kelajakda ish topishga yordam beradigan jozibali portfolioingizni to'plang",
    ],
  },
  {
    image: Boy,
    title:
      "Bilimlarni tizimlashtirish va kompyuter savodxonligini o'z kasbingiz qiling",
    points: [
      "Asosiy bilimlaringizni chuqurlashtiring",
      "Kompyuterda har tomonlama bilimlaringizni kuchaytiring",
      "Portfolioingizni yangi keyslar bilan to'ldiring",
    ],
  },
  {
    image: Women,
    title: "Marketolog, muharrir va boshqa kasblar uchun qo'shimcha oling",
    points: [
      "Siz biznes vazifalari hal qila olasiz",
      "Ko'proq daromad olasiz",
      "Boshqa hamkasblarga qaraganda qo'shimcha bilimga ega bo'ling",
    ],
  },
];

export default function CourseTarget() {
  return (
    <div className="px-64 mt-10 max-md:px-5">
      <h1 className="text-4xl font-bold">Ushbu kurs kimlarga to'g'ri keladi</h1>
      <h1 className="mt-8">
        Biz Foundation kidsni shu narsalarni istagan o'quvchilar uchun qildik
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
