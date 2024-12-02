import { Modal, Stack, Typography } from "@mui/material";
import { moviesSelectors } from "@store/movies/movies.selector";
import { RateStatus } from "@store/movies/movies.types";
import { useSelector } from "react-redux";
import { MovieInfoModalProps } from "./MovieInfoModal.types";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";

export const MovieInfoModal: React.FC<MovieInfoModalProps> = ({
  isOpen,
  handleClose,
}) => {
  const moviesBeforeGrade = useSelector(moviesSelectors.moviesAfterGrade);

  const rejectedMovies = moviesBeforeGrade.filter(
    (m) => m.rateStatus === RateStatus.REJECTED
  );
  const likedMovies = moviesBeforeGrade.filter(
    (m) => m.rateStatus === RateStatus.LIKED
  );

  return (
    <Modal open={isOpen} onClose={handleClose}>
      <Stack
        justifyContent="center"
        alignItems="center"
        bgcolor={(theme) => theme.palette.background.default}
        gap={2}
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          borderRadius: "20px",
          padding: 2,
        }}
      >
        <Typography variant="h5">History</Typography>
        <Stack direction="row" gap={{ xs: 2, md: 4 }}>
          <Stack width={{ xs: 170, md: 180 }} gap={1}>
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              gap={0.5}
            >
              <CheckCircleIcon color="success" />
              <Typography variant="h6">Liked</Typography>
            </Stack>
            <Stack>
              {likedMovies.map((movie, index) => (
                <Typography key={movie.id} variant="body2">
                  {index + 1}.{movie.title}
                </Typography>
              ))}
            </Stack>
          </Stack>
          <Stack width={{ xs: 170, md: 180 }} gap={1}>
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              gap={0.5}
            >
              <ErrorIcon color="error" />
              <Typography variant="h6">Rejected</Typography>
            </Stack>
            <Stack>
              {rejectedMovies.map((movie, index) => (
                <Typography key={movie.id} variant="body2">
                  {index + 1}.{movie.title}
                </Typography>
              ))}
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Modal>
  );
};
