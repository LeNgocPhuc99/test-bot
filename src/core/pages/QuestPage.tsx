// ** React Import
import { Fragment, ReactNode } from "react";

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
    // content: <TelegramRefReward />,
  },
  {
    id: TabEnum.QUEST,
    name: "quest",
    buttonClassName: "pixel-box--light",
    buttonClassNameActive: "pixel-box--primary",
    buttonDarkClassName: "pixel-box--dark",
    buttonDarkClassNameActive: "pixel-box--primary--dark",
    // content: <TelegramQuest />,
  },
  {
    id: TabEnum.ACHIEVEMENT,
    name: "achievement",
    buttonClassName: "pixel-box--light",
    buttonClassNameActive: "pixel-box--primary",
    buttonDarkClassName: "pixel-box--dark",
    buttonDarkClassNameActive: "pixel-box--primary--dark",
    // content: <TelegramAchievement />,
  },
  {
    id: TabEnum.RANK,
    name: "rank",
    buttonClassName: "pixel-box--light",
    buttonClassNameActive: "pixel-box--primary",
    buttonDarkClassName: "pixel-box--dark",
    buttonDarkClassNameActive: "pixel-box--primary--dark",
    // content: <TelegramTicketRank />,
  },
];

type TabPanelProps = {
  children: ReactNode;
  index: number;
  activeTab: number;
};

const TabPanel = ({ children, index, activeTab }: TabPanelProps) => {
  return (
    <div
      id={`tabpanel-${index}`}
      role="tabpanel"
      hidden={activeTab !== index}
      aria-labelledby={`tab-${index}`}
    >
      {activeTab === index && <Fragment>{children}</Fragment>}
    </div>
  );
};

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
       {TAB_CONTENTS.map((tab) => (
        <TabPanel
          key={tab.id}
          activeTab={tabIndex}
          index={tab.id}
          children={tab.content}
        />
      ))}
    </>
  );
}
