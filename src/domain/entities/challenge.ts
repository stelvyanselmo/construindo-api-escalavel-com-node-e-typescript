import { Entity } from "../../core/entities/Entinties";

type ChallengeProps = {

    title: string;
    instrutionsUrl: string;
    createdAt?: Date;
}

export class Challenge extends Entity<ChallengeProps> {

    private constructor(props: ChallengeProps,id?: string) {
        super(props,id);
    }

    public static create(props: ChallengeProps,id?: string) {

        const challenge = new Challenge({
            ...props,
            createdAt: props.createdAt ?? new Date()
        },id);

        return challenge;

    }

}