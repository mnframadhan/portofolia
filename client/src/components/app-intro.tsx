// Introduction of the web page functionality
// why use portofolia.id at first?

import { Button } from "./ui/my-button"

export const AppIntro = () => {

    return (
        <section id="app-intro">

            <div className="w-full p-8 bg-gray-100 flex flex-col font-main">

                <figure className="w-72 h-44 bg-slate-500 rounded-2xl"></figure>

                <div className="p-2 flex flex-col gap-4">
                    <h2 className="text-3xl text-center font-bold hover:text-purple-900 hover:underline decoration-dashed">Lorem ipsum dolor consectetur adipisicing elit.</h2>
                    <div className="text-center">
                        <Button title="Bangun Portofolio" customGradient="bg-gradient-to-tl from-purple-900 to-purple-600" textColor="text-white"/>
                    </div>
                </div>

            </div>
        </section>
    )

}