export abstract class BaseService<T>{
    abstract getAll():Promise<T[]>;
    abstract getbyId(id:number):Promise<T | null>;
    abstract deletebyId(id:number):Promise<boolean>
}