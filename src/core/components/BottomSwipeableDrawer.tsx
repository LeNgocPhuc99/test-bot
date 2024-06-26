// ** React Import
import { useState } from "react";

// ** MUI Import
import Button from "@mui/material/Button";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";

import TelegramQuest from "../views/quest/TelegramQuest";
import { Paper } from "@mui/material";

const BottomSwipeableDrawer = () => {
  const [showDrawer, setShowDrawer] = useState<boolean>(false);

  const handleOpenDrawer = () => {
    setShowDrawer(true);
  };

  const handleCloseDrawer = () => {
    setShowDrawer(false);
  };

  return (
    <>
      <Button
        className="pixel-button--primary--dark"
        variant="contained"
        onClick={handleOpenDrawer}
        sx={{ textTransform: "capitalize" }}
      >
        Show Drawer
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
