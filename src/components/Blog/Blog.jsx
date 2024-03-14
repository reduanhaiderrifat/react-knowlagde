import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";
const Blog = ({ blog, handleBookmark, handleMarkAsReas }) => {
  const {
    title,
    cover,
    author,
    author_img,
    posted_date,
    reading_time,
    hashtag,
  } = blog;
  return (
    <div className="mb-3 border p-4 rounded-xl shadow-xl space-y-5">
      <img src={cover} alt={`Cover picture of the tile ${title}`} />
      <div className="flex justify-between items-center mt-3">
        <div className="flex gap-5">
          <img
            className="w-[50px] h-[50px] rounded-full"
            src={author_img}
            alt=""
          />
          <div>
            <h3 className="text-xl font-bold">{author}</h3>
            <span>{posted_date}</span>
          </div>
        </div>
        <div className="">
          <span className="text-xl font-normal ">{reading_time}minit read</span>
          <button
            onClick={() => handleBookmark(blog)}
            className="ml-3 text-red-600 text-2xl "
          >
            <FaBookmark></FaBookmark>
          </button>
        </div>
      </div>
      <p>
        <a href="">{hashtag}</a>
      </p>
      <button
        className="text-purple-800 font-bold underline"
        onClick={() => handleMarkAsReas(reading_time)}
      >
        Mark as read
      </button>
    </div>
  );
};

Blog.prototype = {
  blog: PropTypes.object.isRequired,
  handleBookmark: PropTypes.func.isRequired,
  handleMarkAsReas: PropTypes.func.isRequired,
};
export default Blog;
