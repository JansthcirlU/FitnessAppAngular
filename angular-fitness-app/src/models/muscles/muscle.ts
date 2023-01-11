export interface IMuscle {
    guid: string,
    name: string,
    description: string
}

// Pretend this comes from read-only API
export class Muscle implements IMuscle {
    guid: string;
    name: string;
    description: string;

    constructor(guid: string, name: string, description: string) {
        this.guid = guid;
        this.name = name;
        this.description = description;
    }
}