const {createApp} = Vue

createApp({
    
    data(){
        
        return{
            emails: []
        }

    },
    
    methods : {
        
        getEmails(){
            
            for(let i = 0; i < 10; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((res)=>{
                //console.log(res)   
                console.log(res.data.response)                
                this.emails.push(res.data.response)
                
                                
                })
            }
        }
    },
    
    created(){
        this.getEmails()
        
    }
   
}).mount('#app')