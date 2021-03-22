import React,{useState,useEffect}from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    TouchableOpacity,
    KeyboardAvoidingView,
    ScrollView,
    Switch,CheckBox
  } from "react-native";
  
  import {Picker} from '@react-native-picker/picker'

  const QueryBuilder=()=>{

    const[Database,setDatabase]=useState([])
    const[SelectedDatabase,setSelectedDatabase]=useState()
    const [TableName,setTableName]=useState([])
    const[SelectedTable,setSelecteTable]=useState()
    const [ColumnName,setCoulumnName]=useState([])
    const [QueryType,setQueryType]=useState()
    const [QColum,setQColum]=useState('')
    const [isEnabled, setIsEnabled] = useState(false);

    const[WhereColumn,setWhereColumn]=useState()

    useEffect(() => {
      fetch('http://localhost/backend/api/values/GetDatabase')
      .then(res=>res.json())
      .then((data)=>{
          setDatabase(data)
          console.log(data);
      });            
    }, []);

    
   const GetTabeName=(item)=>{
     const database=item.itemValue
    fetch(`http://localhost/backend/api/values/gettable?TableName=${database}`)
    .then(res=>res.json())
    .then((data)=>{
        console.log(data)
        setTableName(data)   
       
    });
    }
   
const GetColumnNames=(da)=>{
console.log('coulm name',da)
      fetch('http://localhost:62662/api/values/GetTableColumn?table=Customer')
.then(res=>res.json())
.then((data)=>{
    console.log(data)
    setCoulumnName(data)
});
    }

 const co=()=>{
  let a='';
  ColumnName.forEach(element => {
      if(element.isChecked==true){
        
          console.log(element.id,element.column)
           a=a+element.column+','
        
      }
      
  });
  console.log(a)
setQColum(a);
 }
 const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return(
        <View style={{flex:1,backgroundColor:'#fff'}}>
          <ScrollView>
            <View style={styles.DatabaseView}>
            <Text style={styles.heading1}>Select the Database</Text>
          <Picker style={styles.dataBasePiker}
  selectedValue={SelectedDatabase}
  onValueChange={((itemValue, itemIndex)=>{
    setSelectedDatabase(itemValue)
    GetTabeName({itemValue})
  }
  )
  }>
    {
      Database.map(data=>{
        return(  <Picker.Item key={data} label={data} value={data} />)
      })
    }

 
</Picker>
</View>

{/*  Select table View    */}
<View style={styles.TableView} >

<Text style={styles.heading1}>Select Table Name </Text>
<Picker style={styles.dataBasePiker}

  selectedValue={SelectedTable}
  onValueChange={((itemValue, itemIndex)=>{
    setSelecteTable(itemValue)
    GetColumnNames(itemValue)
  }
  )
  }>
    {
      TableName.map(data=>{
        return(  <Picker.Item key={data} label={data} value={data} />)
      })
    }

 
</Picker>
</View>

<View > 
  {
    ColumnName.map(data=>{
      return(
        <View key={data.id} style={styles.ColumView}>
          <CheckBox 
          value={data.isChecked}
        onValueChange={e=>{
          setCoulumnName(ColumnName.map(d=>{
            if(d.id==data.id){
              d.isChecked=!data.isChecked
            }
            return d;
          }))

        }}
          />
          <Text>{data.column}</Text>
          </View>
      )
    })
  }
  </View>
  <View>
  <View style={styles.QueryView}>
    <Text style={styles.heading1}> Select Query type  </Text>

    <Picker selectedValue={QueryType} 
    style={styles.dataBasePiker}
    onValueChange={(item,index)=>{
      setQueryType(item)
      console.log(index)
    }}>
      <Picker.Item label="Select" value="Select" style={{textAlign:'center'}}/>
      <Picker.Item label="Insert" value="insert"/>
    </Picker>
    <TextInput 
    value={QColum}
    placeholder="Selected Column "
    style={styles.ColumnTextView}
    />
    <View style={{flex:1,flexDirection:'row',marginTop:10}}>
    <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <Text style={{fontSize:16,marginLeft:15}}> Where Condion</Text>
      </View>
      { 
       isEnabled==true ?<View style={{marginTop:10 }}>
<Text >
  Select Column For Condition
</Text>
<Picker style={styles.dataBasePiker}
  selectedValue={WhereColumn}
  onValueChange={((itemValue, itemIndex)=>{
    setWhereColumn(itemValue)
  }
  )
  }>
    { 
      ColumnName.map((item,id)=>{
        return(  <Picker.Item  key={item.id} label={item.column} value={item.color} />)
      })
    }
</Picker>

       </View>
          :
          null
      }
  </View>
</View>
<Button onPress={co} title="Learn More"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"/> 
          </ScrollView>
   
        </View>
    )
  }

  const styles=StyleSheet.create({
    DatabaseView:{
flex:1,
justifyContent:'center',
width:'90%',
marginTop:10,
marginBottom:5
    },
    heading1:{
fontSize:18,
textAlign:'center',
marginTop:10,
color:'#fb5b5a',
fontWeight:'600'
    },
    dataBasePiker:{
      height:30,
      marginTop:10,
      fontSize:16,
      marginLeft:15,
      backgroundColor:'#fff'   
    },
    TableView:{
      flex:1,
justifyContent:'center',
width:'90%',
    },
    ColumView:{
      flex: 1,
    flexDirection: 'row',
    margin: 5,
    padding: 5,
    display:'flex',
    width:'50%',
    alignSelf:'center',
    borderWidth:0.1,
    backgroundColor:'#fff'
    },
    QueryView:{
     
      justifyContent:'center',
      width:'90%',
    },
    ColumnTextView:{
      height:30,
      backgroundColor:'#fff',
      marginTop:10,
      width:'95%',
      marginLeft:10,
      borderBottomWidth:0.3
    }
  })
  export default QueryBuilder;