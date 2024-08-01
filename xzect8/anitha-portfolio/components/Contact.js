const Contact = () => {
    return (
        <section id="contact" className="section">
            <div className="container">
                <h2>Contact Us</h2>
                <div>
                    <form action="submit.php" method="POST" className="contact-form">
                        <input type="text" name="name" placeholder="Your Name" required />
                        <input type="email" name="email" placeholder="Your Email" required />
                        <textarea name="message" placeholder="Your Message" required></textarea>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
