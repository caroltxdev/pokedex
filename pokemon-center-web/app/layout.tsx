import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "./context/AuthContext";

export const metadata: Metadata = {
  title: "PokéCenter Admin",
  description: "Sistema de gerenciamento de Pokémons",
  icons: {
    icon: "/Pokeball.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="particles-bg">
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
