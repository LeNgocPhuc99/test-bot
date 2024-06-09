// ** React Import
import { useMemo, useState } from "react";

import { useTranslation } from "react-i18next";

// ** MUI Import
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Backdrop from "@mui/material/Backdrop";
import { darken, useTheme } from "@mui/material";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";

// ** Types Import
import { ITelegramQuest } from "../types/quest";

// ** Config Import
import { ICON_IMAGE_PATH } from "../configs/appConfigs";

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

import { questProgress } from "../data";

type Props = {
  quest: ITelegramQuest;
};

const TelegramQuestCard = ({ quest }: Props) => {
  // ** State
  const [isVerifyingQuest, setIsVerifyingQuest] = useState<boolean>(false);

  // ** Hooks
  const theme = useTheme();
  const { t } = useTranslation();

  const isDarkMode = theme.palette.mode === "dark";

  const getUserProgressQuest = (questId: number) => {
    // Check Quest Type
    return questProgress.quest_done.filter((id) => id === questId).length;
  };

  const progress = useMemo(() => {
    return getUserProgressQuest(quest.id);
  }, [getUserProgressQuest]);

  const handleVerifyQuest = async () => {};

  return (
    <Box
      className={isDarkMode ? "pixel-borders--dark--2" : "pixel-borders--2"}
      sx={{
        position: "relative",
        borderRadius: "0.5rem",
        bgcolor: "transparent",
        padding: "0.5rem 0.75rem",
        ":hover": {
          bgcolor: darken(theme.palette.background.paper, 0.2),
        },
      }}
    >
      <Backdrop
        open={isVerifyingQuest}
        sx={{
          color: "#fff",
          zIndex: (theme) => theme.zIndex.drawer + 1,
          position: "absolute",
        }}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Typography variant="body1" sx={{ color: theme.palette.primary.main }}>
        {t(`TelegramQuestCard|${quest.unique_key}-name`)}
      </Typography>
      <Typography sx={{ my: "0.25rem" }}>
        {t(`TelegramQuestCard|${quest.unique_key}-description`)}
      </Typography>

      <Box
        sx={{
          gap: "1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <Box
            sx={{
              p: "0.25rem",
              gap: "0.25rem",
              display: "flex",
              alignItems: "center",
              borderRadius: "0.5rem",
            }}
          >
            <img
              src={`${ICON_IMAGE_PATH}/Ticket.png`}
              style={{ height: "1rem", objectFit: "cover" }}
            />
            <Typography variant="body2">{quest.point}</Typography>
          </Box>
          <Typography variant="body2" sx={{ color: "blue.500" }}>
            {progress}/{quest.max_repeated}
          </Typography>
        </Box>
        {progress >= quest.max_repeated ? (
          <Box
            className="pixel-box--success"
            sx={{
              px: "0.5rem",
              py: "0.25rem",
              gap: "0.25rem",
              display: "flex",
              borderRadius: "1rem",
              alignItems: "center",
              bgcolor: "#38a169", // green
            }}
          >
            <img
              src={`${ICON_IMAGE_PATH}/Check.png`}
              style={{ height: "1.25rem", objectFit: "cover" }}
            />
            <Typography variant="h6">
              {t("TelegramQuestCard|quest-done-text")}
            </Typography>
          </Box>
        ) : (
          <Box
            sx={{
              gap: "0.25rem",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <Button
              variant="contained"
              className={
                isDarkMode
                  ? "pixel-button--primary--dark"
                  : "pixel-button--primary"
              }
              sx={{
                px: "0.5rem",
                py: "0.25rem",
                color: "white",
                bgcolor: "#03a9f4",
                borderRadius: "1rem",
                textTransform: "capitalize",
              }}
              onClick={handleVerifyQuest}
            >
              <Typography variant="h6">
                {t("TelegramQuestCard|go-btn-text")}
              </Typography>
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default TelegramQuestCard;
