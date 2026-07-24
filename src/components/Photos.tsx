import { motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "@/lib/animations";

const photos = [1, 2, 3, 4, 5].map((number) => ({ src: `/fotos/asimov/asimov${number}.jpeg`, alt: `Momento da trajetória de Lucas na Asimov Jr. — foto ${number}` }));

export default function Photos() {
  return <section className="section"><motion.div className="site-container" variants={stagger} initial="hidden" whileInView="visible" viewport={viewport}>
    <motion.div variants={fadeUp} className="grid gap-8 lg:grid-cols-[.7fr_1.3fr]"><div><p className="section-kicker">04 / Experiência</p><h2 className="section-title mt-5">Pessoas, decisões e construção coletiva.</h2><p className="mt-5 leading-relaxed text-muted-foreground">A Asimov Jr. foi o espaço onde liderança, gestão e tecnologia passaram a fazer parte da mesma trajetória.</p></div><div className="photo-grid">{photos.map((photo, index) => <motion.figure variants={fadeUp} key={photo.src} className={index === 0 ? "photo-featured" : ""}><img src={photo.src} alt={photo.alt} loading="lazy" /></motion.figure>)}</div></motion.div>
  </motion.div></section>;
}
