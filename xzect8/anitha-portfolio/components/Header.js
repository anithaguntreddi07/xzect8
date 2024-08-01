import Link from 'next/link';

const Header = () => {
    return (
        <header>
            <div className="container">
                <nav>
                    <div id="logo">
                        <a href="#">Anitha's Portfolio</a>
                    </div>
                    <div className="menu">
                        <ul>
                            <li><Link href="#home">Home</Link></li>
                            <li><Link href="#about-me">About Me</Link></li>
                            <li><Link href="#skills">Skills</Link></li>
                            <li><Link href="#projects">My Projects</Link></li>
                            <li><Link href="#education">Education</Link></li>
                            <li><Link href="#contact">Contact</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
