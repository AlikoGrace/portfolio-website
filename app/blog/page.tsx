import { getAllPosts } from "@/lib/getAllPosts";
import PostList from "./postList";
import { PageHeader } from "@/components/page-header";

export default function BrainDumpPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-black text-white pb-20">
      <PageHeader
        title="Blog"
        description="Notes, thoughts, and learning logs on development and NLP research"
      />
      <PostList posts={posts} />
    </div>
  );
}
