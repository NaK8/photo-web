import { Calendar } from "react-feather";

interface BlogPostTypes {
  heading: string;
  img: string;
  content: string;
  date: string;
  alt: string;
}

const BlogPost = ({ heading, img, content, date, alt }: BlogPostTypes) => {
  return (
    <article className="border-b border-gray-300 mb-5">
      <h3 className="md:text-4xl text-2xl font-bold text-gray-800 hover:text-orange-500 transition-all hover:cursor-pointer py-4">
        {heading}
      </h3>
      <div className="flex py-4">
        <Calendar height={18} width={18} color="#6b7280" />
        <span className="text-sm text-gray-500 px-2">{date}</span>
      </div>
      <img src={img} alt={alt} className="w-full py-4" />
      <p className="py-4 text-sm text-gray-500 leading-loose">{content}</p>
      <button className="py-4 px-10 bg-orange-500 rounded-md text-white my-5 hover:bg-gray-800 transition">
        Read More
      </button>
    </article>
  );
};

export default BlogPost;
