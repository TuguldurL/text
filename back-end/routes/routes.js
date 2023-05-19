const { Router } = require("express");

const {
  getList,
  getCount,
  postAdd,
  deleteToDo,
  updateToDo,
  updateChecked,
} = require("../controller/Controller");

const router = Router();

router.get("/list", getList);

router.get("/count", getCount);

router.post("/add", postAdd);

router.delete("/delete", deleteToDo);

router.patch("/uptate", updateToDo);

router.patch("/checked", updateChecked);

module.exports = router;
