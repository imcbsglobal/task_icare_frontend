import { useEffect, useState } from "react";
import SEO from "../components/SEO";

const Showcase = () => {
  const [smileImages, setSmileImages] = useState([]);
  const [clientVideos, setClientVideos] = useState([]);
  const [ceremonialVideos, setCeremonialVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [showAllSmiles, setShowAllSmiles] = useState(false);
  const [showAllCeremonial, setShowAllCeremonial] = useState(false);

  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    loadShowcaseData();
  }, []);

  // ---------------- FETCH DATA FROM DJANGO API ----------------
  const loadShowcaseData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const res = await fetch("https://icare.imcbs.com/api/showcase/");
      
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      
      const data = await res.json();

      const images = data.filter((item) => item.media_type === "image");
      const videos = data.filter((item) => item.media_type === "video");

      setSmileImages(images);

      // CLIENT VIDEOS
      setClientVideos(
        videos.filter((v) => {
          const t = v.title?.toLowerCase() || "";
          return (
            t.includes("client") ||
            t.includes("customer") ||
            t.includes("testimonial") ||
            t.includes("review")
          );
        })
      );

      // CEREMONIAL VIDEOS – exclude client videos
      setCeremonialVideos(
        videos.filter((v) => {
          const t = v.title?.toLowerCase() || "";
          const isClientVideo =
            t.includes("client") ||
            t.includes("customer") ||
            t.includes("testimonial") ||
            t.includes("review");
          return !isClientVideo;
        })
      );
      
      setLoading(false);
    } catch (err) {
      console.error("Error loading showcase:", err);
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
  const ImageCard = ({ v }) => (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all text-center">
      <img
        src={v.media_file}
        alt={v.title}
        onClick={() => setSelectedImage(v.media_file)}
        className="w-full h-60 object-cover cursor-pointer hover:opacity-90"
      />
      <div className="p-4">
        <h3 className="font-bold text-lg">{v.title}</h3>
        {v.description && <p className="text-sm mt-1">{v.description}</p>}
      </div>
    </div>
  );

  // ---------------- VIDEO CARD ----------------
  const VideoCard = ({ v }) => (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all text-center">
      <div className="relative pb-[56.25%] bg-gray-900">
        <iframe
          src={getYouTubeEmbedUrl(v.website_url)}
          className="absolute top-0 left-0 w-full h-full"
          allowFullScreen
          title={v.title}
        ></iframe>
      </div>
      <div className="p-4">
        <h3 className="font-bold">{v.title}</h3>
        {v.description && <p className="text-sm mt-1">{v.description}</p>}
      </div>
    </div>
  );

  // ---------------- LOADING STATE ----------------
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading showcase...</p>
        </div>
      </div>
    );
  }

  // ---------------- ERROR STATE ----------------
  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md">
          <h2 className="text-red-800 font-bold text-xl mb-2">Error Loading Data</h2>
          <p className="text-red-600 mb-4">{error}</p>
          <button
            onClick={loadShowcaseData}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Retry
          </button>
          <div className="mt-4 text-sm text-gray-600">
            <p>Make sure:</p>
            <ul className="list-disc ml-5 mt-2">
              <li>Django server is running on port 8000</li>
              <li>The API endpoint is accessible</li>
              <li>CORS is properly configured</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-8">
      <SEO
        title="Showcase - TASK iCare Success Stories"
        description="View our showcase of success stories, client testimonials, and ceremonial moments from TASK iCare implementations across various businesses."
        keywords="TASK iCare showcase, success stories, client testimonials, business implementations, software success"
        url="https://icare.imcbs.com/showcase"
      />
      <div className="max-w-7xl mx-auto">

        {/* -------- SMILES & STORIES -------- */}
        {smileImages.length > 0 && (
          <>
            <div className="bg-white p-8 rounded-2xl shadow-lg mb-8 text-center">
              <h1 className="text-4xl font-bold">Smiles & Stories</h1>
              <p className="text-gray-600 mt-2">Happy moments captured beautifully.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {(showAllSmiles ? smileImages : smileImages.slice(0, 4)).map((v) => (
                <ImageCard key={v.id} v={v} />
              ))}
            </div>

            {!showAllSmiles && smileImages.length > 4 && (
              <div className="text-center mt-6">
                <button
                  onClick={() => setShowAllSmiles(true)}
                  className="px-6 py-3 bg-indigo-500 text-white rounded-full hover:bg-indigo-600 transition"
                >
                  View More
                </button>
              </div>
            )}
          </>
        )}

        {/* -------- CLIENT VIDEOS -------- */}
        {clientVideos.length > 0 && (
          <>
            <div className="bg-white p-8 rounded-2xl shadow-lg mb-8 mt-16 text-center">
              <h1 className="text-4xl font-bold">What Our Clients Say</h1>
              <p className="text-gray-600 mt-2">Reviews and testimonials from our happy customers.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
              {clientVideos.map((v) => (
                <VideoCard key={v.id} v={v} />
              ))}
            </div>
          </>
        )}

        {/* -------- CEREMONIAL VIDEOS -------- */}
        {ceremonialVideos.length > 0 && (
          <>
            <div className="bg-white p-8 rounded-2xl shadow-lg mb-8 mt-16 text-center">
              <h1 className="text-4xl font-bold">Ceremonial Moments</h1>
              <p className="text-gray-600 mt-2">Highlights from our openings and celebrations.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {(showAllCeremonial ? ceremonialVideos : ceremonialVideos.slice(0, 3)).map((v) => (
                <VideoCard key={v.id} v={v} />
              ))}
            </div>

            {!showAllCeremonial && ceremonialVideos.length > 3 && (
              <div className="text-center mt-6">
                <button
                  onClick={() => setShowAllCeremonial(true)}
                  className="px-6 py-3 bg-indigo-500 text-white rounded-full hover:bg-indigo-600 transition"
                >
                  View More
                </button>
              </div>
            )}
          </>
        )}

        {/* -------- EMPTY STATE -------- */}
        {smileImages.length === 0 && clientVideos.length === 0 && ceremonialVideos.length === 0 && (
          <div className="bg-white p-12 rounded-2xl shadow-lg text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">No Showcase Items Yet</h2>
            <p className="text-gray-600">Add some images or videos to get started!</p>
          </div>
        )}

      </div>

      {/* -------- FULLSCREEN IMAGE VIEWER -------- */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Full size"
            className="max-w-[90%] max-h-[90%] rounded-xl object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default Showcase;