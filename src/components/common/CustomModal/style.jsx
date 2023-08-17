import { makeStyles } from "@mui/styles";

const styles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    borderRadius: "3px",
    overflow: "hidden",
    boxShadow: theme.shadows[5],
    "&:focus-visible": {
      outline: "none",
    },
  },
  modalHeader: {
    position: "sticky",
    top: 0,
    zIndex: 1000,
    backgroundColor: "#fff",
    padding: "11px 34px",
    color: "#3E399B",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "13px",
    borderBottom: "1px solid #ddd",

    "& svg": {
      color: "#3E399B !important",
    },
    "& .MuiTypography-root": {
      fontWeight: "700",
    },
  },
  modalTitle: {
    display: "flex",
    alignItems: "center",
    columnGap: "1rem",
  },
  icon: {
    background: theme.palette.background.dark,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    padding: "5px",
  },
  rotate: {
    transition: "transform 0.3s ease",
    transform: "rotate(0deg)", // Initial rotation value
    "&:hover": {
      transform: "rotate(90deg)", // Rotation value on hover
    },
  },
}));

export default styles;
