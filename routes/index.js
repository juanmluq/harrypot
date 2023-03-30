"use strict";

var express = require("express");

var router = express.Router();
module.exports = router;
const models = require("../models/model");

router.get("/houses", function (req, res) {
  res.json(models.listHouses());
});

router.post("/houses", function (req, res) {
  res.json(models.addHouse(req.body.house));
});

router.get("/characters", function (req, res) {
  res.json(models.listCharacters());
});

router.post("/characters", function (req, res) {
  let result = models.addCharacter(
    req.body.name,
    req.body.lastName,
    req.body.house,
    req.body.dateOfBirth,
    req.body.isMuggle
  );
  if (result.msg) {
    res.status(404).json(result);
  } else {
    res.json(result);
  }
});

router.get("/characters/:houseName", function (req, res) {
  res.json(models.listCharacters(req.params.houseName, req.query.fullName));
});

router.get("/spells", function (req, res) {
  res.json(models.showSpells(req.query.name));
});

router.post("/spells", function (req, res) {
  res
    .status(201)
    .json(
      models.addSpell(
        req.body.name,
        req.body.id,
        req.body.spellName,
        req.body.description
      )
    );
  
});

router.get("/wand", function (req, res) {
  res.json(models.showWand(req.body.name));
});

router.post("/wand", function (req, res) {
  res
    .status(201)
    .json(
      models.addWand(
        req.body.name,
        req.body.wood,
        req.body.core,
        req.body.length
      )
    );
});
// escriban sus rutas acá
// siéntanse libres de dividir entre archivos si lo necesitan
