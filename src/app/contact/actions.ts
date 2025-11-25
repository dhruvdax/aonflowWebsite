
"use server";

import { z } from "zod";
import { initializeFirebase } from "@/firebase";
import { addDocumentNonBlocking } from "@/firebase/non-blocking-updates";
import { collection } from "firebase/firestore";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  companyName: z.string().optional(),
  jobTitle: z.string().optional(),
  phone: z.string().optional(),
  businessType: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export type ContactFormState = {
  message: string;
  status: "success" | "error" | "idle";
  errors?: Record<string, string[] | undefined>;
};

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    companyName: formData.get("companyName"),
    jobTitle: formData.get("jobTitle"),
    phone: formData.get("phone"),
    businessType: formData.get("businessType"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      message: "Please correct the errors below.",
      status: "error",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const { firestore } = initializeFirebase();
    const submissionsCollection = collection(firestore, "contact_form_submissions");

    const submissionData = {
      name: validatedFields.data.name,
      workEmail: validatedFields.data.email,
      companyName: validatedFields.data.companyName || "",
      jobTitle: validatedFields.data.jobTitle || "",
      phoneNumber: validatedFields.data.phone || "",
      businessType: validatedFields.data.businessType || "",
      message: validatedFields.data.message,
      submissionDate: new Date().toISOString(),
    };
    
    addDocumentNonBlocking(submissionsCollection, submissionData);

    console.log("Contact form submitted successfully and saved to Firestore:");
    console.log(submissionData);
    
    // Note: Sending email requires a server-side function (e.g., Cloud Function)
    // that triggers on new document creation in 'contact_form_submissions'.
    // This setup only saves the data to Firestore.

    return {
      message: "Thank you for your message! We will get back to you soon.",
      status: "success",
    };
  } catch (error) {
    console.error("Failed to submit contact form:", error);
    return {
      message: "An unexpected error occurred. Please try again later.",
      status: "error",
    };
  }
}
