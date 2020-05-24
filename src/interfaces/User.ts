import { Repository } from './Repository';

export interface User {
  id: number,
  login: string,
  repositories: Array<Repository> | null
}
