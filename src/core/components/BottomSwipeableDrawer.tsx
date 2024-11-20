// ** React Import
import { useState } from "react";

// ** MUI Import
import Button from "@mui/material/Button";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";

import TelegramQuest from "../views/quest/TelegramQuest";
import { Paper } from "@mui/material";

const SWAP_LINK =
  "https://app.ston.fi/swap?chartVisible=false&ft=TON&tt=EQAp-mWdS-oJ2R0XwC49VPHRkkLZ0I38THftyQniIRTOb_x-";

const BottomSwipeableDrawer = () => {
  const [showDrawer, setShowDrawer] = useState<boolean>(false);

  const handleOpenDrawer = () => {
    setShowDrawer(true);
  };

  const handleCloseDrawer = () => {
    setShowDrawer(false);
  };

  const handleOpenParent = () => {
    window.open(SWAP_LINK, "_parent");
  };

  const handleOpenTop = () => {
    window.open(SWAP_LINK, "_top");
  };

  const handleOpenUnfencedTop = () => {
    window.open(SWAP_LINK, "_unfencedTop");
  };

  const handleOpenSelf = () => {
    window.open(SWAP_LINK, "_self");
  };

  const handleOpenBlank = () => {
    window.open(SWAP_LINK, "_blank");
  };

  return (
    <>
      <Button
        variant="contained"
        className="pixel-button--primary--dark"
        onClick={handleOpenBlank}
        sx={{
          textTransform: "capitalize",
          marginLeft: "8px",
        }}
      >
        Open Blank
      </Button>
      <Button
        variant="contained"
        className="pixel-button--primary--dark"
        onClick={handleOpenSelf}
        sx={{
          textTransform: "capitalize",
          marginLeft: "8px",
        }}
      >
        Open Self
      </Button>
      <Button
        variant="contained"
        className="pixel-button--primary--dark"
        onClick={handleOpenParent}
        sx={{
          textTransform: "capitalize",
          marginLeft: "8px",
        }}
      >
        Open Parent
      </Button>
      <Button
        variant="contained"
        className="pixel-button--primary--dark"
        onClick={handleOpenTop}
        sx={{
          textTransform: "capitalize",
          marginLeft: "8px",
        }}
      >
        Open Top
      </Button>
      <Button
        variant="contained"
        className="pixel-button--primary--dark"
        onClick={handleOpenUnfencedTop}
        sx={{
          textTransform: "capitalize",
          marginLeft: "8px",
        }}
      >
        Open UnfencedTop
      </Button>
      <SwipeableDrawer
        anchor="bottom"
        open={showDrawer}
        onClose={handleCloseDrawer}
        onOpen={handleOpenDrawer}
        PaperProps={{
          className: "pixel-borders--dark--2",
          style: {
            height: "70vh",
            padding: "1rem",
          },
        }}
      >
        <TelegramQuest />
      </SwipeableDrawer>
    </>
  );
};

export default BottomSwipeableDrawer;
