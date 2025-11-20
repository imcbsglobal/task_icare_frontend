import { useState } from "react";
import { Upload, Video, Link, X, CheckCircle } from "lucide-react";

const DemoUpload = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    media_type: "video",
    media_file: null,
    website_url: "",
  });

  const [preview, setPreview] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleMediaTypeChange = (type) => {
    setFormData({ ...formData, media_type: type });
    setPreview(null);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, media_file: file });
      
      // Create preview for images
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreview(reader.result);
        };
        reader.readAsDataURL(file);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);
    setError(null);
    setSuccess(false);

    try {
      const data = new FormData();
      data.append("title", formData.title);
      data.append("description", formData.description);
      data.append("media_type", formData.media_type);

      if (formData.media_type === "image" && formData.media_file) {
        data.append("media_file", formData.media_file);
      } else if (formData.media_type === "video" && formData.website_url) {
        data.append("website_url", formData.website_url);
      }

      const response = await fetch("http://127.0.0.1:8000/api/demonstration/", {
        method: "POST",
        body: data,
      });

      if (!response.ok) {
        throw new Error("Upload failed");
      }

      setSuccess(true);
      setFormData({
        title: "",
        description: "",
        media_type: "video",
        media_file: null,
        website_url: "",
      });
      setPreview(null);

      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    } catch (err) {
      setError(err.message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 p-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 rounded-2xl shadow-xl mb-8 text-center">
          <h1 className="text-4xl font-bold mb-2">Upload Demo Content</h1>
          <p className="text-lg opacity-90">Add demonstration videos or images</p>
        </div>

        {/* Success Message */}
        {success && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 flex items-center">
            <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
            <p className="text-green-800 font-medium">Upload successful!</p>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <p className="text-red-800 font-medium">Error: {error}</p>
          </div>
        )}

        {/* Upload Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div>
            {/* Media Type Selection */}
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-3">
                Media Type
              </label>
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => handleMediaTypeChange("video")}
                  className={`flex-1 py-3 px-6 rounded-lg font-medium transition-all ${
                    formData.media_type === "video"
                      ? "bg-purple-600 text-white shadow-lg"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  <Video className="w-5 h-5 inline mr-2" />
                  Video
                </button>
                <button
                  type="button"
                  onClick={() => handleMediaTypeChange("image")}
                  className={`flex-1 py-3 px-6 rounded-lg font-medium transition-all ${
                    formData.media_type === "image"
                      ? "bg-pink-600 text-white shadow-lg"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  <Upload className="w-5 h-5 inline mr-2" />
                  Image
                </button>
              </div>
            </div>

            {/* Title */}
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                Title *
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Enter title"
              />
            </div>

            {/* Description */}
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Enter description"
              />
            </div>

            {/* Image Upload */}
            {formData.media_type === "image" && (
              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">
                  Upload Image *
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-purple-500 transition-colors">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                    id="file-upload"
                    required
                  />
                  <label
                    htmlFor="file-upload"
                    className="cursor-pointer flex flex-col items-center"
                  >
                    <Upload className="w-12 h-12 text-gray-400 mb-3" />
                    <span className="text-gray-600 font-medium">
                      Click to upload image
                    </span>
                    <span className="text-gray-400 text-sm mt-1">
                      PNG, JPG up to 10MB
                    </span>
                  </label>
                </div>

                {/* Image Preview */}
                {preview && (
                  <div className="mt-4 relative">
                    <img
                      src={preview}
                      alt="Preview"
                      className="w-full h-64 object-cover rounded-lg"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        setPreview(null);
                        setFormData({ ...formData, media_file: null });
                      }}
                      className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Video URL */}
            {formData.media_type === "video" && (
              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">
                  YouTube Video URL *
                </label>
                <div className="relative">
                  <Link className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="url"
                    name="website_url"
                    value={formData.website_url}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="https://www.youtube.com/watch?v=..."
                  />
                </div>
              </div>
            )}

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              disabled={uploading}
              className={`w-full py-4 rounded-lg font-bold text-white transition-all ${
                uploading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl"
              }`}
            >
              {uploading ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin h-5 w-5 mr-3"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Uploading...
                </span>
              ) : (
                "Upload Demo Content"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoUpload;