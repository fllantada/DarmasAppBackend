"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseCreator = void 0;
const Course_1 = require("../domain/Course");
//caso de uso crear un curso en Contexto / Aplicacion
//Recibe una implementacion de la interfase CourseRepository
//esta interface tiene el metodo save()
//courseCreator es un agregado a Curso hay una dependencia
//Si modifico curse tengo q modificar courseCreator
class CourseCreator {
    constructor(repository) {
        this.repository = repository;
    }
    run(id, name, duration) {
        return __awaiter(this, void 0, void 0, function* () {
            const course = new Course_1.Course({ id, name, duration });
            return this.repository.save(course);
        });
    }
}
exports.CourseCreator = CourseCreator;
