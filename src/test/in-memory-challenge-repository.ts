import { IChallengeRepository } from "../app/repositories/challengeRepository";
import { Challenge } from "../domain/entities/challenge";

export class InMemoryChallengeRepository implements IChallengeRepository {

    private readonly challenges: Challenge[] = [];

    async create(props: Challenge): Promise<void> {
        
        this.challenges.push(props);

    }

    async findById(id: string): Promise<Challenge | null> {
        
        const challenge = this.challenges.find(c => c.id === id);

        if (!challenge) {

           
            throw new Error("Challenge not found in RDMS");
        }

        return challenge;
    }

    
}