import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const CreatePost = () => {
  const navigate = useNavigate();

  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      // formData.append("user", userId);
      formData.append("caption", caption);
      formData.append("image", image);

      const response = await axios.post(
        "http://localhost:3000/addPost",
        formData,
      );

      console.log(response.data);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white rounded-3xl shadow-sm border border-gray-100 p-6 space-y-5"
      >
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Create Post</h1>

            <p className="text-sm text-gray-500 mt-1">
              Share your thoughts with the world.
            </p>
          </div>

          <Link
            to="/"
            className="px-4 py-2 border border-gray-200 rounded-xl text-sm font-medium hover:bg-gray-100 transition"
          >
            ← Back
          </Link>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Caption
          </label>

          <textarea
            rows="4"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            placeholder="What's on your mind?"
            className="w-full resize-none rounded-2xl border border-gray-200 p-4 outline-none focus:ring-2 focus:ring-black/10"
          />
        </div>

        <div>
          <label
            htmlFor="image"
            className="cursor-pointer flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gray-300 p-8 text-center hover:border-gray-400 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10 text-gray-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 16.5v-9m0 0L8.25 11.25M12 7.5l3.75 3.75M21 15.75v3A2.25 2.25 0 0118.75 21H5.25A2.25 2.25 0 013 18.75v-3"
              />
            </svg>

            <p className="mt-3 text-sm text-gray-600">
              Click to upload an image
            </p>

            <p className="text-xs text-gray-400 mt-1">PNG, JPG, WEBP</p>
          </label>

          <input
            id="image"
            type="file"
            accept="image/*"
            hidden
            onChange={handleImageChange}
          />
        </div>

        {preview && (
          <div className="overflow-hidden rounded-2xl border border-gray-200">
            <img
              src={preview}
              alt="preview"
              className="w-full h-72 object-cover"
            />
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-2xl font-medium hover:opacity-90 transition"
        >
          Publish Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
