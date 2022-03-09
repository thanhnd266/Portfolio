
//components
import About from './About/About';
import Education from './Education/Education';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';
import TheEnd from './TheEnd/TheEnd';

const Content = ({Section}) => {

    return (
        <div className="md:ml-[272px]">
            <Section id="about"><About /></Section>
            <Section id="education"><Education /></Section>
            <Section id="skills"><Skills /></Section>
            <Section id="projects"><Projects /></Section>
            <Section id="theend"><TheEnd /></Section>
        </div>
    )
}

export default Content;