(() => {

    //  aplicando el principio de responsabilidad única

    type Gender = 'M' | 'F';

    interface PersonProps{
        name: string;
        gender: Gender;
        birthdate: Date;
    }

    class Person {

        public birthdate: Date;
        public gender: Gender;
        public name: string;

        constructor({ name, gender, birthdate }: PersonProps) {
            this.birthdate = birthdate;
            this.gender = gender;
            this.name = name;

        }
    }

    interface UserProps{
        birthdate: Date;
        email: string;
        gender: Gender;
        name: string;
        role: string;
    
}
    class User extends Person {
        
        public lastAccess: Date;
        public email: string;
        public role: string;

        constructor(
            {birthdate,
            email ,
            gender,
            name ,
            role ,}:UserProps
        ) {
            super( {name, gender, birthdate });
            this.lastAccess = new Date();
            this.email = email;
            this.role = role;
        }

        checkCredentials() {
            return true;
        }
    }



    interface UserSettingsProps{
        birthdate: Date;
        email: string;
        gender: Gender;
        lastOpenFolder: string;
        name: string;
        role: string;
        workingDirectory: string;
    }
    class UserSettings extends User {

        public workingDirectory: string
        public lastOpenFolder: string;

        constructor(
       { birthdate,
        email,
        gender,
        lastOpenFolder,
        name,
        role,
        workingDirectory,}:UserSettingsProps
        ) {
            super({ email, role, name, gender, birthdate });
            this.lastOpenFolder = lastOpenFolder;
            this.workingDirectory= workingDirectory;
        }
    }


    const userSettings = new UserSettings(
       { workingDirectory:'/usr/home',
        lastOpenFolder:'/home',
       email: 'fernando@google.com',
       role: 'Admin',
      name:  'Fernando',
      gender:  'M',
      birthdate:   new Date('1985-10-21')}
    );

    console.log({ userSettings });


})();