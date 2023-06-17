import React from "react";
import HighlightIcon from "@material-ui/icons/Highlight";
// import DescriptionIcon from '@mui/icons-material/Description';
// import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";

function Header() {
  return (
    <header>
      <h1>
        <HighlightIcon />
        {/* <DescriptionIcon /> */}
        {/* <AccessAlarmIcon /> */}
        Notes
      </h1>
    </header>
  );
}

export default Header;
