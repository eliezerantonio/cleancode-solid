(() => {

    type Gender = 'M' | 'F';

    class Person{
       
        constructor(public name: string,public gender: Gender,public birthdate: Date) {
       
        }
}


    
    const newPerson = new Person('Eliezer','M',new Date('1997-08-9'));

    console.log(newPerson);
    

})()