import { Request, Response } from 'express';

import { MovieModel } from '@model/Movie';

import Logger from '@config/logger';

export async function createMovie(req:Request,res:Response){
    try{
        const data = req.body;
        const movie = await MovieModel.create(data);
        return res.status(201).send(movie);
    } catch(e:any){
        Logger.error(`Error: ${e.message}`);
        return res.status(500).json({error:"Please, try again later"});
    }
}

export async function findMovieById(req:Request,res:Response){
    try{
        const id = req.params.id;
        const movie = await MovieModel.findById(id);

        if(!movie){
            return res.status(404).json({error:"The movie not exists!"})
        }

        return res.status(200).json(movie);
    } catch(e:any){
        Logger.error(`Error: ${e.message}`)
        return res.status(500).json({error:"Please, try again later"})
    }
}

export async function getAllmovies(req:Request,res:Response){
    try{
        
        const movie = await MovieModel.find();
        return res.status(200).json(movie);
    } catch(e:any){
        Logger.error(`Error: ${e.message}`)
        return res.status(500).json({error:"Please, try again later"})
    }
}

export async function removeMovie(req:Request,res:Response){
    try{
        const id = req.params.id;
        const movie = await MovieModel.findById(id);

        if(!movie){
            return res.status(404).json({error:"The movie not exists!"})
        }

        await MovieModel.deleteOne({_id:id});

        return res.status(200).json({msg:"successfully removed movie"});
    } catch(e:any){
        Logger.error(`Error: ${e.message}`);
        return res.status(500).json({error:"Please, try again later"})
    }
}

export async function updateMovie(req:Request,res:Response){
    try{
        const id = req.params.id;
        const data = req.body;
        const movie = await MovieModel.findById(id);

        if(!movie){
            return res.status(404).json({error:"The movie not exists!"})
        }

        await MovieModel.updateOne({_id:id},data)

        return res.status(200).json(data);
    } catch(e:any){
        Logger.error(`Error: ${e.message}`);
        return res.status(500).json({error:"Please, try again later"})
    }
}