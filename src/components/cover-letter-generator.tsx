"use client";

import * as React from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { generateCoverLetter } from '@/ai/flows/generate-cover-letter';
import { LoadingDots } from './ui/loading-dots';

const formSchema = z.object({
  jobDescription: z.string().min(50, {
    message: "Job description must be at least 50 characters.",
  }),
  portfolioSummary: z.string(),
});

type FormValues = z.infer<typeof formSchema>;

interface CoverLetterGeneratorProps {
  portfolioSummary: string;
}

export default function CoverLetterGenerator({ portfolioSummary }: CoverLetterGeneratorProps) {
  const [isLoading, setIsLoading] = React.useState(false);
  const [generatedLetter, setGeneratedLetter] = React.useState('');
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      jobDescription: '',
      portfolioSummary: portfolioSummary,
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);
    setGeneratedLetter('');
    try {
      const result = await generateCoverLetter(data);
      setGeneratedLetter(result.coverLetter);
    } catch (error) {
      console.error('Error generating cover letter:', error);
      toast({
        variant: 'destructive',
        title: 'An error occurred',
        description: 'Failed to generate the cover letter. Please try again.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-3xl">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="jobDescription"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg">Job Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Paste the job description here..."
                    className="min-h-[150px] bg-background"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isLoading} className="w-full sm:w-auto">
            {isLoading ? <LoadingDots /> : 'Generate Cover Letter'}
          </Button>
        </form>
      </Form>
      {(isLoading || generatedLetter) && (
        <div className="mt-8">
          <h3 className="text-2xl font-bold font-headline mb-4">Generated Cover Letter</h3>
          <Card className="min-h-[200px]">
            <CardContent className="p-6">
              {isLoading ? (
                <div className="flex items-center justify-center h-full">
                  <LoadingDots />
                </div>
              ) : (
                <pre className="whitespace-pre-wrap font-body text-sm">{generatedLetter}</pre>
              )}
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
