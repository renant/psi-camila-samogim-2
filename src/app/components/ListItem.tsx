import Link from "next/link";
import getFormattedDate from "../lib/getFormattedDate";

type Props = {
  post: BlogPost
};

export default function ListItem({ post }: Props) {
  const { id, title, date, resume } = post;
  const formattedDate = getFormattedDate(date);

  return (
    <Link className="flex" href={`/posts/${id}`}>
      <div className="rounded-xl border p-5 shadow-sm bg-pink-50 hover:bg-slate-100 flex-1">
        <div className="flex w-full items-center justify-between border-b border-pink-500 pb-3">
          <div className="text-lg font-bold text-slate-700">
            {title}
          </div>
        </div>
        <div>
          <p className="text-sm text-neutral-600 font-extralight">{resume}</p>
          <div>
            <span className="h-4 w-0.5 rounded-full text-pink-400">|</span>
            <small className="ml-4 text-gray-500 font-light">{formattedDate}</small>
          </div>
        </div>
      </div>
    </Link>

  );
}