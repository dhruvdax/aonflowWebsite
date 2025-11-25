
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16 max-w-4xl animate-pulse">
      <Skeleton className="h-10 w-40 mb-8" />
      <Skeleton className="h-8 w-1/4 mb-4" />
      <h1 className="mb-4">
        <Skeleton className="h-12 w-full mb-2" />
        <Skeleton className="h-12 w-3/4" />
      </h1>
      <div className="flex items-center gap-6 mb-8">
        <Skeleton className="h-5 w-32" />
        <Skeleton className="h-5 w-24" />
      </div>
      <Skeleton className="h-96 w-full mb-8" />
      <div className="space-y-4">
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-5/6" />
        <Skeleton className="h-6 w-full mt-4" />
        <Skeleton className="h-6 w-2/3" />
      </div>
    </div>
  );
}
