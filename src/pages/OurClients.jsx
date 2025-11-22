import { useState, useEffect } from "react";
import { ArrowLeft, Upload, Trash2, Users, X, Save, Video } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const OurClients = () => {
  const [clients, setClients] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    videoUrl: "",
    description: "",
  });

  const API_BASE = "https://icare.imcbs.com";

  useEffect(() => {
    loadClients();
  }, []);

  // Load client videos
  const loadClients = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API_BASE}/api/showcase/`);
      const data = await res.json();

      const clientVideos = data.filter(
        (item) =>
          item.media_type === "video" &&
          (
            item.title.toLowerCase().includes("client") ||
            item.title.toLowerCase().includes("customer") ||
            item.title.toLowerCase().includes("review") ||
            item.title.toLowerCase().includes("testimonial")
          )
      );

      setClients(clientVideos);
    } catch (error) {
      console.error("Error loading clients:", error);
    } finally {
      setLoading(false);
    }
  };

  // Save or update client video
  const handleSubmit = async () => {
    if (!formData.title || !formData.videoUrl) {
      alert("Title and Video URL are required");
      return;
    }

    setLoading(true);

    try {
      const payload = {
        title: formData.title,
        description: formData.description || "",
        media_type: "video",
        website_url: formData.videoUrl,
      };

      let res;

      if (editingId) {
        // UPDATE
        res = await fetch(`${API_BASE}/api/showcase/${editingId}/`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });
      } else {
        // CREATE
        res = await fetch(`${API_BASE}/api/showcase/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });
      }

      if (!res.ok) {
        const err = await res.json();
        throw new Error(JSON.stringify(err));
      }

      alert(editingId ? "Client video updated!" : "Client video added!");

      resetForm();
      loadClients();
    } catch (error) {
      console.error("Error saving:", error);
      alert("Failed to save client video");
    } finally {
      setLoading(false);
    }
  };

  // Edit existing video
  const handleEdit = (client) => {
    setFormData({
      title: client.title,
      videoUrl: client.website_url,
      description: client.description || "",
    });

    setEditingId(client.id);
    setIsModalOpen(true);
  };

  // Delete video
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this client video?")) return;

    setLoading(true);

    try {
      const res = await fetch(`${API_BASE}/api/showcase/${id}/`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Delete failed");

      alert("Client video deleted!");
      loadClients();
    } catch (err) {
      console.error(err);
      alert("Error deleting video");
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      title: "",
      videoUrl: "",
      description: "",
    });
    setEditingId(null);
    setIsModalOpen(false);
  };

  const getYouTubeThumbnail = (url) => {
    const match = url?.match(
      /(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/watch\?.+&v=))([^&\n?#]+)/
    );
    return match ? `https://img.youtube.com/vi/${match[1]}/maxresdefault.jpg` : "";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-8">
      <SEO
        title="Our Clients - Testimonials & Reviews"
        description="Watch video testimonials and reviews from our valued clients who have experienced the benefits of TASK iCare inventory management software."
        keywords="client testimonials, customer reviews, TASK iCare reviews, software testimonials, client feedback, customer success stories"
        url="https://icare.imcbs.com/gallery/clients"
      />
      <div className="max-w-7xl mx-auto">

        <Link
          to="/gallery"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-6"
        >
          <ArrowLeft className="w-5 h-5" /> Back to Gallery
        </Link>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold">Our Clients</h1>
              <p className="text-gray-600">
                Manage client testimonial videos
              </p>
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              <Upload className="w-5 h-5 inline-block mr-2" />
              Add Client Video
            </button>
          </div>
        </div>

        {/* CLIENT VIDEO LIST */}
        {loading ? (
          <p className="text-center text-gray-600">Loading...</p>
        ) : clients.length === 0 ? (
          <div className="bg-white p-10 text-center rounded-2xl shadow">
            <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h2 className="text-xl font-semibold">No client videos yet</h2>
            <button
              onClick={() => setIsModalOpen(true)}
              className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Add First Video
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {clients.map((c) => (
              <div
                key={c.id}
                className="bg-white rounded-xl shadow overflow-hidden hover:shadow-xl transition cursor-pointer"
              >
                <div className="relative pb-[56.25%] bg-black">
                  <img
                    src={getYouTubeThumbnail(c.website_url)}
                    alt={c.title}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                  />
                </div>

                <div className="p-4">
                  <h3 className="font-bold text-lg">{c.title}</h3>

                  <div className="mt-3 flex gap-2">
                    <button
                      onClick={() => handleEdit(c)}
                      className="flex-1 px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => handleDelete(c.id)}
                      className="flex-1 px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ---------------- MODAL ---------------- */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-xl w-full shadow-lg">
              <div className="flex justify-between items-center p-6 border-b">
                <h2 className="text-2xl font-bold">
                  {editingId ? "Edit Client Video" : "Add Client Video"}
                </h2>
                <button onClick={resetForm}>
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <label className="font-semibold">Title *</label>
                  <input
                    type="text"
                    className="w-full p-3 border rounded-lg"
                    value={formData.title}
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label className="font-semibold">YouTube URL *</label>
                  <input
                    type="text"
                    className="w-full p-3 border rounded-lg"
                    value={formData.videoUrl}
                    onChange={(e) =>
                      setFormData({ ...formData, videoUrl: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label className="font-semibold">Description</label>
                  <textarea
                    className="w-full p-3 border rounded-lg"
                    rows="3"
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 flex justify-center gap-2"
                >
                  <Save className="w-5 h-5" />
                  {editingId ? "Update Video" : "Add Video"}
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default OurClients;
