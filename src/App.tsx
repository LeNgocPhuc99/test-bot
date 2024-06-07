import { useEffect } from "react";
import "./App.css";

const tg = Telegram.WebApp;

function App() {
  useEffect(() => {
    if (!tg) return;
    if (window.tgAppInited) return;
    window.tgAppInited = true;
    const scrollableEl = document.getElementById("scrollable-el");
    // ???
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
  }, [tg]);

  return (
    <div>
      <div>
        <p style={{ textAlign: "center", color: 'red', fontSize: '28px', fontWeight: 'bold' }}>Demo Bot v2</p>
      </div>
      <div id="scrollable-el" className="scrollable-element">
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
        <div>Item 5</div>
        <div>Item 6</div>
        <div>Item 7</div>
        <div>Item 8</div>
        <div>Item 9</div>
        <div>Item 10</div>
      </div>
    </div>
  );
}

export default App;
