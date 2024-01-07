import { Entity } from "../../core/entities/Entinties";

type CorretionProps = {

    grade: number;
    submissionId: string;
    createdAt: Date;
}

export class Corretion extends Entity<CorretionProps> {

    private constructor(props: CorretionProps,id?: string) {
        super(props,id);
    }

    public static create(props: CorretionProps,id?: string) {

        if (props.grade < 0 || props.grade > 10) {

            throw new Error("Invalid grade");
            
        }

        const correction = new Corretion({
            ...props,
            createdAt: props.createdAt ?? new Date()
        },id);

        return correction;

    }

}