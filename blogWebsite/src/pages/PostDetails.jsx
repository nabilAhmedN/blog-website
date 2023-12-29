import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import Comments from "../components/Comments";

const PostDetails = () => {
  return (
    <div className="px-8 md:px-[200px] mt-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-black md:text-3xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </h1>
        <div className="flex items-center justify-center space-x-2">
          <p>
            <BiEdit />
          </p>
          <p>
            <MdDelete />
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between mt-2 md:mt-4">
        <p>@nabilAhmed</p>
        <div className="flex space-x-2">
          <p>11/12/2023</p>
          <p>1:04 AM</p>
        </div>
      </div>
      <img
        className="h-full w-full object-cover"
        src="https://media.slidesgo.com/storage/44761508/artificial-intelligence-ai-technology-project-proposal1700226998.jpg"
        alt=""
      />
      <p className="mx-auto mt-8">
        Lorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet
        consectetur
      </p>
      <div className="flex justify-center mt-8 space-x-4 font-semibold">
        <p>Categories</p>
        <div className="flex justify-center items-center space-x-2">
          <div className="bg-gray-300 rounded-lg px-3 py-1">Tech</div>
          <div className="bg-gray-300 rounded-lg px-3 py-1">Ai</div>
        </div>
      </div>

      <div className="flex flex-col mt-4">
        <h3 className="mt-6 mb-4 font-semibold">Comments:</h3>

        <Comments/>

        <div className="w-full flex flex-col mt-4 md:flex-row">
            <input type="text" placeholder="Write a comment" className="md:w-[80%] outline-none py-2 px-4 mt-4 md:mt-0"/>
            <button className="bg-black text-sm text-white px-4 py-2 md:w-[20%] mt-4 md:mt-0">Add Comment</button>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
