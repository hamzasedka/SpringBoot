import { DeletedEntity } from '../policies';
import { Filter } from './filter';

export class DeletedFilter<T extends DeletedEntity> implements Filter<T> {
  readonly type = DeletedFilter.name;

  constructor(private readonly deleted?: boolean) {}

  filter(input: T[]): T[] {
    if (this.deleted === undefined || this.deleted === null) {
      return input;
    }
    return input.filter(model => model.deleted === this.deleted);
  }
}
