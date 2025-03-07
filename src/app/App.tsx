import './styles/index.scss';
import { AboutSelf } from '@/widgets/AboutSelf';
import { Experience } from '@/widgets/Experience';
import { Footer } from '@/widgets/Footer';
import { Header } from '@/widgets/Header';
import { Hero } from '@/widgets/Hero';
import { Projects } from '@/widgets/Projects';
import { Skills } from '@/widgets/Skills';
import { aboutData, expData, heroText, projectsData, skillsData } from './dataBase';

export function App() {
  return (
    <>
      <Header />
      <Hero text={heroText} />
      <Skills skillsData={skillsData} />
      <Experience expData={expData} />
      <AboutSelf aboutData={aboutData} />
      <Projects projectsData={projectsData} />
      <Footer />
    </>
  );
}
