const Projects = () => {
    return (
        <section id="projects" className="section">
            <div className="container">
                <h2>Projects</h2>
                <div className="project-item">
                    <h3>Recipe Finder (2023-2024)</h3>
                    <p>The Recipe Finder project employs HTML, CSS, and JavaScript to create a user-friendly recipe search interface, seamlessly integrated with the Edamam API.</p>
                    <p><strong>Technologies used:</strong> HTML, CSS, JavaScript, Edamam API</p>
                </div>
                <div className="project-item">
                    <h3>Fitness Tracker (2024)</h3>
                    <p>Developed a full-stack web application using the MERN stack to help users track their workouts, nutrition, and progress towards fitness goals.</p>
                    <p><strong>Technologies used:</strong> MongoDB, Express.js, React.js, Node.js, RESTful APIs</p>
                </div>
                <div className="project-item">
                    <h3>Sentiment Analysis in CMTET</h3>
                    <p>The Sentiment Analysis project in CMTET uses machine learning to categorize text into positive, negative, or neutral sentiments.</p>
                </div>
                <div className="project-item">
                    <h3>Portfolio</h3>
                </div>
            </div>
        </section>
    );
};

export default Projects;
