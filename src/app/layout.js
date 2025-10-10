import "./globals.css";

export const metadata = {
  title: "Ferdinalaxewall - Software Developer",
  description: "Ferdinalaxewall is a software developer based in Indonesia. He specializes in building web applications using Laravel, Next.js, React, and Tailwind CSS.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`font-primary antialiased text-white`}
      >
        <div className="w-full bg-gradient-to-br from-black to-slate-700">
          {children}
        </div>
      </body>
    </html>
  );
}
