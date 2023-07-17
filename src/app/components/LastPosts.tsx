import { getLastFourPosts } from "../lib/posts";
import ListItem from "./ListItem";

export default function LastPosts() {

  const posts = getLastFourPosts();
  return (
    <div className="mt-2 md:mt-8 prose prose-sm grid grid-cols-1 md:grid-cols-2 gap-4 max-w-fit">
      {posts.map((post) => (
        <ListItem key={post.id} post={post} />))
      }
    </div>
  );
}