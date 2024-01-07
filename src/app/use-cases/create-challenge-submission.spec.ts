import { describe, expect, it } from "vitest"
import { CreateChallengeSubmission } from "./create-challenge-submission";
import { InMemoryChallengeRepository } from "../../test/in-memory-challenge-repository";
import { InMemoryStudentRepository } from "../../test/in-memory-student-repository";
import { Challenge } from "../../domain/entities/challenge";
import { Student } from "../../domain/entities/student";


describe("create a challenge submission", () => {

    it("should create a challenge submission", async () => {

        const inMemoryStudentRepository = new InMemoryStudentRepository();
        const inMemoryChallengeRepository = new InMemoryChallengeRepository();

        const sut = new CreateChallengeSubmission(
            inMemoryStudentRepository,
            inMemoryChallengeRepository
        );

        const student = Student.create({
            name:"John Doe",
            email:"johndoe@repository.com",
        });

        const challenge = Challenge.create({
            title:"backend web service",
            instrutionsUrl:"www.backend4lif3.com",
        });

        console.log("challenge test id:",challenge.id);

        inMemoryStudentRepository.create(student);
        inMemoryChallengeRepository.create(challenge);

        const response = await sut.execute({
            challengeId: challenge.id,
            studentId: student.id,
        });

        console.table(response);

        expect(response).toBeTruthy();

    });

})