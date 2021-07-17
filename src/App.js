import React from "react";
import { Footer, Layout } from "./containers";
import { Route, Switch } from "react-router-dom";
import { NewsDetails, ProductCarousel } from "./components";
import "./styles/global.module.scss";
import {
  AboutUs,
  Favourites,
  Main,
  Products,
  Category,
  CollectionPage,
  OrderProcessing,
  Profile,
  MyOrders,
  Order,
  SearchResults,
  PageNotFound,
  Info,
  News,
} from "./Pages";
function App() {
  return (
    <>
      <Layout>
        <div id="recaptcha-container"></div>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/about-us" component={AboutUs} />
          <Route exact path="/saved" component={Favourites} />
          <Route path="/info/:id" component={Info} />
          <Route exact path="/news" component={News} />
          <Route exact path="/search" component={SearchResults} />
          <Route exact path="/news_details/" component={NewsDetails}/>
          <Route exact path="/collections" component={CollectionPage}/>
          <Route exact path="/details" component={Products} />
          <Route exact path="/category" component={Category} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/ordering" component={Order} />
          <Route exact path="/similarProducts" component={ProductCarousel}/>
          <Route exact path="/order" component={OrderProcessing} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/myOrders" component={MyOrders} />
          <Route path="/" component={PageNotFound} />
        </Switch>
      </Layout>
      <Footer />
    </>
  );
}

export default App;
