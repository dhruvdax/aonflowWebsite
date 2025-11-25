
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { BackgroundAnimation } from "@/components/background-animation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Calendar, Tag, ChevronsLeft, ChevronLeft, ChevronRight, ChevronsRight } from "lucide-react";

interface WPPost {
  id: number;
  date: string;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  link: string;
  _embedded?: {
    "wp:featuredmedia"?: { source_url: string }[];
    "wp:term"?: { name: string, link: string }[][];
  };
}

export default function BlogPage() {
  const [posts, setPosts] = useState<WPPost[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async (pageNumber: number) => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://www.aonflow.com/blog/wp-json/wp/v2/posts?per_page=6&page=${pageNumber}&order=desc&orderby=date&_embed=1`
      );
      if (!res.ok) {
        throw new Error('Failed to fetch posts');
      }
      const data = await res.json();
      const total = res.headers.get("x-wp-totalpages");
      setTotalPages(total ? parseInt(total) : 1);
      setPosts(data);
      setPage(pageNumber);
    } catch (error) {
      console.error(error);
      setPosts([]); // Clear posts on error
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts(1);
  }, []);
  
  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      fetchPosts(newPage);
       window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  const renderPagination = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5;
    let startPage, endPage;

    if (totalPages <= maxPagesToShow) {
        startPage = 1;
        endPage = totalPages;
    } else {
        const maxPagesBeforeCurrent = Math.floor(maxPagesToShow / 2);
        const maxPagesAfterCurrent = Math.ceil(maxPagesToShow / 2) - 1;
        if (page <= maxPagesBeforeCurrent) {
            startPage = 1;
            endPage = maxPagesToShow;
        } else if (page + maxPagesAfterCurrent >= totalPages) {
            startPage = totalPages - maxPagesToShow + 1;
            endPage = totalPages;
        } else {
            startPage = page - maxPagesBeforeCurrent;
            endPage = page + maxPagesAfterCurrent;
        }
    }

    for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="flex justify-center items-center mt-12 space-x-1">
             <Button
                onClick={() => handlePageChange(1)}
                disabled={page === 1}
                variant="outline"
                size="icon"
                aria-label="Go to first page"
            >
                <ChevronsLeft className="h-4 w-4" />
            </Button>
            <Button
                onClick={() => handlePageChange(page - 1)}
                disabled={page === 1}
                variant="outline"
                size="icon"
                aria-label="Go to previous page"
            >
                <ChevronLeft className="h-4 w-4" />
            </Button>
            
            {pageNumbers.map(number => (
                <Button
                    key={number}
                    onClick={() => handlePageChange(number)}
                    variant={page === number ? 'default' : 'outline'}
                    size="icon"
                >
                    {number}
                </Button>
            ))}

            <Button
                onClick={() => handlePageChange(page + 1)}
                disabled={page === totalPages}
                variant="outline"
                size="icon"
                aria-label="Go to next page"
            >
                <ChevronRight className="h-4 w-4" />
            </Button>
            <Button
                onClick={() => handlePageChange(totalPages)}
                disabled={page === totalPages}
                variant="outline"
                size="icon"
                aria-label="Go to last page"
            >
                <ChevronsRight className="h-4 w-4" />
            </Button>
        </div>
    );
  };

  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative w-full bg-primary/10 py-20 md:py-28 lg:py-32 overflow-hidden">
        <BackgroundAnimation className="absolute inset-0 z-0 opacity-50" />
        <AnimateOnScroll className="container mx-auto px-4 md:px-6 z-10 relative">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h1 className="text-4xl font-light tracking-tight font-headline sm:text-5xl md:text-6xl text-primary">
              Blog
            </h1>
            <p className="max-w-2xl text-muted-foreground md:text-xl">
              Latest articles on integrations
            </p>
          </div>
        </AnimateOnScroll>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading &&
            Array.from({ length: 6 }).map((_, i) => (
              <Card key={i} className="overflow-hidden">
                <Skeleton className="h-52 w-full" />
                <CardContent className="p-5">
                  <Skeleton className="h-6 w-3/4 mb-3" />
                  <Skeleton className="h-4 w-1/4 mb-4" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full mt-2" />
                  <Skeleton className="h-4 w-2/3 mt-2" />
                </CardContent>
              </Card>
            ))}
            
          {!loading &&
            posts.map((post) => {
              const image =
                post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                "https://picsum.photos/seed/blog-fallback/600/400";
              const date = new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              });
              const categories = post._embedded?.['wp:term']?.[0] || [];

              return (
                <AnimateOnScroll key={post.id} className="h-full">
                  <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                     <Link href={`/blog/${post.slug}`}>
                      <div className="relative h-52 w-full">
                        <Image
                          src={image}
                          alt={post.title.rendered}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                    </Link>
                    <CardContent className="p-5 flex-1 flex flex-col">
                      <Link href={`/blog/${post.slug}`}>
                        <h2
                          className="text-lg font-bold text-foreground hover:text-primary transition-colors line-clamp-2"
                          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                        />
                      </Link>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground mt-3">
                        <div className="flex items-center gap-1.5">
                            <Calendar className="h-3.5 w-3.5"/>
                            <span>{date}</span>
                        </div>
                        {categories.length > 0 && (
                            <div className="flex items-center gap-1.5">
                                <Tag className="h-3.5 w-3.5"/>
                                {categories.slice(0,2).map(cat => (
                                    <Link key={cat.name} href={cat.link} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                                        {cat.name}
                                    </Link>
                                )).reduce((prev, curr, i) => [prev, i > 0 && ', ', curr], [] as any) }
                            </div>
                        )}
                      </div>
                      <div
                        className="text-muted-foreground text-sm mt-4 line-clamp-3 flex-1"
                        dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                      />
                    </CardContent>
                  </Card>
                </AnimateOnScroll>
              );
            })}
        </div>

        {!loading && posts.length > 0 && totalPages > 1 && renderPagination()}

        {!loading && posts.length === 0 && (
            <div className="text-center py-16">
                <h2 className="text-2xl font-bold font-headline">No posts found</h2>
                <p className="text-muted-foreground mt-2">There are currently no blog posts available. Please check back later.</p>
            </div>
        )}
      </div>
    </div>
  );
}
