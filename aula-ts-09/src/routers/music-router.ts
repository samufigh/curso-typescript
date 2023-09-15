import { Router } from "express";
import musicController from "../controllers/music-controller";


import { musicSchema } from "schemas/music-schema";
import { validateSchema } from "middlewares/validate-schema";


const musicRouter = Router();

musicRouter.get("/musics", musicController.getMusics);
musicRouter.post("/musics", validateSchema(musicSchema), musicController.createMusic); // TODO: validação via Joi

export default musicRouter;