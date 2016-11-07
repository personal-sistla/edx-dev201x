module edx.dev201x.defs {

    export interface IResource {
        image: string;
        followup: string;
    }

    export class Artist {
        public styles: Array<string>;
        public work: Array<Art>;
        public dateOfBirth: Date;
        public dateOfDeath: Date;
        public place: string;
        public resource: IResource;
        public description: string;

        constructor(public name: string) {
            this.styles = new Array<string>();
            this.work = new Array<Art>();
        }

        setPersonalInfo(dob: Date,
            dod: Date,
            place: string,
            description?: string) {
            this.dateOfBirth = dob;
            this.dateOfDeath = dod;
            this.place = place;
        }

        addWork(art: Art) {
            this.work.push(art);
        }
    }

    export class Art {
        constructor(public title: string,
            public artist: Artist,
            public date: Date,
            public description?: string,
            public resource?: IResource) {
        }
    }
}