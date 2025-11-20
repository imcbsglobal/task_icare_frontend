import { useState, useEffect } from "react";
import { Plus, Trash2, Edit2, Video, X, Save, Youtube } from "lucide-react";

const AdminTestimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    videoUrl: "",
    clientName: "",
    description: "",
  });

  useEffect(() => {
    loadTestimonials();
  }, []);

  const loadTestimonials = async () => {
    try {
      const result = await window.storage.get('testimonials-list');
      if (result && result.value) {
        setTestimonials(JSON.parse(result.value));
      } else {
        // Add default testimonials if none exist
        const defaultTestimonials = [
          {
            id: "1",
            title: "HAPPY CUSTOMER",
            videoUrl: "https://youtu.be/ybzS1pimsnk?si=SHKezo2oLKo_42jE",
            clientName: "",
            description: "Hear from Our Valuable Omega Client"
          },
          {
            id: "2",
            title: "SHADE CUSTOMER REVIEW",
            videoUrl: "https://youtu.be/kqj3a8HJwMs?si=QWjuaf5K7_7vjSPi",
            clientName: "",
            description: "Behind every happy client is a strategy"
          },
          {
            id: "3",
            title: "CLIENT EXPERIENCE USING OUR TASK",
            videoUrl: "https://youtu.be/Sg5rIzyJ-0s?si=jvY09vOUYlvhW_2b",
            clientName: "",
            description: "Happy Customer #halfmoon"
          },
          {
            id: "4",
            title: "CUSTOMER TESTIMONIAL",
            videoUrl: "https://youtu.be/ifh8iWHRpok?si=gXmrpOagJBW05Cgl",
            clientName: "",
            description: "Client feedback and experience"
          }
        ];
        await saveTestimonials(defaultTestimonials);
      }
    } catch (error) {
      console.log('No testimonials found');
    }
  };

  const saveTestimonials = async (updatedList) => {
    try {
      await window.storage.set('testimonials-list', JSON.stringify(updatedList));
      setTestimonials(updatedList);
    } catch (error) {
      alert('Failed to save testimonials');
    }
  };

  const handleSubmit = async () => {
    if (!formData.title || !formData.videoUrl) {
      alert('Title and Video URL are required');
      return;
    }

    let updatedList;
    if (editingId) {
      updatedList = testimonials.map((t) =>
        t.id === editingId ? { ...formData, id: editingId } : t
      );
    } else {
      const newTestimonial = {
        ...formData,
        id: Date.now().toString(),
      };
      updatedList = [...testimonials, newTestimonial];
    }

    await saveTestimonials(updatedList);
    resetForm();
  };

  const handleEdit = (testimonial) => {
    setFormData({
      title: testimonial.title,
      videoUrl: testimonial.videoUrl,
      clientName: testimonial.clientName || "",
      description: testimonial.description || "",
    });
    setEditingId(testimonial.id);
    setIsModalOpen(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this testimonial?')) {
      const updatedList = testimonials.filter((t) => t.id !== id);
      await saveTestimonials(updatedList);
    }
  };

  const resetForm = () => {
    setFormData({
      title: "",
      videoUrl: "",
      clientName: "",
      description: "",
    });
    setEditingId(null);
    setIsModalOpen(false);
  };

  const getYouTubeEmbedUrl = (url) => {
    if (!url) return '';
    const videoId = url.match(/(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/watch\?.+&v=))([^&\n?#]+)/);
    return videoId ? `https://www.youtube.com/embed/${videoId[1]}` : url;
  };

  const getYouTubeThumbnail = (url) => {
    if (!url) return '';
    const videoId = url.match(/(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/watch\?.+&v=))([^&\n?#]+)/);
    return videoId ? `https://img.youtube.com/vi/${videoId[1]}/maxresdefault.jpg` : '';
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Manage Testimonials
            </h1>
            <p className="text-gray-600">Add and manage client testimonials</p>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors shadow-lg"
          >
            <Plus className="w-5 h-5" />
            Add Testimonial
          </button>
        </div>

        {testimonials.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
            <Video className="w-16 h-16 mx-auto mb-4 text-gray-300" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              No testimonials yet
            </h3>
            <p className="text-gray-500 mb-6">
              Start by adding your first client testimonial
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
            >
              Add First Testimonial
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                onClick={() => handleEdit(testimonial)}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all cursor-pointer transform hover:-translate-y-1"
              >
                <div className="relative pb-[56.25%] bg-gray-900 group">
                  <img 
                    src={getYouTubeThumbnail(testimonial.videoUrl)}
                    alt={testimonial.title}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <Youtube className="w-16 h-16 text-white/90" />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg text-gray-900 mb-1">
                    {testimonial.title}
                  </h3>
                  {testimonial.clientName && (
                    <p className="text-sm text-gray-600 mb-2">
                      {testimonial.clientName}
                    </p>
                  )}
                  {testimonial.description && (
                    <p className="text-sm text-gray-500 line-clamp-2 mb-3">
                      {testimonial.description}
                    </p>
                  )}
                  <div className="flex gap-2 mt-4" onClick={(e) => e.stopPropagation()}>
                    <button
                      onClick={() => handleEdit(testimonial)}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                    >
                      <Edit2 className="w-4 h-4" />
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(testimonial.id)}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {isModalOpen && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-gray-200 flex justify-between items-center sticky top-0 bg-white z-10">
                <h2 className="text-2xl font-bold text-gray-900">
                  {editingId ? "Edit Testimonial" : "Add New Testimonial"}
                </h2>
                <button
                  onClick={resetForm}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="p-6 space-y-6">
                <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded">
                  <p className="text-sm text-gray-700">
                    <span className="font-bold">Required:</span> Title and Video URL must be filled
                  </p>
                </div>

                <div>
                  <label className="block text-base font-bold text-gray-800 mb-2 flex items-center gap-2">
                    <span className="text-orange-500">1.</span> Title *
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target.value })
                    }
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-base"
                    placeholder="Enter video title (e.g., HAPPY CUSTOMER)"
                  />
                </div>

                <div>
                  <label className="block text-base font-bold text-gray-800 mb-2 flex items-center gap-2">
                    <span className="text-orange-500">2.</span> Video URL *
                  </label>
                  <input
                    type="url"
                    value={formData.videoUrl}
                    onChange={(e) =>
                      setFormData({ ...formData, videoUrl: e.target.value })
                    }
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-base font-mono text-sm"
                    placeholder="https://youtu.be/..."
                  />
                  <p className="text-sm text-gray-600 mt-2 bg-blue-50 p-2 rounded">
                    💡 Copy and paste the full YouTube URL here
                  </p>
                </div>

                {formData.videoUrl && (
                  <div className="bg-gray-50 rounded-lg p-4 border-2 border-green-200">
                    <p className="text-sm font-bold text-green-700 mb-2 flex items-center gap-2">
                      ✓ Video Preview:
                    </p>
                    <div className="relative pb-[56.25%] bg-gray-900 rounded-lg overflow-hidden">
                      <iframe
                        src={getYouTubeEmbedUrl(formData.videoUrl)}
                        title="Preview"
                        className="absolute top-0 left-0 w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-base font-bold text-gray-800 mb-2 flex items-center gap-2">
                    <span className="text-orange-500">3.</span> Description (Optional)
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                    rows={3}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 resize-none text-base"
                    placeholder="Brief description of the testimonial (optional)"
                  ></textarea>
                </div>

                <div>
                  <label className="block text-base font-bold text-gray-800 mb-2 flex items-center gap-2">
                    <span className="text-orange-500">4.</span> Client Name (Optional)
                  </label>
                  <input
                    type="text"
                    value={formData.clientName}
                    onChange={(e) =>
                      setFormData({ ...formData, clientName: e.target.value })
                    }
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-base"
                    placeholder="Client's name (optional)"
                  />
                </div>

                <div className="flex gap-4 pt-4 sticky bottom-0 bg-white pb-2">
                  <button
                    onClick={resetForm}
                    className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSubmit}
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-medium"
                  >
                    <Save className="w-5 h-5" />
                    {editingId ? "Update" : "Add"} Testimonial
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminTestimonials;