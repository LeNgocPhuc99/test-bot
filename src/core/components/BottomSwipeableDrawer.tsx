// ** React Import
import { useState, useEffect } from "react";

// ** MUI Import
import Button from "@mui/material/Button";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";

import TelegramQuest from "../views/quest/TelegramQuest";

const BottomSwipeableDrawer = () => {
  const [showDrawer, setShowDrawer] = useState<boolean>(false);

//   useEffect(() => {
//     console.warn("SETUP")
//     const overflow = 100;

//     const scrollableEl = document.getElementById("scrollable-drawer");
//     let ts: number | undefined;
//     const onTouchStart = (e: TouchEvent) => {
//       ts = e.touches[0].clientY;
//     };
//     const onTouchMove = (e: TouchEvent) => {
//       if (scrollableEl) {
//         // console.warn("onTouchMove");
//         const scroll = scrollableEl.scrollTop;
//         const te = e.changedTouches[0].clientY;
//         if (scroll <= 0 && ts! < te) {
//           if (e.cancelable) {
//             e.preventDefault();
//           }
//         }
//       } else {
//         if (e.cancelable) {
//           e.preventDefault();
//         }
//       }
//     };
//     document.documentElement.addEventListener("touchstart", onTouchStart, {
//       passive: false,
//     });
//     document.documentElement.addEventListener("touchmove", onTouchMove, {
//       passive: false,
//     });

//     const onScroll = () => {
//       if (window.scrollY < overflow) {
//         window.scrollTo(0, overflow);
//         if (scrollableEl) {
//           scrollableEl.scrollTo(0, 0);
//         }
//       }
//     };
//     window.addEventListener("scroll", onScroll, { passive: true });

//     // authorize here

//     return () => {
//       document.documentElement.removeEventListener("touchstart", onTouchStart);
//       document.documentElement.removeEventListener("touchmove", onTouchMove);
//       window.removeEventListener("scroll", onScroll);
//     };
//   }, []);

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
        id="scrollable-drawer"
        anchor="bottom"
        open={showDrawer}
        onClose={handleCloseDrawer}
        onOpen={handleOpenDrawer}
        PaperProps={{
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
