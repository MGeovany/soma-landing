import "./globals.css";
import AmbientBackground from "@/components/AmbientBackground";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  metadataBase: new URL("https://soma.app"),
  title: {
    default: "Soma - TV Remote for Mac & iPhone",
    template: "%s · Soma",
  },
  description:
    "Soma turns your Mac and iPhone into a private remote for Samsung and LG TVs over your local network, with no cloud and no account.",
  icons: {
    icon: "/app-icon.png",
    shortcut: "/favicon.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Soma - TV Remote for Mac & iPhone",
    description: "Now with Samsung and LG. A private remote for your TV. No cloud, no account.",
    images: ["/app-icon.png"],
    type: "website",
  },
};

export const viewport = {
  themeColor: "#EAEEF4",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AmbientBackground />
        <Nav />
        <main className="mx-auto min-h-screen max-w-6xl px-5">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
