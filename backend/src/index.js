import dotenv from "dotenv";
import { app } from "./app.js";
dotenv.config({
  path: `./env`,
});
import connectDB from "./db/db.js";

connectDB()
.then(() => {
  // import { app } from "./app.js";
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}
).catch((error) => {
  console.error("Database connection failed:", error);
  process.exit(1); // Exit the process with failure
}
);

