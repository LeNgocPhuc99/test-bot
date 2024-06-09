import { useTranslation } from "react-i18next";

// ** MUI Import
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import reloadImg from "../../assets/icons/Reload.png";

type ReloadDataButtonProps = {
  reloadFunction: () => Promise<void>;
};

const ReloadDataButton = ({ reloadFunction }: ReloadDataButtonProps) => {
  const { t } = useTranslation();

  return (
    <Tooltip
      title={<Typography>{t("ReloadDataButton|refresh-data")}</Typography>}
    >
      <IconButton
        className="pixel-button--light"
        sx={{ p: "0.1rem 0.5rem 0.5rem 0.1rem" }}
        onClick={reloadFunction}
      >
        <img src={reloadImg} style={{ width: "1.5rem", objectFit: "cover" }} />
      </IconButton>
    </Tooltip>
  );
};

export default ReloadDataButton;
