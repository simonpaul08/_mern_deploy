import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
export default function CustomLink({to, children}) {
    return (
    <Link
        to={to}
        className="uppercase w-fit text-lg font-bold bg-[#A8DADC] text-white 
            mx-auto my-8 block rounded-full p-4 drop-shadow-2xl">
        <AiOutlineArrowRight className="inline-block " />
        <span className="pl-2">{children}</span>
    </Link>)
}