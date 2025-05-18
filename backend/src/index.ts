import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
const port = 3001;

let latestData = "";

app.use(cors());
app.use(express.json());

app.post("/api/create-answer", (req: Request, res: Response) => {
  const { data } = req.body;
  if (typeof data === "string") {
    latestData = data;
    console.log("Received:", data);
    res.status(200).send({ message: "Data received" });
  } else {
    res.status(400).send({ error: "Invalid format" });
  }
});

app.get("/api/latest", (_: Request, res: Response) => {
  res.send({ data: latestData });
});

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`);
});
