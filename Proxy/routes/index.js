const { Router } = require("express");
const router = Router();

const { getCurrencyList } = require("../controllers/index.controller");

router.get("/getCurrencyList", getCurrencyList);

module.exports = router;
