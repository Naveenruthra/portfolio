import Image from 'next/image';
import Link from 'next/link';
import { Award, Briefcase, Github, GraduationCap, Linkedin, Mail, MapPin, Sparkles, Menu, FileText } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';

import { SKILLS, WORK_EXPERIENCE, PROJECTS, EDUCATION, CERTIFICATIONS, portfolioSummary, socialLinks } from '@/lib/data';
import CoverLetterGenerator from '@/components/cover-letter-generator';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'AI Tools', href: '#ai-tools' },
  { name: 'Contact', href: '#contact' },
];

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold font-headline sm:inline-block">Naveenkumar L</span>
          </Link>
          <nav className="hidden items-center gap-6 text-sm md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-foreground/80 text-foreground/60"
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
                <Menu className="h-5 w-5" />
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

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section id="home" className="w-full py-24 md:py-32 lg:py-40 xl:py-48 bg-card">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter font-headline sm:text-5xl xl:text-6xl/none">
                    Hi, I’m Naveenkumar L — a Flutter Developer crafting modern web & mobile experiences.
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Senior Software Engineer with a passion for clean architecture, BLoC pattern, and scalable apps.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    <a href="/Naveenkumar_L_Resume.pdf" target="_blank" rel="noopener noreferrer">
                      <FileText className="mr-2 h-4 w-4" /> View Resume
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="#contact">Contact</Link>
                  </Button>
                </div>
              </div>
              <Image
                src="/hero-image.jpeg"
                width="600"
                height="600"
                alt="Hero"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className="w-full">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-24">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter font-headline sm:text-4xl">About Me</h2>
                  <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                    I’m a results-driven Flutter developer from Sholinghur, India, with expertise in building scalable, maintainable, and responsive applications. I specialize in fintech and logistics app development using BLoC, REST APIs, and clean architecture.
                  </p>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <MapPin className="h-5 w-5" />
                  <span>Sholinghur, Tamil Nadu, India</span>
                </div>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/hero-image.jpeg"
                  width="300"
                  height="300"
                  alt="Naveenkumar L"
                  className="rounded-full object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="w-full bg-card">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter font-headline sm:text-4xl">My Skills</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A snapshot of the technologies and tools I work with.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl justify-center gap-4 pt-12 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8">
              {SKILLS.map((skill) => (
                <Card key={skill.category}>
                  <CardHeader>
                    <CardTitle className="font-headline">{skill.category}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-2">
                    {skill.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">{tech}</Badge>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Work Experience Section */}
        <section id="experience" className="w-full">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter font-headline sm:text-4xl">Work Experience</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  My professional journey as a software developer.
                </p>
              </div>
            </div>
            <div className="relative mx-auto max-w-3xl">
              <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-border"></div>
              {WORK_EXPERIENCE.map((job, index) => (
                <div key={job.company} className={`relative mb-8 flex w-full items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <Card className="shadow-md hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <CardTitle className="font-headline">{job.role}</CardTitle>
                        <CardDescription>{job.company} | {job.period}</CardDescription>
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
                  <div className="absolute left-1/2 top-1/2 z-10 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary ring-4 ring-background"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="w-full bg-card">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter font-headline sm:text-4xl">Projects</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A selection of my internal projects, showcasing my problem-solving skills.
                </p>
              </div>
            </div>
            <div className="mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:max-w-5xl">
              {PROJECTS.map((project) => (
                <Card key={project.title} className="flex flex-col">
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
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter font-headline sm:text-4xl mb-8 flex items-center gap-4"><GraduationCap className="w-8 h-8"/> Education</h2>
                <div className="space-y-6">
                  {EDUCATION.map((edu) => (
                    <div key={edu.degree}>
                      <h3 className="text-xl font-semibold font-headline">{edu.degree}</h3>
                      <p className="text-muted-foreground">{edu.institution}</p>
                      <p className="text-sm text-muted-foreground">{edu.year}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tighter font-headline sm:text-4xl mb-8 flex items-center gap-4"><Award className="w-8 h-8"/> Certifications</h2>
                <div className="space-y-6">
                  {CERTIFICATIONS.map((cert) => (
                    <div key={cert.name}>
                      <h3 className="text-xl font-semibold font-headline">{cert.name}</h3>
                      <p className="text-muted-foreground">{cert.provider}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Cover Letter Generator */}
        <section id="ai-tools" className="w-full bg-card">
          <div className="container px-4 md:px-6">
             <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter font-headline sm:text-4xl flex items-center gap-3">
                  <Sparkles className="text-accent" /> AI Cover Letter Generator
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Paste a job description to generate a tailored cover letter based on my profile.
                </p>
              </div>
            </div>
            <CoverLetterGenerator portfolioSummary={portfolioSummary} />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter font-headline sm:text-4xl">Get in Touch</h2>
                <p className="text-muted-foreground">
                  Have a project in mind, a question, or just want to say hi? I'd love to hear from you.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Mail className="h-6 w-6 text-muted-foreground" />
                    <a href={`mailto:${socialLinks.email}`} className="hover:underline">
                      {socialLinks.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-4">
                    <Github className="h-6 w-6 text-muted-foreground" />
                    <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="hover:underline">
                      github.com/Naveenruthra
                    </a>
                  </div>
                  <div className="flex items-center gap-4">
                    <Linkedin className="h-6 w-6 text-muted-foreground" />
                    <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">
                      linkedin.com/in/naveenkumar-l
                    </a>
                  </div>
                </div>
              </div>
              <Card className="p-6">
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="full-name">Full Name</label>
                      <Input id="full-name" placeholder="Your Name" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email">Email</label>
                      <Input id="email" type="email" placeholder="your.email@example.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message">Message</label>
                    <Textarea id="message" placeholder="Your message..." rows={5} />
                  </div>
                  <Button type="submit" className="w-full">Send Message</Button>
                </form>
              </Card>
            </div>
          </div>
        </section>

      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-card">
        <p className="text-xs text-muted-foreground mx-auto">
          © 2025 Naveenkumar L. Built with Flutter 💙
        </p>
      </footer>
    </div>
  )
}
