import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faXTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
    return (
        <footer className="text-[#335383] bg-gray-100">

            <div className="container mx-auto text-center ">
                <p className="text-sm mb-2">&copy; 2024 Scissor. All rights reserved.</p>
                <div className="flex justify-between space-x-4 m-2 pb-1">
                    <div>
                    <a href="https://yourportfolio.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white flex">
            <FontAwesomeIcon icon={faBriefcase} size="lg" /> <p>Portfolio</p>
          </a>
                    </div>

                    <div className=''>
                        <a href="https://x.com/imdisturbing9ja" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                            <FontAwesomeIcon icon={faXTwitter} size="lg" className='mr-4'/>
                        </a>
                        <a href="https://www.linkedin.com/in/victor-akpu-280565249/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                            <FontAwesomeIcon icon={faLinkedin} size="lg" />
                        </a>
                        
                    </div>
                </div>
            </div>
        </footer>
    )

}
export default Footer;