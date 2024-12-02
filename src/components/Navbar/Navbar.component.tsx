import { Button, Stack, Typography } from "@mui/material";
import logo from "@assets/logo.png";
import { useState } from "react";
import { MovieInfoModal } from "@components/MovieInfoModal";

export const Navbar: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <Stack direction="row" alignItems="center" justifyContent="start" gap={2}>
        <img src={logo} alt="logo" />
        <Typography variant="h4">MovieTinder</Typography>
        <Button
          sx={{ marginLeft: "auto" }}
          variant="contained"
          onClick={() => setIsModalOpen(true)}
        >
          history
        </Button>
      </Stack>
      <MovieInfoModal
        isOpen={isModalOpen}
        handleClose={() => setIsModalOpen(false)}
      />
    </>
  );
};
