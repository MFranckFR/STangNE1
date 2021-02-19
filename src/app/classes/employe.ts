export class Employe {
    public _id!:string;
    private _age:number = 18;
    private _name!:string;
    private _surname!:string;
    private _address:Address = new Address();  // {'street':'', 'cp':'', 'city':''}

    construct(){
    }

    get id(){
        return this._id;
    }

    set id(id:string){
        this._id = id;
    }

    get name(){
        return this._name;
    }
    set name(first_name: string){
        this._name = first_name;
    }

    get surname(){
        return this._surname;
    }
    set surname(surname: string){
        this._surname = surname;
    }

    get age(){
        return this._age;
    }

    set age(age:number){
        this._age = age;
    }

    get address(){
        return this._address;
    }
    set address(address: any){
        this._address = address;
    }


    loadData(data:any){
        this.id = data.id;
        this.name = data.name;
        this.surname = data.surname;
        this.age = data.age;
        this.address = data.address;
    }


}

export class Address {
    public street:string = '';
    public cp:string = '';
    public city:string = '';
}