import getFormattedDate from "@/app/lib/getFormattedDate";
import { getPostData, getSortedPostsData } from "@/app/lib/posts";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    postId: post.id
  }))
}

export function generateMetadata({ params }: { params: { postId: string } }) {

  const posts = getSortedPostsData();
  const { postId } = params;
  const post = posts.find((post) => post.id === postId);

  if (!post) {
    return {
      title: "Post não encontrado",
      description: "Post não encontrado"
    }
  }

  return {
    title: post.title,
    description: post.resume
  }
}

export default async function Page({ params }: { params: { postId: string } }) {

  const posts = getSortedPostsData();
  const { postId } = params;
  const post = posts.find((post) => post.id === postId);

  if (!post) {
    return notFound();
  }

  const { title, date, contentHtml } = await getPostData(postId);

  const pubDate = getFormattedDate(date);

  return (
    <main className="px-6 prose md:prose-xl prose-pink prose-sm mt-2">
      <h1>{title}</h1>
      <p>{pubDate}</p>
      <article>
        <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
        {/* <div className="flex flex-col mt-24">
          <h2>
            Comentários
          </h2>
          <div className="border-b border-pink-500 mt-4"></div>
          <div id="cusdis_thread"
            data-host="https://cusdis.com"
            data-app-id="0d987405-811e-4353-a5bb-29ea1fcf6b53"
            data-page-id={postId}
            data-page-url={"https://psicamilasamogim.com/posts/" + postId}
            data-page-title={title}
          />
        </div> */}
      </article>
    </main>
  );
}