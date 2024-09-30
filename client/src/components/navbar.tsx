type NavbarProps = {

    title : string;
    items? : string[];

}

export const Navbar = ({title, items} : NavbarProps) => {

    return (
        <header>
            <nav>
                <div className="w-full px-8 py-2 bg-white flex items-center justify-between shadow-lg border-b-2 border-slate-500">

                    <div className="text-lg font-main font-semibold">
                        <h1><a href="/">{title}</a></h1>
                    </div>

                    <div className="text-sm font-main">
                        <ul className="flex gap-2">
                            {
                                items?.map(item => {

                                    return (
                                        <li key={item}><a className="decoration-dashed hover:underline hover:text-purple-600" href="">{item}</a></li>
                                    )
                                })
                            }
                        </ul>
                    </div>


                </div>
            </nav>
        </header>
    )

}