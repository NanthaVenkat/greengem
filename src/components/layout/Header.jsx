import logo from "../../assets/Img/logo.svg"
import { Link } from "react-router-dom"

export default function Header() {
    return (
        <header className="py-4 px-2">
            <div className="max-w-[1440px] mx-auto">
                <img src={logo} alt="Greengem" className="w-[188px] mb-2" />
            </div>
        </header>
    );
}