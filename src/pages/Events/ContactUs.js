const ContactUs = () => {

    return (

        <div className="modal">
                <div className="modal__dialog">
                    <div className="modal__content">
                        <form action="#">
                            <div className="modal__close" data-close>&times;</div>
                            <div className="modal__title">We will contact you as soon as possible!</div>
                            <input required placeholder="Your name" name="name" type="text" className="modal__input"/>
                            <input required placeholder="Your phone number" name="phone" type="phone" className="modal__input"/>
                            <button className="btn btn_dark btn_min">Call me back</button>
                        </form>
                    </div>
                </div>
            </div>

    );

}
export default ContactUs;