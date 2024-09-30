import { Button } from "./ui/my-button";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";

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
    <ScrollArea className="whitespace-nowrap rounded-md border ">
      <div className="flex flex-wrap items-center justify-center p-8 gap-4 w-[980px]">
        {showedUserData.map((item) => {
          return (
            <div className="bg-purple-200 flex flex-col gap-2 p-4 px-8 shadow-xl rounded-lg hover:hue-rotate-15">
              <div className="flex gap-4 items-center">
                <figure>
                  <div className="overflow-hidden h-16 w-16 rounded-full">
                    <img src="fitrah-example-image.png" alt="example-image" />
                  </div>
                </figure>
                <div>
                  <h3 className="font-semibold text-sm text-nowrap">
                    {item.fullName}
                  </h3>
                  <p className="text-sm text-slate-800">{item.n_post > 1 ? `${item.n_post} Posts` : `${item.n_post} Post` }</p>
                </div>
              </div>
              <p className="text-[10px] font-light text-slate-600">
                Bergabung pada: 12 Juni 2024
              </p>
            </div>
          );
        })}

        <Button title="Lihat Lebih Banyak" customGradient="bg-gradient-to-tl from-purple-900 to-purple-600" textColor="text-white" textSize="text-sm" />
      </div>
      <ScrollBar orientation="horizontal"></ScrollBar>
    </ScrollArea>
  );
};
