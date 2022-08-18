//import { Course } from '../domain/Course';
//import { CourseRepository } from '../domain/CourseRepository';

import { DentalinkRepository } from '../infrastructure/dentalinkRepository';

//caso de uso crear un curso en Contexto / Aplicacion
//Recibe una implementacion de la interfase CourseRepository
//esta interface tiene el metodo save()

//courseCreator es un agregado a Curso hay una dependencia
//Si modifico curse tengo q modificar courseCreator

export class LiquidacionesSemanales {
  private repository: DentalinkRepository;

  constructor(repository: DentalinkRepository) {
    this.repository = repository;
  }

  async run(): Promise<void> {
    console.log('Inicie la app de liquidaciones semanales');
    this.repository.updatePagos();
    this.repository.updateLiquidaciones();
    const pagosSemana = this.repository.getPagosSemana();
    const liquidacionesSemana = this.repository.getLiquidacionesSemana();
    console.log(pagosSemana, liquidacionesSemana);
  }
}
