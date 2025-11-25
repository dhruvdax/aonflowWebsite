
"use client";

import { useEffect, useRef, useActionState } from "react";
import { useFormStatus } from "react-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { submitContactForm, type ContactFormState } from "@/app/contact/actions";
import { Loader2 } from "lucide-react";
import Link from "next/link";

const partnerContactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  companyName: z.string().optional(),
  jobTitle: z.string().optional(),
  phone: z.string().optional(),
  partnerType: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one partner type.",
  }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type PartnerFormValues = z.infer<typeof partnerContactFormSchema>;


const partnerTypes = [
    { id: "technology", label: "Technology / ISV Partner" },
    { id: "system-integrator", label: "System Integrator" },
    { id: "referral", label: "Referral" },
    { id: "reseller", label: "Reseller" },
    { id: "cloud-service-provider", label: "Cloud Service Provider" },
    { id: "managed-service-provider", label: "Managed Service Provider (MSP)" },
];


function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full" size="lg">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
      Submit
    </Button>
  );
}

export function PartnerContactForm() {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction] = useActionState(submitContactForm, {
    message: "",
    status: "idle",
  });

  const form = useForm<PartnerFormValues>({
    resolver: zodResolver(partnerContactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      companyName: "",
      jobTitle: "",
      phone: "",
      partnerType: [],
      message: "",
    },
  });

  useEffect(() => {
    if (state.status === "success") {
      toast({
        title: "Success!",
        description: state.message,
      });
      form.reset();
      if (formRef.current) {
        formRef.current.reset();
      }
    } else if (state.status === "error") {
      toast({
        title: "Error",
        description: state.message,
        variant: "destructive",
      });
    }
  }, [state, toast, form]);

  const wrappedAction = (formData: FormData) => {
    // Manually construct businessType from checkboxes
    const partnerType = partnerTypes
        .filter(type => formData.get(type.id) === 'on')
        .map(type => type.label)
        .join(', ');
    
    const newFormData = new FormData(formRef.current!);
    newFormData.set('businessType', partnerType);

    form.handleSubmit(() => {
      formAction(newFormData);
    })();
  };

  return (
    <Form {...form}>
      <form action={wrappedAction} ref={formRef} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name *</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Business Email *</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="companyName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company *</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone no.</FormLabel>
                <FormControl>
                  <Input type="tel" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
           <div className="md:col-span-2">
             <FormField
                control={form.control}
                name="jobTitle"
                render={({ field }) => (
                <FormItem>
                    <FormLabel>Job title *</FormLabel>
                    <FormControl>
                    <Input {...field} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )}
            />
           </div>
           
        </div>
        
        <FormField
            control={form.control}
            name="partnerType"
            render={() => (
                <FormItem>
                <div className="mb-4">
                    <FormLabel className="text-base">Partner Type *</FormLabel>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {partnerTypes.map((item) => (
                    <FormField
                    key={item.id}
                    control={form.control}
                    name="partnerType"
                    render={({ field }) => {
                        return (
                        <FormItem
                            key={item.id}
                            className="flex flex-row items-start space-x-3 space-y-0"
                        >
                            <FormControl>
                            <Checkbox
                                {...field}
                                name={item.id} // Set name for FormData
                                checked={field.value?.includes(item.id)}
                                onCheckedChange={(checked) => {
                                return checked
                                    ? field.onChange([...(field.value || []), item.id])
                                    : field.onChange(
                                        (field.value || []).filter(
                                        (value) => value !== item.id
                                        )
                                    )
                                }}
                            />
                            </FormControl>
                            <FormLabel className="font-normal text-sm">
                            {item.label}
                            </FormLabel>
                        </FormItem>
                        )
                    }}
                    />
                ))}
                </div>
                <FormMessage />
                </FormItem>
            )}
            />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  className="min-h-[120px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-col items-center">
            <SubmitButton />
        </div>
      </form>
    </Form>
  );
}
