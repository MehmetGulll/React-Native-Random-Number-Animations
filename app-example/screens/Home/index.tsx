import React, { useRef, useState } from "react";
import { Button, ScrollView, View, Text, StyleSheet, TouchableOpacity } from "react-native";


export default function HomeScreen() {
  const [selectedLine, setSelectedLine] = useState(0);
  const scrollRef = useRef<ScrollView>(null);

  const handlePress = () => {
    const randomLine = Math.floor(Math.random() * 100);
    setSelectedLine(randomLine);
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
          <View
            key={index}
            style={[
              styles.line,
              { backgroundColor: index === selectedLine ? "red" : "white" },
            ]}
          />
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
    padding: 50,
  },
  selectedLineText: {
    color: "white",
    fontSize: 50,
    marginTop: 15,
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
    padding:15,
    borderRadius:15
  },
  buttonText:{
    fontSize:24,
    paddingHorizontal:25
  }
});