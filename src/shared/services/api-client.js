// Back End Calls
// CRUD 
import axios from 'axios';
export const apiClient = {
    async read(){
        try{
        const response = await  axios.get(process.env.REACT_APP_NOTES_URL);
        return response.data.notes; //[{},{},{}]
        }
        catch(err){
            throw err;
        }
    },
    insert(){
        // insert
    },
    update(){

    },
    remove(){

    }
}