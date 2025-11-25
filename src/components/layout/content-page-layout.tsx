import { type ReactNode } from "react";
import { BackgroundAnimation } from "@/components/background-animation";

type ContentPageLayoutProps = {
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export function ContentPageLayout({ title, subtitle, children }: ContentPageLayoutProps) {
  return (
    <div className="bg-background text-foreground">
      <section className="relative w-full overflow-hidden bg-[#e9edfb]">
        <BackgroundAnimation className="absolute inset-0 z-0 opacity-50" />
        <div className="container relative z-10 mx-auto max-w-4xl px-4 py-12 md:py-20 lg:py-24">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight font-headline text-primary">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-4 text-lg text-muted-foreground">
                {subtitle}
              </p>
            )}
          </div>
          <div className="space-y-8">
            {children}
          </div>
        </div>
      </section>
    </div>
  );
}
