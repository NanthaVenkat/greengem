import logo from "../../assets/Img/logo.svg"
import { Link } from "react-router-dom"

export default function Header() {
    return (
        <header className="py-4 px-4">
            <div className="2xl:max-w-[1440px] 3xl:max-w-[1540px] 4xl:max-w-[1720px] mx-auto">
                <Link to='/'><img src={logo} alt="Greengem" className="w-[140px] sm:w-[188px] mb-2" /></Link>
            </div>
        </header>
    );
}