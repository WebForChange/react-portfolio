import { useState } from "react";
import { Box, Snackbar } from "@mui/material";
import { AiOutlineMail } from "react-icons/ai";
import ownerConstants from "../../constants/ownerConstants";
import PrimaryIconButton from "./PrimaryIconButton";
import { safeMailtoUrlOrNull } from "../../utils/urlUtils";

const mailtoHref = safeMailtoUrlOrNull(
  `mailto:${ownerConstants.OWNER_EMAIL}`
);

export default function EmailContactButton() {
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(ownerConstants.OWNER_EMAIL);
    } catch {
      // Clipboard may be blocked; snackbar still shows the address.
    }
    setSnackbarOpen(true);
  };

  return (
    <Box sx={{ px: "0.35rem" }}>
      <PrimaryIconButton
        aria-label={`Email ${ownerConstants.OWNER_EMAIL}`}
        title={`Email ${ownerConstants.OWNER_EMAIL}`}
        href={mailtoHref ?? undefined}
        disabled={!mailtoHref}
        onClick={handleClick}
      >
        <AiOutlineMail style={{ fontSize: "1.5rem" }} />
      </PrimaryIconButton>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={5000}
        onClose={() => setSnackbarOpen(false)}
        message={`Copied ${ownerConstants.OWNER_EMAIL} — paste into your email app if nothing opens`}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      />
    </Box>
  );
}
