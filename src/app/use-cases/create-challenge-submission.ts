import { Submission } from "../../domain/entities/submission";
import { IChallengeRepository } from "../repositories/challengeRepository";
import { IStudentRepository } from "../repositories/studentRepository";
import { ICreateChallengeSubmission } from "./interfaces/create-challenge-submission-interface";

export type CreateChallengeSubmissionRequest = {

    studentId: string;
    challengeId: string;

}

export class CreateChallengeSubmission implements ICreateChallengeSubmission {

    constructor(
        private readonly studentRepository: IStudentRepository,
        private readonly challengeRepository: IChallengeRepository
    ) {}
    
    async execute({challengeId,studentId}: CreateChallengeSubmissionRequest): Promise<Submission | null> {

        const student = this.studentRepository

        if (!student) {
            throw new Error("Student not found");
        }

        const challenge = this.challengeRepository.findById(challengeId);

        if (!challenge) {
            throw new Error("Challenge not found");
        }

        const submission = Submission.create({challengeId,studentId});

        return submission;    

    }

}