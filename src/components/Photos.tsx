import { motion } from "framer-motion";
import { Camera, ImageOff } from "lucide-react";
import { fadeUp, stagger, viewport } from "@/lib/animations";

/**
 * ─────────────────────────────────────────────────────────────────
 * HOW TO ADD YOUR PHOTOS
 * ─────────────────────────────────────────────────────────────────
 * 1. Place your image files inside  public/fotos/
 *    (e.g.  public/fotos/pessoal/foto1.jpg)
 * 2. In the arrays below, replace the `src: ""` with the public path:
 *    src: "/fotos/pessoal/foto1.jpg"
 * 3. Update `alt` with a short description of the photo.
 * 4. Remove the `placeholder: true` flag once you have a real image.
 * ─────────────────────────────────────────────────────────────────
 */

interface Photo {
  src: string;
  alt: string;
  placeholder?: boolean;
}

// TODO: replace with your personal photos (public/fotos/pessoal/)
const personalPhotos: Photo[] = [
  { src: "", alt: "Foto pessoal 1", placeholder: true },
  { src: "", alt: "Foto pessoal 2", placeholder: true },
  { src: "", alt: "Foto pessoal 3", placeholder: true },
];

// TODO: replace with Asimov Jr. / company photos (public/fotos/asimov/)
const companyPhotos: Photo[] = [
  { src: "", alt: "Asimov Jr. 1", placeholder: true },
  { src: "", alt: "Asimov Jr. 2", placeholder: true },
  { src: "", alt: "Asimov Jr. 3", placeholder: true },
  { src: "", alt: "Asimov Jr. 4", placeholder: true },
];

function PhotoCard({ photo, index }: { photo: Photo; index: number }) {
  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      className="overflow-hidden rounded-xl border border-border bg-card aspect-[4/3] group relative"
    >
      {photo.placeholder || !photo.src ? (
        <div className="w-full h-full flex flex-col items-center justify-center gap-3 text-muted-foreground/40 p-4 text-center">
          <ImageOff className="w-8 h-8" />
          <span className="text-xs">
            {photo.alt}
            <br />
            <span className="text-primary/60">(adicione a imagem em public/fotos/)</span>
          </span>
        </div>
      ) : (
        <img
          src={photo.src}
          alt={photo.alt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      )}
    </motion.div>
  );
}

export default function Photos() {
  return (
    <section id="fotos" className="py-16 scroll-mt-20 bg-card/30 border-y border-border/50">
      <div className="container mx-auto px-6">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="max-w-5xl mx-auto"
        >
          {/* Section heading */}
          <motion.div variants={fadeUp} className="mb-14">
            <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-3 text-foreground mb-3">
              <Camera className="text-primary w-8 h-8" />
              Momentos
            </h2>
            <p className="text-muted-foreground text-lg">
              Retratos da trajetória — pessoal e na Asimov Jr.
            </p>
          </motion.div>

          {/* Personal photos */}
          <motion.div variants={fadeUp} className="mb-12">
            <h3 className="text-lg font-semibold text-foreground mb-5 flex items-center gap-2">
              <span className="w-1 h-5 rounded bg-primary inline-block" />
              Pessoal
            </h3>
            <motion.div
              variants={stagger}
              className="grid grid-cols-2 sm:grid-cols-3 gap-4"
            >
              {personalPhotos.map((photo, i) => (
                <PhotoCard key={i} photo={photo} index={i} />
              ))}
            </motion.div>
          </motion.div>

          {/* Company photos */}
          <motion.div variants={fadeUp}>
            <h3 className="text-lg font-semibold text-foreground mb-5 flex items-center gap-2">
              <span className="w-1 h-5 rounded bg-primary inline-block" />
              Asimov Jr.
            </h3>
            <motion.div
              variants={stagger}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {companyPhotos.map((photo, i) => (
                <PhotoCard key={i} photo={photo} index={i} />
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
