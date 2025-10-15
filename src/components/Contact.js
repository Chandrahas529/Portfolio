import "./Contact.css"
import contact_me from "../images/contactme.png"
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
function Contact() {
    const form = useRef();
    const [errors, setErrors] = useState({});

    const validate = (formData) => {
        const newErrors = {};
        
        if (!formData.user_name.trim()) {
        newErrors.user_name = "Name is required";
        }
        
        if (!formData.user_email.trim()) {
        newErrors.user_email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.user_email)) {
        newErrors.user_email = "Email is invalid";
        }

        if (!formData.message.trim()) {
        newErrors.message = "Message cannot be empty";
        }

        return newErrors;
    };

    const sendEmail = (e) => {
        e.preventDefault();

        const formData = {
            user_name: form.current.user_name.value,
            user_email: form.current.user_email.value,
            message: form.current.message.value,
        };

        const validationErrors = validate(formData);
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            emailjs.sendForm(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                form.current,
                process.env.REACT_APP_EMAILJS_PUBLIC_KEY
            ).then(
                (result) => {
                alert("Message sent successfully!");
                form.current.reset(); // Clear the form after sending
                },
                (error) => {
                alert("Failed to send message. Try again later.");
                }
            );
        }
    }
    return <div className="contact">
        <h2>Contact me</h2>
        <div className="form-ctn">
            <img className="contact-me" src={contact_me} />
            <form ref={form} onSubmit={sendEmail} className="form">
                <div className="labels"><label>Name </label></div>
                <input type="text" name="user_name" placeholder="John Doe" />
                <div className="error-labels">{errors.user_name && <p className="error">{errors.user_name}</p>}</div>
                <div className="labels"><label>Email </label></div>
                <input type="text" name="user_email" placeholder="john@gmail.com" />
                <div className="error-labels">{errors.user_email && <p className="error">{errors.user_email}</p>}</div>
                <div className="labels"><label>Message </label></div>
                <textarea name="message" placeholder="hello"></textarea>
                 <div className="error-labels">{errors.message && <p className="error">{errors.message}</p>}</div>
                <input type="submit" />
            </form>
        </div>
    </div>
}
export default Contact;