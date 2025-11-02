import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

/** ダミー不動産データ */
const properties = [
  { id: "p-001", name: "ルネ舞子タワー 1203", address: "兵庫県神戸市垂水区舞子台", priceJPY: 31800000, listedAt: "2025-06-21T00:00:00.000Z" },
  { id: "p-002", name: "ミッドシティ明石 902", address: "兵庫県明石市大明石町", priceJPY: 42800000, listedAt: "2025-02-10T00:00:00.000Z" },
  { id: "p-003", name: "神戸ベイレジデンス 1505", address: "兵庫県神戸市中央区磯上通", priceJPY: 59800000, listedAt: "2024-12-05T00:00:00.000Z" },
  { id: "p-004", name: "須磨シーサイドコート 305", address: "兵庫県神戸市須磨区須磨浦通", priceJPY: 28800000, listedAt: "2025-08-30T00:00:00.000Z" },
  { id: "p-005", name: "明石ハーバービュー 1102", address: "兵庫県明石市中崎", priceJPY: 35200000, listedAt: "2025-04-12T00:00:00.000Z" }
];

export async function GET() {
  return NextResponse.json({ properties });
}
