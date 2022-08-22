// import axios from "axios";


export class HttpClient {

    
//   async get(url: string) {
//       const { data, status } = await axios.get(url);
      
//       console.log({ status });

//       return { data, status };
//   }
    
    async get(url: string) {
        const response = await fetch(url);
        const data = await response.json();


        return { data, status:response.status};
   }
}
