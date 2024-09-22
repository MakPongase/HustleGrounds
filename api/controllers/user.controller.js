export const test = (req, res) => {
  res.json({ message: "Hello World" });
};

export const noInput = (req, res) => {
  res.send("No input provided");
};
