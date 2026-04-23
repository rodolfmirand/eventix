import { Outlet } from "react-router-dom";
import { Header } from "../components/layout/Header";

export function AppLayout() {
  return (
    <div className="app-shell">
      <Header />
      <main className="app-main">
        <Outlet />
      </main>
    </div>
  );
}
