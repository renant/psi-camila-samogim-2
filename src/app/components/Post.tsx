import { getSortedPostsData } from "../lib/posts";
import ListItem from "./ListItem";

export default function Posts() {

  const posts = getSortedPostsData();
  return (
    <section className="py-12">
      {/* <h2 className="text-4xl font-bold text-white/90">Artigos</h2> */}
      <ul className="w-full prose prose-sm">
        {posts.map((post) => (
          <ListItem key={post.id} post={post} />))
        }
      </ul>
    </section>
  );
}