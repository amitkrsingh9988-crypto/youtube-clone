function CategoryBar() {
  const categories = [
    "All",
    "Music",
    "Gaming",
    "Live",
    "Coding",
    "React",
    "Java",
    "C++",
    "News",
    "Movies",
    "Mixes",
    "Recently uploaded"
  ];
  return (
    <div className="category-bar">
      {categories.map((category, index) => (
        <button
          key={category}
          className={index === 0 ? "active" : ""}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
export default CategoryBar;