import NavBar from "./components/NavBar";

import { Box } from "@chakra-ui/react";
import Purchase from "./components/Purchase";
import Sneakers from "./components/Sneakers";

const App = () => {
  return (
    <>
      <Box paddingX={["0", "8rem"]}>
        <NavBar />
        <Box
          alignItems={["left", "left", "center"]}
          justifyContent="center"
          gap="5.3rem"
          paddingY={["0", "3.8rem"]}
          display={["block", "flex"]}
        >
          <Sneakers />
          <Purchase />
        </Box>
      </Box>
    </>
  );
};

export default App;
