import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreens from "./screens/HomeScreen";
import ProductScreen from "./screens/ProdectScreen";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Container className="py-3">
          <Route path="/" component={HomeScreens} exact />
          <Route path="/product/:id" component={ProductScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
