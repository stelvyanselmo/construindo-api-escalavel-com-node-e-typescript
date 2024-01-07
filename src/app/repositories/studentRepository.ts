import { Student } from "../../domain/entities/student";

export interface IStudentRepository {

     findById(id: string): Promise<Student | null>;
     create(props: Student): Promise<void>;

}