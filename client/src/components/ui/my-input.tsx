import { ChangeEventHandler  } from "react"; 


type  MyInputProps = {

    label: string;
    type: "text" | "number" | "date" | "email" | "password";
    placeholder? : string;
    disabled?: boolean;
    value? : string;
	name? : string;
	id? : string;
	handle_change?: ChangeEventHandler
}


export const MyInput = (props : MyInputProps) => {

    return (
        <>
        <label htmlFor={`${props.label}`} className="flex flex-col gap-1">
            <span className="font-light">{props.label}</span>
            <input id={`${props.id}`} type={`${props.type}`}  name={props.name} onChange={ props.handle_change} className={`border-b-2 border-purple-400 focus:outline-none ${props.disabled ? "text-slate-600" : ""}`} value={props.value} placeholder={props.placeholder ? `${props.placeholder}`: ""} disabled={props.disabled} />
        </label>
        </>

    )

}
