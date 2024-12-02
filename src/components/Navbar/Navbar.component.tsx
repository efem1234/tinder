import { Stack, Typography } from "@mui/material";

export const Navbar: React.FC = () => {
  return (
    <Stack direction="row" alignItems="center" justifyContent="start" gap={2}>
      <img src="/logo.png" alt="logo" />
      <Typography variant="h4">MovieTinder</Typography>
    </Stack>
  );
};
