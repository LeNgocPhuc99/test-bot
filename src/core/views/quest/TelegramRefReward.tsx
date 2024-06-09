// ** React Import
import { useMemo, useState } from "react";

import { useTranslation } from "react-i18next";

// ** MUI Import
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material";
import Button from "@mui/material/Button";
import Backdrop from "@mui/material/Backdrop";
import Accordion from "@mui/material/Accordion";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

// ** Components Import
import ReloadDataButton from "../../components/ReloadDataButton";
import CopyTextComponent from "../../components/CopyTextComponent";

// ** Configs Import
import ticketImg from "../../../assets/icons/Ticket.png";
import expandImg from "../../../assets/icons/ExpandLight.png";
import usersIng from "../../../assets/icons/Users.png";
import winCup from "../../../assets/icons/WinCup.png";

import { questProgress } from "../../data";

type TelegramRefRewardProps = {
  handleMoveToRank: () => void;
};

const TelegramRefReward = ({ handleMoveToRank }: TelegramRefRewardProps) => {
  // console.log('TICK PAGE')
  // ** States
  const [reloading, setReloading] = useState<boolean>(false);

  // ** Hooks
  const { t } = useTranslation();
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  const isInitDataError = false;

  const handleReloadWhenError = async () => {};

  const handleRefreshData = async () => {};

  const handleShareRefCode = () => {
    let _botUrl = `${process.env.REACT_APP_TELEGRAM_APP_QUEST}?start=${questProgress.ref_code}&startapp=${questProgress.ref_code}`;
    let _botMessage = `
    ${t("InviteText|invite-sub-str-1")} 🎁
💰 ${t("InviteText|invite-sub-str-2")}
🎁 ${t("InviteText|invite-sub-str-3")}`;
    // @ts-ignore
    Telegram.WebApp.openTelegramLink(
      `https://t.me/share/url?url=${encodeURIComponent(
        _botUrl
      )}&text=${encodeURIComponent(_botMessage)}`
    );
  };

  return (
    <Box sx={{ width: "100%", height: "100%" }}>
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
            gap: "0.5rem",
            width: "100%",
            color: "#FFF",
            display: "flex",
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#FE3283",
            p: { xs: "0.25rem", sm: "0.5rem", md: "0.75rem" },
          }}
        >
          <img
            src={ticketImg}
            style={{ height: "2.5rem", objectFit: "cover" }}
          />
          <Typography
            variant="h4"
            sx={{
              textTransform: "capitalize",
              fontSize: { xs: "0.938rem", sm: "1.375rem", md: "1.875rem" },
            }}
          >
            {t("TelegramRefReward|title")}
          </Typography>
        </Box>
        <ReloadDataButton reloadFunction={handleRefreshData} />
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
        {/* Current User Ticket */}
        <Box
          className={isDarkMode ? "pixel-borders--dark--2" : "pixel-borders--2"}
          sx={{
            px: "1rem",
            py: "0.5rem",
            mt: "0.5rem",
            borderRadius: "0.5rem",
            bgcolor: "transparent",
          }}
        >
          <Typography
            variant="body1"
            sx={{ color: theme.palette.primary.main }}
          >
            {t("TelegramRefReward|user-ticket-title")}
          </Typography>
          <Box
            sx={{
              mt: "0.5rem",
              gap: "0.25rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <img
              src={ticketImg}
              style={{ height: "1.5rem", objectFit: "cover" }}
            />
            <Typography variant="body1">{questProgress.point}</Typography>
          </Box>
        </Box>
        {/* Description Info */}
        <Typography
          variant="body2"
          sx={{
            my: "0.5rem",
            px: "1rem",
            color: theme.palette.secondary.main,
          }}
        >
          {t("TelegramRefReward|ticket-helper-text")}
        </Typography>
        {/* Invite Friend Code */}
        <Box
          className={isDarkMode ? "pixel-borders--dark--2" : "pixel-borders--2"}
          sx={{
            py: "1rem",
            px: "0.5rem",
            border: "0.5rem",
            display: "flex",
            flexDirection: {
              xs: "column",
              md: "row",
            },
            borderRadius: "0.5rem",
            alignItems: {
              xs: "flex-start",
              md: "center",
            },
            bgcolor: "transparent",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              color: theme.palette.primary.main,
            }}
          >
            {t("TelegramRefReward|invite-code-title")}
          </Typography>
          <Box
            sx={{
              gap: "1rem",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                textAlign: "left",
              }}
            >
              {questProgress.ref_code}
            </Typography>
            <Typography onClick={handleShareRefCode} component="span">
              <CopyTextComponent text={questProgress.ref_code} />
            </Typography>
          </Box>
        </Box>
        {/* Ref Code Used */}
        <Accordion
          className={isDarkMode ? "pixel-borders--dark--2" : "pixel-borders--2"}
          sx={{ mt: "0.5rem", bgcolor: "transparent" }}
        >
          <AccordionSummary
            expandIcon={
              <Box>
                <img
                  src={expandImg}
                  style={{ width: "1.5rem", objectFit: "cover" }}
                />
              </Box>
            }
            sx={{ px: "1rem" }}
          >
            <Typography
              variant="body1"
              sx={{
                color: theme.palette.primary.main,
              }}
            >
              {t("TelegramRefReward|used-invite-code-title")}
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              p: "0.5rem 1rem 1rem",
            }}
          >
            <Box
              sx={{
                gap: "0.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="body1">
                {questProgress.ref_code_used}
              </Typography>
              <CopyTextComponent text={questProgress.ref_code_used} />
            </Box>
          </AccordionDetails>
        </Accordion>
        {/* User Referral Ticket Info */}
        <Grid
          container
          spacing="0.5rem"
          sx={{
            mt: "0.25rem",
          }}
        >
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
                alignItems: "flex-start",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Typography
                variant="body1"
                sx={{ color: theme.palette.primary.main }}
              >
                {t("TelegramRefReward|total-invite-title")}
              </Typography>
              <Box
                sx={{
                  mt: "0.25rem",
                  pl: "0.25rem",
                  gap: "0.25rem",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img
                  src={usersIng}
                  style={{ height: "1.75rem", objectFit: "cover" }}
                />
                <Typography variant="body1">
                  {questProgress.ref_count}
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
                alignItems: "flex-start",
                flexDirection: "column",
                justifyContent: "space-between",
                bgcolor: theme.palette.background.paper,
              }}
            >
              <Typography
                variant="body1"
                sx={{ color: theme.palette.primary.main }}
              >
                {t("TelegramRefReward|total-ref-ticket-title")}
              </Typography>
              <Box
                sx={{
                  mt: "0.25rem",
                  pl: "0.25rem",
                  gap: "0.25rem",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img
                  src={ticketImg}
                  style={{ height: "1.75rem", objectFit: "cover" }}
                />
                <Typography variant="body1">
                  {questProgress.ref_point}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Button
          className={
            isDarkMode ? "pixel-button--primary--dark" : "pixel-button--primary"
          }
          fullWidth
          variant="contained"
          startIcon={
            <img
              src={winCup}
              style={{ height: "2.5rem", objectFit: "cover" }}
            />
          }
          sx={{
            mt: "1rem",
            py: "0.25rem",
            borderRadius: "1rem",
            textTransform: "capitalize",
            boxShadow: "none",
          }}
          onClick={handleMoveToRank}
        >
          <Typography variant="body1" sx={{ color: "#000" }}>
            {t("TelegramTicketRank|leaderboard")}
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default TelegramRefReward;
