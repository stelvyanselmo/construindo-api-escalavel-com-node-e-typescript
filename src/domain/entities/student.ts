import { Entity } from "../../core/entities/Entinties";

type StudentProps = {

    name: string;
    email: string;
    createdAt?: Date;
}

export class Student extends Entity<StudentProps> {

    private constructor(props: StudentProps,id?: string) {
        super(props,id);
    }

    public static create(props: StudentProps,id?: string) {

        const student = new Student({
            ...props,
            createdAt: props.createdAt ?? new Date()
        },id);

        return student;

    }

}