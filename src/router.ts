import { createMovie, findMovieById, getAllmovies, removeMovie, updateMovie } from '@controller/movieController';
import { Router, Request,Response } from 'express';
import { validate } from '@middleware/handleValidator';

import { movieCreateValidation } from '@middleware/movieValidation'; 

const router = Router();

router.get("/test",(req:Request,res:Response) => {
    res.status(200).send("Api Working!")
})
.post("/movie",movieCreateValidation(),validate,createMovie)
.get("/movie/:id",findMovieById)
.get("/movie",getAllmovies)
.delete("/movie/:id",removeMovie)
.patch("/movie/:id",movieCreateValidation(),validate,updateMovie);

export default router;
