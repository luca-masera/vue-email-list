const {createApp} = Vue

createApp({
    
    data(){
        
        return{
            emails: []
        }

    },
    
    methods : {
        
        getEmails(){
        
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((resp)=>{
            console.log(resp.data.response)
            this.email = resp.data.response;                            
            })
        }
    },
    
    created(){
        this.getEmails()
    }
   
}).mount('#app')