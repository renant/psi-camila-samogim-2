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
      <div className="rounded-xl border p-5 shadow-sm bg-pink-50 hover:bg-slate-100 flex-1 flex flex-col justify-between">
        <div className="flex items-center pb-3">
          <h5 className="text-lg md:text-base font-bold text-slate-700">
            {title}
          </h5>
        </div>
        <div className="flex flex-col flex-1 border-t border-pink-500">
          <p className="text-sm text-neutral-600 font-extralight">{resume}</p>
          <div className="flex-1 flex flex-col justify-end">
            <div>
              <span className="h-4 w-0.5 rounded-full text-pink-400">|</span>
              <small className="ml-4 text-gray-500 font-light ">{formattedDate}</small>
            </div>
          </div>
        </div>
      </div>
    </Link>

  );
}