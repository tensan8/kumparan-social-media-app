import React, {useState} from "react";
import TitleHeading from "./titleHeading";

function ContactDetailContent(props) {
    const [detailMap] = useState([
        {'detail': 'Full name', 'content': props.chosenUser.name},
        {'detail': 'Company', 'content': props.chosenUser.company.name},
        {'detail': 'Email', 'content': props.chosenUser.email},
        {'detail': 'Phone', 'content': props.chosenUser.phone},
        {'detail': 'Website', 'content': props.chosenUser.website},
        {'detail': 'Address', 'content': `${props.chosenUser.address.suite} 
                                          ${props.chosenUser.address.street}, 
                                          ${props.chosenUser.address.city} 
                                          ${props.chosenUser.address.zipcode}`
        },
    ]);
    

    return(
        <div>
            <TitleHeading title = "Contact Detail" extraStyling = "text-xl mb-1" />

            {detailMap.map((userInfo, index) => {
                return(
                    <p key={index}><span className="font-bold">{userInfo.detail}:</span> {userInfo.content}</p>
                )
            })}
        </div>
    )
}

export default ContactDetailContent;