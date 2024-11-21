import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { usePrivy, useWallets } from "@privy-io/react-auth";

function App() {
  const { login, logout, connectWallet, ready, authenticated } = usePrivy();

  const { wallets } = useWallets()

  const handleConnectWallet = (address:  string) => {
    try {
      connectWallet({
        suggestedAddress: address
      })
    } catch (error) {
      console.log(error)
    }
  }

  // @ts-ignore
  window.PrivyAction = {
    wallets,
    login,
    logout,
    connectWallet,
    handleConnectWallet,
  };

  return (
    <Box>
      <Typography sx={{ mb: "10px" }}>Test Privy Wallet</Typography>
      <Button
        sx={{ mr: "8px" }}
        variant="contained"
        onClick={() => {
          console.log("Call login: ", ready, authenticated);
          login();
        }}
      >
        Login
      </Button>
      <Button variant="contained" onClick={() => logout()}>
        Logout
      </Button>
    </Box>
  );
}

export default App;
