

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import parse, { domToReact, HTMLReactParserOptions, Element } from 'html-react-parser';
import { Calendar, User, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { BackgroundAnimation } from "@/components/background-animation";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import type { Metadata, ResolvingMetadata } from 'next'

type WPPost = {
  id: number;
  slug: string;
  date: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  _embedded?: {
    author?: { name: string }[];
    "wp:featuredmedia"?: { source_url: string }[];
    "wp:term"?: any[][];
  };
};

type Props = {
  params: { slug: string }
}

const API = "https://www.aonflow.com/blog/wp-json/wp/v2";

async function getPostBySlug(slug: string): Promise<WPPost | null> {
  const res = await fetch(`${API}/posts?slug=${encodeURIComponent(slug)}&_embed=1`, {
    next: { revalidate: 3600 }, // Revalidate every hour
  });

  if (!res.ok) return null;
  const arr = (await res.json()) as WPPost[];
  return arr?.[0] ?? null;
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found - Aonflow Blog',
      description: 'The post you are looking for could not be found.',
    }
  }

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || []

  const featuredImage = getFeaturedImage(post);

  return {
    title: `${post.title.rendered} - Aonflow Blog`,
    description: post.excerpt.rendered.replace(/<[^>]+>/g, ''), // Strip HTML for description
    alternates: {
      canonical: `https://www.aonflow.com/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title.rendered,
      description: post.excerpt.rendered.replace(/<[^>]+>/g, ''),
      images: featuredImage ? [featuredImage, ...previousImages] : previousImages,
    },
  }
}

function getFeaturedImage(post: WPPost): string | null {
  return post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ?? null;
}

function getAuthor(post: WPPost): string | null {
  return post._embedded?.author?.[0]?.name ?? null;
}

function getCategories(post: WPPost): { name: string; link: string }[] {
  const terms = post._embedded?.["wp:term"]?.[0] ?? [];
  return terms.map((t: any) => ({ name: t.name, link: t.link })).filter(Boolean);
}

const CtaBlock1 = () => (
    <Card className="relative my-8 overflow-hidden bg-white/50 backdrop-blur-sm">
        <CardContent className="p-6">
            <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
                <div className="flex-1">
                    <h2 className="mb-1 text-xl font-bold text-primary font-headline">Aonflow is the leading integration platform.</h2>
                    <p className="text-sm text-muted-foreground">
                        You can kick-start by integrating your first-ever workflow in just a matter of minutes.
                    </p>
                </div>
                <Button asChild size="lg" className="mt-4 w-full md:mt-0 md:w-auto">
                    <Link href="/contact">Book a Demo</Link>
                </Button>
            </div>
        </CardContent>
    </Card>
);

const CtaBlock2 = () => (
    <Card className="relative my-8 overflow-hidden bg-white/50 backdrop-blur-sm">
        <CardContent className="p-6">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                <div className="flex-1 text-center md:text-left">
                    <h2 className="mb-1 text-xl font-bold text-primary font-headline">Aonflow iPaaS – Free for First 3 Months!</h2>
                    <p className="text-sm text-muted-foreground">
                        Build and run up to 1,500 transactions monthly with no cost. No payment info needed!
                    </p>
                </div>
                <Button asChild size="lg" className="mt-4 w-full md:mt-0 md:w-auto text-primary-foreground">
                    <Link href="https://app.aonflow.com/auth/signup">Sign Up Now</Link>
                </Button>
            </div>
        </CardContent>
    </Card>
);


const ctaPlaceholders = [
    {
      regex: /Aonflow is the leading integration platform\..*?Book a Demo/gs,
      component: CtaBlock1,
      placeholder: '%%CTA_PLACEHOLDER_1%%'
    },
    {
      regex: /Aonflow iPaaS – Free for First 3 Months!.*?Sign Up Now/gs,
      component: CtaBlock2,
      placeholder: '%%CTA_PLACEHOLDER_2%%'
    }
];

const parserOptions: HTMLReactParserOptions = {
    replace: (domNode: any) => {
        if (domNode instanceof Element && domNode.name === 'body') {
            return <>{domToReact(domNode.children, parserOptions)}</>;
        }
        if (domNode instanceof Element && domNode.attribs) {
            // Handle paragraphs that only contain an image (and maybe some whitespace)
            if (domNode.name === 'p') {
                const imageChild = domNode.children.find((child: any) => child.name === 'img' || (child.name === 'a' && child.children.some((c: any) => c.name === 'img')));
                const isImageParagraph = imageChild && domNode.children.every((child: any) => 
                    child.type === 'tag' ? (child === imageChild || child.name === 'br') : (child.type === 'text' && child.data.trim() === '')
                );

                if (isImageParagraph) {
                     const imgNode = imageChild.name === 'img' ? imageChild : imageChild.children.find((c:any) => c.name === 'img');
                     const { src, alt, width, height } = imgNode.attribs;
                     let widthNum = width ? parseInt(width, 10) : 800;
                     let heightNum = height ? parseInt(height, 10) : 450;
                     if (isNaN(widthNum)) widthNum = 800;
                     if (isNaN(heightNum)) heightNum = 450;
                     
                     const imageElement = (
                        <div className="relative my-6 overflow-hidden rounded-lg">
                           <Image
                               src={src}
                               alt={alt || 'Blog post image'}
                               width={widthNum}
                               height={heightNum}
                               className="object-cover w-full h-auto"
                               unoptimized
                           />
                       </div>
                     );

                    if (imageChild.name === 'a') {
                        return <Link href={imageChild.attribs.href} target="_blank" rel="noopener noreferrer">{imageElement}</Link>;
                    }
                    return imageElement;
                }
            }

            // Handle standalone images that might not be in a <p>
            if (domNode.name === 'img') {
                const { src, alt, width, height } = domNode.attribs;
                
                let widthNum = width ? parseInt(width, 10) : 800;
                let heightNum = height ? parseInt(height, 10) : 450;
                if (isNaN(widthNum)) widthNum = 800;
                if (isNaN(heightNum)) heightNum = 450;

                return (
                     <div className="relative my-6 overflow-hidden rounded-lg">
                        <Image
                            src={src}
                            alt={alt || 'Blog post image'}
                            width={widthNum}
                            height={heightNum}
                            className="object-cover w-full h-auto"
                            unoptimized
                        />
                    </div>
                );
            }
        }
    },
};

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  if (!post) {
    return notFound();
  }

  const image = getFeaturedImage(post);
  const author = getAuthor(post);
  const categories = getCategories(post);
  const date = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  
  let processedContent = post.content.rendered;

  ctaPlaceholders.forEach(({ regex, placeholder }) => {
    processedContent = processedContent.replace(regex, placeholder);
  });

  const contentParts = processedContent.split(/(%%CTA_PLACEHOLDER_\d+%%)/g);

  return (
    <div className="bg-background text-foreground">
        <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16 max-w-4xl">
            <article>
                <header className="mb-8">
                    <Button asChild variant="outline" className="mb-8">
                        <Link href="/blog" className="flex items-center gap-2">
                            <ArrowLeft className="h-4 w-4" />
                            Back to Blog
                        </Link>
                    </Button>
                    
                    {categories.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                        {categories.map((cat) => (
                            <Badge key={cat.name} variant="secondary">
                                <Link href={cat.link} target="_blank" rel="noopener noreferrer">
                                    {cat.name}
                                </Link>
                            </Badge>
                        ))}
                        </div>
                    )}

                    <h1
                        className="text-3xl md:text-4xl font-bold font-headline text-foreground mb-4"
                        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                    />
                    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>{date}</span>
                        </div>
                        {author && (
                            <div className="flex items-center gap-2">
                                <User className="h-4 w-4" />
                                <span>By {author}</span>
                            </div>
                        )}
                    </div>
                </header>

                {image && (
                    <div className="relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
                        <Image
                            src={image}
                            alt={post.title.rendered}
                            fill
                            className="object-cover"
                            priority
                            unoptimized
                        />
                    </div>
                )}
                
                <div className="prose prose-lg dark:prose-invert max-w-none prose-p:text-muted-foreground prose-a:text-primary hover:prose-a:text-primary/80 prose-headings:font-headline prose-headings:text-foreground prose-strong:text-foreground prose-blockquote:border-primary prose-blockquote:text-muted-foreground prose-blockquote:not-italic">
                    {contentParts.map((part, i) => {
                        const ctaMatch = part.match(/%%CTA_PLACEHOLDER_(\d+)%%/);
                        if (ctaMatch) {
                            const placeholderIndex = parseInt(ctaMatch[1], 10) - 1;
                            const CtaComponent = ctaPlaceholders[placeholderIndex]?.component;
                            return CtaComponent ? <AnimateOnScroll key={i}><CtaComponent /></AnimateOnScroll> : null;
                        }
                        return <React.Fragment key={i}>{parse(part, parserOptions)}</React.Fragment>;
                    })}
                </div>
            </article>
        </div>
    </div>
  );
}
