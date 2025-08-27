// Importamos los componentes principales de Swiper
import { Swiper, SwiperSlide } from "swiper/react";

// Importamos módulos adicionales de Swiper:
// - Navigation: flechas izquierda/derecha
// - Pagination: puntitos de navegación
// - A11y: accesibilidad (lectores de pantalla, etc.)
import { Navigation, Pagination, A11y } from "swiper/modules";

// Importamos los estilos básicos de Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Array con los videos a mostrar.
const videos = [
  { src: "/videos/speech.mp4",  title: "Leading Deloitte's event" },
  { src: "/videos/speech1.mp4", title: "Geo Expo Press" },
];


export function VideoCarousel() {
  return (
    <Swiper
      className="news-video-swiper"
      modules={[Navigation, Pagination, A11y]}
      

      // Espacio (en px) entre un slide y otro
      spaceBetween={40}

      // Solo se muestra 1 video a la vez
      slidesPerView={1}

      // Asegura que el slide activo siempre quede centrado
      centeredSlides
      centeredSlidesBounds

      // Activa las flechas de navegación (prev / next)
      navigation

      // Activa la paginación (puntitos debajo) y los hace clickeables
      pagination={{ clickable: true }}

      // Desactivamos el loop infinito: llega al final y se detiene
      loop={false}

      // Padding inferior para dar espacio al pagination
      style={{ paddingBottom: 30 }}
    >
      {/* Iteramos el array de videos */}
      {videos.map((v, i) => (
        // Cada video va dentro de un <SwiperSlide>
        <SwiperSlide key={i}>
          
          {/* Contenedor con proporción 16:9 */}
          <div
            // "w-full": ocupa todo el ancho disponible
            // "max-w-xl": ancho máximo (centrado)
            // "mx-auto": centra horizontalmente
            // "rounded-xl shadow": esquinas redondeadas y sombra
            className="relative w-full max-w-md mx-auto overflow-hidden rounded-xl shadow"
            
            // Forzamos que siempre tenga proporción 16:9 (formato video clásico)
            style={{ aspectRatio: "16/9" }}
          >
            {/* El video en sí */}
            <video
              src={v.src}  // ruta al archivo de video
              className="absolute inset-0 w-full h-full object-cover"
              controls     // muestra los controles (play, pause, volumen, etc.)       // empieza en silencio
              playsInline  // permite reproducir en móviles sin fullscreen automático
            />
          </div>

          {/* Texto debajo de cada video */}
          <p className="mt-2 text-center text-sm text-muted-foreground">
            {v.title}
          </p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
