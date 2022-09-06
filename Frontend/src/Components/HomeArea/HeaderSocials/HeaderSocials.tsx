import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

function HeaderSocials(): JSX.Element {
    return (
        <div className="HeaderSocials">
			<a href="http://www.linkedin.com/in/antonrv" target="_blank"><BsLinkedin/></a>
            <a href="https://github.com/AntonR-github" target="_blank"><FaGithub/></a>
        </div>
    );
}

export default HeaderSocials;
