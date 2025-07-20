
'use client'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Award, Briefcase, Github, GraduationCap, Linkedin, Mail, Menu, FileText, Code, Server, Wrench, ArrowRight } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'

import { SKILLS, WORK_EXPERIENCE, PROJECTS, EDUCATION, CERTIFICATIONS, socialLinks } from '@/lib/data'

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
]

function Header() {
  const [activeSection, setActiveSection] = React.useState('about');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -70% 0px' }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-7xl items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="text-lg font-bold font-headline sm:inline-block">Naveen.dev</span>
          </Link>
          <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors hover:text-primary ${activeSection === link.href.substring(1) ? 'text-primary' : 'text-foreground/60'}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end">
           <Button asChild className="hidden md:flex group">
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                Hire Me <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
           </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="grid gap-6 text-lg font-medium mt-8">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                    >
                      {link.name}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

const skillIcons: { [key: string]: React.ElementType } = {
  "Languages & Frameworks": Code,
  "Backend & Database": Server,
  "Tools & Platforms": Wrench,
};

const SectionObserver: React.FC<{ children: React.ReactNode; id: string; className?: string }> = ({ children, id, className }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('section-enter-active');
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <section ref={ref} id={id} className={cn("section-enter", className)}>
      {children}
    </section>
  );
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background font-body">
      <Header />
      <main className="flex-1">
        <SectionObserver id="about" className="w-full pt-24 md:pt-32 lg:pt-40 border-b">
            <div className="container px-4 md:px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="flex justify-center md:order-last">
                    <div className="relative w-64 h-64 md:w-80 md:h-80">
                      <Image 
                        src="/profile.jpg"
                        alt="Naveenkumar L"
                        width={320}
                        height={320}
                        className="rounded-full object-cover border-4 border-primary shadow-lg"
                        priority
                      />
                    </div>
                  </div>
                  <div className="space-y-6 text-center md:text-left">
                    <div className="space-y-4">
                      <Badge variant="secondary" className="text-sm py-1 px-3 rounded-full font-medium">Senior Software Engineer & Flutter Expert</Badge>
                      <h1 className="text-4xl font-bold tracking-tighter font-headline sm:text-5xl md:text-6xl xl:text-7xl/none">
                        Naveenkumar L
                      </h1>
                      <p className="max-w-[700px] text-muted-foreground md:text-xl">
                        I build beautiful and scalable mobile & web applications with a focus on clean architecture and user-centric design.
                      </p>
                    </div>
                     <div className="flex flex-col gap-4 min-[400px]:flex-row justify-center md:justify-start pt-4">
                      <Button asChild size="lg" className="group">
                        <a href="/Naveenkumar_L_Resume.pdf" target="_blank" rel="noopener noreferrer">
                          <FileText className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" /> Download CV
                        </a>
                      </Button>
                      <Button asChild variant="outline" size="lg" className="group">
                        <Link href="#contact">
                          Contact Me <Mail className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"/>
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
            </div>
        </SectionObserver>

        <SectionObserver id="skills" className="w-full bg-card border-b">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter font-headline sm:text-4xl">My Technical Toolkit</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                    The technologies and platforms I use to bring ideas to life.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-6xl justify-center gap-6 pt-12 sm:grid-cols-2 lg:grid-cols-3">
                {SKILLS.map((skill) => {
                  const Icon = skillIcons[skill.category] || Code;
                  return (
                    <div key={skill.category} className="p-6 border rounded-xl bg-background hover:shadow-lg transition-shadow duration-300">
                      <div className="flex items-center gap-4 mb-4">
                        <Icon className="w-8 h-8 text-primary" />
                        <h3 className="font-headline text-2xl">{skill.category}</h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {skill.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-sm cursor-pointer hover:bg-accent hover:text-accent-foreground transition-colors">{tech}</Badge>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
        </SectionObserver>

        <SectionObserver id="experience" className="w-full border-b">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter font-headline sm:text-4xl">Work Experience</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                    My professional journey as a software engineer.
                  </p>
                </div>
              </div>
              <div className="relative mx-auto max-w-5xl">
                <div className="absolute left-3 top-0 h-full w-0.5 bg-border"></div>
                {WORK_EXPERIENCE.map((job, index) => (
                  <div key={job.company} className="relative pl-12 mb-12">
                     <div className="absolute -left-0 top-1.5 z-10 h-6 w-6 rounded-full bg-primary ring-8 ring-background flex items-center justify-center">
                      <Briefcase className="w-3.5 h-3.5 text-primary-foreground"/>
                    </div>
                    <p className="text-sm font-semibold text-primary">{job.period}</p>
                    <h3 className="font-headline text-xl font-bold mt-1">{job.role}</h3>
                    <p className="text-md text-muted-foreground mb-3">{job.company}</p>
                    <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                      {job.tasks.map((task) => (
                        <li key={task}>{task}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
        </SectionObserver>

        <SectionObserver id="projects" className="w-full bg-card border-b">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter font-headline sm:text-4xl">Featured Projects</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                    A selection of my internal projects, showcasing problem-solving and technical skills.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:max-w-6xl">
                {PROJECTS.map((project) => (
                  <Card key={project.title} className="flex flex-col bg-background transform hover:-translate-y-1 transition-transform duration-300 hover:shadow-xl">
                    <CardHeader>
                      <CardTitle className="font-headline text-xl">{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-muted-foreground">{project.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
        </SectionObserver>

        <SectionObserver id="education" className="w-full bg-card border-b">
            <div className="container px-4 md:px-6">
              <div className="grid gap-16 md:grid-cols-2">
                <div className="space-y-8">
                  <h2 className="text-3xl font-bold tracking-tighter font-headline flex items-center gap-4"><GraduationCap className="w-10 h-10 text-primary"/> Education</h2>
                  {EDUCATION.map((edu) => (
                    <div key={edu.degree}>
                      <h3 className="text-xl font-semibold font-headline">{edu.degree}</h3>
                      <p className="text-muted-foreground">{edu.institution}</p>
                      <p className="text-sm text-muted-foreground">{edu.year}</p>
                    </div>
                  ))}
                </div>
                <div className="space-y-8">
                  <h2 className="text-3xl font-bold tracking-tighter font-headline flex items-center gap-4"><Award className="w-10 h-10 text-primary"/> Certifications</h2>
                  {CERTIFICATIONS.map((cert) => (
                    <div key={cert.name}>
                      <h3 className="text-xl font-semibold font-headline">{cert.name}</h3>
                      <p className="text-muted-foreground">{cert.provider}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
        </SectionObserver>

        <SectionObserver id="contact" className="w-full">
            <div className="container px-4 md:px-6">
              <div className="mx-auto max-w-xl space-y-8">
                <div className="space-y-4 text-center">
                  <h2 className="text-3xl font-bold tracking-tighter font-headline sm:text-4xl">Get in Touch</h2>
                  <p className="text-muted-foreground text-lg">
                    Have a project in mind or just want to connect? Send me a message!
                  </p>
                </div>
                <Card className="p-6 md:p-8 bg-card shadow-lg">
                  <CardContent className="p-0">
                    <form action="https://formsubmit.co/naveenruthra.l9@gmail.com" method="POST" className="space-y-6">
                      <input type="hidden" name="_subject" value="New submission from your portfolio!" />
                       <input type="hidden" name="_next" value="https://naveens-digital-domain.web.app" />
                      <div className="space-y-2">
                        <label htmlFor="name" className="sr-only">Name</label>
                        <input type="text" id="name" name="name" placeholder="Your Name" required className="form-input" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="sr-only">Email</label>
                        <input type="email" id="email" name="email" placeholder="your.email@example.com" required className="form-input" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="message" className="sr-only">Message</label>
                        <textarea id="message" name="message" placeholder="Your message..." required className="form-input"></textarea>
                      </div>
                      <Button type="submit" className="w-full" size="lg">Send Message</Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
        </SectionObserver>

      </main>
      <footer className="py-8 w-full border-t bg-background">
        <div className="container flex flex-col sm:flex-row justify-between items-center gap-4 max-w-7xl">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Naveenkumar L. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="Github">
              <Github className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
            </a>
             <a href={`mailto:${socialLinks.email}`} aria-label="Email">
              <Mail className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
