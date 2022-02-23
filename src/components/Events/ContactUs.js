import '..//..//pages/Events/Events.css';
import { FormControl, Button, Input } from '@mui/material';

const ContactUs = () => {
    
    return (
        
        <div className="modal">
            
                <div className="modal__dialog">
                    <div className="modal__content">
                    <div className="modal__close" data-close>&times;</div>
                        <FormControl action="#">
                            
                            <div className="modal__title">We will contact you as soon as possible!</div>
                            <Input required placeholder="Your name" name="name" type="text" className="modal__input"/>
                            <Input required placeholder="Your phone number" name="phone" type="phone" className="modal__input"/>
                            <Button variant="outlined" className="btn btn_dark btn_min">Call me back</Button>
                        </FormControl>
                    </div>
                </div>
            </div>

    );

}
export default ContactUs;