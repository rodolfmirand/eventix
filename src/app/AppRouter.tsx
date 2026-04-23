import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AppLayout } from "./AppLayout";
import { AuthProvider } from "../features/auth/AuthContext";
import { TicketsProvider } from "../features/tickets/TicketsContext";
import { ProtectedRoute } from "../features/auth/ProtectedRoute";
import { CheckoutPage } from "../pages/CheckoutPage";
import { ConfirmationPage } from "../pages/ConfirmationPage";
import { EventDetailsPage } from "../pages/EventDetailsPage";
import { EventsPage } from "../pages/EventsPage";
import { LoginPage } from "../pages/LoginPage";
import { ProfilePage } from "../pages/ProfilePage";
import { SeatSelectionPage } from "../pages/SeatSelectionPage";
import { TicketPage } from "../pages/TicketPage";

export function AppRouter() {
  return (
    <AuthProvider>
      <TicketsProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Navigate to="/eventos" replace />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/eventos" element={<EventsPage />} />
              <Route path="/eventos/:id" element={<EventDetailsPage />} />
              <Route path="/eventos/:id/assentos" element={<SeatSelectionPage />} />
              <Route element={<ProtectedRoute />}>
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/confirmacao/:ticketId" element={<ConfirmationPage />} />
                <Route path="/perfil" element={<ProfilePage />} />
                <Route path="/ingressos/:ticketId" element={<TicketPage />} />
              </Route>
              <Route path="*" element={<Navigate to="/eventos" replace />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TicketsProvider>
    </AuthProvider>
  );
}
