type IntroProps = {

    title: string;
    description: string

}

export const Intro = (props: IntroProps) => {
    return(
        <section id="intro">

            <div className="w-full p-6 md:p-12 bg-purple-200 font-main flex flex-col gap-2">
                <h2 className="font-semibold text-xl md:text-3xl" >{props.title}</h2>
                <p className="text-slate-800 text-sm md:text-lg">{props.description}</p>
            </div>

        </section>
    )

}