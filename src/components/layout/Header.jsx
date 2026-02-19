import logo from "../../assets/Img/logo.svg"
import { Link } from "react-router-dom"

export default function Header() {
    return (
        <header className="py-2 sm:py-4 px-4">
            <div className="sm:max-w-[90%] mx-auto">
                <Link to='/'><img src={logo} alt="Greengem" className="w-[120px] sm:w-[144px] mb-1 sm:mb-2" /></Link>
            </div>
        </header>
    );
}
