export class Post {
    private _userId: number;
    public get userId(): number {
        return this._userId;
    }
    public set userId(value: number) {
        this._userId = value;
    }
    private _id: number;
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    private _title: string;
    public get title(): string {
        return this._title;
    }
    public set title(value: string) {
        this._title = value;
    }
    private _body: string;
    public get body(): string {
        return this._body;
    }
    public set body(value: string) {
        this._body = value;
    }
}
