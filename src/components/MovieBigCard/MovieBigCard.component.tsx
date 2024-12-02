import { motion, useMotionValue, useTransform } from "framer-motion";
import { MovieBigCardProps } from "./MovieBigCard.types";

export const MovieBigCard: React.FC<MovieBigCardProps> = ({
  id,
  url,
  isFront,
  handleReject,
  handleLike,
}) => {
  const x = useMotionValue(0);

  const rotateRaw = useTransform(x, [-150, 150], [-18, 18]);
  const opacity = useTransform(x, [-150, 0, 150], [0, 1, 0]);

  const rotate = useTransform(() => {
    return `${rotateRaw.get()}deg`;
  });

  const handleDragEnd = () => {
    if (Math.abs(x.get()) > 100) {
      handleReject(id);
    }
    if (Math.abs(x.get()) < -100) {
      handleLike(id);
    }
  };

  return (
    <motion.img
      src={url}
      alt={url}
      style={{
        position: "absolute",
        height: "100%",
        width: "101%",
        maxWidth: 594,
        transformOrigin: "bottom",
        borderRadius: "20px",
        backgroundColor: "white",
        objectFit: "cover",
        gridRow: 1,
        gridColumn: 1,
        x,
        opacity,
        rotate,
        transition: "0.1s filter",
        backdropFilter: "blur(110px)",
        cursor: "pointer",
        filter: isFront ? "drop-shadow(0px 0px 10px rgba(0,0,0,0.5))" : "",
      }}
      drag={isFront ? "x" : false}
      exit={{ opacity: 0 }}
      dragConstraints={{
        left: 0,
        right: 0,
      }}
      onDragEnd={handleDragEnd}
    />
  );
};
