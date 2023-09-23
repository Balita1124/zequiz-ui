import { Challenge } from '../challenge/challenge.model';
import { CategoryInterface } from './category.interface';

export class Category implements CategoryInterface {
  id?: string;
  code?: string;
  label?: string;
  description?: string;
  website?: string;
  challenges?: any;
  constructor(options?: CategoryInterface) {
    if (options) {
      this.id = options?.id;
      this.code = options?.code;
      this.label = options?.label;
      this.description = options?.description;
      this.website = options?.website;
    }
  }
  setId(id: string) {
    this.id = id;
    return this;
  }
  setCode(code: string) {
    this.code = code;
    return this;
  }
  setLabel(label: string) {
    this.label = label;
    return this;
  }
  setDescription(description: string) {
    this.description = description;
    return this;
  }
  setWebsite(website: string) {
    this.website = website;
    return this;
  }
}
