const ProjectUnit = ({
  title,
  img,
  gitHub,
  demo,
  info,
  skill1,
  skill2,
  skill3,
  skill4,
  skill5,
  skill6,
}) => {
  return (
    <article className="bg-slate-950 dark:bg-zinc-900 grid place-items-center gap-4 p-2 rounded-3xl transition-colors text-white  cursor-pointer group perspective">
      <h3 className="uppercase font-semibold">{title}</h3>
      <div
        className={`h-56 ${img} bg-cover w-11/12 bg-[center_bottom] border-2 rounded-3xl border-yellow-300 dark:border-blue-600 transition-all relative overflow-hidden preserve-3d group-hover:my-rotate-y-180 duration-1000`}
      >
        <section className="bg-black/70 h-full translate-y-full absolute w-full group-hover:translate-y-0 transition-transform duration-300">
          <article className="flex flex-col gap-2 justify-around items-center h-full w-full absolute my-rotate-y-180">
            <p className="p-2">{info}</p>
            <section className="flex gap-2 justify-center items-end">
              <a
                className="bg-green-600 px-4 mb-6 shadow-xl shadow-slate-950 hover:scale-105 hover:bg-slate-700 transition-all dark:bg-red-600"
                href={gitHub}
                target="_blank"
              >
                GITHUB
              </a>
              <a
                className="bg-slate-700 px-4 mb-6 shadow-xl shadow-slate-950 hover:scale-105 hover:bg-green-600 transition-transform dark:bg-red-600"
                href={demo}
                target="_blank"
              >
                DEMO
              </a>
            </section>
          </article>
        </section>
      </div>
      <section className=" text-3xl flex flex-wrap gap-2 justify-center items-center w-11/12">
        <div>{skill1}</div>
        <div>{skill2}</div>
        <div>{skill3}</div>
        <div>{skill4}</div>
        <div>{skill5}</div>
        <div>{skill6}</div>
      </section>
    </article>
  );
};
export default ProjectUnit;





