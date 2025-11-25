
import { ContentPageLayout } from "@/components/layout/content-page-layout";

export default function DocumentationPage() {
  return (
    <ContentPageLayout
      title="Documentation"
    >
      <div className="bg-white/50 backdrop-blur-sm p-8 rounded-lg">
        <p className="text-muted-foreground">
          Welcome to our documentation. Here you will find all the information you need to get started with Aonflow.
        </p>
      </div>
    </ContentPageLayout>
  );
}
