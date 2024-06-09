// ** React Import
import React, { useState, useCallback, useEffect } from "react";

import { useTranslation } from "react-i18next";

// ** MUI Import
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material";
import Typography from "@mui/material/Typography";

// ** Views Import
import TelegramQuest from "../views/quest/TelegramQuest";
import TelegramRefReward from "../views/quest/TelegramRefReward";
import TelegramTicketRank from "../views/quest/TelegramTicketRank";
import TelegramAchievement from "../views/quest/TelegramAchievement";

// ** Config Import
import { ICON_IMAGE_PATH } from "../configs/appConfigs";

export const TabEnum = {
  TICKET: 0,
  QUEST: 1,
  ACHIEVEMENT: 2,
  RANK: 3,
};

const TABS = [
  {
    id: TabEnum.TICKET,
    name: "ticket",
    buttonClassName: "pixel-box--light",
    buttonClassNameActive: "pixel-box--primary",
    buttonDarkClassName: "pixel-box--dark",
    buttonDarkClassNameActive: "pixel-box--primary--dark",
    icon: (
      <img
        src={`${ICON_IMAGE_PATH}/Ticket.png`}
        style={{ height: "2.5rem", objectFit: "cover" }}
      />
    ),
    // content: <TelegramRefReward />,
  },
  {
    id: TabEnum.QUEST,
    name: "quest",
    buttonClassName: "pixel-box--light",
    buttonClassNameActive: "pixel-box--primary",
    buttonDarkClassName: "pixel-box--dark",
    buttonDarkClassNameActive: "pixel-box--primary--dark",
    icon: (
      <img
        src={`${ICON_IMAGE_PATH}/QuestSmall.png`}
        style={{ height: "2.5rem", objectFit: "cover" }}
      />
    ),
    // content: <TelegramQuest />,
  },
  {
    id: TabEnum.ACHIEVEMENT,
    name: "achievement",
    buttonClassName: "pixel-box--light",
    buttonClassNameActive: "pixel-box--primary",
    buttonDarkClassName: "pixel-box--dark",
    buttonDarkClassNameActive: "pixel-box--primary--dark",
    icon: (
      <img
        src={`${ICON_IMAGE_PATH}/AchievementSmall.png`}
        style={{ height: "2.5rem", objectFit: "cover" }}
      />
    ),
    // content: <TelegramAchievement />,
  },
  {
    id: TabEnum.RANK,
    name: "rank",
    buttonClassName: "pixel-box--light",
    buttonClassNameActive: "pixel-box--primary",
    buttonDarkClassName: "pixel-box--dark",
    buttonDarkClassNameActive: "pixel-box--primary--dark",
    icon: (
      <img
        src={`${ICON_IMAGE_PATH}/WinCup.png`}
        style={{ height: "2.5rem", objectFit: "cover" }}
      />
    ),
    // content: <TelegramTicketRank />,
  },
];

export function QuestTab(props: {
  // theme: Theme;
  isActiveTab(index: number): boolean;
  handleChangeTab(index: number): void;
}) {
  // ** Props
  const { isActiveTab, handleChangeTab } = props;

  // ** Hook
  const theme = useTheme();

  const isDarkMode = theme.palette.mode === "dark";

  // Hooks
  const { t } = useTranslation();

  return (
    <>
      <Box
        sx={{
          gap: "0.25rem",
          width: "100%",
          display: "flex",
          paddingBottom: "0.25rem",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {TABS.map((item, index) => (
          <Box
            className={
              isActiveTab(item.id)
                ? isDarkMode
                  ? item.buttonDarkClassNameActive
                  : item.buttonClassNameActive
                : isDarkMode
                ? item.buttonDarkClassName
                : item.buttonClassName
            }
            key={index}
            component={Button}
            onClick={() => handleChangeTab(item.id)}
            sx={{
              // flex: 1,
              flexGrow: 1,
              padding: "0.5rem",
              position: "relative",
              alignItems: "center",
              borderRadius: "0.5rem",
              minHeight: { xs: "3.75rem" },
            }}
          >
            <Typography
              variant="body1"
              sx={{
                textTransform: "capitalize",
              }}
            >
              {t(`QuestTab|${item.name}`)}
            </Typography>
          </Box>
        ))}
      </Box>
    </>
  );
}

export function QuestTabContent({
  tabIndex,
  handleMoveToRank,
}: {
  tabIndex: number;
  handleMoveToRank: () => void;
}) {
  const TAB_CONTENTS = [
    {
      id: TabEnum.TICKET,
      content: <TelegramRefReward handleMoveToRank={handleMoveToRank} />,
    },
    {
      id: TabEnum.QUEST,
      content: <TelegramQuest />,
    },
    {
      id: TabEnum.ACHIEVEMENT,
      content: <TelegramAchievement />,
    },
    {
      id: TabEnum.RANK,
      content: <TelegramTicketRank />,
    },
  ];

  return (
    <>
      {/* {TAB_CONTENTS.map((item, index) => (
        <React.Fragment key={`content-${index}`}>{item.content}</React.Fragment>
      ))} */}
      {TAB_CONTENTS[tabIndex].content}
    </>
  );
}
