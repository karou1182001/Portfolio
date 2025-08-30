import { Swiper, SwiperSlide } from "swiper/react";
// Swiper modules
import { Navigation, Pagination, A11y } from "swiper/modules";
// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Videos to display
const videos = [
  { src: "/videos/speech.mp4",  title: "Keynote at Deloitte" },
  { src: "/videos/speech1.mp4", title: "Inspiring Speeches" },
];

export function VideoCarousel() {
  return (
    <Swiper
      className="news-video-swiper" //To specify colors
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={40}
      slidesPerView={1}
      centeredSlides
      centeredSlidesBounds
      navigation
      pagination={{ clickable: true }}
      loop={false}
      style={{ paddingBottom: 25 }}
    >
      {videos.map((v, i) => (
        <SwiperSlide key={i}>
          {/* 16:9 responsive wrapper */}
          <div className="relative w-full max-w-md mx-auto overflow-hidden rounded-xl shadow" style={{ aspectRatio: "16/9" }}>
            <video
            src={v.src}
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover"
            muted                         // required for autoplay on mobile
            autoPlay
            loop
            playsInline
            controls                      
            />
          </div>

          {/* Caption */}
          <p className="text-center text-sm text-muted-foreground">
            {v.title}
          </p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
