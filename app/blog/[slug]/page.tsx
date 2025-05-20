import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join(process.cwd(), "app/blog/blog-posts"));
  return files.map((filename) => ({
    slug: filename.replace(".md", ""),
  }));
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const filePath = path.join(
    process.cwd(),
    "app/blog/blog-posts",
    `${params.slug}.md`
  );

  if (!fs.existsSync(filePath)) return notFound();

  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);
  const processedContent = await remark().use(html).process(content);
  const htmlContent = processedContent.toString();

  return (
    <div className="max-w-3xl mx-auto px-4 py-12 prose prose-invert lg:prose-xl dark:prose-invert">
      <h1>{data.title}</h1>
      <p className="text-sm text-muted-foreground mb-4">
        {data.date} • {data.readTime}
      </p>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
}
