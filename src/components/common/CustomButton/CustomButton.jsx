import { Box, Button, CircularProgress } from "@mui/material";
import React from "react";

const CustomButton = ({
  type,
  variant,
  buttonName,
  loading,
  justifyContent,
  handleClick,
}) => {
  return (
    <Box
      display={"flex"}
      justifyContent={justifyContent || "end"}
      marginTop={"17px"}
    >
      <Button
        variant={variant || "contained"}
        type={type || "submit"}
        disabled={loading}
        onClick={handleClick}
      >
        {loading ? (
          <Box display={"flex"} alignItems={"center"} gap={"10px"}>
            <CircularProgress size={15} />
            {buttonName || "Save"}
          </Box>
        ) : (
          buttonName || "Save"
        )}
      </Button>{" "}
    </Box>
  );
};

export default CustomButton;
