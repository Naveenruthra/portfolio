'use server';

import { z } from 'zod';

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

  // Here you would typically send an email or save to a database.
  // For this example, we'll just log it to the console.
  console.log('Form submitted successfully:');
  console.log(validatedFields.data);

  // You can add your email sending logic here, e.g., using Resend or Nodemailer.
  
  return {
    message: 'Your message has been sent successfully!',
    success: true,
  };
}
