/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { jsx, Theme } from "@emotion/react";
import { Switch as MUISwitch, SwitchProps } from "@mui/material";

const classes = {
  switch: (theme: Theme) => ({
    width: 32,
    height: 16,
    padding: 0,
    "& .MuiSwitch-switchBase": {
      padding: 0,
      margin: 1.5,
      transitionDuration: "300ms",
      "&.Mui-checked": {
        transform: "translateX(10px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          backgroundColor:
            theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
          opacity: 1,
          border: 0
        },
        "&.Mui-disabled + .MuiSwitch-track": {
          opacity: 0.5
        }
      },
      "&.Mui-focusVisible .MuiSwitch-thumb": {
        color: "#33cf4d"
        // border: '6px solid #fff',
      },
      "&.Mui-disabled .MuiSwitch-thumb": {
        color:
          theme.palette.mode === "light"
            ? theme.palette.grey[100]
            : theme.palette.grey[600]
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: theme.palette.mode === "light" ? 0.7 : 0.3
      }
    },
    "& .MuiSwitch-thumb": {
      // boxSizing: 'border-box',
      backgroundColor: theme.palette.grey[300],
      width: 13.5,
      height: 13.5
    },
    "& .MuiSwitch-track": {
      borderRadius: 16 / 2,
      backgroundColor: theme.palette.mode === "light" ? "#fff" : "#39393D",
      opacity: 1,
      border: "1px solid " + theme.palette.grey[300],
      transition: theme.transitions.create(["background-color"], {
        duration: 500
      })
    }
  })
};

const Switch = (props: SwitchProps) => {
  return <MUISwitch {...props} css={classes.switch} />;
};

export default Switch;
