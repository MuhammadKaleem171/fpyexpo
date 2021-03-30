import React, { useState } from 'react'

import {
    View,Text,TouchableOpacity,Button
} from 'react-native'




const ExecuteQuery=(props)=>{
    
const[result,setResult]=useState([])

console.log(props)

const mData=()=>{
    const databaseName=props.route.params.database
    const query=props.route.params.Query
    console.log('eeeeeeeeeeeeeeeeeee',databaseName)
    fetch(`http://192.168.10.4/backend/api/values/ExcQuery?query=${query}&Table=${databaseName}`)
    .then(res=>res.json())
    .then((data)=>{
      console.log(data)
        setResult(data[0])
        
        
        result.map(m=>{
          let va=Object.values(m)
          for(let v of va){
            console.log(`valuesssss${v}`)
          }
          for (const [key, value] of Object.entries(m)) {
            console.log(`${key}: ${value}`);
          }
        })
        
    });       
    
    console.log(result)
   }

const Taheader=()=>{
    if(result===undefined){
      console.log('ffffffffff')
    }
    if(result.length>=1){
    let d=Object.keys(result[0])
    const d1 =d.filter((item,index)=>d.indexOf(item)==index)
   return(
 <View style={{borderWidth:1,flexDirection:'row',marginTop:10}}>
   {
     d1.map((i,index)=>(
       <View  key={index} style={{flexDirection:'row',display:'flex',marginRight:10}}>
         <Text > {i}</Text>
       </View>
        
     )
       )}
 </View>
   )
   }
 }
    return(
        <View>
  <Button onPress={mData} title="Execute Query"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"/> 
          
           { Taheader()}
          { 
          result.length>1 ?
          
            result.map((m,i)=>{
              
                return(
                  <View key={i} style={{flexDirection:'row'}} >{
                  Object.keys(m).map((i,index)=>(
                  <View  key={index} style={{flexDirection:'row',display:'flex',width:90}}>
                    <Text >  {m[i]}</Text>
                  </View>
                   
                )
                  )}
                  </View>
                  )
            }
              ):null
        }
   </View>
    )

}
export default ExecuteQuery;