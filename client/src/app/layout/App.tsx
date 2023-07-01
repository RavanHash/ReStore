import Catalog from "../../features/catalog/Catalog";
import Header from "../../features/catalog/Header";
import { Container, CssBaseline } from "@mui/material";

function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <Container>
        <Catalog />
      </Container>
    </>
  );
}

export default App;
