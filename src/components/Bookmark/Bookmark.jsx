const Bookmark = ({ book }) => {
  const { title } = book;
  return (
    <div className="bg-slate-200 my-4 px-2 rounded-lg ">
      <h2 className="text-xl">Bookmarked Blogs: {title}</h2>
    </div>
  );
};

export default Bookmark;
