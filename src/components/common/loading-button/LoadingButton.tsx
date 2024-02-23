import { ComponentProps, FC } from "react";
import { Button, CircularProgress } from "@mui/material";

interface LoadingButtonProps extends ComponentProps<typeof Button> {
  isLoading: boolean;
  className?: string;
}

const LoadingButton: FC<LoadingButtonProps> = ({
  isLoading,
  children,
  className = "",
}) => {
  return (
    <Button
      className={className}
      type="submit"
      variant="contained"
      disabled={isLoading}
      endIcon={isLoading && <CircularProgress size="1rem" color="inherit" />}
    >
      {children}
    </Button>
  );
};

export default LoadingButton;
