import { LOGO_URL } from "../Utils/constant";

const Header = () => {
    return (
        <div className = " absolute w-56 z-10">
           <img src = { LOGO_URL } alt="Netflix-logo"/>
        </div>
    )
}

export default Header;