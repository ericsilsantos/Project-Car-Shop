export interface IModel<T> {
  create(obj: T): Promise<T>;
  read(): Promise<T[]>;
  readOne(stg: string): Promise<T | null>;
  update(stg: string, obj: T): Promise<T | null>;
  delete(stg: string): Promise<T | null>;
}

// export default IModel;