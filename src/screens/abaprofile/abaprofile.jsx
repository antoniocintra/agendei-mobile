const {View,Text} = require ("react-native");
import {styles} from "./abaprofile.style"

function AbaProfile() {
    return <View style={styles.container}>
        <View style={styles.item}>
        <Text style={styles.title}>Nome</Text>
        <Text style={styles.text}>Antônio Eduardo </Text>

           
        </View>

        <View style={styles.item}>
        <Text style={styles.title}>Email</Text>
        <Text style={styles.text}>antonio@gmail.com</Text>

        </View>
    </View>
}

export default AbaProfile;