'use server';

/**
 * @fileOverview An AI agent for generating page descriptions based on page titles using web retrieval.
 *
 * - generatePageDescription - A function that handles the page description generation process.
 * - GeneratePageDescriptionInput - The input type for the generatePageDescription function.
 * - GeneratePageDescriptionOutput - The return type for the generatePageDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GeneratePageDescriptionInputSchema = z.object({
  pageTitle: z.string().describe('The title of the page to generate a description for.'),
});
type GeneratePageDescriptionInput = z.infer<typeof GeneratePageDescriptionInputSchema>;

const GeneratePageDescriptionOutputSchema = z.object({
  pageDescription: z.string().describe('The generated description of the page.'),
});
type GeneratePageDescriptionOutput = z.infer<typeof GeneratePageDescriptionOutputSchema>;

export async function generatePageDescription(input: GeneratePageDescriptionInput): Promise<GeneratePageDescriptionOutput> {
  return generatePageDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generatePageDescriptionPrompt',
  input: {schema: GeneratePageDescriptionInputSchema},
  output: {schema: GeneratePageDescriptionOutputSchema},
  prompt: `You are an expert content creator specializing in generating engaging and SEO-friendly page descriptions.

  Generate a concise and informative page description based on the provided page title. Use web retrieval to understand the context of the page title and adapt the writing style and length depending on the website's theme and purpose.

  Page Title: {{{pageTitle}}}
  `,
});

const generatePageDescriptionFlow = ai.defineFlow(
  {
    name: 'generatePageDescriptionFlow',
    inputSchema: GeneratePageDescriptionInputSchema,
    outputSchema: GeneratePageDescriptionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
