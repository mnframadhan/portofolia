import { Typewriter } from "./ui/my-typewriter"
import { Button } from "./ui/my-button"

export const Jumbotron = () => {

    return (
        <section id="jumbotron" className="">
            <div className="px-12 flex flex-col justify-center items-center h-screen gap-8 bg-gray-100">

                <div className="flex flex-col items-center gap-4">
                    <div className="flex flex-col gap-2 items-center">
                        <p className="text-xs font-main">Powered by: <span className="text-purple-600">Innovatech Solusindo</span></p>
                        <div className="flex flex-col gap-4">
                            <div className="text-2xl text-center font-main font-extrabold">
                                <Typewriter text="         Lorem ipsum dolor sit amet consectetur"></Typewriter>
                            </div>
                            <p className="font-main text-sm text-center">distinctio autem nam magnam accusamus alias!</p>
                        </div>
                    </div>
                    <div>
                        <Button title="Eksplor!" customGradient="bg-gradient-to-tl from-purple-900 to-purple-600" textColor="text-white" textWeight="font-semibold" textSize="text-sm"/>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-2">
                    <p className="font-main text-xs">Klaim halaman <span className="text-purple-600 hover:duration-300 hover:underline">portoflia</span> milikmu</p>
                    <div className="flex font-main">                    
                        <div className="flex bg-white items-center px-3 py-1 border-2 border-r-0 rounded-l-full" >
                            <p className="text-slate-600 text-sm">portofolia.id/</p>
                            <input type="text" className="w-24 text-sm focus:outline-none" placeholder="yourname" />
                        </div>
                        <button className="px-2 font-semibold bg-gradient-to-tl from-purple-900 to-purple-600 text-sm tracking-wider font-main text-white border-2 border-l-0 hover:duration-300 hover:hue-rotate-15 rounded-r-full">Klaim</button>
                    </div>
                </div>

                <div className="text-xs flex flex-col gap-2 py-4 justify-center items-center font-main">
                    <div className="flex items-center gap-2">
                        <figure className="flex items-center justify-center">
                            {[...Array(5).keys()].map((item) => {
                                return (
                                    <div className="overflow-hidden mr-[-16px] border-4 border-white w-14 h-14 rounded-full bg-white">
                                        <img src="fitrah-example-image.png" alt={`${item}`} />
                                    </div>
                                )
                            })}
                        </figure>
                        <div>
                            <p className="text-lg">. . .</p>
                        </div>
                    </div>
                    <div className="flex text-lg">
                        {[...Array(5).keys()].map(() => {
                            return (
                                <>⭐</>
                            )
                        })}
                    </div>
                    <div>
                        <p><span className="font-extrabold">{99}+</span> orang telah mengklaim</p>
                    </div>
                </div>

            </div>
        </section>
    )




}