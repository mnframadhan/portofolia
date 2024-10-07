import { Typewriter } from "./ui/my-typewriter"
import { Button } from "./ui/my-button"
import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

type JumbotronProps = {
    title : string;
    sub_title: string;
}

export const Jumbotron = (props : JumbotronProps) => {

    const navigate = useNavigate();
    const [username, setUsername] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    return (
        <section id="jumbotron" className="">
            <div className="px-12 lg:px-36 flex flex-col justify-center mt-6 items-center h-screen gap-8 bg-[url('background/cloudy-purple.jpg')]">
                <div className="flex flex-col items-center gap-4">
                    <div className="flex flex-col gap-2 items-center">
                        <p className="text-xs md:text-lg font-main">Powered by: <span className="text-purple-600 hover:underline decoration-dashed">Innovatech Solusindo</span></p>
                        <div className="flex flex-col gap-4">
                            <div className="text-3xl bg-gradient-to-tl from-purple-700 to-purple-950 bg-clip-text text-transparent md:text-6xl lg:text-8xl text-center font-main font-extrabold">
                                <Typewriter text={`         ${props.title}`}></Typewriter>
                            </div>
                            <p className="font-main text-sm md:text-xl lg:text-4xl md:px-24 text-center">{`${props.sub_title}`}</p>
                        </div>
                    </div>
                    <div>
                        <Button title="Eksplor!" customGradient="bg-gradient-to-tl from-purple-900 to-purple-600" textColor="text-white" textWeight="font-semibold"/>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-2">
                    <p className="font-main text-xs md:text-lg">Klaim halaman <span className="text-purple-600 hover:duration-300 hover:underline">portoflia</span> milikmu</p>
                    <div className="flex font-main border-4 rounded-full">                    
                        <div className="flex bg-white items-center px-3 lg:px-6 py-1 lg:py-2 border-r-0 rounded-l-full" >
                            <p className="text-slate-600 text-sm md:text-lg">portofolia.id/</p>
                            <input 
                                onChange={(e) => setUsername(e.target.value)}
                                type="text" 
                                className="w-24 md:w-36 lg:w-44 text-sm md:text-lg lg:text-xl focus:outline-none" 
                                placeholder="nama-kamu" />
                        </div>
                        <button 
                            onClick={() =>{
                                localStorage.setItem('candidateUsername', username)
                                setMessage("Berhasil melakukan klaim");
                                toast({title: message, description: "Mengalihkan halaman..."})
                                setTimeout(() => {
                                    navigate({to:"/auth/register"})
                                }, 1000*2)
                            }} 
                            className="px-2 font-semibold bg-gradient-to-tl from-purple-900 to-purple-600 text-sm md:text-lg lg:text-xl tracking-wider font-main text-white border-2 border-l-0 hover:duration-300 hover:hue-rotate-15 rounded-r-full">Klaim</button>
                    </div>
                </div>

                <div className="text-xs flex flex-col gap-2 md:gap-6 py-4 justify-center items-center font-main">
                    <div className="flex items-center gap-2">
                        <figure className="flex items-center justify-center">
                            {[...Array(5).keys()].map((item) => {
                                return (
                                    <div key={item}  className="overflow-hidden mr-[-16px] border-4 border-white w-14 h-14 md:w-20 md:h-20 rounded-full bg-white">
                                        <img src="fitrah-example-image.png" alt={`${item}`} />
                                    </div>
                                )
                            })}
                        </figure>
                        <div>
                            <p className="text-lg md:text-2xl">. . .</p>
                        </div>
                    </div>
                    <div className="flex text-lg md:text-2xl">
                        {[...Array(5).keys()].map((item) => {
                            return (
                                <div key={item}>⭐</div>
                            )
                        })}
                    </div>
                    <div className="md:text-xl lg:text-2xl">
                        <p><span className="font-extrabold">{99}+</span> orang telah mengklaim</p>
                    </div>
                </div>

            </div>
        </section>
    )




}
