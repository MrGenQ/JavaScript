import data from "./data"

const masData = []
        for(let theme of data){
            for(let meta in theme){
                for(let book of theme[meta]){
                    
                        for(let info in book) {
                            masData.push(info + ": " + book[info])
                        }
                }
            }
        
        }
export default masData