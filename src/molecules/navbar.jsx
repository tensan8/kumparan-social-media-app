import logo from '../assets/logo.png';
import backArrow from '../assets/back.png';

function Navbar(props) {
    return(
        <div className='flex min-w-max bg-white rounded-b-3xl drop-shadow sticky top-0 z-50'>
            {props.backArrowAvailable ? 
                <img src={backArrow} alt="Back Arrow" className='absolute w-6 h-6 left-10 top-6 cursor-pointer' onClick={(e) => {}}/>
            : 
                null
            }
            
            <div className='mx-auto flex'>
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