import ContactDetailContent from "../atoms/ContactDetailContent";
import Card from '../atoms/card';

function ContactDetail(props) {
    return(
        <Card 
            cardContent = {<ContactDetailContent chosenUser = {props.chosenUser}/>}
            cardSize = {`${props.cardSize} mt-0`}
        />
    )
}

export default ContactDetail;