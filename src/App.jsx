import React from "react";
import {
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import {
  Header,
  About,
  Video,
  Services,
  Reasons,
  Founder,
  FindUs,
  Contact,
  FAQS,
  Footer,
  Hero,
  Gallery,
  Missing,
} from "./components";
import { AboutPage, ServicesPage } from "./Pages";
import { videos } from "./assets";

const Root = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);

const Home = () => (
  <>
    <Hero />
    <About />
    <Video source={videos.fashion} />
    <Services />
    <Gallery />
    <Reasons />
    <Founder />
    <FindUs />
    <FAQS />
    <Contact />
  </>
);

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="*" element={<Missing />} />
      </Route>
    )
  );
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;
