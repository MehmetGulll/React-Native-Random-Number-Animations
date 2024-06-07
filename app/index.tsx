import React, { useRef, useState } from "react";
import { ScrollView, View, Text, StyleSheet, TouchableOpacity,Animated } from "react-native";


export default function HomeScreen() {
  const [selectedLine, setSelectedLine] = useState(0);
  const scrollRef = useRef<ScrollView>(null);
  const scrollX = useRef(new Animated.Value(0)).current;

  const handlePress = () => {
    const randomLine = Math.floor(Math.random() * 100);
    setSelectedLine(randomLine);
    Animated.timing(scrollX,{
      toValue : randomLine*10,
      duration:500,
      useNativeDriver:false,
    }).start()

    scrollRef.current?.scrollTo({
      x: randomLine * 10,
      y: 0,
      animated: true,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.selectedLineText}>{selectedLine}</Text>
      <ScrollView
        ref={scrollRef}
        horizontal
        contentContainerStyle={styles.linesContainer}
        showsHorizontalScrollIndicator={false}
        
      >
         {[...Array(100)].map((_, index) => (
          <View key={index} style={styles.lineContainer}>
            <Text style={styles.lineText}>{index}</Text>
            <View
              style={[
                styles.line,
                { backgroundColor: index === selectedLine ? "red" : "white" },
              ]}
            />
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity onPress={handlePress} style = {styles.buttonContainer}>
        <Text style = {styles.buttonText}>Generator</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "space-between",
  
  },
  selectedLineText: {
    color: "white",
    fontSize: 50,
    marginTop: 50,
  },
  linesContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  line: {
    height: 20,
    width: 2,
    marginHorizontal: 5,
  },
  buttonContainer:{
    backgroundColor:'#FFFFFF',
    padding:10,
    borderRadius:15,
    marginBottom:50
  },
  buttonText:{
    fontSize:24,
    paddingHorizontal:8
  },
  lineText:{
    color:'#FFFFFF',
    fontSize:8
  },
  lineContainer:{
    alignItems:'center',
    justifyContent:'center'
  }
});