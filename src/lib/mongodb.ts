import { MongoClient } from "mongodb";

type ClickDoc = { _id: string; count: number; updatedAt: Date };

// 개발 중 핫 리로드로 연결이 계속 늘어나지 않도록 전역에 보관한다.
const globalForMongo = globalThis as unknown as {
  mongoClient?: Promise<MongoClient>;
};

// 링크 클릭 수를 1 올린다. DB가 없거나 실패해도 예외를 던지지 않는다(링크 이동이 우선).
export async function incrementClick(linkId: string) {
  const uri = process.env.MONGODB_URI;
  if (!uri) return;

  try {
    globalForMongo.mongoClient ??= new MongoClient(uri, {
      serverSelectionTimeoutMS: 2000,
    }).connect();
    const client = await globalForMongo.mongoClient;
    await client
      .db("linknamu")
      .collection<ClickDoc>("clicks")
      .updateOne(
        { _id: linkId },
        { $inc: { count: 1 }, $set: { updatedAt: new Date() } },
        { upsert: true },
      );
  } catch (error) {
    // 실패한 연결 Promise가 캐시에 남지 않도록 비운다.
    globalForMongo.mongoClient = undefined;
    console.error(
      "클릭 기록 실패:",
      error instanceof Error ? error.message : error,
    );
  }
}
