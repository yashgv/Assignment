import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import "@public/styles/global.css";

export const metadata = {
  title: "Aspen Travel App",
  description: "Built in NextJS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Hiatus:wght@400&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=CircularXX:wght@700&display=swap"
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
