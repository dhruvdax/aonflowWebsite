"use server";

import { generatePageDescription } from "@/ai/flows/generate-page-description";
import { z } from "zod";

const formSchema = z.object({
  pageTitle: z.string().min(5, {
    message: "Page title must be at least 5 characters long.",
  }),
});

export type State = {
  description: string;
  error: string | null;
};

export async function generateDescriptionAction(
  prevState: State,
  formData: FormData
): Promise<State> {
  const validatedFields = formSchema.safeParse({
    pageTitle: formData.get("pageTitle"),
  });

  if (!validatedFields.success) {
    return {
      description: "",
      error: validatedFields.error.flatten().fieldErrors.pageTitle?.[0] || "Invalid input.",
    };
  }

  try {
    const result = await generatePageDescription({
      pageTitle: validatedFields.data.pageTitle,
    });
    return {
      description: result.pageDescription,
      error: null,
    };
  } catch (error) {
    console.error("AI generation failed:", error);
    return {
      description: "",
      error: "Failed to generate description. Please try again.",
    };
  }
}
