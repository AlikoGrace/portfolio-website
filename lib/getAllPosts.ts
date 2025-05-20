import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type PostMetadata = {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  slug: string;
};

export function getAllPosts(): PostMetadata[] {
  const postsDirectory = path.join(process.cwd(), "app/brain-dump/blog-posts");
  const filenames = fs.readdirSync(postsDirectory);

  return filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContent);

    return {
      title: data.title,
      excerpt: data.excerpt || "",
      date: data.date,
      readTime: data.readTime,
      tags: data.tags || [],
      slug: data.slug || filename.replace(".md", ""),
    };
  });
}
