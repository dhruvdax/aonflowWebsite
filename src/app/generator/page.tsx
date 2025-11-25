"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useEffect, useRef } from "react";
import { Bot, Loader2 } from "lucide-react";

import { generateDescriptionAction } from "@/app/generator/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

const initialState = {
  description: "",
  error: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending}>
      {pending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      Generate Description
    </Button>
  );
}

export default function GeneratorPage() {
  const [state, formAction] = useFormState(generateDescriptionAction, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if(!state.error && state.description) {
        formRef.current?.reset();
    }
  }, [state])

  return (
    <div className="container mx-auto flex min-h-[calc(100vh-10rem)] items-center justify-center px-4 py-12 md:px-6">
      <div className="w-full max-w-2xl space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tighter text-foreground sm:text-4xl md:text-5xl font-headline">
            AI Content Generator
          </h1>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Automatically generate a page description based on a title using web
            retrieval.
          </p>
        </div>

        <Card>
          <form action={formAction} ref={formRef}>
            <CardHeader>
              <CardTitle>Generate Description</CardTitle>
              <CardDescription>
                Enter a page title and let our AI craft the perfect description.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="pageTitle">Page Title</Label>
                <Input
                  id="pageTitle"
                  name="pageTitle"
                  placeholder="e.g., 'The Future of Renewable Energy'"
                  required
                />
                {state.error && (
                  <p className="text-sm font-medium text-destructive">
                    {state.error}
                  </p>
                )}
              </div>
            </CardContent>
            <CardFooter>
              <SubmitButton />
            </CardFooter>
          </form>
        </Card>

        {state.description && (
          <Card>
            <CardHeader className="flex flex-row items-center gap-2">
              <Bot className="h-6 w-6 text-primary" />
              <CardTitle>Generated Description</CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                readOnly
                value={state.description}
                className="h-32 text-base"
              />
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
