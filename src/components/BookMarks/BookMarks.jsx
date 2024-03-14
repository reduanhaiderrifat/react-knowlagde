import Bookmark from "../Bookmark/Bookmark";

const BookMarks = ({ bookmark, reading }) => {
  // console.log(bookmark);
  return (
    <div className="lg:w-1/3 bg-gray-300 p-5 mt-6 rounded-lg">
      <div className="">
        <h3 className="text-center mb-3">Reading Time: {reading}</h3>
      </div>
      <h3 className="text-center">BookMarks: {bookmark.length}</h3>
      {bookmark.map((books, idx) => (
        <Bookmark key={idx} book={books}></Bookmark>
      ))}
    </div>
  );
};

export default BookMarks;
