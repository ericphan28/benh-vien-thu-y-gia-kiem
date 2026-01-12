'use client';

import { useState } from 'react';

const galleryImages = [
  {
    category: 'facility',
    title: 'Cơ sở vật chất',
    images: [
      '/Bệnh Viện TY Gia Kiệm [12-01-2026 18_18]/1444940590710629425.jpg',
      '/Bệnh Viện TY Gia Kiệm [12-01-2026 18_18]/1924876500024347961.jpg',
      '/Bệnh Viện TY Gia Kiệm [12-01-2026 18_18]/1924876500024347962.jpg',
      '/Bệnh Viện TY Gia Kiệm [12-01-2026 18_18]/ed920ce1f4777b2922664.jpg',
    ],
  },
  {
    category: 'treatment',
    title: 'Hoạt động điều trị',
    images: [
      '/Bệnh Viện TY Gia Kiệm [12-01-2026 18_48]/224052693456503030310.jpg',
      '/Bệnh Viện TY Gia Kiệm [12-01-2026 18_48]/224052693456503030312.jpg',
      '/Bệnh Viện TY Gia Kiệm [12-01-2026 18_48]/7869fea305358a6bd32411.jpg',
      '/Bệnh Viện TY Gia Kiệm [12-01-2026 18_48] (1)/348607439431384236213.jpg',
    ],
  },
  {
    category: 'pets',
    title: 'Thú cưng khỏe mạnh',
    images: [
      '/Bệnh Viện TY Gia Kiệm [12-01-2026 18_49]/0598bc824414cb4a920531.jpg',
      '/Bệnh Viện TY Gia Kiệm [12-01-2026 18_49]/0b59df4227d4a88af1c530.jpg',
      '/Bệnh Viện TY Gia Kiệm [12-01-2026 18_49]/132405391983465023232.jpg',
      '/Bệnh Viện TY Gia Kiệm [12-01-2026 18_18]/1924876500024347963.jpg',
    ],
  },
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'Tất cả' },
    { id: 'facility', label: '🏥 Cơ sở vật chất' },
    { id: 'treatment', label: '⚕️ Hoạt động điều trị' },
    { id: 'pets', label: '🐾 Thú cưng khỏe mạnh' },
  ];

  const getFilteredImages = () => {
    if (selectedCategory === 'all') {
      return galleryImages.flatMap((cat) =>
        cat.images.map((img) => ({ ...cat, image: img }))
      );
    }
    const category = galleryImages.find((cat) => cat.category === selectedCategory);
    return category
      ? category.images.map((img) => ({ ...category, image: img }))
      : [];
  };

  const filteredImages = getFilteredImages();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Hình ảnh thực tế
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Khám phá không gian chăm sóc thú cưng chuyên nghiệp tại Bệnh viện Thú Y Gia Kiệm
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all transform hover:scale-105 ${
                selectedCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {filteredImages.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer aspect-square"
              onClick={() => setLightboxImage(item.image)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="font-semibold text-sm">{item.title}</p>
                </div>
              </div>
              {/* Zoom Icon */}
              <div className="absolute top-4 right-4 bg-white/90 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg
                  className="w-5 h-5 text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Không có hình ảnh trong danh mục này</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-12">
          <a
            href="tel:0965986798"
            className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-4 px-8 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105 shadow-lg"
          >
            📞 Liên hệ ngay: 0965 986 798
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white bg-white/20 hover:bg-white/30 rounded-full p-3 transition-all"
            onClick={() => setLightboxImage(null)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <img
            src={lightboxImage}
            alt="Lightbox"
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
