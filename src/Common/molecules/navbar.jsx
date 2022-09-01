import logo from '../assets/logo.png';
import backArrow from '../assets/back.png';
import { useNavigate } from 'react-router-dom';

function Navbar(props) {
    let navigate = useNavigate();

    return(
        <div className='flex min-w-max bg-white rounded-b-3xl drop-shadow sticky top-0 z-50'>
            <img src={backArrow} alt="Back Arrow" className={`absolute w-6 h-6 left-10 top-6 cursor-pointer ${props.backArrowAvailable ? 'opacity-100' : 'opacity-0'}`} onClick={() => {navigate(-1)}}/>
            
            <div className='mx-auto flex cursor-pointer' onClick={() => {navigate("/")}}>
                <img src={logo} alt="logo of kumparan" className="w-36"/>
                <h1 className='text-red text-3xl my-auto font-bold pl-1'>Share</h1>
            </div>
        </div>
    )
}

Navbar.defaultProps = {
    backArrowAvailable: true,
}

export default Navbar;