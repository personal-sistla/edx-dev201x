module edx.dev201x {
    var myApp = angular.module('dev201xApp', []);

    class PainterController {
        public static $inject: string[] = ['ArtistService'];
        public artists: edx.dev201x.defs.Artist[];
        public selectedArtist: edx.dev201x.defs.Artist;

        constructor(private artistService: edx.dev201x.services.IArtistService) {

            this.artistService.getArtists().then((artists: Array<edx.dev201x.defs.Artist>) => {
                this.artists = artists;
            });
        }

        selectPainter = (artist: edx.dev201x.defs.Artist) => {
            this.selectedArtist = artist;
        }

    }

    class ArtistService {
        public static $inject: string[] = ['$http'];

        constructor(private $http: angular.IHttpService) {
        }

        getArtists = (): angular.IPromise<Array<edx.dev201x.defs.Artist>> => {
            return this.$http.get('JSON/famousPainters.json').then((response: any) => {
                return response.data.famousPainters;
            }, (error: any) => {
                console.log(error);
            });
        };
    }


    myApp.service('ArtistService', ArtistService)
        .controller("PainterCtrl", PainterController);
}
