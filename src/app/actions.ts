'use server';

import { z } from 'zod';
import { Resend } from 'resend';
import { socialLinks } from '@/lib/data';

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters.'),
  email: z.string().email('Invalid email address.'),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
});

export async function submitContactForm(prevState: any, formData: FormData) {
  const validatedFields = contactSchema.safeParse({
    fullName: formData.get('fullName'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Validation failed. Please check your input.',
      success: false,
    };
  }

  const { fullName, email, message } = validatedFields.data;

  try {
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact Form <onboarding@resend.dev>',
      to: socialLinks.email,
      subject: `New message from ${fullName}`,
      reply_to: email,
      html: `<p>You have received a new message from your portfolio contact form.</p>
             <p><strong>Name:</strong> ${fullName}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong></p>
             <p>${message}</p>`,
    });

    if (error) {
      console.error('Resend error:', error);
      return {
        message: 'There was an error sending your message. Please try again later.',
        success: false,
      };
    }

    return {
      message: 'Your message has been sent successfully!',
      success: true,
    };
  } catch (exception) {
    console.error('Email sending exception:', exception);
    return {
      message: 'An unexpected error occurred. Please try again.',
      success: false,
    };
  }
}
