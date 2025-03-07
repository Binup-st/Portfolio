import { data } from "./data";

export default function Projects() {
  return (
    <div className="text-gray-400 px-10 h-screen">
      {data.map((item) => {
        return (
          <a href={item.url.startsWith("http") ? item.url : `https://${item.url}`}
          target="_blank">
            <div key={item.id} className="flex flex-col lg:flex-row gap-10 mb-20 p-8 hover:bg-[#293248]">
            <img
              src={item.thumbnail}
              className="w-full lg:w-[350px] lg:h-[170px] object-cover"
              alt="project"
            />
            <div className="h-[170px]">
              <h2 className="text-seaSalt font-semibold text-xl">
                {item.title}
              </h2>
              <p className="text-justify leading-8">{item.description}</p>
            </div>
          </div>
          </a>
        );
      })}
    </div>
  );
}
