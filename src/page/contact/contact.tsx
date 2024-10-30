import ChangeStyleSaison from "../../components/changeStyleSaison"
import Footer from "../../components/footer"
import Navbar from "../../components/navbar"
import '../../assets/style/styleContact.css'
import { useState } from "react"

const Contact =({}) => {

    const [isCheck, setIsCheck] = useState(() => {
        const saved = localStorage.getItem('toggleState');
        return saved !== null ? JSON.parse(saved) : false;
    });

    const handleCheckChange = (newState: boolean | ((prevState: boolean) => boolean)) => {
        setIsCheck(newState);
    };

    return(
        <div className={`${isCheck ? 'festive' : 'seasonal'} body`}>
            <Navbar/>
            <ChangeStyleSaison onCheckChange={handleCheckChange}/>
            <div className={`${isCheck ? 'festive' : 'seasonal'} content`}>
            <h1 className="contact-title">Contactez-nous</h1>
            <div className="contact-info">
                <div className="contact-details">
                    <h2>Nos coordonnées</h2>
                    <p><strong>Adresse :</strong>Route de Giez, Viarmes (95)</p>
                    <p><strong>Téléphone :</strong>07 68 35 26 75</p>
                    <p><strong>Email :</strong>dharmaboulay@gmail.com</p>
                </div>

                <div className="contact-hours">
                    <h2>Horaires de marché</h2>
                    <p><strong>Mercredi à Viarmes:</strong> 8h00 - 13h00</p>
                    <p><strong>Dimanche à L'isle Adam:</strong> 8h00 - 13h00</p>
                </div>
            </div>

            <div className="contact-map">
                <h2>Localisation</h2>
                <p>Nous sommes situés à Viarmes, accessible depuis la ligne H :</p>
                <div className="map-placeholder">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2610.7180374560717!2d2.382011076856315!3d49.129989971370286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e644292c006223%3A0xa9a335733c7b1cd7!2sRte%20de%20Giez%2C%2095270%20Viarmes!5e0!3m2!1sfr!2sfr!4v1729361227214!5m2!1sfr!2sfr" width="100%" height="100%" style={{border:0}} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
                
            </div>
            <Footer />
        </div>
    )
}

export default Contact