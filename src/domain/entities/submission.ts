import { Entity } from "../../core/entities/Entinties";

type SubmissionProps = {

    studentId: string;
    challengeId: string;
    createdAt?: string;

}

export class Submission extends Entity<SubmissionProps> {

    private constructor(props: SubmissionProps,id?: string) {
        super(props,id);
    }

    public static create(props: SubmissionProps,id?: string) {

        const submission = new Submission({
            ...props,
             createdAt: props.createdAt ?? new Date().toLocaleString(),
        },id);

        return submission;

    }

}