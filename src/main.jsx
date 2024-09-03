import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import NewsPage from "./pages/NewsPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import NatoPage from "./pages/NatoPage.jsx";
import SingleBlog from "./pages/SingleBlog.jsx";
import { MyProvider } from "./context/myContext.jsx"; // Import MyProvider

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <App />
      </Layout>
    ),
  },
  {
    path: "/about",
    element: (
      <Layout>
        <AboutPage />
      </Layout>
    ),
  },
  {
    path: "/news",
    element: (
      <Layout>
        <NewsPage />
      </Layout>
    ),
  },
  {
    path: "/contact",
    element: (
      <Layout>
        <ContactPage />
      </Layout>
    ),
  },
  {
    path: "/nato",
    element: (
      <Layout>
        <NatoPage />
      </Layout>
    ),
  },
  {
    path: "/single-blog",
    element: (
      <Layout>
        <SingleBlog />
      </Layout>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MyProvider>
      <RouterProvider router={router} />
    </MyProvider>
  </StrictMode>
);
