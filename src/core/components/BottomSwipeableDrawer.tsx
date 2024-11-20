// ** React Import
import { useState, useEffect } from "react";

// ** MUI Import
import Button from "@mui/material/Button";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";

import TelegramQuest from "../views/quest/TelegramQuest";
import { Paper } from "@mui/material";

const SWAP_LINK =
  "https://app.ston.fi/swap?chartVisible=false&ft=TON&tt=EQAp-mWdS-oJ2R0XwC49VPHRkkLZ0I38THftyQniIRTOb_x-";

const BottomSwipeableDrawer = () => {
  const [showDrawer, setShowDrawer] = useState<boolean>(false);

  useEffect(() => {
    console.log(window.location.pathname)
    console.log(window.location.search)
  }, [])

  const handleOpenDrawer = () => {
    setShowDrawer(true);
  };

  const handleCloseDrawer = () => {
    setShowDrawer(false);
  };

  const handleOpenSelf = () => {
    window.open(SWAP_LINK, "_self");
  };

  const handleOpenBlank = () => {
    window.open(SWAP_LINK, "_blank");
  };

  const handleOpenBot = () => {
    window.open("https://t.me/ston_fi?startapp");
  };

  return (
    <>
      <Button
        variant="contained"
        className="pixel-button--primary--dark"
        onClick={handleOpenBot}
        sx={{
          textTransform: "capitalize",
          marginLeft: "8px",
        }}
      >
        Open Bottt
      </Button>
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
