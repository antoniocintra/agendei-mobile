import { View, Text, FlatList, Image } from "react-native";
import { styles } from "./services.style.js";
import { doctors_services } from "../../constants/data.js";
import icon from "../../constants/icon.js";
import Service from "../../components/service/service.jsx";

function Services() {
  return  <View style={styles.container}>
           <View style={styles.banner}>
            <Image source={icon.female} />
            <Text style={styles.name}>Antônio</Text>
            <Text style={styles.specialty}>Dev</Text>
          </View>

      <FlatList
        data={doctors_services}
        keyExtractor={(serv) => serv.id_service}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return <Service description={item.description} 
                                    price={item.price} />;
        }}
      />
    </View>
  
};

export default Services;
