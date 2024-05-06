import BlogPost from "./BlogPost";

const blogData = [
  {
    heading: "The most common mistakes when managing personal finances",
    date: "08.11.2019",
    img: "/blog-1.jpg",
    alt: "blog 1",
    content:
      "The ability to manage money competently is especially valuable quality in the conditions of financial crisis, when the purchasing power of the population is shrinking, inflation is rising, and currency exchange rates are completely unpredictable. Below are the common mistakes related to money affairs along with financial planning advice to help manage your own finances properly.",
  },
  {
    heading: "Methods of the recruitment",
    date: "08.11.2019",
    img: "/blog-2.jpg",
    alt: "blog 2",
    content:
      "Search of staff is not an easy task. According to the departmental heads' of personnel management words, in order to find a personnel who will correspond to the relevant customer needs and requirements, it is necessary to carry out a great job.",
  },
  {
    heading: "Overalls with logo as a method of advertising",
    date: "08.11.2019",
    img: "/blog-3.jpg",
    alt: "blog 3",
    content:
      "Overalls bearing the company's logo are related to economy and practicality. A preference of corporate style involves a significant increase of costs for development of design solutions, customized tailoring, selection of necessary materials and so on.",
  },
  {
    heading: "The main objectives of the marketer",
    date: "08.11.2019",
    img: "/blog-4.jpg",
    alt: "blog 4",
    content:
      "The modern market is absolutely unpredictable. And yet it lives according to strict laws. The marketers need to be known to achieve maximum results in their business - that is the main task of the marketer.",
  },
  {
    heading:
      "Recession is a good opportunity to deal a deathblow to the competitors",
    date: "08.11.2019",
    img: "/blog-5.jpg",
    alt: "blog 5",
    content:
      "Media prices are falling, so advertising becomes more profitable. The combination of low prices on media and weak competition gives companies the opportunity to cheaply grab market share.",
  },
];

const category = [
  "Business Consulting",
  "Financial Management",
  "Marketing",
  "News",
  "Small Business",
];

const Blogs = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[75%_25%] pt-8 gap-4">
      <div className="pr-0 md:pr-4">
        {blogData.map((data) => (
          <BlogPost
            key={data.alt}
            heading={data.heading}
            date={data.date}
            img={data.img}
            alt={data.alt}
            content={data.content}
          />
        ))}
      </div>
      <div className="pb-4">
        <div className="pb-4">
          <h3 className="text-3xl text-gray-800 py-2 font-bold">Category</h3>
          {category.map((cate) => (
            <span
              key={cate}
              className="block py-2 hover:text-orange-500 hover:cursor-pointer transition-all"
            >
              {cate}
            </span>
          ))}
        </div>
        <div className="pb-4">
          <h3 className="text-3xl text-gray-800 py-4 font-bold">
            Recent Posts
          </h3>
          {blogData.map((blog) => (
            <div className="py-3" key={blog.alt}>
              <img src={blog.img} alt={blog.alt} />
              <span className="block text-lg py-2 hover:text-orange-500 hover:cursor-pointer transition-all font-semibold">
                {blog.heading}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
