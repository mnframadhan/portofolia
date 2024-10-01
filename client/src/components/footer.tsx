type FooterProps = {

    title: string;
    sub_title: string;
    contacts: string[];
    address : string;

}

export const Footer = (props : FooterProps) => {
    return (

        <footer>
            <div className="w-full p-4 md:p-8 flex gap-8 md:gap-12 text-sm justify-between font-main bg-slate-100 border-t-2 border-purple-800">

                <div className="text-sm md:text-2xl font-extrabold w-1/3 flex flex-col">
                    <h3>{props.title}</h3>
                    <p className="text-xs md:text-lg font-light">{props.sub_title}</p>
                </div>

                <div className="text-nowrap w-1/3 flex flex-col items-center">
                    <h4 className="font-bold text-xs md:text-lg">Kontak Kami</h4>
                    <ul>
                        {props.contacts.map((contact) => {
                            return(
                                <li><a href="/" className="md:text-lg hover:text-purple-900 hover:underline decoration-dashed">{contact}</a></li>
                            )
                        })}
                    </ul>
                </div>

                <div className="text-xs md:text-lg w-1/3">
                    <h4 className="font-bold">Address</h4>
                    <address>{props.address}</address>
                </div>

            </div>
        </footer>

    )
}