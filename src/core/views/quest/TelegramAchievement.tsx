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

// ** Configs Import
import { ICON_IMAGE_PATH } from "../../configs/appConfigs";

import { achievementInfos } from "../../data";

const TelegramAchievement = () => {
  // ** States
  const [reloading, setReloading] = useState<boolean>(false);

  // ** Hooks
  const theme = useTheme();
  const { t } = useTranslation();

  useEffect(() => {
    const overflow = 100;
    const scrollableEl = document.getElementById("telegram-achievement-tab");
    let ts: number | undefined;
    const onTouchStart = (e: TouchEvent) => {
      ts = e.touches[0].clientY;
    };
    const onTouchMove = (e: TouchEvent) => {
      if (scrollableEl) {
        const scroll = scrollableEl.scrollTop;
        const te = e.changedTouches[0].clientY;
        if (scroll <= 0 && ts! < te) {
          e.preventDefault();
        }
      } else {
        e.preventDefault();
      }
    };
    document.documentElement.addEventListener("touchstart", onTouchStart, {
      passive: false,
    });
    document.documentElement.addEventListener("touchmove", onTouchMove, {
      passive: false,
    });

    const onScroll = () => {
      if (window.scrollY < overflow) {
        window.scrollTo(0, overflow);
        if (scrollableEl) {
          scrollableEl.scrollTo(0, 0);
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      document.documentElement.removeEventListener("touchstart", onTouchStart);
      document.documentElement.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const isInitDataError = false;
  const handleReloadWhenError = async () => {};

  return (
    <Box
      id="telegram-achievement-tab"
      sx={{ position: "relative", overflowX: "auto", overflowY: "scroll" }}
    >
      <Box
        sx={{
          zIndex: 10,
          p: "0.25rem",
          mb: "0.25rem",
          width: "100%",
          gap: "0.5rem",
          display: "flex",
          position: "fixed",
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
            src={`${ICON_IMAGE_PATH}/AchievementSmall.png`}
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
      <Box pt="5rem">
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
    </Box>
  );
};

export default TelegramAchievement;
