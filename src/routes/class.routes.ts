import { Router } from 'express';
import { getRepository, getCustomRepository } from 'typeorm';
import Class from '../models/Class';
import ClassRepository from '../repositories/ClassRepository';
import { validate } from 'class-validator';

const classRouter = Router();

classRouter.post('/', async (request, response) => {
  try {
    const repo = getRepository(Class);
    const { name, duration, site, text } = request.body;

    const classe = repo.create({
      name,
      duration,
      site,
      text,
    });

    const errors = await validate(classe);

    if (errors.length == 0) {
      const res = await repo.save(classe);
      return response.status(201).json(res);
    }
    response.status(400).json(errors);

  } catch (err) {
    console.log('err.message :>> ', err.message);
    return response.status(400).send();
  }
});

classRouter.get('/', async (request, response) => {
  response.json(await getRepository(Class).find());
});

classRouter.get('/:name', async (request, response) => {
  const repository = getCustomRepository(ClassRepository);
  const res = await repository.findByName(request.params.name);
  response.json(res);
});

export default classRouter;
