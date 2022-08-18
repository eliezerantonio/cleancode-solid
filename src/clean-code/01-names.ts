(() => {

    // Ejemplo
    // Archivos a evaluar - files to evaluate
    const filesToEvaluate = [
        { id: 1, flagged: false },
        { id: 2, flagged: false },
        { id: 3, flagged: true },
        { id: 4, flagged: false },
        { id: 5, flagged: false },
        { id: 7, flagged: true },
    ]; 
    
    // Archivos marcados para borrar - files to delete
    const filesToDelete = filesToEvaluate.map( file => file.flagged );

    //mal
    class AbstractUser { };
    class UserMixin { };
    class UserImplementation { };
    interface IUser { };

    // Mejor
    class User { };
    interface User { };


    // Todo: Tarea
        
    // día de hoy - today
    const today = new Date();
    
    // días transcurridos - elapsed time in days
    const elapsedTimeInDays: number = 23;
    
    // número de archivos en un directorio - number of files in directory
    const numberOfFilesInDirectory = 33;
    
    // primer nombre - first name
    const name = 'Fernando';
    
    // primer apellido - last name
    const lastname = 'Herrera';

    // días desde la última modificación - days since modification
    const daySinceLastModification = 12;
    
    // cantidad máxima de clases por estudiante - max classes per student
    const maxClassPerStudent = 6;


})();

