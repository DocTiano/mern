import express from "express";
import { Official } from "../models/bmis_sr.js";

const router = express.Router();

//create
router.post("/", async (request, response) => {
  try {
    if (
      !request.body.sPosition ||
      !request.body.completeName ||
      !request.body.pcontact ||
      !request.body.paddress ||
      !request.body.termStart ||
      !request.body.termEnd ||
      !request.body.status
    ) {
      return response.status(400).send({
        message:
          "Send all required fields: sPosition, completeName, pcontact, paddress, termStart, termEnd, status",
      });
    }

    const newOfficial = {
      sPosition: request.body.sPosition,
      completeName: request.body.completeName,
      pcontact: request.body.pcontact,
      paddress: request.body.paddress,
      termStart: new Date(request.body.termStart),
      termEnd: new Date(request.body.termEnd),
      status: request.body.status,
    };

    const official = await Official.create(newOfficial);
    return response.status(201).send(official);
  } catch (error) {
    console.log(error);
    response.status(500).send({ message: error.message });
  }
});

//get
router.get("/", async (request, response) => {
  try {
    const officials = await Official.find();
    return response.status(200).json({
      count: officials.length,
      data: officials,
    });
  } catch (error) {
    console.log(error);
    response.status(500).send({ message: error.message });
  }
});

//get by id
router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const officials = await Official.findById(id);
    return response.status(200).json(officials);
  } catch (error) {
    console.log(error);
    response.status(500).send({ message: error.message });
  }
});

//update by id
router.put("/:id", async (request, response) => {
  try {
    if (
      !request.body.sPosition ||
      !request.body.completeName ||
      !request.body.pcontact ||
      !request.body.paddress ||
      !request.body.termStart ||
      !request.body.termEnd ||
      !request.body.status
    ) {
      return response
        .status(400)
        .send({
          message:
            "Send all required fields: sPosition, completeName, pcontact, paddress, termStart, termEnd, status",
        });
    }
    const { id } = request.params;
    const result = await Official.findByIdAndUpdate(id, request.body);
    if (!result) {
      return response.status(404).send({ message: "Official not found" });
    }
    return response
      .status(200)
      .send({ message: "Official updated successfully" });
  } catch (error) {
    console.log(error);
    response.status(500).send({ message: error.message });
  }
});

//delete by id
router.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const result = await Official.findByIdAndDelete(id);
    if (!result) {
      return response.status(404).send({ message: "Official not found" });
    }
    return response
      .status(200)
      .send({ message: "Official deleted successfully" });
  } catch (error) {
    console.log(error);
    response.status(500).send({ message: error.message });
  }
});

export default router;
