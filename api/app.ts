// server.ts
import express from "express";
import helmet from "helmet";
import compression from "compression";
import multer from "multer";
import path from "path";
import rateLimit from "express-rate-limit";
import fs from "fs";
import https from "https";

const app = express();

const APIPORT = process.env.APIPORT || 3001;
const HOST = process.env.HOST || "localhost";

// Helmet
app.use(helmet());

// Compresses response data to reduce size
app.use(compression());

// Rate Limiting: Limits repeated requests to the server
const limit = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 50, // limit each IP to 50 requests per windowMs
});
app.use(limit);

const storage = multer.diskStorage({
  destination: "./uploads",
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage });

app.post("/upload", upload.single("image"), (req, res) => {
  res.send("File uploaded!");
});

const server = https.createServer(
  {
    key: fs.readFileSync("key.pem"),
    cert: fs.readFileSync("cert.pem"),
  },
  app
);

server.listen(APIPORT, () => {
  console.log(`Server is running on https://${HOST}:${APIPORT}`);
});
