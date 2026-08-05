import "~/styles/globals.css";

import { type Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { AppProviders } from "~/components/providers/app-providers";
import { Nav } from "~/components/layout/nav";
import { Footer } from "~/components/layout/footer";
import { site } from "~/content/site";

export const metadata: Metadata = {
  title: {
    default: site.seo.title,
    template: `%s — ${site.name}`,
  },
  description: site.seo.description,
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  openGraph: {
    title: site.seo.title,
    description: site.seo.description,
    type: "website",
    siteName: site.name,
  },
};

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${cormorant.variable}`}>
      <body>
        <AppProviders>
          <Nav />
          <main>{children}</main>
          <Footer />
        </AppProviders>
      </body>
    </html>
  );
}
