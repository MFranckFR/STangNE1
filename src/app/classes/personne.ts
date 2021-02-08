import IPersonne from '../interfaces/personne';

export class Personne implements IPersonne {
    static _nbInstances = 0;

    constructor(
        private _num: number = 0,
        private _first_name: string = '',
        private _last_name: string = ''){
            Personne._nbInstances += 1;
    }

    get num(){
        return this._num;
    }
    set num(_num: number){
        this._num = _num;
    }

    get firstName(){
        return this._first_name;
    }
    set firstName(first_name: string){
        this._first_name = first_name;
    }

    get lastName(){
        return this._last_name;
    }
    set lastName(last_name: string){
        this._last_name = last_name;
    }
    get name(){
        return this._first_name + ' ' + this._last_name;
    }

    toString(): string {
        return `[nbInstance:${Personne._nbInstances}] num:${this._num}: ${this.name}`;
    }

}
