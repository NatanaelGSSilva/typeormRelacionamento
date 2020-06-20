import { Router } from 'express';
import { getRepository } from 'typeorm';
import Student from '../models/Student';
import { validate } from 'class-validator';

const studentRouter = Router();

studentRouter.post('/', async (request, response) => {
  try {
    const repo = getRepository(Student);
    const { key, name } = request.body;

    const student = repo.create({
      key,
      name,
    });

    const errors = await validate(student);

    if (errors.length == 0) {
      const res = await repo.save(student);
      return response.status(201).json(res);

    }
    response.status(400).json(errors);

  } catch (err) {
    console.log('err.message :>> ', err.message);
    return response.status(400).send();
  }
});

studentRouter.get('/', async (request, response) => {
  response.json(await getRepository(Student).find());
});

export default studentRouter;
