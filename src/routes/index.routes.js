import express from "express";
const { Router } = express;

import routerApi from "./api/api.routes.js";
import routerUsers from "./users/users.routes.js";

const router = Router();

router.get("/", (req, res) => {
  res.render("main", { layouts: "index"});
})
  .use("/api", routerApi)
  .use("/", routerUsers)
router.get("/chat", (req, res) => {
  res.render("chat", { layouts: "index", session: req.session});
  })

export default router;
 