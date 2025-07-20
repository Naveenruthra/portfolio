
import Image from 'next/image';
import Link from 'next/link';
import { Award, Briefcase, Github, GraduationCap, Linkedin, Mail, Menu, FileText, Sparkles, Code, Server, Wrench } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';

import { SKILLS, WORK_EXPERIENCE, PROJECTS, EDUCATION, CERTIFICATIONS, socialLinks } from '@/lib/data';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="text-lg font-bold font-headline sm:inline-block">Naveenkumar L</span>
          </Link>
          <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-primary text-foreground/80"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end">
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

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        {/* About Me Section */}
        <section id="about" className="w-full pt-24 md:pt-32 lg:pt-40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-4">
                 <h1 className="text-4xl font-bold tracking-tighter font-headline sm:text-5xl md:text-6xl xl:text-7xl/none">
                  Hi, I’m Naveenkumar L
                </h1>
                 <p className="max-w-[700px] text-muted-foreground md:text-xl mx-auto">
                  I'm a Senior Software Engineer specializing in Flutter, crafting modern web and mobile experiences with a passion for clean architecture and scalable applications.
                </p>
              </div>
               <div className="flex flex-col gap-4 min-[400px]:flex-row justify-center pt-4">
                <Button asChild size="lg" className="group">
                  <a href="/Naveenkumar_L_Resume.pdf" target="_blank" rel="noopener noreferrer">
                    <FileText className="mr-2 h-5 w-5 transition-transform group-hover:translate-x-1" /> View Resume
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
        </section>

        {/* Skills Section */}
        <section id="skills" className="w-full bg-secondary">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter font-headline sm:text-4xl">Technical Skills</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  A snapshot of the technologies and tools I work with.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl justify-center gap-6 pt-12 sm:grid-cols-2 lg:grid-cols-3">
              {SKILLS.map((skill) => {
                const Icon = skillIcons[skill.category] || Code;
                return (
                  <Card key={skill.category} className="border-2 border-transparent hover:border-primary transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
                    <CardHeader className="flex flex-row items-center gap-4">
                      <Icon className="w-8 h-8 text-primary" />
                      <CardTitle className="font-headline text-2xl">{skill.category}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-wrap gap-2">
                      {skill.technologies.map((tech) => (
                        <Badge key={tech} variant="default" className="text-sm cursor-pointer hover:bg-primary/80">{tech}</Badge>
                      ))}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Work Experience Section */}
        <section id="experience" className="w-full">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter font-headline sm:text-4xl">Work Experience</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  My professional journey as a software developer.
                </p>
              </div>
            </div>
            <div className="relative mx-auto max-w-4xl">
              <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-gradient-to-b from-primary/50 to-accent/50 rounded-full"></div>
              {WORK_EXPERIENCE.map((job, index) => (
                <div key={job.company} className={`relative mb-12 flex w-full items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-[calc(50%-2rem)] ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                     <p className="text-lg font-semibold text-primary">{job.period}</p>
                  </div>
                  <div className={`w-[calc(50%+2rem)] ${index % 2 === 0 ? 'pl-8' : 'pr-8'}`}>
                    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-primary">
                      <CardHeader>
                        <CardTitle className="font-headline text-xl">{job.role}</CardTitle>
                        <CardDescription className="text-md">{job.company}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                          {job.tasks.map((task) => (
                            <li key={task}>{task}</li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="absolute left-1/2 top-1/2 z-10 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary ring-8 ring-background flex items-center justify-center">
                    <Briefcase className="w-4 h-4 text-primary-foreground"/>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="w-full bg-secondary">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter font-headline sm:text-4xl">Projects</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  A selection of my internal projects, showcasing my problem-solving skills.
                </p>
              </div>
            </div>
            <div className="mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:max-w-5xl">
              {PROJECTS.map((project) => (
                <Card key={project.title} className="flex flex-col transform hover:-translate-y-2 transition-transform duration-300 hover:shadow-2xl">
                  <CardHeader>
                    <CardTitle className="font-headline">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">{project.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Education & Certifications Section */}
        <section id="education" className="w-full">
          <div className="container px-4 md:px-6">
            <div className="grid gap-16 md:grid-cols-2">
              <div className="space-y-8">
                <h2 className="text-3xl font-bold tracking-tighter font-headline sm:text-4xl flex items-center gap-4"><GraduationCap className="w-10 h-10 text-primary"/> Education</h2>
                {EDUCATION.map((edu) => (
                  <div key={edu.degree}>
                    <h3 className="text-xl font-semibold font-headline">{edu.degree}</h3>
                    <p className="text-muted-foreground">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground">{edu.year}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-8">
                <h2 className="text-3xl font-bold tracking-tighter font-headline sm:text-4xl flex items-center gap-4"><Award className="w-10 h-10 text-primary"/> Certifications</h2>
                {CERTIFICATIONS.map((cert) => (
                  <div key={cert.name}>
                    <h3 className="text-xl font-semibold font-headline">{cert.name}</h3>
                    <p className="text-muted-foreground">{cert.provider}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full bg-secondary">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-xl space-y-8">
              <div className="space-y-4 text-center">
                <h2 className="text-3xl font-bold tracking-tighter font-headline sm:text-4xl">Get in Touch</h2>
                <p className="text-muted-foreground text-lg">
                  Have a project in mind, a question, or just want to say hi? I'd love to hear from you.
                </p>
              </div>
              <Card className="p-6 md:p-8 bg-card shadow-lg">
                <CardContent className="p-0">
                  <form action="https://formsubmit.co/naveenruthra.l9@gmail.com" method="POST" className="space-y-6">
                    {/* FormSubmit.co settings */}
                    <input type="hidden" name="_subject" value="New submission from your portfolio!" />
                    <input type="hidden" name="_next" value="https://naveens-digital-domain.web.app/#contact" />

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
                      <textarea id="message" name="message" placeholder="Your message..." rows={5} required className="form-input"></textarea>
                    </div>
                    <Button type="submit" className="w-full">Send Message</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

      </main>
      <footer className="py-8 w-full border-t bg-background">
        <div className="container flex flex-col sm:flex-row justify-between items-center gap-4">
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
