import Marquee from 'react-fast-marquee';
import { FaJsSquare, FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiMongodb, SiTailwindcss, SiPostgresql,
    SiExpress, SiNestjs, SiSocketdotio, SiSass, SiFigma, SiCypress, SiStorybook } from 'react-icons/si';
import SectionTitle from '../SectionTitle/SectionTitle';

const Skills = () => {
    const skills = [
        { icon: <FaJsSquare />, name: 'JavaScript' },
        { icon: <SiTypescript />, name: 'TypeScript' },
        { icon: <FaReact />, name: 'React' },
        { icon: <SiNextdotjs />, name: 'Next.js' },
        { icon: <FaNodeJs />, name: 'Node.js' },
        { icon: <SiExpress />, name: 'Express.js' },
        { icon: <SiNestjs />, name: 'Nest.js' },
        { icon: <SiSocketdotio />, name: 'Socket.io' },
        { icon: <SiPostgresql />, name: 'PostgreSQL' },
        { icon: <SiMongodb />, name: 'MongoDB' },
        { icon: <SiSass />, name: 'Sass/SCSS' },
        { icon: <SiTailwindcss />, name: 'TailwindCSS' },
        { icon: <SiFigma />, name: 'Figma' },
        { icon: <SiCypress />, name: 'Cypress' },
        { icon: <SiStorybook />, name: 'Storybook' },
        { icon: <FaGitAlt />, name: 'Git' }
    ];

    return (
       <div>
         <SectionTitle
            heading="Skills"
            subheading="The skills, tools, and technologies I have learned so far"
            
            >

            </SectionTitle>
         <div className="flex flex-col items-center my-10">
           
           

            <Marquee gradient={false} speed={50} className="space-x-16 overflow-hidden">
                <div className="flex flex-col items-center space-y-8">
                    <div className="flex space-x-16">
                        {skills.slice(0, Math.ceil(skills.length / 2)).map((skill, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <div className="text-4xl text-gray-700 mb-2">{skill.icon}</div>
                                <p className="text-sm text-gray-600">{skill.name}</p>
                            </div>
                        ))}
                    </div>
                    <div className="flex space-x-16">
                        {skills.slice(Math.ceil(skills.length / 2)).map((skill, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <div className="text-4xl text-gray-700 mb-2">{skill.icon}</div>
                                <p className="text-sm text-gray-600">{skill.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Marquee>
        </div>
       </div>
    );
};

export default Skills;
