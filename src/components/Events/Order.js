import '..//..//pages/Events/Events.css';
const Order = () => {

    return (

        <div className="order">
                <div className="container">
                    <div className="title">Order now!</div>
                    <form action="#" className="order__form">
                        <input required placeholder="Your name" name="name" type="text" className="order__input"/>
                        <input required placeholder="Your phone number" name="phone" type="phone" className="order__input"/>
                        <img src="icons/right.svg" alt="right"/>
                        <button className="btn btn_dark btn_min">Call me back</button>
                    </form>
                </div>
            </div>

    );

}
export default Order;