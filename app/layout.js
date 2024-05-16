import { Inter } from "next/font/google";
import "./globals.css";
import { EdgeStoreProvider } from "../lib/edgestore";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HireTop",
  description: "Trouvez les meilleurs talents - trouvez votre prochain emploi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <EdgeStoreProvider>{children}</EdgeStoreProvider>
      </body>
    </html>
  );
}
