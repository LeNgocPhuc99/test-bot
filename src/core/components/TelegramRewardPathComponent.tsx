// ** React Import
import { useMemo, useState } from "react";

import { useTranslation } from "react-i18next";

// ** MUI Import
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";

// ** Types Import
import { ITelegramRewardPathInfo } from "../types/quest";

import ticketImg from "../../assets/icons/Ticket.png"

type TelegramRewardPathComponentProps = {
  pathIndex: number;
  isClaimed: boolean;
  achievementId: number;
  achievementValue: number;
  pathInfo: ITelegramRewardPathInfo;
};

const TelegramRewardPathComponent = ({
  pathInfo,
  isClaimed,
  pathIndex,
  achievementId,
  achievementValue,
}: TelegramRewardPathComponentProps) => {
  const [showBackdrop, setShowBackdrop] = useState<boolean>(false);

  // ** Hooks
  const theme = useTheme();
  const { t } = useTranslation()

  const isDarkMode = theme.palette.mode === 'dark';

  const isAvailableClaim = useMemo(() => {
    return achievementValue >= pathInfo.value;
  }, [achievementValue, pathInfo.value]);

  const handleClaimReward = async () => {
  };

  const translateTextValue = (text: string) => {
    if(text === 'First purchase') {
      return t('TelegramRewardPathComponent|first-purchase')
    }

    return text.replace('Day', t('TelegramRewardPathComponent|day'))
  }

  return (
    <Box
      className={isDarkMode ? "pixel-borders--dark--2" : "pixel-borders--2"}
      component="button"
      disabled={!isAvailableClaim || isClaimed}
      onClick={handleClaimReward}
      sx={{
        p: 0,
        border: "0.25rem",
        width: '100%',
        height: '11rem',
        display: "flex",
        position: "relative",
        alignItems: "center",
        borderRadius: "0.5rem",
        flexDirection: "column",
        bgcolor: "transparent", // TODO: Change
        ":hover": {
          cursor: isAvailableClaim ? "pointer" : "not-allowed",
          bgcolor: isAvailableClaim && !isClaimed ? "#323232" : "",
        },
      }}
    >
      {isClaimed && (
        <Typography
          className="ribbon--6"
          sx={{
            zIndex: 2,
            color: "#fff",
          }}
        >
          {t('TelegramRewardPathComponent|claimed')}
        </Typography>
      )}
      <Backdrop
        open={showBackdrop}
        sx={{
          color: "#fff",
          zIndex: (theme) => theme.zIndex.drawer + 1,
          position: "absolute",
        }}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          filter: isClaimed ? "blur(2px)" : "",
        }}
      >
        {/* Ticket Image */}
        <img
          src={ticketImg}
          style={{ height: "4rem", objectFit: "cover", margin: "0.25rem 0" }}
        />
        <Box
          sx={{
            mb: 0.5,
            gap: 0.5,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={ticketImg}
            style={{ height: "1.5rem", objectFit: "cover" }}
          />
          <Typography color="text.primary">
            +{pathInfo.reward_amount}
          </Typography>
        </Box>
        <Box
          sx={{
            top: "70%",
            bottom: "0",
            width: "100%",
            display: "flex",
            alignItems: "center",
            position: "absolute",
            flexDirection: "column",
            justifyContent: "center",
            borderTop: `0.25rem solid ${theme.palette.primary.main}`,
            borderBottomLeftRadius: "0.5rem",
            borderBottomRightRadius: "0.5rem",
            bgcolor: "transparent",
          }}
        >
          <Typography
            sx={{
              px: 0.5,
              textAlign: "center",
              alignSelf: "center",
              color: isAvailableClaim ? theme.palette.primary.main : 'text.primary'
            }}
            dangerouslySetInnerHTML={{ __html: translateTextValue(pathInfo.value_text) }}
          >
            {/* {__html: pathInfo.value_text} */}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default TelegramRewardPathComponent;
