const interiorDesignExperience = [
  {
    salary: "3 500 000",
    level: "Junior",
    exp: "1 yilgacha",
    marginTop: "mt-48",
    minHeight: "min-h-[160px]",
  },
  {
    salary: "7 000 000",
    level: "Middle",
    exp: "1-3 yilgacha",
    marginTop: "mt-24",
    minHeight: "min-h-[200px]",
  },
  {
    salary: "15 000 000",
    level: "Senior",
    exp: "3+ yil",
    marginTop: "mt-0",
    minHeight: "min-h-[240px]",
  },
];

export default function InteriorDesignExperienceSection() {
  return (
    <div className="px-64 py-14 max-md:px-5">
      <h1 className="text-4xl font-bold">Tajriba bilan daromad oshadi</h1>

      <div className="flex gap-2 items-center text-sm text-gray-400 mt-16 font-bold">
        <div className="text-2xl bg-orange-600 rounded-full w-12 h-12 text-white flex items-center justify-center">
          hh
        </div>
        <p>
          hh.uz ma'lumotlariga ko'ra, Interyer Dizaynerning
          <br />
          o'rtacha ish haqi 9 500 000 so‘mni tashkil qiladi
        </p>
      </div>

      <div className="flex gap-3 mt-10 max-md:flex-col">
        {interiorDesignExperience.map((item, i) => (
          <div
            key={i}
            data-aos="fade-up"
            data-aos-duration="1000"
            className={`bg-gray-200 rounded-3xl py-5 px-5 w-full flex flex-col justify-between ${item.marginTop} ${item.minHeight}`}
          >
            <h2 className="text-4xl font-bold text-center">{item.salary}</h2>

            <div className="text-center mt-6 flex justify-center gap-2 items-center">
              <span className="bg-white rounded-3xl px-3 py-2">
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
