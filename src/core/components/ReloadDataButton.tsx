import { useTranslation } from "react-i18next";

// ** MUI Import
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

// ** Config Import
import { ICON_IMAGE_PATH } from "../configs/appConfigs";

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
        <img
          src={`${ICON_IMAGE_PATH}/Reload.png`}
          style={{ width: "1.5rem", objectFit: "cover" }}
        />
      </IconButton>
    </Tooltip>
  );
};

export default ReloadDataButton;
