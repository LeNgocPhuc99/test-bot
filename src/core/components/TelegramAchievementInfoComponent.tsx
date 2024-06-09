// ** React Import
import { useCallback } from "react";

import { useTranslation } from "react-i18next";

// ** MUI Import
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material";
import Typography from "@mui/material/Typography";

// ** Components Import
import TelegramRewardPathComponent from "./TelegramRewardPathComponent";

import giftImage from "../../assets/icons/Gift.png";

// ** Types Import
import { ITelegramAchievementInfo } from "../types/quest";

type TelegramAchievementInfoComponentProps = {
  info: ITelegramAchievementInfo;
};

const TelegramAchievementInfoComponent = ({
  info,
}: TelegramAchievementInfoComponentProps) => {
  // Hooks
  const theme = useTheme();
  const { t } = useTranslation();

  const isDarkMode = theme.palette.mode === "dark";

  const isClaimedPath = useCallback(
    (index: number) => {
      return info.claimed.includes(index);
    },
    [info.claimed]
  );

  return (
    <Box
      className={isDarkMode ? "pixel-borders--dark--2" : "pixel-borders--2"}
      sx={{
        p: 1,
        bgcolor: theme.palette.background.paper,
      }}
    >
      {/* Header Info */}
      <Box
        sx={{
          mb: 2,
          gap: 2,
          display: "flex",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          alignItems: "center",
          justifyContent: {
            xs: "center",
            md: "space-between",
          },
        }}
      >
        <Box
          sx={{
            gap: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            // lineClamp: 2
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
              color: "text.primary",
            }}
          >
            <img
              src={giftImage}
              style={{
                width: "1.5rem",
                objectFit: "cover",
                marginRight: "0.5rem",
              }}
            />
            {t(`TelegramAchievementInfoComponent|${info.id}-name`)}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
            }}
          >
            {t(
              `TelegramAchievementInfoComponent|${info.id}-counter-description`
            )}
          </Typography>
          <Box
            className={
              isDarkMode ? "pixel-borders--dark--2" : "pixel-borders--2"
            }
            sx={{
              px: "4rem",
              py: "0.5rem",
              mt: "0.1rem",
              border: "0.25rem",
              borderRadius: "1rem",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                lineHeight: "normal",
              }}
            >
              {info.value}
            </Typography>
          </Box>
        </Box>
      </Box>
      {/* Path Info */}
      <Grid container spacing="0.5rem">
        {info.reward_path.path.map((path, index) => {
          const isClaimed = isClaimedPath(index);
          return (
            <Grid
              item
              key={`path-reward-${info.id}-${index}`}
              xs={6}
              sm={4}
              md={3}
            >
              <TelegramRewardPathComponent
                pathInfo={path}
                pathIndex={index}
                isClaimed={isClaimed}
                achievementId={info.id}
                achievementValue={info.value}
              />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default TelegramAchievementInfoComponent;
