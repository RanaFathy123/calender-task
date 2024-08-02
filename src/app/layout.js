import "./globals.css";
import { CalendarProvider } from "@/context/CalenderContext";

export const metadata = {
  title: "Calender App",
  description: "Calender App with List",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <CalendarProvider>{children}</CalendarProvider>
      </body>
    </html>
  );
}
