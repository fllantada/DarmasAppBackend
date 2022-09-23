import { Course } from '../domain/Course';
import { CourseRepository } from '../domain/CourseRepository';

// caso de uso crear un curso en Contexto / Aplicacion
// Recibe una implementacion de la interfase CourseRepository
// esta interface tiene el metodo save()

// courseCreator es un agregado a Curso hay una dependencia
// Si modifico curse tengo q modificar courseCreator

export class CourseCreator {
  private repository: CourseRepository;

  constructor(repository: CourseRepository) {
    this.repository = repository;
  }

  async run(id: string, name: string, duration: string): Promise<void> {
    const course = new Course({ id, name, duration });

    return this.repository.save(course);
  }
}
