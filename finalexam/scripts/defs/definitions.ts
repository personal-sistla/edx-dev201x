module edx.dev201x.defs {

    export class Artist {
        public styles: Array<string>;
        public work: Array<Art>;
        public dateOfBirth: Date;
        public dateOfDeath: Date;
        public place: string;
        public url: string;

        constructor(public name: string) {
            this.styles = new Array<string>();
            this.work = new Array<Art>();
        }

        setPersonalInfo(dob: Date,
            dod: Date,
            url: string,
            place: string) {
            this.dateOfBirth = dob;
            this.dateOfDeath = dod;
            this.place = place;
            this.url = url;
        }

        addWork(art: Art) {
            this.work.push(art);
        }
    }

    export class Art {
        constructor(public title: string,
            public artist: Artist,
            public style: string,
            public date: Date,
            public description?: string) {

        }
    }
}