// ** React Import
import { useState, useMemo, useEffect } from "react";

import { useTranslation } from "react-i18next";

// ** MUI Import
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/material";
import Button from "@mui/material/Button";
import Backdrop from "@mui/material/Backdrop";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";

// ** Components Import
import TelegramQuestCard from "../../components/TelegramQuestCard";

// ** Types Import
import { ITelegramQuest } from "../../types/quest";

import questImg from "../../../assets/icons/QuestSmall.png";

import { questList } from "../../data";

type QuestListProps = {
  quests: ITelegramQuest[];
};

const DailyQuestList = ({ quests }: QuestListProps) => {
  // ** Hooks
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <Stack gap="0.5rem">
      {quests.length > 0 ? (
        quests.map((quest) => (
          <TelegramQuestCard key={quest.id} quest={quest} />
        ))
      ) : (
        <Typography
          variant="body1"
          sx={{
            fontStyle: "italic",
            textAlign: "center",
            color: theme.palette.secondary.main,
          }}
        >
          {t("TelegramQuest|no-daily-quest-notify")}
        </Typography>
      )}
    </Stack>
  );
};

const GrowthQuestLis = ({ quests }: QuestListProps) => {
  // ** Hooks
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <Stack gap="0.5rem">
      {quests.length > 0 ? (
        quests.map((quest) => (
          <TelegramQuestCard key={quest.id} quest={quest} />
        ))
      ) : (
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            fontStyle: "italic",
            color: theme.palette.secondary.main,
          }}
        >
          {t("TelegramQuest|No growth quest available")}
        </Typography>
      )}
    </Stack>
  );
};

const PartnerQuest = ({ quests }: QuestListProps) => {
  // ** Hooks
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <Stack gap="0.5rem">
      {quests.length > 0 ? (
        quests.map((quest) => (
          <TelegramQuestCard key={quest.id} quest={quest} />
        ))
      ) : (
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            fontStyle: "italic",
            color: theme.palette.secondary.main,
          }}
        >
          {t("TelegramQuest|no-partner-quest-notify")}
        </Typography>
      )}
    </Stack>
  );
};

const TelegramQuest = () => {
  // ** States
  const [reloading, setReloading] = useState<boolean>(false);

  // ** Hooks
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
          position: 'sticky',
          backdropFilter: "blur(0.5rem)",
          backgroundColor: "transparent",
        }}
      >
        <Box
          className="ribbon--19"
          sx={{
            flex: 1,
            gap: "0.5rem",
            color: "#fff",
            width: "100%",
            display: "flex",
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#FE3283",
            p: { xs: "0.25rem", sm: "0.5rem", md: "0.75rem" },
          }}
        >
          <img
            src={questImg}
            style={{ height: "2.5rem", objectFit: "cover" }}
          />
          <Typography
            variant="h4"
            sx={{
              textTransform: "capitalize",
              fontSize: { xs: "0.938rem", sm: "1.375rem", md: "1.875rem" },
            }}
          >
            {t("TelegramQuest|title")}
          </Typography>
        </Box>
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

      <Box mt="1rem">
        {/* Daily Quest Section */}
        <Box sx={{ mb: "0.5rem" }}>
          <Typography
            variant="h6"
            sx={{
              textTransform: "capitalize",
            }}
          >
            {t("TelegramQuest|daily-quest")}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "grey",
              ml: "0.5rem",
            }}
          >
            {t("TelegramQuest|daily-quest-notify-text")}
          </Typography>
        </Box>
        <DailyQuestList quests={questList.daily_quest} />
        {/* Growth Quest Section */}
        <Box sx={{ mt: "1rem", mb: "0.25rem" }}>
          <Typography
            variant="h6"
            sx={{
              textTransform: "capitalize",
            }}
          >
            {t("TelegramQuest|growth-quest")}
          </Typography>
        </Box>
        <GrowthQuestLis quests={questList.growth_quest} />
        {/* Partner Quest Section */}
        <Box sx={{ mt: "1rem", mb: "0.25rem" }}>
          <Typography
            variant="h6"
            sx={{
              textTransform: "capitalize",
            }}
          >
            {t("TelegramQuest|partner-quest")}
          </Typography>
        </Box>
        <PartnerQuest quests={questList.partner_quest} />
      </Box>
    </>
  );
};

export default TelegramQuest;
