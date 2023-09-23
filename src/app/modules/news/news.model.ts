import { NewsInterface } from './news.interface';

export class News implements NewsInterface {
  id?: string;
  title?: string;
  description?: string;

  constructor(options?: NewsInterface) {
    if (options) {
      this.id = options?.id;
      this.title = options?.title;
      this.description = options?.description;
    }
  }

  setId(id: string): News {
    this.id = id;
    return this;
  }

  setTitle(title: string): News {
    this.title = title;
    return this;
  }

  setDescription(description: string): News {
    this.description = description;
    return this;
  }
}
