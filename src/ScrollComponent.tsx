import { Box } from "@mui/material";
import { useEffect } from "react";
import TelegramQuest from "./core/views/quest/TelegramQuest";

const tg = Telegram.WebApp;

const ScrollComponent = () => {
  useEffect(() => {
    if (!tg) return;
    if (window.tgAppInitiated) return;
    window.tgAppInitiated = true;
    console.log("Init Tg");
    tg.expand();
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

    setupDocument(true);

    const scrollableEl = document.getElementById("scrollable-el");
    let ts: number | undefined;
    const onTouchStart = (e: TouchEvent) => {
      ts = e.touches[0].clientY;
    };
    const onTouchMove = (e: TouchEvent) => {
      if (scrollableEl) {
        console.warn("onTouchMove");
        const scroll = scrollableEl.scrollTop;
        const te = e.changedTouches[0].clientY;
        if (scroll <= 0 && ts! < te) {
          e.preventDefault();
        }
      } else {
        e.preventDefault();
      }
    };
    document.documentElement.addEventListener("touchstart", onTouchStart, {
      passive: false,
    });
    document.documentElement.addEventListener("touchmove", onTouchMove, {
      passive: false,
    });

    const onScroll = () => {
      if (window.scrollY < overflow) {
        window.scrollTo(0, overflow);
        if (scrollableEl) {
          scrollableEl.scrollTo(0, 0);
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    // authorize here

    return () => {
      setupDocument(false);
      document.documentElement.removeEventListener("touchstart", onTouchStart);
      document.documentElement.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <Box
      id="scrollable-el"
      className="pixel-dialog--dark--2"
      sx={{
        marginBottom: "3.2rem",
        padding: "1.5rem",
        backdropFilter: "blur(10px)",
        backgroundColor: "rgba(0 0 0 / 75%) !important",
        height: "80vh",
        // borderColor: "#000000 !important",
        overflowY: "scroll",
        // overflowX: "auto",
      }}
    >
      <TelegramQuest />
    </Box>
  );
};

export default ScrollComponent;
