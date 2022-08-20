(() => {

    function getMovieById( id: string ) {
        console.log({ id });
    }

    function getMovieCastById( id: string ) {
        console.log({ id });
    }

    function getActorBioById( id: string ) {
        console.log({ id });
    }
    

    interface Movie{
        cast: string[];
        description: string;
        rating: number;   
        title: string;

    }
    function createMovie({title,  description, rating ,cast }:Movie) {
        console.log({ title, description, rating, cast });
    }


    function checkFullName(fullName: string) {
        console.log({ fullName });
        
        return true;  

    }
    function createActor( fullName: string, birthdate: Date ): boolean {
        
        
        if (checkFullName(fullName)) return false;
        console.log('Crear actor');
        return true;        

    }

    


})();

