import { Link } from "react-router-dom";

interface BtnProps {
    btnText: string;
    linkUrl: string;
    btnStyle: string;
}
function Buttons({btnText, linkUrl, btnStyle }: BtnProps) {
    return(
        <button className={`${btnStyle} bg-blue-400 text-xl font-bold px-2.5 py-1 rounded-md m-5 cursor-pointer hover:transition hover:ease-in-out hover:duration-700`}>
            <Link to={linkUrl}>{btnText}</Link>
        </button>
    )
}
export default Buttons

