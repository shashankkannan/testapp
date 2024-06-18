export const Footer = () => {
    return (
        <div className="footerdiv">
            <div className="contact-buttons-container-footer">
                <div className="buttons-wrapper">
                    <button className="contact-button-foot" onClick={() => {
                        console.log("Phone clicked");
                        window.open('callto:+16476861559', '_blank');
                    }}>
                        <img src="/Techicons/wph.png" alt="Phone Icon" style={{width: '30px', height: '30px'}}/>
                        <i className="fas fa-phone"></i>
                    </button>
                    <button className="contact-button-foot" onClick={() => {
                        window.open('mailto:kannan21@uwindsor.ca', '_blank');
                    }}>
                        <img src="/Techicons/wem.png" alt="Email Icon" style={{width: '30px', height: '30px'}}/>
                        <i className="fas fa-envelope"></i>
                    </button>
                    <button className="contact-button-foot" onClick={() => {
                        console.log("Instagram clicked");
                        window.open('https://www.instagram.com/shashankkannan/', '_blank');
                    }}>
                        <img src="/Techicons/win.png" alt="Instagram Icon" style={{width: '30px', height: '30px'}}/>
                        <i className="fas fa-instagram"></i>
                    </button>
                </div>
                <h5 className="copy slideIn1" style={{color: "white"}}>&copy; Shashank Kannan All rights reserved 2024</h5>
            </div>
        </div>
    );
}
