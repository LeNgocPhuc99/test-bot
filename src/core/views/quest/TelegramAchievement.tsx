// ** React Import
import { useState, useEffect } from "react";

import { useTranslation } from "react-i18next";

// ** MUI Import
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";

// ** Components Import
import ReloadDataButton from "../../components/ReloadDataButton";
import TelegramAchievementInfoComponent from "../../components/TelegramAchievementInfoComponent";

import achievementImg from "../../../assets/icons/AchievementSmall.png";

import { achievementInfos } from "../../data";

const TelegramAchievement = () => {
  // ** States
  const [reloading, setReloading] = useState<boolean>(false);

  // ** Hooks
  const theme = useTheme();
  const { t } = useTranslation();

  const isInitDataError = false;
  const handleReloadWhenError = async () => {};

  return (
    <>
      <Box
        sx={{
          top: 0,
          left: 0,
          zIndex: 10,
          p: "0.25rem",
          mb: "0.25rem",
          width: "100%",
          gap: "0.5rem",
          display: "flex",
          position: 'sticky',
          alignItems: "center",
          backdropFilter: "blur(0.5rem)",
          backgroundColor: "transparent",
        }}
      >
        <Box
          className="ribbon--19"
          sx={{
            gap: "0.5rem",
            color: "#FFF",
            width: "100%",
            flex: "0.25rem",
            display: "flex",
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#FE3283",
            p: { xs: "0.25rem", sm: "0.5rem", md: "0.75rem" },
          }}
        >
          <img
            src={achievementImg}
            style={{ height: "2.5rem", objectFit: "cover" }}
          />
          <Typography
            variant="h4"
            sx={{
              textTransform: "capitalize",
              fontSize: { xs: "0.938rem", sm: "1.375rem", md: "1.875rem" },
            }}
          >
            {t("TelegramAchievement|title")}
          </Typography>
        </Box>
        <ReloadDataButton reloadFunction={async () => {}} />
      </Box>

      {/* Refresh Backdrop When Init Data Fail */}
      <Backdrop
        open={isInitDataError}
        sx={{
          color: "#fff",
          zIndex: (theme) => theme.zIndex.drawer + 1,
          position: "absolute",
        }}
      >
        {!reloading ? (
          <Box
            sx={{
              gap: "0.5rem",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography sx={{ color: "red" }}>No message</Typography>
          </Box>
        ) : (
          <CircularProgress color="inherit" />
        )}
      </Backdrop>
      <Box pt="1rem">
        <Box
          sx={{
            width: "100%",
            height: "100%",
            // overflow: "hidden",
            // overflowY: "scroll",
          }}
        >
          {achievementInfos.length > 0 ? (
            <Stack spacing="0.5rem" bgcolor="transparent">
              {achievementInfos.map((info) => (
                <TelegramAchievementInfoComponent key={info.id} info={info} />
              ))}
            </Stack>
          ) : (
            <Typography
              variant="h6"
              sx={{
                mt: "1rem",
                textAlign: "center",
                fontStyle: "italic",
                color: theme.palette.secondary.main,
              }}
            >
              {t("TelegramAchievement|no-achievement-notify")}
            </Typography>
          )}
        </Box>
      </Box>
    </>
  );
};

export default TelegramAchievement;
