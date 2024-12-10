import express from "express";
import fs from "fs";

const app = express();
app.use(express.json());
const PORT = 4000;

app.get("/write-string", (req, res) => {
  writeString("huhuhuhu");
  res.send("gespeichert");
});
app.post("/write-string", (req, res) => {
  writeString(req.body.test);
  res.send("gespeichert");
});

app.listen(PORT, () => {
  console.log(`server listens at port: ${PORT}`);
});
async function writeString(string) {
  try {
    await fs.promises.writeFile("./test-write.txt", string);
  } catch (error) {
    console.error("Error writing", error);
  }
}
