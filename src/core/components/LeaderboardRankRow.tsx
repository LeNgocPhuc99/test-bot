// ** React Import
import { useMemo, useRef } from "react";

// ** MUI Import
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material";
import Typography from "@mui/material/Typography";

// ** Hooks Import
import { leaderboardInfo } from "../data";

// ** Types Import
import { ITelegramUserRank } from "../types/quest";

import goldImg from "../../assets/icons/Gold.png";
import silverImg from "../../assets/icons/Silver.png";
import bronzeImg from "../../assets/icons/Bronze.png";
import ticketImg from "../../assets/icons/Ticket.png";

type LeaderboardRankRowProps = {
  userRank: ITelegramUserRank;
};

const LeaderboardRankRow = ({ userRank }: LeaderboardRankRowProps) => {
  // ** Ref
  const containerRef = useRef<HTMLElement | null>(null);

  const imagePath = useMemo(() => {
    if (userRank) {
      switch (userRank.rank) {
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
  }, [userRank]);

  // ** Hooks
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  // ** Context
  // const { leaderboardInfo } = useQuestContext();

  const latestQuestPoint = useMemo(() => {
    if (leaderboardInfo && leaderboardInfo.user_id === userRank.user_id) {
      return leaderboardInfo.quest_point;
    }
    return null;
  }, [leaderboardInfo]);

  return (
    <Box
      className={isDarkMode ? "pixel-borders--dark--2" : "pixel-borders--2"}
      sx={{
        px: "0.75rem",
        py: "1rem",
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
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {imagePath ? (
          <img src={imagePath} style={{ width: "3rem", objectFit: "cover" }} />
        ) : (
          <Typography
            sx={{
              color: "text.main",
            }}
          >
            #{userRank.rank}
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
            {userRank.username}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex", gap: "0.25rem", alignItems: "center" }}>
        <img
          src={ticketImg}
          style={{ height: "1.25rem", objectFit: "cover" }}
        />
        <Typography>
          {latestQuestPoint ? latestQuestPoint : userRank.quest_point}
        </Typography>
      </Box>
    </Box>
  );
};

export default LeaderboardRankRow;
