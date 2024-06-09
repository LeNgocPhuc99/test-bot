// **
import * as React from "react";

import { IconButton, SxProps } from "@mui/material";

import Slide, { SlideProps } from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";

import { Theme } from "@emotion/react";

import copyImg from "../../assets/icons/Copy.png";
import copyCheck from "../../assets/icons/CopyCheck.png";

function SlideTransition(props: SlideProps) {
  return <Slide {...props} direction="up" />;
}

interface CopyTextComponentProps {
  // onClose?: React.ReactEventHandler<{}>;
  text?: string;
  successText?: string;
  autoHideDuration?: number;
  sx?: SxProps<Theme>;
}

export default function CopyTextComponent(props: CopyTextComponentProps) {
  const Transition: React.ComponentType<
    TransitionProps & {
      children: React.ReactElement<any, any>;
    }
  > = SlideTransition;

  const [copied, setCopied] = React.useState(false);
  let timeoutId: NodeJS.Timeout | null | undefined;

  const handleClick = () => {
    timeoutId && clearTimeout(timeoutId);
    navigator.clipboard.writeText(props.text ?? "");
    setCopied(true);
    timeoutId = setTimeout(() => {
      setCopied(false);
      timeoutId = null;
    }, 2000); // Reset copied state after 2 seconds
  };

  return (
    <>
      <IconButton
        className="pixel-button--light"
        sx={props.sx}
        aria-label="copy"
        size="small"
        onClick={handleClick}
      >
        {!copied ? (
          <img src={copyImg} style={{ width: "1.25rem", objectFit: "cover" }} />
        ) : (
          <img
            src={copyCheck}
            style={{ width: "1.25rem", objectFit: "cover" }}
          />
        )}
      </IconButton>
    </>
  );
}
