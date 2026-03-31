import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ['300', '400', '600', '800'],
  variable: '--font-outfit',
});

export const metadata = {
  title: "Acelere sua Carreira com Aulas de Marketing Digital",
  description: "Domine as estratégias mais avançadas de Marketing Digital com nossas aulas interativas e práticas. Inscreva-se hoje.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={outfit.variable}>
      <body>{children}</body>
    </html>
  );
}
