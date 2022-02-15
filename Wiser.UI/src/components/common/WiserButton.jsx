import CircularProgress from "@material-ui/core/CircularProgress";
import { Button } from "@material-ui/core";
const WiserButton = ({ text, loading, color }) => {
  return (
    <Button
      disabled={loading}
      style={{ marginTop: "1em" }}
      type="submit"
      color={color || "primary"}
      fullWidth
      variant="contained"
    >
      {loading && (
        <CircularProgress
          style={{ marginLeft: "0", marginRight: "6px" }}
          size={18}
        />
      )}
      {loading ? "Please wait ..." : text}
    </Button>
  );
};

export default WiserButton;
