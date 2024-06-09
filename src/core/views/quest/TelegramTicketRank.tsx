// ** React Import
import { useMemo, useState, useEffect } from "react";

import { useTranslation } from "react-i18next";

// ** MUI Import
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/material";
import Button from "@mui/material/Button";
import Backdrop from "@mui/material/Backdrop";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";

// ** Components Import
import ReloadDataButton from "../../components/ReloadDataButton";
import LeaderboardRankRow from "../../components/LeaderboardRankRow";

// ** Configs Import
import goldImg from "../../../assets/icons/Gold.png";
import silverImg from "../../../assets/icons/Silver.png";
import bronzeImg from "../../../assets/icons/Bronze.png";
import winCup from "../../../assets/icons/WinCup.png";
import usersImg from "../../../assets/icons/Users.png";
import ticketImg from "../../../assets/icons/Ticket.png";

import { leaderboardInfo } from "../../data";

const TelegramTicketRank = () => {
  // ** States
  const [reloading, setReloading] = useState<boolean>(false);

  // ** Hooks
  const theme = useTheme();
  const { t } = useTranslation();
  const isDarkMode = theme.palette.mode === "dark";

  useEffect(() => {
    const overflow = 100;
    const scrollableEl = document.getElementById("telegram-ticket-rank-tab");
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

  const imagePath = useMemo(() => {
    if (leaderboardInfo) {
      switch (leaderboardInfo.rank) {
        case 1:
          return goldImg;
        case 2:
          return silverImg;
        case 3:
          return bronzeImg;
        default:
          return "";
      }
    }

    return null;
  }, [leaderboardInfo]);

  const handleReloadWhenError = async () => {};

  return (
    <Box id="telegram-ticket-rank-tab" sx={{ position: "relative" }}>
      {/* <Box
        sx={{
          top: 0,
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
            flex: 1,
            gap: "0.5rem",
            color: "#FFF",
            width: "100%",
            display: "flex",
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#FE3283",
            p: { xs: "0.25rem", sm: "0.5rem", md: "0.75rem" },
          }}
        >
          <img src={winCup} style={{ height: "2.5rem", objectFit: "cover" }} />
          <Typography
            variant="h4"
            sx={{
              textTransform: "capitalize",
              fontSize: { xs: "0.938rem", sm: "1.375rem", md: "1.875rem" },
            }}
          >
            {t("TelegramTicketRank|leaderboard")}
          </Typography>
        </Box>
        <ReloadDataButton reloadFunction={async () => {}} />
      </Box> */}

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

      <Box mt="0rem">
        {leaderboardInfo ? (
          <>
            {/* Summary Info */}
            <Grid container spacing="0.75rem">
              <Grid item xs={6}>
                <Box
                  className={
                    isDarkMode ? "pixel-borders--dark--2" : "pixel-borders--2"
                  }
                  sx={{
                    px: "1rem",
                    py: "0.5rem",
                    height: "100%",
                    display: "flex",
                    bgcolor: "transparent",
                    borderRadius: "0.5rem",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      mb: "0.25rem",
                      color: theme.palette.primary.main,
                    }}
                  >
                    {t("TelegramTicketRank|ticket-summary-title")}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      gap: "0.5rem",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={ticketImg}
                      style={{ height: "1.5rem", objectFit: "cover" }}
                    />
                    <Typography variant="body1">
                      {leaderboardInfo.total_quest_point}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box
                  className={
                    isDarkMode ? "pixel-borders--dark--2" : "pixel-borders--2"
                  }
                  sx={{
                    px: "1rem",
                    py: "0.5rem",
                    height: "100%",
                    display: "flex",
                    borderRadius: "0.5rem",
                    bgcolor: "transparent",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      mb: "0.25rem",
                      color: theme.palette.primary.main,
                    }}
                  >
                    {t("TelegramTicketRank|user-summary-title")}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      gap: "0.5rem",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={usersImg}
                      style={{ height: "1.5rem", objectFit: "cover" }}
                    />
                    <Typography variant="body1">
                      {leaderboardInfo.total_user}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
            {/* <Box
              sx={{
                gap: "1rem",
                display: "flex",
                alignItems: "center",
                flexWrap: "nowrap",
              }}
            ></Box> */}

            {/* Current User Rank */}
            <Typography variant="h6" sx={{ my: "0.5rem" }}>
              {t("TelegramTicketRank|current-rank-text")}
            </Typography>
            <Box
              className={
                isDarkMode ? "pixel-borders--dark--2" : "pixel-borders--2"
              }
              sx={{
                px: "0.5rem",
                py: "0.25rem",
                gap: "0.5rem",
                display: "flex",
                alignItems: "center",
                borderRadius: "0.5rem",
                bgcolor: "transparent",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  gap: "0.5rem",
                  p: "0.5rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {imagePath ? (
                  <img
                    src={imagePath}
                    style={{ width: "4.375rem", objectFit: "cover" }}
                  />
                ) : (
                  <Typography
                    sx={{
                      color: "text.primary",
                    }}
                  >
                    #{leaderboardInfo.rank}
                  </Typography>
                )}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography sx={{ color: theme.palette.primary.main }}>
                    Unknown
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{ display: "flex", gap: "0.25rem", alignItems: "center" }}
              >
                <img
                  src={ticketImg}
                  style={{ height: "1.25rem", objectFit: "cover" }}
                />
                <Typography>{leaderboardInfo.quest_point}</Typography>
              </Box>
            </Box>

            {/* Rank List */}
            <Typography variant="h6" sx={{ mt: "1.5rem" }}>
              {t("TelegramTicketRank|leaderboard")}
            </Typography>
            <Stack spacing="0.75rem" sx={{ mt: "1rem" }}>
              {leaderboardInfo.leaderboard.map((rank) => {
                return <LeaderboardRankRow key={rank.rank} userRank={rank} />;
              })}
            </Stack>
          </>
        ) : (
          <Typography
            variant="h6"
            sx={{
              my: "1rem",
              textAlign: "center",
              fontStyle: "italic",
              color: theme.palette.secondary.main,
            }}
          >
            {t("TelegramTicketRank|no-leaderboard-data-notify")}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default TelegramTicketRank;
