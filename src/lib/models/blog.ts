export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  authorRole: string;
  imageSrc: string;
  category: string;
  readTime: string;
  published: boolean;
};

export type CreateBlogPostInput = Omit<BlogPost, 'id' | 'date' | 'slug'> & {
  slug?: string;
};

export type UpdateBlogPostInput = Partial<Omit<BlogPost, 'id'>>; 