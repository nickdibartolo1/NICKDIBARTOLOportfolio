import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { AiOutlineHtml5 } from 'react-icons/ai'
import { DiCss3, DiJavascript1 } from 'react-icons/di'
import { SiTailwindcss } from 'react-icons/si'
import { FaReact } from 'react-icons/fa'


export const links = [
    { name: 'Resume', to: '/resume' },
    { name: 'Projects', to: '/projects' },
    { name: 'About Me', to: '/about-me' },
    { name: 'Home', to: '/home' },
];


export const grid = [
    {name: 'HTML', icon: AiOutlineHtml5 },
    {name: 'CSS', icon: DiCss3 },
    {name: 'JavaScript', icon: DiJavascript1 },
    {name: 'React JS', icon: FaReact},
    {name: 'Tailwind CSS', icon: SiTailwindcss },
]


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

