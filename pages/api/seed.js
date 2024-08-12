import User from '../../models/User.js';
import data from '../../utils/data.js';
import db from '../../utils/db.js';

const handler = async () => {
  try {
    await db.connect();
    console.log("Connected to database");

    console.log("Deleting existing users...");
    await User.deleteMany();

    console.log("Inserting new users...");
    await User.insertMany(data.users);

    await db.disconnect();
    console.log("Disconnected from database");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding data:", error);
    process.exit(1);
  }
};

handler().catch((err) => {
  console.error("Unhandled error:", err);
  process.exit(1);
});
export default handler;
