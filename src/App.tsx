import Typography from "@mui/material/Typography";

import "./App.css";
import "./ribbon.css";
import "./pixel/pixel-borders.scss";

import { QuestPageWrapper } from "./layouts/components";

function App() {
  return (
    <>
      <Typography
        component="h1"
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          textAlign: "center",
          width: "100vw",
          height: "auto",
          zIndex: "3979",
          color: "#ffff00",
          p: "2",
          background: "rgb(0 0 0 / 70%);",
        }}
      >
        v2.0.7
      </Typography>
      <QuestPageWrapper />
      );
    </>
  );
}

export default App;
