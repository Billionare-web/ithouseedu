const experienceLevels = [
  {
    salary: "6 000 000",
    level: "Junior",
    exp: "1 yilgacha",
    marginTop: "mt-32",
    minHeight: "min-h-[160px]",
  },
  {
    salary: "12 000 000",
    level: "Middle",
    exp: "1-3 yilgacha",
    marginTop: "mt-20",
    minHeight: "min-h-[200px]",
  },
  {
    salary: "20 000 000",
    level: "Senior",
    exp: "3+ yil",
    marginTop: "mt-0",
    minHeight: "min-h-[240px]",
  },
];

export default function ExperienceSection() {
  return (
    <div className="px-56 pt-10">
      <h1 className="text-3xl font-bold">Tajriba bilan daromad oshadi</h1>

      <div className="flex items-center gap-2 text-sm text-gray-400 mt-6">
        <div className="text-2xl bg-orange-600 rounded-full w-10 h-10 text-white flex items-center justify-center">
          hh
        </div>
        <p className="font-semibold">
          hh.uz ma'lumotlariga ko'ra, AI mutaxassisi <br />
          o'rtacha ish haqi 9 500 000 so‘mni tashkil qiladi
        </p>
      </div>

      <div className="flex gap-3 mt-10">
        {experienceLevels.map((item, i) => (
          <div
            key={i}
            data-aos="fade-up"
            data-aos-duration="1000"
            className={`bg-gray-200 rounded-3xl py-5 px-5 w-full md:w-1/3 flex flex-col justify-between ${item.marginTop} ${item.minHeight}`}
          >
            <h2 className="text-3xl font-bold text-center">{item.salary}</h2>

            <div className="text-center mt-6 flex justify-center gap-2 items-center">
              <span className="bg-white rounded-3xl px-3 py-1">
                {item.level}
              </span>
              {item.exp}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
