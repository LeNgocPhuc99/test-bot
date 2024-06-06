import { useEffect } from "react";
import "./App.css";

function App() {
  // useEffect(() => {
  //   function ensureDocumentIsScrollable() {
  //     const isScrollable =
  //       document.documentElement.scrollHeight > window.innerHeight;
  //     if (!isScrollable) {
  //       document.documentElement.style.setProperty(
  //         "height",
  //         "calc(100vh + 1px)",
  //         "important"
  //       );
  //     }
  //   }
  //   function preventCollapse() {
  //     if (window.scrollY === 0) {
  //       window.scrollTo(0, 1);
  //     }
  //   }

  //   const scrollableElement = document.querySelector(".scrollable-element");
  //   scrollableElement?.addEventListener("touchstart", preventCollapse);

  //   window.addEventListener("load", ensureDocumentIsScrollable);
  // });

  return (
    <div>
      <div
        style={{ width: "100%", height: "200px", backgroundColor: "red" }}
      ></div>
      <div className="scrollable-element">
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
