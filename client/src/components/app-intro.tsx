// Introduction of the web page functionality
// why use portofolia.id at first?

import { Button } from "./ui/my-button"

type AppIntroProps = {

    title: string;
    button_name?: string;
    media?: string;
    description: string;

}

export const AppIntro = (props: AppIntroProps) => {

    return (
        <section id="app-intro">

            <div className="w-full p-6 bg-gray-100 flex flex-col md:gap-4 md:flex-row md:p-12 items-center justify-center md:justify-start md:items-start font-main">

                <figure className="w-72 md:w-1/2 h-44 md:h-52 bg-slate-500 rounded-2xl"></figure>

                <div className="p-2 flex flex-col gap-2 text-center md:w-1/2 md:text-start md:items-start">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-3xl font-semibold hover:text-purple-900 hover:underline decoration-dashed">{props.title}</h2>
                        <p className="font-light text-sm md:text-lg text-slate-800">{props.description}</p>
                    </div>
                    {
                        props.button_name ?
                            <div className="text-center">
                                <Button title={`${props.button_name}`} customGradient="bg-gradient-to-tl from-purple-900 to-purple-600" textColor="text-white" textSize="text-sm"/>
                            </div> :
                            <></>
                    }
                    
                </div>

            </div>
        </section>
    )

}