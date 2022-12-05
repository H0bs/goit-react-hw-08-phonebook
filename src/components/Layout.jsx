import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Suspense } from "react";
import { AppBar } from "./AppBar/AppBar";

export const Layout = () => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet/>
      </Suspense>
      <Toaster position="top-right" reserveOrder={false} />
    </div>
  )
}