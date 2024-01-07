import { Challenge } from "../../domain/entities/challenge";

export interface IChallengeRepository {

     findById(id: string): Promise<Challenge | null>;
     create(props: Challenge): Promise<void>;

}