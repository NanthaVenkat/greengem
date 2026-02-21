import logo from "../../assets/Img/logo.svg"
import { Link } from "react-router-dom"

export default function Header() {
    return (
        <header className="fixed top-0 left-0 z-10 py-2 sm:py-4 px-4 w-full">
            <div className="sm:max-w-[90%] mx-auto">
                <Link to='/'><img src={logo} alt="Greengem" className="w-[120px] sm:w-[144px] mb-1 sm:mb-2" /></Link>
            </div>
        </header>
    );
}
