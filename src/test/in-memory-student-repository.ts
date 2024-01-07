import { IStudentRepository } from "../app/repositories/studentRepository";
import { Student } from "../domain/entities/student";

export class InMemoryStudentRepository implements IStudentRepository{

    private readonly students: Student[] = [];

    async create(props: Student): Promise<void> {
        
        this.students.push(props);

    }
     
    async findById(id: string): Promise<Student | null> {

        const student = this.students.find(s => s.id == id);

        if (!student) {

            throw new Error("Student not found in RDMS");
            
        }

        return student;

    }

}