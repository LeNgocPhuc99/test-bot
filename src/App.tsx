import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { usePrivy, useWallets, Wallet } from "@privy-io/react-auth";

function App() {
  const { login, logout, connectWallet, createWallet, ready, authenticated, user } = usePrivy();

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

  const handleCreateWallet = () => {
    return new Promise<Wallet>(async (resolve, reject) => {
      try {
        const wallet = await createWallet()

        return resolve(wallet)
      } catch (error) {
        return reject(error)
      }
    })
  }

  // @ts-ignore
  window.PrivyAction = {
    user,
    wallets,


    login,
    logout,
    connectWallet,
    handleCreateWallet,
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
