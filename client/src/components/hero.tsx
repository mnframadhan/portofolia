import Marquee from "react-fast-marquee";
import { Button } from "./ui/my-button";

const showedUserData = [
  {
    fullName: "MN Fitrah Ramadhan",
    n_post: 10,
    date_of_joined: String(Date.now()),
  },
  {
    fullName: "Sul Iman Syahrul",
    n_post: 1,
    date_of_joined: String(Date.now()),
  },
  {
    fullName: "Nadia Ekananda Ramma",
    n_post: 10,
    date_of_joined: String(Date.now()),
  },
  {
    fullName: "Deswandi Harten",
    n_post: 10,
    date_of_joined: String(Date.now()),
  },
  {
    fullName: "Deswandi Harten",
    n_post: 10,
    date_of_joined: String(Date.now()),
  },
  {
    fullName: "Deswandi Harten",
    n_post: 10,
    date_of_joined: String(Date.now()),
  },
  {
    fullName: "Deswandi Harten",
    n_post: 10,
    date_of_joined: String(Date.now()),
  },
  {
    fullName: "Deswandi Harten",
    n_post: 10,
    date_of_joined: String(Date.now()),
  },
  {
    fullName: "Deswandi Harten",
    n_post: 10,
    date_of_joined: String(Date.now()),
  },
];

export const Hero = () => {
  return (
    <section id="hero">
      <div className="flex flex-col justify-center items-center py-6 md:py-12 font-main">
        <h2 className="font-bold text-2xl md:text-4xl text-center">Gabung Sekarang Juga!</h2>
      
          <Marquee>
            <div className="flex flex-wrap items-center justify-center p-8 gap-4 md:gap-8 w-[980px]">
              {showedUserData.map((item) => {
                return (
                  <div className="bg-purple-200 flex flex-col gap-2 p-4 px-8 shadow-xl rounded-lg hover:hue-rotate-15">
                    <div className="flex gap-4 items-center">
                      <figure>
                        <div className="overflow-hidden h-16 md:h-20 w-16 md:w-20 rounded-full">
                          <img src="fitrah-example-image.png" alt="example-image" />
                        </div>
                      </figure>
                      <div>
                        <h3 className="font-semibold text-sm md:text-xl text-nowrap">
                          {item.fullName}
                        </h3>
                        <p className="text-sm md:text-lg text-slate-800">{`${item.n_post} Karya`}</p>
                      </div>
                    </div>
                    <p className="text-[10px] md:text-sm font-light text-slate-600">
                      Bergabung pada: 12 Juni 2024
                    </p>
                  </div>
                );
              })}

            </div>
          </Marquee>
          <div className="w-fit">
            <Button title="Lihat Lebih Banyak" customGradient="bg-gradient-to-tl from-purple-900 to-purple-600" textColor="text-white" textSize="text-sm" />
          </div>
      </div>
    </section>
  );
};
