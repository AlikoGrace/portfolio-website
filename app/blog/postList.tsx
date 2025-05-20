"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export type Post = {
  title: string;
  excerpt?: string;
  date: string;
  readTime: string;
  tags: string[];
  slug: string;
};

type Props = {
  posts: Post[];
};

export default function PostList({ posts }: Props) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const allTags = Array.from(new Set(posts.flatMap((post) => post.tags)));

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (post.excerpt?.toLowerCase().includes(searchQuery.toLowerCase()) ??
        false);
    const matchesTag = selectedTag ? post.tags.includes(selectedTag) : true;
    return matchesSearch && matchesTag;
  });

  return (
    <div className="container mt-12">
      <div className="flex flex-col md:flex-row gap-6 mb-12">
        <div className="md:w-2/3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
            <Input
              type="text"
              placeholder="Search posts..."
              className="pl-10 bg-gray-900/50 border-gray-800"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="md:w-1/3 flex items-center gap-2 flex-wrap">
          <span className="text-sm text-gray-400">Filter by:</span>
          {selectedTag ? (
            <Badge
              variant="outline"
              className="cursor-pointer bg-emerald-400/10 text-emerald-400 hover:bg-emerald-400/20"
              onClick={() => setSelectedTag(null)}>
              {selectedTag} ×
            </Badge>
          ) : (
            allTags.slice(0, 5).map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="cursor-pointer hover:bg-gray-800"
                onClick={() => setSelectedTag(tag)}>
                {tag}
              </Badge>
            ))
          )}
        </div>
      </div>

      <div className="space-y-8">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="p-6 border border-gray-800 rounded-lg hover:border-gray-700 transition-colors">
              <Link href={`/blog/${post.slug}`} className="block group">
                <h2 className="text-2xl font-bold font-space mb-3 group-hover:text-emerald-400 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-400 mb-4">{post.excerpt}</p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 ml-auto">
                    {post.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="bg-gray-900/50"
                        onClick={(e) => {
                          e.preventDefault();
                          setSelectedTag(tag);
                        }}>
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.article>
          ))
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium mb-2">No posts found</h3>
            <p className="text-gray-400">
              Try adjusting your search or filter criteria
            </p>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => {
                setSearchQuery("");
                setSelectedTag(null);
              }}>
              Clear filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
