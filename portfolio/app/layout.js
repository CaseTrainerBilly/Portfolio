import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from './context/ThemeContext'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Your Name - Software Engineer Portfolio",
  description: "Portfolio showcasing my projects and skills as a software engineer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-900`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
