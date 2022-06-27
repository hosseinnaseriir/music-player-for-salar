import { theme } from "./../../../theme/index";

export const classes = {
  root: {
    display: "flex",
    backgroundColor: theme.palette.primary.main,
    color: "#ffff",
    height: 320,
    alignItems: "center",
  },
  musicCover: {
    height: 308,
    width: 308,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& svg": {
      fontSize: "13rem",
    },
  },
  musicDetails: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
  },
  musicProgress: {
    height: 30,
    borderRadius: 40,
    background: theme.palette.grey[50],
    overflow: "hidden",
    position: "relative",
    "& input": {
      appearance: "none",
      width: "100%",
      cursor: "pointer",
      "&::-webkit-slider-thumb": {
        appearance: "none",
        height: "2rem",
        width: "2rem",
        backgroundColor: "transparent",
      },
    },
  },
  musicProgressBar: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    borderRadius: 40,
    pointerEvents: "none",
    background:
      "linear-gradient(90deg, rgba(29, 185, 84, 0.75) 0%, rgba(19, 114, 53, 0.75) 100%)",
  },
};
