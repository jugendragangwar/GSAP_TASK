import React from 'react';

// You may replace avatar URLs with your asset imports if available
const testimonials = [
  {
    text: `We trust them completely with our payments. The integration was seamless, and the service is top-notch.`,
    name: 'Mickael Grants',
    title: 'CFO',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    text: `We trust them completely with our payments. The integration was seamless, and the service is top-notch.`,
    name: 'Mickael Grants',
    title: 'CFO',
    avatar: 'https://randomuser.me/api/portraits/men/34.jpg'
  },
  {
    text: `We trust them completely with our payments. The integration was seamless, and the service is top-notch.`,
    name: 'Mickael Grants',
    title: 'CFO',
    avatar: 'https://randomuser.me/api/portraits/men/36.jpg'
  }
];

export default function TestimonialsCarousel() {
  return (
   <section className="w-full min-h-[380px] bg-gradient-to-br from-black via-[#1c1c1c] to-[#e6e7fa]/10 flex flex-col items-center justify-center py-16 px-4">
  {/* Section Heading */}
  <div className="mb-7 flex flex-col items-center">
    <button className="rounded-full px-5 py-1 bg-white/10 text-[#a5a6cf] text-xs mb-2 font-semibold shadow backdrop-blur">Client Feedbacks</button>
    <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-2">
      Trusted by<br/>
      <span className="text-[#bcbccb] font-medium">Businesses Like Yours</span>
    </h2>
  </div>

  {/* Testimonials Row */}
  <div className="flex gap-7 justify-center flex-wrap max-w-6xl w-full">
    {testimonials.map((t, idx) => (
      <div
        key={idx}
        className="flex flex-col bg-white/10 backdrop-blur-xl border border-[#2d2f45] rounded-xl shadow-md min-w-[310px] max-w-[360px] p-5 mb-4 transition hover:shadow-xl"
      >
        <p className="text-[#e6e7fa] mb-6">{t.text}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={t.avatar}
              className="w-10 h-10 rounded-full border-2 border-[#7C3AED] object-cover"
              alt={t.name}
            />
            <div>
              <div className="font-semibold text-white text-[15px]">{t.name}</div>
              <div className="text-xs text-[#bcbccb]">{t.title}</div>
            </div>
          </div>
          {/* Rating Stars */}
          <div className="flex gap-1">
            {[...Array(5)].map((_,i) => (
              <span key={i} className="text-[#4763f5] text-xl">★</span>
            ))}
          </div>
        </div>
      </div>
    ))}
  </div>

  {/* Carousel Controls */}
  <div className="flex justify-center mt-7 gap-5">
    <button className="w-7 h-7 rounded-full bg-[#2d2f45] border border-[#7C3AED] flex items-center justify-center text-[#bcbccb] hover:bg-[#7C3AED] hover:text-white transition">
      &lt;
    </button>
    <button className="w-7 h-7 rounded-full bg-[#2d2f45] border border-[#7C3AED] flex items-center justify-center text-[#bcbccb] hover:bg-[#7C3AED] hover:text-white transition">
      &gt;
    </button>
  </div>
</section>

  );
}
