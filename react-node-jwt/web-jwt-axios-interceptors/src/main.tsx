// import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App.tsx"
import { BrowserRouter } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <BrowserRouter basename="/">
    <App />
    <ToastContainer position="bottom-left" theme="colored" />
  </BrowserRouter>
  // </StrictMode>,
)
