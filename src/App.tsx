import { motion } from 'motion/react';
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0e0e0e]/80 backdrop-blur-md py-4 border-b border-white/5' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="font-heading font-bold text-xl tracking-tight text-white hover:text-[#d1ff4d] transition-colors">
          Pranshi.
        </a>
        <nav className="hidden md:flex gap-8">
          {['About', 'Skills', 'Projects', 'Achievements', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

const Hero = () => {
  return (
    <section id="about" className="min-h-screen flex items-center pt-24 pb-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 right-[-10%] w-[500px] h-[500px] bg-[#d1ff4d]/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid lg:grid-cols-12 gap-12 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col items-start"
        >
          <div className="inline-flex px-4 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/50 text-xs font-medium text-zinc-300 mb-8 items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#d1ff4d] animate-pulse"></span>
            Available for opportunities
          </div>
          
          <h1 className="font-heading text-5xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.05] text-white mb-6 tracking-tight">
            Hi, I'm Pranshi.<br />
            <span className="text-zinc-500">Full-Stack<br />Developer.</span>
          </h1>
          
          <p className="text-lg text-zinc-400 max-w-xl mb-10 leading-relaxed font-light">
            I'm a CSE Sophomore with hands-on experience in MERN stack development and a strong foundation in problem-solving. I build accessible, responsive, and visually appealing web applications.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="bg-[#d1ff4d] text-[#0e0e0e] px-8 py-4 rounded-full font-medium flex items-center gap-2 hover:bg-[#b5f011] transition-colors">
              See my work <ArrowUpRight className="w-4 h-4" />
            </a>
            <div className="flex gap-2">
              <a href="https://github.com/SnixPranshi01" target="_blank" rel="noreferrer" className="w-14 h-14 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-600 hover:bg-zinc-900 transition-all">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/pranshi16/" target="_blank" rel="noreferrer" className="w-14 h-14 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-600 hover:bg-zinc-900 transition-all">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="lg:col-span-5 relative flex justify-center lg:justify-end"
        >
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden relative group border-4 border-zinc-900 shadow-2xl">
            <img 
              src="https://github.com/SnixPranshi01.png" 
              alt="Pranshi Sharma" 
              className="w-full h-full object-cover object-center transition-all duration-700 hover:scale-105" 
            />
            {/* Removed dark gradient overlay for better visibility */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const SkillPill = ({ children }: { children: React.ReactNode }) => (
  <span className="px-5 py-2.5 rounded-full border border-zinc-800 bg-zinc-900/40 text-sm text-zinc-300 hover:border-zinc-700 hover:text-[#d1ff4d] hover:bg-zinc-800 transition-all cursor-default shadow-sm">
    {children}
  </span>
);

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-[#111111] overflow-hidden border-y border-white/5 relative">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#d1ff4d]/20 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Technical Arsenal</h2>
            <p className="text-zinc-400 font-light">Technologies and tools I use to bring ideas to life.</p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12 relative z-10">
          <div>
            <h3 className="text-lg font-heading font-semibold text-white mb-6 uppercase tracking-wider text-xs">Frontend</h3>
            <div className="flex flex-wrap gap-2.5">
              <SkillPill>React.js</SkillPill>
              <SkillPill>JavaScript (ES6+)</SkillPill>
              <SkillPill>HTML5 & CSS3</SkillPill>
              <SkillPill>Tailwind CSS</SkillPill>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-heading font-semibold text-white mb-6 uppercase tracking-wider text-xs">Backend & DB</h3>
            <div className="flex flex-wrap gap-2.5">
              <SkillPill>Node.js</SkillPill>
              <SkillPill>Express.js</SkillPill>
              <SkillPill>MongoDB</SkillPill>
              <SkillPill>RESTful APIs</SkillPill>
              <SkillPill>SQL / Relational DBs</SkillPill>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-heading font-semibold text-white mb-6 uppercase tracking-wider text-xs">Languages & Tools</h3>
            <div className="flex flex-wrap gap-2.5">
              <SkillPill>Java</SkillPill>
              <SkillPill>Python</SkillPill>
              <SkillPill>C / C++</SkillPill>
              <SkillPill>Git & GitHub</SkillPill>
              <SkillPill>Claude AI / Gemini</SkillPill>
              <SkillPill>Postman</SkillPill>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ title, desc, tech, index, image, link }: { title: string, desc: string, tech: string[], index: number, image: string, link: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className="group relative flex flex-col"
  >
    <a href={link} target="_blank" rel="noreferrer" className="block w-full h-full absolute inset-0 z-20" aria-label={`View ${title}`}></a>
    <div className="aspect-[4/3] rounded-3xl bg-zinc-900 overflow-hidden mb-6 relative transition-transform duration-500 ease-out border border-zinc-800 group-hover:border-zinc-600">
      <img src={image} alt={title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
      <div className="absolute inset-0 bg-[#0e0e0e]/40 group-hover:bg-transparent transition-colors duration-300 pointer-events-none"></div>
      <div className="absolute top-6 right-6 w-12 h-12 bg-[#0e0e0e]/80 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/10 z-10 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
        <ArrowUpRight className="text-white w-5 h-5" />
      </div>
    </div>
    <div className="px-2">
      <h3 className="text-2xl font-heading font-semibold text-white mb-2 group-hover:text-[#d1ff4d] transition-colors relative z-30 pointer-events-none">{title}</h3>
      <p className="text-zinc-400 mb-5 font-light leading-relaxed relative z-30 pointer-events-none">{desc}</p>
      <div className="flex flex-wrap gap-3 relative z-30 pointer-events-none">
        {tech.map((t) => (
          <span key={t} className="text-xs uppercase tracking-wider font-medium text-[#d1ff4d]/80">{t}</span>
        ))}
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="mb-16 md:mb-24">
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">Selected Work</h2>
          <p className="text-zinc-400 text-lg font-light max-w-xl">A collection of projects showcasing my experience in web development and problem-solving.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-20">
          <ProjectCard 
            index={0}
            title="MERN Task Manager"
            desc="Full-stack task management application with secure JWT authentication, robust CRUD APIs, and React hooks for dynamic state."
            tech={['React', 'Node.js', 'MongoDB', 'Express']}
            image="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2670&auto=format&fit=crop"
            link="https://github.com/SnixPranshi01/Task-Manager"
          />
          <ProjectCard 
            index={1}
            title="Currency Converter"
            desc="A clean, responsive web-based converter integrating live APIs for real-time exchange rates with a focus on smooth UX."
            tech={['HTML5', 'CSS3', 'JavaScript', 'REST API']}
            image="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2670&auto=format&fit=crop"
            link="https://github.com/SnixPranshi01/Currency-Converter"
          />
          <ProjectCard 
            index={2}
            title="AI - Animal Type Classification"
            desc="Machine learning model and web interface to accurately classify different types of animals from uploaded images."
            tech={['Python', 'Machine Learning', 'AI']}
            image="https://images.unsplash.com/photo-1474511320723-9a56873867b5?q=80&w=2672&auto=format&fit=crop"
            link="https://github.com/SnixPranshi01/AI-ATC"
          />
          <ProjectCard 
            index={3}
            title="The Jarvis Protocol"
            desc="An advanced AI-driven personal assistant inspired by Jarvis, featuring natural language processing and automation."
            tech={['Python', 'AI', 'NLP', 'Automation']}
            image="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2670&auto=format&fit=crop"
            link="https://github.com/SnixPranshi01/The-Jarvis-protocol1"
          />
        </div>
      </div>
    </section>
  );
};

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 md:py-32 bg-[#111111] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid lg:grid-cols-2 gap-16 md:gap-24">
        <div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-12 tracking-tight">Achievements &<br/>Activities</h2>
          
          <div className="space-y-10 border-l border-zinc-800 pl-8 ml-2 relative">
            {[
              { year: '2025', title: 'GirlScript Summer of Code (GSSoC\'25)', desc: 'Earned GSSoC Code Badge for open-source contributions; strengthened collaborative development skills.' },
              { year: '2025', title: 'Smart India Hackathon (SIH)', desc: 'College Level - Collaborated in a team to design and build innovative solutions using the MERN stack under tight deadlines.' },
              { year: 'Present', title: 'Coding Club Member', desc: 'Active member, IET Khandari, Dr. BhimRao Ambedkar University, Agra.' },
              { year: 'Ongoing', title: 'Competitive Programming', desc: 'Consistent practice on GeeksforGeeks for DSA and algorithmic problem-solving.' }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                <div className="absolute w-4 h-4 bg-[#111111] border-4 border-[#d1ff4d] rounded-full -left-[40px] top-1" />
                <span className="text-xs tracking-wider text-[#d1ff4d] font-semibold block mb-2 uppercase">{item.year}</span>
                <h3 className="text-xl font-heading font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-zinc-400 font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-12 tracking-tight">Education &<br/>Certifications</h2>
          
          <div className="space-y-6">
            <div className="bg-zinc-900/30 border border-zinc-800 rounded-[2rem] p-8 hover:border-zinc-700 transition-colors">
              <span className="text-xs text-zinc-500 font-medium tracking-wider uppercase mb-3 block">2024 — 2028</span>
              <h3 className="text-2xl font-heading font-semibold text-white mb-2">B.E. Computer Science</h3>
              <p className="text-zinc-400 mb-6">Dr. BhimRao Ambedkar University, Agra</p>
              <div className="inline-block px-4 py-1.5 bg-[#d1ff4d]/10 text-[#d1ff4d] rounded-full text-sm font-medium">CGPA: 7.6 (2nd Year)</div>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-zinc-900/30 border border-zinc-800 rounded-[2rem] p-8 hover:border-zinc-700 transition-colors">
                <span className="text-xs text-zinc-500 font-medium tracking-wider uppercase mb-3 block">2022 — 2023</span>
                <h3 className="text-xl font-heading font-semibold text-white mb-2">Class XII (CBSE)</h3>
                <p className="text-zinc-400 text-sm mb-4">Colonels Brightland Public School, Agra</p>
                <div className="text-zinc-300 font-medium text-lg">84.6%</div>
              </div>
              <div className="bg-zinc-900/30 border border-zinc-800 rounded-[2rem] p-8 hover:border-zinc-700 transition-colors">
                <span className="text-xs text-zinc-500 font-medium tracking-wider uppercase mb-3 block">2020 — 2021</span>
                <h3 className="text-xl font-heading font-semibold text-white mb-2">Class X (CBSE)</h3>
                <p className="text-zinc-400 text-sm mb-4">Colonels Brightland Public School, Agra</p>
                <div className="text-zinc-300 font-medium text-lg">78%</div>
              </div>
            </div>
            
            <div className="pt-6">
              <h3 className="text-xl font-heading font-semibold text-white mb-6">Certifications (Enrolled)</h3>
              <ul className="space-y-4">
                <li className="flex items-center text-zinc-400 font-light text-lg"><span className="w-2 h-2 bg-zinc-700 rounded-full mr-4" /> CS50's Intro to Python Programming (edX)</li>
                <li className="flex items-center text-zinc-400 font-light text-lg"><span className="w-2 h-2 bg-zinc-700 rounded-full mr-4" /> CS50's Intro to AI with Python (edX)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#d1ff4d]/5 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full text-center relative z-10">
        <h2 className="font-heading text-5xl md:text-[6rem] font-bold text-white mb-8 tracking-tight">Let's work together.</h2>
        <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
          Feel free to reach out for collaborations, opportunities, or just to say hi. I'm always open to discussing new projects and ideas.
        </p>
        
        <div className="flex flex-col items-center mb-24">
          <a href="mailto:pranshisharma4002@gmail.com" className="inline-flex items-center justify-center gap-3 bg-white text-[#0e0e0e] px-8 py-5 rounded-full font-medium text-lg hover:bg-[#d1ff4d] transition-colors mb-4 hover:scale-105 transform duration-300">
            Say Hello <Mail className="w-5 h-5" />
          </a>
          <a href="mailto:pranshisharma4002@gmail.com" className="text-zinc-400 hover:text-[#d1ff4d] transition-colors tracking-wide">
            pranshisharma4002@gmail.com
          </a>
        </div>
        
        <div className="border-t border-zinc-800/50 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-500 font-light">© {new Date().getFullYear()} Pranshi Sharma. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="https://github.com/SnixPranshi01" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/pranshi16/" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="bg-[#0e0e0e] text-zinc-300 font-sans min-h-screen selection:bg-[#d1ff4d] selection:text-[#0e0e0e]">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>
    </div>
  );
}
