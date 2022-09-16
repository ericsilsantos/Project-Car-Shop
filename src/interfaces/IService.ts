export interface IService<T> {
  create(obj: unknown): Promise<T>;
  // read(): Promise<T[]>;
  // readOne(stg: string): Promise<T | null>;
  // update(stg: string, obj: unknown): Promise<T | null>;
  // delete(stg: string): Promise<T | null>;
}