import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { Article } from '@/data/articles';
import { CalendarDays, Tag } from 'lucide-react';

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
      <CardHeader className="p-0">
        <div className="aspect-[16/10] relative w-full overflow-hidden">
          <Image
            src={article.imageUrl}
            alt={article.title}
            data-ai-hint={article.imageHint}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-500 hover:scale-105"
          />
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <div className="flex items-center space-x-2 text-xs text-muted-foreground mb-2">
          <div className="flex items-center">
            <Tag className="h-3.5 w-3.5 mr-1" />
            <span>{article.category}</span>
          </div>
          <div className="flex items-center">
            <CalendarDays className="h-3.5 w-3.5 mr-1" />
            <span>{article.date}</span>
          </div>
        </div>
        <CardTitle className="font-headline text-xl lg:text-2xl leading-tight mb-2">
          <Link href={`/article/${article.slug}`} className="hover:text-primary transition-colors">
            {article.title}
          </Link>
        </CardTitle>
        <CardDescription className="font-body text-sm text-muted-foreground line-clamp-3">
          {article.excerpt}
        </CardDescription>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Link href={`/article/${article.slug}`} passHref>
          <Button variant="link" className="text-accent p-0 h-auto hover:underline">
            Read More &rarr;
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
