// https://nextjs.org/docs/app/building-your-application/routing/router-handlers

import { NextResponse } from "next/server";

// import { QRCodeCanvas, Options } from "@loskir/styled-qr-code-node";

// const options: Partial<Options> = {
//   width: 800,
//   height: 800,
//   data: "https://app.leadsquik.com/add-leads-modal",
//   // NOTE: png and jpg formats only.
//   image: "https://leadsquik.com/logos/adaptive-icon.png",
//   dotsOptions: { type: "extra-rounded", color: "#2D5B5E" },
//   backgroundOptions: {
//     color: "#fff",
//   },
//   cornersSquareOptions: { type: "extra-rounded", color: "#278572" },
//   cornersDotOptions: {
//     color: "#2D5B5E",
//   },
//   imageOptions: {
//     crossOrigin: "anonymous",
//     hideBackgroundDots: true,
//     imageSize: 0.3,
//   },
// };

export async function GET(request: Request) {
  // const { searchParams } = new URL(request.url);
  // const id = searchParams.get("id");
  // const name = searchParams.get("name");
  // const email = searchParams.get("email");
  // try {
  //   // const qrCode = new QRCodeCanvas(options);
  //   const file = await QRCode.toDataUrl(
  //     `https://app.leadsquik.com/add-leads-modal?id=${id}&name=${name}&email=${email}`
  //   );
  //   return NextResponse.json({
  //     pngFile: file,
  //   });
  // } catch (error) {
  //   console.log(error);
  //   return NextResponse.json(
  //     { error: "Failed to generate QR code" },
  //     { status: 500 }
  //   );
  // }
}
