
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center text-center min-h-[60vh]">
      <h2 className="text-4xl font-bold font-headline text-primary mb-4">Post Not Found</h2>
      <p className="text-lg text-muted-foreground mb-8">
        The post you are looking for does not exist. It might have been moved or deleted.
      </p>
      <Button asChild>
        <Link href="/blog">
            Go Back to Blog
        </Link>
      </Button>
    </div>
  );
}
