import '..//..//pages/Events/Events.css';
const SidePanel = () => {

    return (

        <div className="sidepanel">
            <div className="sidepanel__text"><span>Social media</span></div>
            <div className="sidepanel__divider"></div>
            <a href="#" className="sidepanel__icon">
                <img src="icons/instagram.svg" alt="instagram"/>
            </a>
            <a href="#" className="sidepanel__icon">
                <img src="icons/facebook.svg" alt="facebook"/>
            </a>
        </div>

    );

}
export default SidePanel;