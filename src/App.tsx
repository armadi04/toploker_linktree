import React from "react";
import "./App.css";
import NavbarMain from "./components/navbar/NavbarMain";
import { Provider } from "react-redux";
import { store } from "./state/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import InstagramMain from "./components/instagram/InstagramMain";
import InstagramBali from "./components/instagram/bali/InstagramBali";
import InstagramJabar from "./components/instagram/jabar/InstagramJabar";
import InstagramJateng from "./components/instagram/jateng/InstagramJateng";
import InstagramJatim from "./components/instagram/jatim/InstagramJatim";
import InstagramKalimantan from "./components/instagram/kalimantan/InstagramKalimantan";
import ErrorBoundary from "./components/ErrorBoundary";
import FooterMain from "./components/footer/FooterMain";
import InstagramNusra from "./components/instagram/nusra/InstagramNusra";
import InstagramPamal from "./components/instagram/papua_maluku/InstagramPamal";
import InstagramRiau from "./components/instagram/riau/InstagramRiau";
import InstagramSulawesi from "./components/instagram/sulawesi/InstagramSulawesi";
import InstagramSumatera from "./components/instagram/sumatera/InstagramSumatera";
import FacebookMain from "./components/facebook/FacebookMain";
import TelegramMain from "./components/telegram/TelegramMain";
import FacebookBali from "./components/facebook/bali/FacebookBali";
import FacebookJabar from "./components/facebook/jabar/FacebookJabar";
import FacebookJateng from "./components/facebook/jateng/FacebookJateng";
import FacebookJatim from "./components/facebook/jatim/FacebookJatim";
import FacebookKalimantan from "./components/facebook/kalimantan/FacebookKalimantan";
import FacebookNusra from "./components/facebook/nusra/FacebookNusra";
import FacebookPamal from "./components/facebook/papua_maluku/FacebookPamal";
import FacebookRiau from "./components/facebook/riau/FacebookRiau";
import FacebookSulawesi from "./components/facebook/sulawesi/FacebookSulawesi";
import FacebookSumatera from "./components/facebook/sumatera/FacebookSumatera";
import TelegramBali from "./components/telegram/bali/TelegramBali";
import TelegramJabar from "./components/telegram/jabar/TelegramJabar";
import TelegramJateng from "./components/telegram/jateng/TelegramJateng";
import TelegramJatim from "./components/telegram/jatim/TelegramJatim";
import TelegramKalimantan from "./components/telegram/kalimantan/TelegramKalimantan";
import TelegramNusra from "./components/telegram/nusra/TelegramNusra";
import TelegramPamal from "./components/telegram/papua_maluku/TelegramPamal";
import TelegramRiau from "./components/telegram/riau/TelegramRiau";
import TelegramSulawesi from "./components/telegram/sulawesi/TelegramSulawesi";
import TelegramSumatera from "./components/telegram/sumatera/TelegramSumatera";
import TiktokMain from "./components/tiktok/TiktokMain";
import TiktokBali from "./components/tiktok/bali/TiktokBali";
import TiktokJabar from "./components/tiktok/jabar/TiktokJabar";
import TiktokJateng from "./components/tiktok/jateng/TiktokJateng";
import TiktokJatim from "./components/tiktok/jatim/TiktokJatim";
import TiktokKalimantan from "./components/tiktok/kalimantan/TiktokKalimantan";
import TiktokNusra from "./components/tiktok/nusra/TiktokNusra";
import TiktokPamal from "./components/tiktok/papua_maluku/TiktokPamal";
import TiktokRiau from "./components/tiktok/riau/TiktokRiau";
import TiktokSulawesi from "./components/tiktok/sulawesi/TiktokSulawesi";
import TiktokSumatera from "./components/tiktok/sumatera/TiktokSumatera";
import YoutubeMain from "./components/youtube/YoutubeMain";
import WhatsappMain from "./components/whatsapp/WhatsappMain";
import NavbarBali1 from "./components/instagram/bali/NavbarBali1";
import FooterSosmed from "./components/footer/FooterSosmed";
import NavbarJabar1 from "./components/instagram/jabar/NavbarJabar1";
import NavbarJateng1 from "./components/instagram/jateng/NavbarJateng1";
import NavbarJatim1 from "./components/instagram/jatim/NavbarJatim1";
import NavbarKalimantan1 from "./components/instagram/kalimantan/NavbarKalimantan1";
import NavbarNusra1 from "./components/instagram/nusra/NavbarNusra1";
import NavbarPamal1 from "./components/instagram/papua_maluku/NavbarPamal1";
import NavbarRiau1 from "./components/instagram/riau/NavbarRiau1";
import NavbarSulawesi1 from "./components/instagram/sulawesi/NavbarSulawesi1";
import NavbarSumatera1 from "./components/instagram/sumatera/NavbarSumatera1";
import NavbarBali2 from "./components/facebook/bali/NavbarBali2";
import NavbarJabar2 from "./components/facebook/jabar/NavbarJabar2";
import NavbarJateng2 from "./components/facebook/jateng/NavbarJateng2";
import NavbarJatim2 from "./components/facebook/jatim/NavbarJatim2";
import NavbarKalimantan2 from "./components/facebook/kalimantan/NavbarKalimantan2";
import NavbarNusra2 from "./components/facebook/nusra/NavbarNusra2";
import NavbarPamal2 from "./components/facebook/papua_maluku/NavbarPamal2";
import NavbarRiau2 from "./components/facebook/riau/NavbarRiau2";
import NavbarSulawesi2 from "./components/facebook/sulawesi/NavbarSulawesi2";
import NavbarSumatera2 from "./components/facebook/sumatera/NavbarSumatera2";
import NavbarBali3 from "./components/telegram/bali/NavbarBali3";
import NavbarJabar3 from "./components/telegram/jabar/NavbarJabar3";
import NavbarJateng3 from "./components/telegram/jateng/NavbarJateng3";
import NavbarJatim3 from "./components/telegram/jatim/NavbarJatim3";
import NavbarKalimantan3 from "./components/telegram/kalimantan/NavbarKalimantan3";
import NavbarNusra3 from "./components/telegram/nusra/NavbarNusra3";
import NavbarPamal3 from "./components/telegram/papua_maluku/NavbarPamal3";
import NavbarRiau3 from "./components/telegram/riau/NavbarRiau3";
import NavbarSulawesi3 from "./components/telegram/sulawesi/NavbarSulawesi3";
import NavbarSumatera3 from "./components/telegram/sumatera/NavbarSumatera3";
import NavbarBali4 from "./components/tiktok/bali/NavbarBali4";
import NavbarJabar4 from "./components/tiktok/jabar/NavbarJabar4";
import NavbarJateng4 from "./components/tiktok/jateng/NavbarJateng4";
import NavbarJatim4 from "./components/tiktok/jatim/NavbarJatim4";
import NavbarKalimantan4 from "./components/tiktok/kalimantan/NavbarKalimantan4";
import NavbarNusra4 from "./components/tiktok/nusra/NavbarNusra4";
import NavbarPamal4 from "./components/tiktok/papua_maluku/NavbarPamal4";
import NavbarRiau4 from "./components/tiktok/riau/NavbarRiau4";
import NavbarSulawesi4 from "./components/tiktok/sulawesi/NavbarSulawesi4";
import NavbarSumatera4 from "./components/tiktok/sumatera/NavbarSumatera4";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ErrorBoundary>
        <div className="min-h-screen w-full bg-neutral-900 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,RGB(79,100,229,0.3),rgba(255,255,255,0))]">
          <main className="pt-16">
            <NavbarMain />
            <InstagramMain />
            <FacebookMain />
            <TelegramMain />
            <TiktokMain />
            <YoutubeMain />
            <WhatsappMain />
            <FooterMain />
          </main>
        </div>
      </ErrorBoundary>
    ),
  },

  // Main Routes for Each Social Media
  {
    path: "/instagram",
    element: (
      <ErrorBoundary>
        <div className="min-h-screen w-full bg-neutral-900 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,RGB(79,100,229,0.3),rgba(255,255,255,0))]">
          <main className="pt-16">
            <NavbarMain />
            <InstagramMain />
            <FooterMain />
          </main>
        </div>
      </ErrorBoundary>
    ),
  },
  {
    path: "/facebook",
    element: (
      <ErrorBoundary>
        <div className="min-h-screen w-full bg-neutral-900 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,RGB(79,100,229,0.3),rgba(255,255,255,0))]">
          <main className="pt-16">
            <NavbarMain />
            <FacebookMain />
            <FooterMain />
          </main>
        </div>
      </ErrorBoundary>
    ),
  },
  {
    path: "/telegram",
    element: (
      <ErrorBoundary>
        <div className="min-h-screen w-full bg-neutral-900 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,RGB(79,100,229,0.3),rgba(255,255,255,0))]">
          <main className="pt-16">
            <NavbarMain />
            <TelegramMain />
            <FooterMain />
          </main>
        </div>
      </ErrorBoundary>
    ),
  },
  {
    path: "/tiktok",
    element: (
      <ErrorBoundary>
        <div className="min-h-screen w-full bg-neutral-900 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,RGB(79,100,229,0.3),rgba(255,255,255,0))]">
          <main className="pt-16">
            <NavbarMain />
            <TiktokMain />
            <FooterMain />
          </main>
        </div>
      </ErrorBoundary>
    ),
  },
  {
    path: "/youtube",
    element: (
      <ErrorBoundary>
        <div className="min-h-screen w-full bg-neutral-900 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,RGB(79,100,229,0.3),rgba(255,255,255,0))]">
          <main className="pt-16">
            <NavbarMain />
            <YoutubeMain />
            <FooterMain />
          </main>
        </div>
      </ErrorBoundary>
    ),
  },
  {
    path: "/whatsapp",
    element: (
      <ErrorBoundary>
        <div className="min-h-screen w-full bg-neutral-900 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,RGB(79,100,229,0.3),rgba(255,255,255,0))]">
          <main className="pt-16">
            <NavbarMain />
            <WhatsappMain />
            <FooterMain />
          </main>
        </div>
      </ErrorBoundary>
    ),
  },
  // {
  //   path: "/website",
  //   element: (
  //     <ErrorBoundary>
  //       <div className="min-h-screen w-full bg-neutral-900 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,RGB(79,100,229,0.3),rgba(255,255,255,0))]">
  //         <main className="pt-16">
  //           <NavbarMain />
  //           <WebsiteMain />
  //           <FooterMain />
  //         </main>
  //       </div>
  //     </ErrorBoundary>
  //   ),
  // },

  //Router Instagram
  {
    path: "/instagram/bali",
    element: (
      <ErrorBoundary>
        <div className="min-h-screen w-full bg-neutral-900 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,RGB(79,100,229,0.3),rgba(255,255,255,0))]">
          <main className="pt-16">
            <NavbarBali1 />
            <InstagramBali />
            <FooterSosmed />
          </main>
        </div>
      </ErrorBoundary>
    ),
  },
  {
    path: "/instagram/jabar",
    element: (
      <ErrorBoundary>
        <div className="min-h-screen w-full bg-neutral-900 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,RGB(79,100,229,0.3),rgba(255,255,255,0))]">
          <main className="pt-16">
            <NavbarJabar1 />
            <InstagramJabar />
            <FooterSosmed />
          </main>
        </div>
      </ErrorBoundary>
    ),
  },
  {
    path: "/instagram/jateng",
    element: (
      <ErrorBoundary>
        <div className="min-h-screen w-full bg-neutral-900 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,RGB(79,100,229,0.3),rgba(255,255,255,0))]">
          <main className="pt-16">
            <NavbarJateng1 />
            <InstagramJateng />
            <FooterSosmed />
          </main>
        </div>
      </ErrorBoundary>
    ),
  },
  {
    path: "/instagram/jatim",
    element: (
      <ErrorBoundary>
        <div className="min-h-screen w-full bg-neutral-900 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,RGB(79,100,229,0.3),rgba(255,255,255,0))]">
          <main className="pt-16">
            <NavbarJatim1 />
            <InstagramJatim />
            <FooterSosmed />
          </main>
        </div>
      </ErrorBoundary>
    ),
  },
  {
    path: "/instagram/kalimantan",
    element: (
      <ErrorBoundary>
        <div className="min-h-screen w-full bg-neutral-900 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,RGB(79,100,229,0.3),rgba(255,255,255,0))]">
          <main className="pt-16">
            <NavbarKalimantan1 />
            <InstagramKalimantan />
            <FooterSosmed />
          </main>
        </div>
      </ErrorBoundary>
    ),
  },
  {
    path: "/instagram/nusra",
    element: (
      <ErrorBoundary>
        <div className="min-h-screen w-full bg-neutral-900 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,RGB(79,100,229,0.3),rgba(255,255,255,0))]">
          <main className="pt-16">
            <NavbarNusra1 />
            <InstagramNusra />
            <FooterSosmed />
          </main>
        </div>
      </ErrorBoundary>
    ),
  },
  {
    path: "/instagram/papua_maluku",
    element: (
      <ErrorBoundary>
        <div className="min-h-screen w-full bg-neutral-900 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,RGB(79,100,229,0.3),rgba(255,255,255,0))]">
          <main className="pt-16">
            <NavbarPamal1 />
            <InstagramPamal />
            <FooterSosmed />
          </main>
        </div>
      </ErrorBoundary>
    ),
  },
  {
    path: "/instagram/riau",
    element: (
      <ErrorBoundary>
        <div className="min-h-screen w-full bg-neutral-900 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,RGB(79,100,229,0.3),rgba(255,255,255,0))]">
          <main className="pt-16">
            <NavbarRiau1 />
            <InstagramRiau />
            <FooterSosmed />
          </main>
        </div>
      </ErrorBoundary>
    ),
  },
  {
    path: "/instagram/sulawesi",
    element: (
      <ErrorBoundary>
        <div className="min-h-screen w-full bg-neutral-900 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,RGB(79,100,229,0.3),rgba(255,255,255,0))]">
          <main className="pt-16">
            <NavbarSulawesi1 />
            <InstagramSulawesi />
            <FooterSosmed />
          </main>
        </div>
      </ErrorBoundary>
    ),
  },
  {
    path: "/instagram/sumatera",
    element: (
      <ErrorBoundary>
        <div className="min-h-screen w-full bg-neutral-900 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,RGB(79,100,229,0.3),rgba(255,255,255,0))]">
          <main className="pt-16">
            <NavbarSumatera1 />
            <InstagramSumatera />
            <FooterSosmed />
          </main>
        </div>
      </ErrorBoundary>
    ),
  },

  //Router Facebook
  {
    path: "facebook/bali",
    element: (
      <ErrorBoundary>
        <div className="min-h-screen w-full bg-neutral-900 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,RGB(79,100,229,0.3),rgba(255,255,255,0))]">
          <main className="pt-16">
            <NavbarBali2 />
            <FacebookBali />
            <FooterSosmed />
          </main>
        </div>
      </ErrorBoundary>
    ),
  },
  {
    path: "/facebook/jabar",
    element: (
      <ErrorBoundary>
        <div className="min-h-screen w-full bg-neutral-900 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,RGB(79,100,229,0.3),rgba(255,255,255,0))]">
          <main className="pt-16">
            <NavbarJabar2 />
            <FacebookJabar />
            <FooterSosmed />
          </main>
        </div>
      </ErrorBoundary>
    ),
  },
  {
    path: "/facebook/jateng",
    element: (
      <ErrorBoundary>
        <div className="min-h-screen w-full bg-neutral-900 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,RGB(79,100,229,0.3),rgba(255,255,255,0))]">
          <main className="pt-16">
            <NavbarJateng2 />
            <FacebookJateng />
            <FooterSosmed />
          </main>
        </div>
      </ErrorBoundary>
    ),
  },
  {
    path: "/facebook/jatim",
    element: (
      <ErrorBoundary>
        <div className="min-h-screen w-full bg-neutral-900 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,RGB(79,100,229,0.3),rgba(255,255,255,0))]">
          <main className="pt-16">
            <NavbarJatim2 />
            <FacebookJatim />
            <FooterSosmed />
          </main>
        </div>
      </ErrorBoundary>
    ),
  },
  {
    path: "/facebook/kalimantan",
    element: (
      <ErrorBoundary>
        <div className="min-h-screen w-full bg-neutral-900 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,RGB(79,100,229,0.3),rgba(255,255,255,0))]">
          <main className="pt-16">
            <NavbarKalimantan2 />
            <FacebookKalimantan />
            <FooterSosmed />
          </main>
        </div>
      </ErrorBoundary>
    ),
  },
  {
    path: "/facebook/nusra",
    element: (
      <ErrorBoundary>
        <div className="min-h-screen w-full bg-neutral-900 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,RGB(79,100,229,0.3),rgba(255,255,255,0))]">
          <main className="pt-16">
            <NavbarNusra2 />
            <FacebookNusra />
            <FooterSosmed />
          </main>
        </div>
      </ErrorBoundary>
    ),
  },
  {
    path: "/facebook/papua_maluku",
    element: (
      <ErrorBoundary>
        <div className="min-h-screen w-full bg-neutral-900 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,RGB(79,100,229,0.3),rgba(255,255,255,0))]">
          <main className="pt-16">
            <NavbarPamal2 />
            <FacebookPamal />
            <FooterSosmed />
          </main>
        </div>
      </ErrorBoundary>
    ),
  },
  {
    path: "/facebook/riau",
    element: (
      <ErrorBoundary>
        <div className="min-h-screen w-full bg-neutral-900 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,RGB(79,100,229,0.3),rgba(255,255,255,0))]">
          <main className="pt-16">
            <NavbarRiau2 />
            <FacebookRiau />
            <FooterSosmed />
          </main>
        </div>
      </ErrorBoundary>
    ),
  },
  {
    path: "/facebook/sulawesi",
    element: (
      <ErrorBoundary>
        <div className="min-h-screen w-full bg-neutral-900 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,RGB(79,100,229,0.3),rgba(255,255,255,0))]">
          <main className="pt-16">
            <NavbarSulawesi2 />
            <FacebookSulawesi />
            <FooterSosmed />
          </main>
        </div>
      </ErrorBoundary>
    ),
  },
  {
    path: "/facebook/sumatera",
    element: (
      <ErrorBoundary>
        <div className="min-h-screen w-full bg-neutral-900 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,RGB(79,100,229,0.3),rgba(255,255,255,0))]">
          <main className="pt-16">
            <NavbarSumatera2 />
            <FacebookSumatera />
            <FooterSosmed />
          </main>
        </div>
      </ErrorBoundary>
    ),
  },

  //Router Telegram
  {
    path: "/telegram/bali",
    element: (
      <ErrorBoundary>
        <div className="min-h-screen w-full bg-neutral-900 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,RGB(79,100,229,0.3),rgba(255,255,255,0))]">
          <main className="pt-16">
            <NavbarBali3 />
            <TelegramBali />
            <FooterSosmed />
          </main>
        </div>
      </ErrorBoundary>
    ),
  },
  {
    path: "/telegram/jabar",
    element: (
      <ErrorBoundary>
        <div className="min-h-screen w-full bg-neutral-900 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,RGB(79,100,229,0.3),rgba(255,255,255,0))]">
          <main className="pt-16">
            <NavbarJabar3 />
            <TelegramJabar />
            <FooterSosmed />
          </main>
        </div>
      </ErrorBoundary>
    ),
  },
  {
    path: "/telegram/jateng",
    element: (
      <ErrorBoundary>
        <div className="min-h-screen w-full bg-neutral-900 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,RGB(79,100,229,0.3),rgba(255,255,255,0))]">
          <main className="pt-16">
            <NavbarJateng3 />
            <TelegramJateng />
            <FooterSosmed />
          </main>
        </div>
      </ErrorBoundary>
    ),
  },
  {
    path: "/telegram/jatim",
    element: (
      <ErrorBoundary>
        <div className="min-h-screen w-full bg-neutral-900 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,RGB(79,100,229,0.3),rgba(255,255,255,0))]">
          <main className="pt-16">
            <NavbarJatim3 />
            <TelegramJatim />
            <FooterSosmed />
          </main>
        </div>
      </ErrorBoundary>
    ),
  },
  {
    path: "/telegram/kalimantan",
    element: (
      <ErrorBoundary>
        <div className="min-h-screen w-full bg-neutral-900 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,RGB(79,100,229,0.3),rgba(255,255,255,0))]">
          <main className="pt-16">
            <NavbarKalimantan3 />
            <TelegramKalimantan />
            <FooterSosmed />
          </main>
        </div>
      </ErrorBoundary>
    ),
  },
  {
    path: "/telegram/nusra",
    element: (
      <ErrorBoundary>
        <div className="min-h-screen w-full bg-neutral-900 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,RGB(79,100,229,0.3),rgba(255,255,255,0))]">
          <main className="pt-16">
            <NavbarNusra3 />
            <TelegramNusra />
            <FooterSosmed />
          </main>
        </div>
      </ErrorBoundary>
    ),
  },
  {
    path: "/telegram/papua_maluku",
    element: (
      <ErrorBoundary>
        <div className="min-h-screen w-full bg-neutral-900 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,RGB(79,100,229,0.3),rgba(255,255,255,0))]">
          <main className="pt-16">
            <NavbarPamal3 />
            <TelegramPamal />
            <FooterSosmed />
          </main>
        </div>
      </ErrorBoundary>
    ),
  },
  {
    path: "/telegram/riau",
    element: (
      <ErrorBoundary>
        <div className="min-h-screen w-full bg-neutral-900 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,RGB(79,100,229,0.3),rgba(255,255,255,0))]">
          <main className="pt-16">
            <NavbarRiau3 />
            <TelegramRiau />
            <FooterSosmed />
          </main>
        </div>
      </ErrorBoundary>
    ),
  },
  {
    path: "/telegram/sulawesi",
    element: (
      <ErrorBoundary>
        <div className="min-h-screen w-full bg-neutral-900 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,RGB(79,100,229,0.3),rgba(255,255,255,0))]">
          <main className="pt-16">
            <NavbarSulawesi3 />
            <TelegramSulawesi />
            <FooterSosmed />
          </main>
        </div>
      </ErrorBoundary>
    ),
  },
  {
    path: "/telegram/sumatera",
    element: (
      <ErrorBoundary>
        <div className="min-h-screen w-full bg-neutral-900 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,RGB(79,100,229,0.3),rgba(255,255,255,0))]">
          <main className="pt-16">
            <NavbarSumatera3 />
            <TelegramSumatera />
            <FooterSosmed />
          </main>
        </div>
      </ErrorBoundary>
    ),
  },

  //Router Tiktok
  {
    path: "/tiktok/bali",
    element: (
      <ErrorBoundary>
        <div className="min-h-screen w-full bg-neutral-900 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,RGB(79,100,229,0.3),rgba(255,255,255,0))]">
          <main className="pt-16">
            <NavbarBali4 />
            <TiktokBali />
            <FooterSosmed />
          </main>
        </div>
      </ErrorBoundary>
    ),
  },
  {
    path: "/tiktok/jabar",
    element: (
      <ErrorBoundary>
        <div className="min-h-screen w-full bg-neutral-900 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,RGB(79,100,229,0.3),rgba(255,255,255,0))]">
          <main className="pt-16">
            <NavbarJabar4 />
            <TiktokJabar />
            <FooterSosmed />
          </main>
        </div>
      </ErrorBoundary>
    ),
  },
  {
    path: "/tiktok/jateng",
    element: (
      <ErrorBoundary>
        <div className="min-h-screen w-full bg-neutral-900 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,RGB(79,100,229,0.3),rgba(255,255,255,0))]">
          <main className="pt-16">
            <NavbarJateng4 />
            <TiktokJateng />
            <FooterSosmed />
          </main>
        </div>
      </ErrorBoundary>
    ),
  },
  {
    path: "/tiktok/jatim",
    element: (
      <ErrorBoundary>
        <div className="min-h-screen w-full bg-neutral-900 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,RGB(79,100,229,0.3),rgba(255,255,255,0))]">
          <main className="pt-16">
            <NavbarJatim4 />
            <TiktokJatim />
            <FooterSosmed />
          </main>
        </div>
      </ErrorBoundary>
    ),
  },
  {
    path: "/tiktok/kalimantan",
    element: (
      <ErrorBoundary>
        <div className="min-h-screen w-full bg-neutral-900 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,RGB(79,100,229,0.3),rgba(255,255,255,0))]">
          <main className="pt-16">
            <NavbarKalimantan4 />
            <TiktokKalimantan />
            <FooterSosmed />
          </main>
        </div>
      </ErrorBoundary>
    ),
  },
  {
    path: "/tiktok/nusra",
    element: (
      <ErrorBoundary>
        <div className="min-h-screen w-full bg-neutral-900 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,RGB(79,100,229,0.3),rgba(255,255,255,0))]">
          <main className="pt-16">
            <NavbarNusra4 />
            <TiktokNusra />
            <FooterSosmed />
          </main>
        </div>
      </ErrorBoundary>
    ),
  },
  {
    path: "/tiktok/papua_maluku",
    element: (
      <ErrorBoundary>
        <div className="min-h-screen w-full bg-neutral-900 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,RGB(79,100,229,0.3),rgba(255,255,255,0))]">
          <main className="pt-16">
            <NavbarPamal4 />
            <TiktokPamal />
            <FooterSosmed />
          </main>
        </div>
      </ErrorBoundary>
    ),
  },
  {
    path: "/tiktok/riau",
    element: (
      <ErrorBoundary>
        <div className="min-h-screen w-full bg-neutral-900 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,RGB(79,100,229,0.3),rgba(255,255,255,0))]">
          <main className="pt-16">
            <NavbarRiau4 />
            <TiktokRiau />
            <FooterSosmed />
          </main>
        </div>
      </ErrorBoundary>
    ),
  },
  {
    path: "/tiktok/sulawesi",
    element: (
      <ErrorBoundary>
        <div className="min-h-screen w-full bg-neutral-900 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,RGB(79,100,229,0.3),rgba(255,255,255,0))]">
          <main className="pt-16">
            <NavbarSulawesi4 />
            <TiktokSulawesi />
            <FooterSosmed />
          </main>
        </div>
      </ErrorBoundary>
    ),
  },
  {
    path: "/tiktok/sumatera",
    element: (
      <ErrorBoundary>
        <div className="min-h-screen w-full bg-neutral-900 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,RGB(79,100,229,0.3),rgba(255,255,255,0))]">
          <main className="pt-16">
            <NavbarSumatera4 />
            <TiktokSumatera />
            <FooterSosmed />
          </main>
        </div>
      </ErrorBoundary>
    ),
  },
]);

function App() {
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <RouterProvider router={router} />
      </ErrorBoundary>
    </Provider>
  );
}

export default App;
