type FooterProps = {

    title: string;
    contacts: string[];
    address : string;

}

export const Footer = ({title, contacts, address} : FooterProps) => {
    return (

        <footer>
            <div className="w-full p-4 flex gap-8 text-sm justify-between font-main bg-slate-100 border-t-2">

                <div className="text-sm font-extrabold">
                    <h3>{title}</h3>
                    <p className="text-xs font-light">Sit aliquam provident at quo?</p>
                </div>

                <div className="text-xs text-nowrap">
                    <h4 className="font-bold">Kontak Kami</h4>
                    <ul>
                        {contacts.map((contact) => {
                            return(
                                <li><a href="/" className="hover:text-purple-900 hover:underline decoration-dashed">{contact}</a></li>
                            )
                        })}
                    </ul>
                </div>

                <div className="text-xs">
                    <h4 className="font-bold">Address</h4>
                    <address>{address}</address>
                </div>

            </div>
        </footer>

    )
}