import React from 'react';
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';
import nextConfig from '../../next.config';

const ResumeButton = () => {
  // IMPORTANT: Ensure your resume file is named exactly this and is in the /public folder.
  const resumeFile = "Naveenkumar_L_Resume.pdf";
  const basePath = nextConfig.basePath || '';
  const resumePath = `${basePath}/${resumeFile}`;

  return (
    <Button asChild size="lg" className="group">
      <a
        href={resumePath}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open resume in new tab"
        className="inline-flex items-center px-4 py-2 rounded-md bg-[#385d65] hover:bg-[#2c464c] text-white font-semibold text-sm transition"
      >
        <FileText className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
        Download CV
      </a>
    </Button>
  );
};

export default ResumeButton;
