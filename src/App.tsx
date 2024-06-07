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
        <p
          style={{
            textAlign: "center",
            color: "red",
            fontSize: "28px",
            fontWeight: "bold",
          }}
        >
          Demo Bot v2
        </p>
      </div>
      <div id="scrollable-el" className="scrollable-element">
        <div>
          <p style={{ color: "blue" }}>Item 1</p>
        </div>
        <div>
          <p style={{ color: "blue" }}>Item 2</p>
        </div>
        <div>
          <p style={{ color: "blue" }}>Item 3</p>
        </div>
        <div>
          <p style={{ color: "blue" }}>Item 4</p>
        </div>
        <div>
          <p style={{ color: "blue" }}>Item 5</p>
        </div>
        <div>
          <p style={{ color: "blue" }}>Item 6</p>
        </div>
        <div>
          <p style={{ color: "blue" }}>Item 7</p>
        </div>
        <div>
          <p style={{ color: "blue" }}>Item 8</p>
        </div>
        <div>
          <p style={{ color: "blue" }}>Item 9</p>
        </div>
        <div>
          <p style={{ color: "blue" }}>Item 10</p>
        </div>
        <div>
          <p style={{ color: "blue" }}>Item 11</p>
        </div>
        <div>
          <p style={{ color: "blue" }}>Item 12</p>
        </div>
        <div>
          <p style={{ color: "blue" }}>Item 13</p>
        </div>
        <div>
          <p style={{ color: "blue" }}>Item 14</p>
        </div>
        <div>
          <p style={{ color: "blue" }}>Item 15</p>
        </div>
        <div>
          <p style={{ color: "blue" }}>Item 16</p>
        </div>
        <div>
          <p style={{ color: "blue" }}>Item 17</p>
        </div>
        <div>
          <p style={{ color: "blue" }}>Item 18</p>
        </div>
        <div>
          <p style={{ color: "blue" }}>Item 19</p>
        </div>
        <div>
          <p style={{ color: "blue" }}>Item 20</p>
        </div>
      </div>
    </div>
  );
}

export default App;
