import { Uparrow } from "../../assets/Icons";

const BlogCard = ({
  image,
  category,
  title,
  description,
  authorImg,
  authorName,
  date,
}) => {
  return (
    <div>
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <p className="text-purple-600 font-semibold text-sm mt-4">{category}</p>
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-bold text-gray-800 mt-2">{title}</h3>
        <Uparrow />
      </div>
      <p className="text-gray-600 mt-2 text-sm">{description}</p>
      <div className="flex items-center mt-4">
        <img
          src={authorImg}
          alt={authorName}
          className="w-8 h-8 rounded-full"
        />
        <div className="ml-2 text-sm text-gray-500">
          <p>{authorName}</p>
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
