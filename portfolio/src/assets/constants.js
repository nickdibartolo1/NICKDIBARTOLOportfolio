import { FaGithub, FaLinkedin } from 'react-icons/fa'

export const links = [
    { name: 'Resume', to: '/resume' },
    { name: 'Projects', to: '/projects' },
    { name: 'About Me', to: '/about-me' },
    { name: 'Home', to: '/home' },
];

export const SocialMedia = () => {
    return (
        <div className='flex mt-2'>
            <a href='https://github.com/nickdibartolo1/'>
                <FaGithub
                    className='mx-3 cursor-pointer'
                    size='30px'
                />
            </a>
            <a href='https://www.linkedin.com/in/nicholas-dibartolo-a93310245/'>
                <FaLinkedin
                    className='mx-3 cursor-pointer'
                    size='30px'
                />
            </a>
        </div>
    )
}

