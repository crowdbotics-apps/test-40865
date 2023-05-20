import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_1526_34605}>
        <View style={styles.View_1526_34606} />
        <View style={styles.View_1526_34607}>
          <View style={styles.View_1526_34608} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/92615d49-9bc0-4a40-b18a-6b43e3487612"
            }}
            style={styles.ImageBackground_1526_34609}
          />
        </View>
      </View>
      <View style={styles.View_1104_29143}>
        <View style={styles.View_1104_29144}>
          <Text style={styles.Text_1104_29144}>Let’s verify your account.</Text>
        </View>
        <View style={styles.View_1104_29145}>
          <Text style={styles.Text_1104_29145}>
            We’ll send a 6-digit code to your number via text message: (***)
            ***–5555
          </Text>
        </View>
      </View>
      <View style={styles.View_1104_29146}>
        <TouchableOpacity
          style={styles.TouchableOpacity_1104_29147}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("1104_29152"))
          }
        >
          <View style={styles.View_I1104_29147_444_14648}>
            <Text style={styles.Text_I1104_29147_444_14648}>Text me</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.View_1104_29148}>
          <View style={styles.View_1104_29149}>
            <Text style={styles.Text_1104_29149}>Verify another way</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1104_29150}>
        <View style={styles.View_I1104_29150_362_15638}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/004aae67-7e27-4be0-92f7-dfd4a94880a8"
            }}
            style={styles.ImageBackground_I1104_29150_362_15639}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a8c42455-98a2-4816-bb33-c3ce119115ec"
            }}
            style={styles.ImageBackground_I1104_29150_362_15643}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b36ff67b-873f-4150-9ec3-d4a6115982ac"
            }}
            style={styles.ImageBackground_I1104_29150_362_15647}
          />
        </View>
        <View style={styles.View_I1104_29150_362_15654}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/905c2380-9382-49ac-9c5a-77475bc0866b"
            }}
            style={styles.ImageBackground_I1104_29150_362_15655}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("115%") },
  View_1526_34605: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("115%"),
    minHeight: hp("115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1526_34606: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1526_34607: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("60%"),
    minHeight: hp("60%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("56%")
  },
  View_1526_34608: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("60%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_1526_34609: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("60%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_1104_29143: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("17%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1104_29144: {
    width: wp("82%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_1104_29144: {
    color: "rgba(41, 41, 41, 1)",
    fontSize: 18,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23,
    textTransform: "none"
  },
  View_1104_29145: {
    width: wp("88%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_1104_29145: {
    color: "rgba(92, 92, 92, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1104_29146: {
    width: wp("100%"),
    height: hp("23%"),
    top: hp("92%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  TouchableOpacity_1104_29147: {
    width: wp("88%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("4%"),
    backgroundColor: "rgba(30, 93, 245, 1)"
  },
  View_I1104_29147_444_14648: {
    flexGrow: 1,
    width: wp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I1104_29147_444_14648: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1104_29148: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("16%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1104_29149: {
    width: wp("32%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    justifyContent: "flex-start"
  },
  Text_1104_29149: {
    color: "rgba(30, 93, 245, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1104_29150: {
    width: wp("100%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I1104_29150_362_15638: {
    flexGrow: 1,
    width: wp("17%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    top: hp("2%")
  },
  ImageBackground_I1104_29150_362_15639: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("0%")
  },
  ImageBackground_I1104_29150_362_15643: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%")
  },
  ImageBackground_I1104_29150_362_15647: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I1104_29150_362_15654: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%")
  },
  ImageBackground_I1104_29150_362_15655: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
