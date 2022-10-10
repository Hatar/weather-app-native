import { useState } from 'react';
import { SafeAreaView,StatusBar, StyleSheet,Platform } from 'react-native';
import Form from './components/Form/Form';
import Weather from './components/Weather/Weather';

export default function App() {
  const [data,setData] = useState(null)
  const [title,setTitle]= useState("")
  return (
    <SafeAreaView style={styles.container}>
       <Form setData={setData} setTitle={setTitle} />
      { data &&  Object.entries(data).length !==0  && (<Weather data={data} title={title}/>)}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ?  StatusBar.currentHeight : 0
  },
});
