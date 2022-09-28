import React from "react";

const Buttons = () => {
    const [count, setCount] = useState(0);
  
  
    const links = () => {
      return buttonArray.map((items) => {
        return (
          <View key={buttonArray.id}>
            <TouchableOpacity
              onPress={() => setCount(count + 1)}
              style={styles.button}
            >
              <Text style={styles.buttonTitle}>{items.name}: {count}</Text>
            </TouchableOpacity>
          </View>
        );
      });
    };
  return<View>{links()}</View>
};

  export default Buttons;