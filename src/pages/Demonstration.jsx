import { useEffect, useState } from "react";

const Demonstration = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    loadDemonstrationData();
  }, []);

  // ---------------- FETCH DATA FROM DJANGO API ----------------
  const loadDemonstrationData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const res = await fetch("http://127.0.0.1:8000/api/demonstration/");
      
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      
      const data = await res.json();
      setItems(data);
      setLoading(false);
    } catch (err) {
      console.error("Error loading demonstration:", err);
      setError(err.message);
      setLoading(false);
    }
  };

  // ---------------- YouTube embed URL ----------------
  const getYouTubeEmbedUrl = (url) => {
    if (!url) return null;
    const match = url.match(
      /(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/watch\?.+&v=))([^&\n?#]+)/
    );
    return match ? `https://www.youtube.com/embed/${match[1]}` : url;
  };

  // ---------------- IMAGE CARD ----------------
  const ImageCard = ({ item }) => (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all">
      <img
        src={item.media_file}
        alt={item.title}
        onClick={() => setSelectedImage(item.media_file)}
        className="w-full h-64 object-cover cursor-pointer hover:opacity-90"
      />
      <div className="p-5">
        <h3 className="font-bold text-xl mb-2">{item.title}</h3>
        {item.description && (
          <p className="text-gray-600 text-sm">{item.description}</p>
        )}
      </div>
    </div>
  );

  // ---------------- VIDEO CARD ----------------
  const VideoCard = ({ item }) => (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all">
      <div className="relative pb-[56.25%] bg-gray-900">
        <iframe
          src={getYouTubeEmbedUrl(item.website_url)}
          className="absolute top-0 left-0 w-full h-full"
          allowFullScreen
          title={item.title}
        ></iframe>
      </div>
      <div className="p-5">
        <h3 className="font-bold text-xl mb-2">{item.title}</h3>
        {item.description && (
          <p className="text-gray-600 text-sm">{item.description}</p>
        )}
      </div>
    </div>
  );

  // Separate images and videos
  const images = items.filter((item) => item.media_type === "image");
  const videos = items.filter((item) => item.media_type === "video");

  // ---------------- LOADING STATE ----------------
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 font-medium">Loading demonstrations...</p>
        </div>
      </div>
    );
  }

  // ---------------- ERROR STATE ----------------
  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 flex items-center justify-center p-4">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md">
          <h2 className="text-red-800 font-bold text-xl mb-2">Error Loading Data</h2>
          <p className="text-red-600 mb-4">{error}</p>
          <button
            onClick={loadDemonstrationData}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 p-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-10 rounded-2xl shadow-xl mb-12 text-center">
          <h1 className="text-5xl font-bold mb-3">Demonstrations</h1>
          <p className="text-lg opacity-90">Live demos and product showcases</p>
        </div>

        {/* Videos Section */}
        {videos.length > 0 && (
          <>
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="bg-purple-100 text-purple-600 p-2 rounded-lg mr-3">🎥</span>
                Video Demonstrations
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {videos.map((item) => (
                <VideoCard key={item.id} item={item} />
              ))}
            </div>
          </>
        )}

        {/* Images Section */}
        {images.length > 0 && (
          <>
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="bg-pink-100 text-pink-600 p-2 rounded-lg mr-3">📸</span>
                Image Gallery
              </h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {images.map((item) => (
                <ImageCard key={item.id} item={item} />
              ))}
            </div>
          </>
        )}

        {/* Empty State */}
        {items.length === 0 && (
          <div className="bg-white p-16 rounded-2xl shadow-lg text-center">
            <div className="text-6xl mb-4">📋</div>
            <h2 className="text-3xl font-bold text-gray-800 mb-3">No Demonstrations Yet</h2>
            <p className="text-gray-600 text-lg">Upload images or videos from the gallery to showcase your demonstrations.</p>
          </div>
        )}

      </div>

      {/* Fullscreen Image Viewer */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 flex justify-center items-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
          <img
            src={selectedImage}
            alt="Full size"
            className="max-w-[90%] max-h-[90%] rounded-lg object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default Demonstration;