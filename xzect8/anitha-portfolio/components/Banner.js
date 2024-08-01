const Banner = () => {
    return (
        <section id="home" className="section">
            <div className="container">
                <div className="banner-content">
                    <div className="banner-text">
                        <h1>Hello, I'm Anitha Guntreddi</h1>
                        <p>National Institute of Technology, Andhra Pradesh <br />Computer Science Student</p>
                        <p>Always ready to help and make things better and happier...</p>
                        <div className="social-icons">
                            <a href="https://drive.google.com/file/d/1QWheHeHErHi-5zkZYccrAeSNGMvgda8r/view?usp=drive_link" target="_blank" className="cv-link"><i className="fas fa-file-download"></i> CV</a>
                            <a href="https://www.linkedin.com/in/anitha-guntreddi-ba595b230/" target="_blank"><i className="fab fa-linkedin"></i></a>
                            <a href="https://github.com/anithaguntreddi07" target="_blank"><i className="fab fa-github"></i></a>
                            <a href="https://twitter.com/yourhandle" target="_blank"><i className="fab fa-twitter"></i></a>
                            <a href="https://instagram.com/yourprofile" target="_blank"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                    <div className="banner-image">
                        <img src="/pic.jpg" alt="Anitha Guntreddi" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
