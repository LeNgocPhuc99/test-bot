import { useEffect } from "react";

const ScrollComponent = () => {
  useEffect(() => {
    const overflow = 100;
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
      // setupDocument(false);
      document.documentElement.removeEventListener("touchstart", onTouchStart);
      document.documentElement.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  
  return (
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
  );
};

export default ScrollComponent;
