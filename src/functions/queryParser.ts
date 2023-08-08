export const queryParser = (obj: object) => {
    const empty: {
      find: object
      service: object
    } = {
      find: {},
      service: {}
    }
    Object.entries(obj).forEach( elem => {
      let val = elem[1]
      console.log(val);
      if(Array.isArray(val)){
        val = val.map(elem => {
          if(isNaN(elem)){
            if(elem === 'true') return true
            if(elem === 'false') return false
          }
          else{
              return +elem
          }
          return elem
        })
      }
      if(isNaN(val)){
          if(val === 'true') val = true
          if(val === 'false') val = false
      }
      else{
          val = +val
      }
      if(elem[0].slice(0,1) === '_'){
        const key = elem[0].split('_')[1];
        const splitObj = key.split('.') 
        console.log('splitObj',splitObj );
        
        if(splitObj.length === 1){
          console.log(1);
          
          empty.service[key] =val
        }
        if(splitObj.length === 2){
          console.log(11);
          
          const transit = {[splitObj[1]]: val}
          empty.service[splitObj[0]] = {...empty.service[splitObj[0]], ...transit}
        }
        if(splitObj.length === 3){
          console.log(11);
          
          const transit = {[splitObj[2]]: val}
          const transit2 = {[splitObj[1]]:transit}
          empty.service[splitObj[0]] = {...empty.service[splitObj[0]], ...transit2}
        }
      }
      else{
        const splitObj = elem[0].split('.') 
        if(splitObj.length === 1){
          empty.find[splitObj[0]] =val
        }
        if(splitObj.length === 2){
          const transit = {[splitObj[1]]: val}
          empty.find[splitObj[0]] = {...empty.find[splitObj[0]], ...transit}
        }
      }
    })
    return empty
  }