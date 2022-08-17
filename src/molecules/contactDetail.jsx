import ContactDetailContent from "../atoms/contactDetailContet";
import Card from '../atoms/card';

function ContactDetail(props) {
    console.log(props)
    return(
        <Card 
            cardContent = {<ContactDetailContent chosenUser = {props.chosenUser}/>}
            cardSize = {`${props.cardSize} mt-0`}
        />
    )
}

export default ContactDetail;