import "./globals.css";
import AmbientBackground from "@/components/AmbientBackground";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  metadataBase: new URL("https://soma.app"),
  title: {
    default: "Soma — Samsung TV Remote for Mac & iPhone",
    template: "%s · Soma",
  },
  description:
    "Soma turns your Mac and iPhone into a private remote for your Samsung Smart TV — over your local network, with no cloud and no account.",
  openGraph: {
    title: "Soma — Samsung TV Remote for Mac & iPhone",
    description:
      "A private Samsung Smart TV remote for Mac and iPhone. No cloud, no account.",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#040506",
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
