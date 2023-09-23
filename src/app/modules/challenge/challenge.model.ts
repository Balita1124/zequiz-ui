import { ChallengeInterface } from './challenge.interface';

export class Challenge implements ChallengeInterface {
  id?: string;
  question?: string;
  answer?: string;
  categoryId?: any;
  level?: string;
  constructor(options?: ChallengeInterface) {
    if (options) {
      this.id = options?.id;
      this.question = options?.question;
      this.answer = options?.answer;
      this.categoryId = options?.categoryId;
      this.level = options?.level;
    }
  }
  setId(id: string) {
    this.id = id;
    return this;
  }
  setQuestion(question: string) {
    this.question = question;
    return this;
  }
  setAnswer(answer: string) {
    this.answer = answer;
    return this;
  }
  setCategoryId(categoryId: any) {
    this.categoryId = categoryId;
    return this;
  }
  setLevel(level: string) {
    this.level = level;
    return this;
  }
}
