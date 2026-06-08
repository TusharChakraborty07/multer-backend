import { useState } from "react";

const PostCard = ({ caption, image }) => {
  return (
    <div className="w-full max-w-md bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
      {/* Image */}
      <div className="w-full">
        <img src={image} alt="post" className="w-full h-80 object-cover" />
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-center gap-3 mb-4">
          {/* <>
            <div className="w-10 h-10 rounded-full bg-gray-200"></div>
            <div>
              <h3 className="font-semibold text-gray-900">
                Tushar Chakraborty
              </h3>

              <p className="text-xs text-gray-500">Just now</p>
            </div>
          </> */}
        </div>

        <p className="text-gray-700 leading-relaxed">{caption}</p>

        {/* <div className="flex items-center gap-6 mt-5 pt-4 border-t border-gray-100">
          <button className="flex items-center gap-2 text-gray-600 hover:text-black transition">
            ❤️
            <span>Like</span>
          </button>

          <button className="flex items-center gap-2 text-gray-600 hover:text-black transition">
            💬
            <span>Comment</span>
          </button>

          <button className="flex items-center gap-2 text-gray-600 hover:text-black transition">
            🔗
            <span>Share</span>
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default PostCard;
