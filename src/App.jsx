import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import BookMarks from "./components/BookMarks/BookMarks";
import Header from "./components/Header/Header";

function App() {
  const [bookmark, setBookmark] = useState([]);
  const [reading, setReading] = useState(0);
  const handleBookmark = (blog) => {
    const newBookmarks = [...bookmark, blog];
    setBookmark(newBookmarks);
  };
  const handleMarkAsReas = (time) => {
    const newReadingTime = reading + parseInt(time);
    setReading(newReadingTime);
  };
  return (
    <>
      <Header></Header>
      <main className="lg:flex  max-w-6xl mx-auto">
        <Blogs
          handleMarkAsReas={handleMarkAsReas}
          handleBookmark={handleBookmark}
        ></Blogs>
        <BookMarks bookmark={bookmark} reading={reading}></BookMarks>
      </main>
    </>
  );
}

export default App;
