// ** React Import
import { useState, useCallback, useEffect } from "react";

import { useTranslation } from "react-i18next";

// ** MUI Import
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import BottomNavigation from "@mui/material/BottomNavigation";

import { TabEnum, QuestTab, QuestTabContent } from "../core/pages/QuestPage";

import { ICON_IMAGE_PATH } from "../core/configs/appConfigs";

const QuestPage = ({
  tabIndex,
  handleMoveToRank,
}: {
  tabIndex: number;
  handleMoveToRank: () => void;
}) => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (window.tgAppInitiated) return;
    window.tgAppInitiated = true;
    // const scrollableEl = document.getElementById("scrollable-el");
    const overflow = 100;

    function setupDocument(enable: boolean) {
      if (enable) {
        document.body.style.marginTop = `${overflow}px`;
        document.body.style.height = window.innerHeight + overflow + "px";
        document.body.style.paddingBottom = `${overflow}px`;
        window.scrollTo(0, overflow);
      } else {
        document.body.style.removeProperty("marginTop");
        document.body.style.removeProperty("height");
        document.body.style.removeProperty("paddingBottom");
        window.scrollTo(0, 0);
      }
    }

    // setupDocument(true);

    return () => {
      setupDocument(false);
    };
  }, []);

  return (
    <>
      <Box
        className="pixel-dialog--dark--2"
        sx={{
          alignContent: "center",
          marginBottom: "3.2rem",
          padding: "1.5rem",
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(0 0 0 / 75%) !important",
          height: "80vh",
          // borderColor: "#000000 !important",
          overflowY: 'scroll'

        }}
      >
        <QuestTabContent
          tabIndex={tabIndex}
          handleMoveToRank={handleMoveToRank}
        />
      </Box>
    </>
  );
};

export const QuestPageWrapper = () => {
  const [tabIndex, setTabIndex] = useState<number>(TabEnum.TICKET);
  const [positionLeft, setPositionLeft] = useState<number>(0);
  const [direction, setDirection] = useState<number>(1);

  const bottomBarHeight = document.getElementById(
    "memetd-bottom-nav-bar"
  )?.clientHeight;

  useEffect(() => {
    const interval = setInterval(() => {
      setPositionLeft((prev) => {
        const nextPrev = prev + 0.5 * direction;
        if (nextPrev === 10 || nextPrev === 0) {
          setDirection((prev) => -prev);
        }
        return nextPrev;
      });
    }, 500);

    return () => clearInterval(interval);
  }, [direction]);

  const handleChangeTab = (index: number) => {
    // console.log("CHANGE TAB: ", index)
    setTabIndex(index);
  };

  const handleMoveToRank = () => {
    setTabIndex(TabEnum.RANK);
  };

  const isActiveTab = useCallback(
    (value: number) => {
      return value === tabIndex;
    },
    [tabIndex]
  );

  return (
    <>
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          background: `url(public/static/memetd/background.png) no-repeat center center`,
          backgroundSize: "cover",
          color: "white",
          bgcolor: "#06090a",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Box
          sx={(theme) => ({
            display: "flex",
            alignItems: "center",
            width: "100%",
            height: "100%",
            bgcolor:
              theme.palette.mode === "light"
                ? "rgba(255, 255, 255, 0.4)"
                : "rgba(0, 0, 0, 0.4)",
            backdropFilter: "blur(3px)",
            boxShadow:
              theme.palette.mode === "light"
                ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                : "0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)",
          })}
        >
          <Container sx={{ maxWidth: "800px !important" }}>
            <QuestPage
              tabIndex={tabIndex}
              handleMoveToRank={handleMoveToRank}
            />
          </Container>
        </Box>
        <img
          src="gif/dog.gif"
          style={{
            width: "4rem",
            background: "transparent",
            objectFit: "cover",
            position: "absolute",
            bottom: bottomBarHeight,
            left: `${positionLeft}%`,
            transform: `scaleX(${direction})`,
          }}
        />
        <Paper
          id="memetd-bottom-nav-bar"
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            background: "transparent",
          }}
        >
          <BottomNavigation
            color="transparent"
            sx={{
              width: "100%",
              background: "transparent",
              borderRadius: "0.5rem 0.5rem 0px 0px",
              backdropFilter: "blur(0.625rem)",
              padding: "0.5rem 0.313rem 1rem 0.313rem",
            }}
          >
            <QuestTab
              handleChangeTab={handleChangeTab}
              isActiveTab={isActiveTab}
            />
          </BottomNavigation>
        </Paper>
      </Box>
    </>
  );
};
