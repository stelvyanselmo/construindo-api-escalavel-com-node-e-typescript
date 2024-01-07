import { Submission } from "../../../domain/entities/submission";
import { CreateChallengeSubmissionRequest } from "../create-challenge-submission";

export interface ICreateChallengeSubmission {

    execute(props: CreateChallengeSubmissionRequest): Promise<Submission | null>;

}