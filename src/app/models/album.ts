export class Album {
    private _id: number;
    private _userId: number;
    private _title: string;

    constructor(id: number, userId: number, title: string) {
        this._id = id;
        this._userId = userId;
        this._title = title;
    }

    get id(): number {
        return this._id;
    }

    set id(id: number) {
        this._id = id;
    }

    get userId(): number {
        return this._userId;
    }

    set userId(userId: number) {
        console.log(userId);
        this._userId = userId;
    }

    get title(): string {
        return this._title;
    }
    
    set title(title: string) {
        this._title = title;
    }
}