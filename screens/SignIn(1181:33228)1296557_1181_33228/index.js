import React from "react";
import { View, ImageBackground, TouchableOpacity, Text, StyleSheet, ScrollView } from "react-native";
import { connect } from "react-redux";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { getNavigationScreen } from "@screens";
export class Blank extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render = () => <ScrollView contentContainerStyle={{
    flexGrow: 1
  }} style={styles.ScrollView_1}>
      <View style={styles.View_2} />
      <View style={styles.View_1526_34575}>
        <View style={styles.View_1526_34576} />
        <View style={styles.View_1526_34577}>
          <View style={styles.View_1526_34578} />
          <ImageBackground source={{
          uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/000d4732-c5b9-4032-bd98-b2701f6a6437"
        }} style={styles.ImageBackground_1526_34579} />
        </View>
      </View>
      <View style={styles.View_1181_33231}>
        <View style={styles.View_I1181_33231_444_14530} />
        <View style={styles.View_I1181_33231_444_14531}>
          <Text style={styles.Text_I1181_33231_444_14531}>Email</Text>
        </View>
      </View>
      <View style={styles.View_1181_33232}>
        <View style={styles.View_1181_33233}>
          <View style={styles.View_I1181_33233_444_14530} />
          <View style={styles.View_I1181_33233_444_14531}>
            <Text style={styles.Text_I1181_33233_444_14531}>Password</Text>
          </View>
        </View>
        <View style={styles.View_1181_33234}>
          <Text style={styles.Text_1181_33234}>Show</Text>
        </View>
      </View>
      <View style={styles.View_1181_33235}>
        <Text style={styles.Text_1181_33235}>
          Sign in. Save more for your future.
        </Text>
      </View>
      <View style={styles.View_1181_33236}>
        <View style={styles.View_1181_33237}>
          <View style={styles.View_I1181_33237_444_14648}>
            <Text style={styles.Text_I1181_33237_444_14648}>Sign In</Text>
          </View>
        </View>
        <View style={styles.View_1181_33238}>
          <View style={styles.View_1181_33239}>
            <Text style={styles.Text_1181_33239}>Create an account</Text>
          </View>
          <View style={styles.View_1181_33240}>
            <Text style={styles.Text_1181_33240}>|</Text>
          </View>
          <View style={styles.View_1181_33241}>
            <Text style={styles.Text_1181_33241}>
              I already have an account
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1181_33242}>
        <TouchableOpacity style={styles.TouchableOpacity_1181_33243} onPress={() => this.props.navigation.navigate(getNavigationScreen("1104_29140"))}>
          <View style={styles.View_I1181_33243_444_14648}>
            <Text style={styles.Text_I1181_33243_444_14648}>Sign In</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.View_1181_33244}>
          <View style={styles.View_1181_33245}>
            <Text style={styles.Text_1181_33245}>Forgot Password</Text>
          </View>
          <ImageBackground source={{
          uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e930de3f-a388-432d-8daa-ac8bf5cd5e22"
        }} style={styles.ImageBackground_1181_33246} />
          <TouchableOpacity style={styles.TouchableOpacity_1181_33247} onPress={() => this.props.navigation.navigate(getNavigationScreen("1100_27773"))}>
            <Text style={styles.Text_1181_33247}>Create an account</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.View_1181_33248}>
        <View style={styles.View_I1181_33248_362_15638}>
          <ImageBackground source={{
          uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a4c6221e-e189-4a29-82d5-a0a9aa07cd19"
        }} style={styles.ImageBackground_I1181_33248_362_15639} />
          <ImageBackground source={{
          uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bbf51fd7-a257-4b01-ba9a-eac12be59614"
        }} style={styles.ImageBackground_I1181_33248_362_15643} />
          <ImageBackground source={{
          uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1a05c764-2f40-4baa-bf5d-a25701708313"
        }} style={styles.ImageBackground_I1181_33248_362_15647} />
        </View>
        <View style={styles.View_I1181_33248_362_15654}>
          <ImageBackground source={{
          uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3c55370f-3f2a-40dc-9dc5-3c46297584fa"
        }} style={styles.ImageBackground_I1181_33248_362_15655} />
        </View>
      </View>
    </ScrollView>;
}
const styles = StyleSheet.create({
  ScrollView_1: {
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_2: {
    height: hp("115%")
  },
  View_1526_34575: {
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
  View_1526_34576: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1526_34577: {
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
  View_1526_34578: {
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
  ImageBackground_1526_34579: {
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
  View_1181_33231: {
    width: wp("84%"),
    height: hp("11%"),
    top: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1181_33231_444_14530: {
    flexGrow: 1,
    width: wp("84%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(233, 233, 234, 1)",
    borderWidth: 1
  },
  View_I1181_33231_444_14531: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1181_33231_444_14531: {
    color: "rgba(41, 41, 41, 1)",
    fontSize: 10,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1181_33232: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("42%")
  },
  View_1181_33233: {
    width: wp("84%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1181_33233_444_14530: {
    flexGrow: 1,
    width: wp("84%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(233, 233, 234, 1)",
    borderWidth: 1
  },
  View_I1181_33233_444_14531: {
    flexGrow: 1,
    width: wp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1181_33233_444_14531: {
    color: "rgba(41, 41, 41, 1)",
    fontSize: 10,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1181_33234: {
    width: wp("8%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%"),
    justifyContent: "flex-start"
  },
  Text_1181_33234: {
    color: "rgba(92, 92, 92, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1181_33235: {
    width: wp("88%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    justifyContent: "flex-start"
  },
  Text_1181_33235: {
    color: "rgba(41, 41, 41, 1)",
    fontSize: 18,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23,
    textTransform: "none"
  },
  View_1181_33236: {
    width: wp("100%"),
    height: hp("22%"),
    top: hp("93%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1181_33237: {
    width: wp("88%"),
    height: hp("8%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    backgroundColor: "rgba(30, 93, 245, 1)"
  },
  View_I1181_33237_444_14648: {
    flexGrow: 1,
    width: wp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I1181_33237_444_14648: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1181_33238: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("16%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1181_33239: {
    width: wp("31%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_1181_33239: {
    color: "rgba(30, 93, 245, 1)",
    fontSize: 11,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1181_33240: {
    width: wp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    justifyContent: "flex-start"
  },
  Text_1181_33240: {
    color: "rgba(30, 93, 245, 1)",
    fontSize: 11,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1181_33241: {
    width: wp("43%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    justifyContent: "flex-start"
  },
  Text_1181_33241: {
    color: "rgba(30, 93, 245, 1)",
    fontSize: 11,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1181_33242: {
    width: wp("100%"),
    height: hp("23%"),
    top: hp("92%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  TouchableOpacity_1181_33243: {
    width: wp("88%"),
    height: hp("8%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    backgroundColor: "rgba(30, 93, 245, 1)"
  },
  View_I1181_33243_444_14648: {
    flexGrow: 1,
    width: wp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I1181_33243_444_14648: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1181_33244: {
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
  View_1181_33245: {
    width: wp("28%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    justifyContent: "flex-start"
  },
  Text_1181_33245: {
    color: "rgba(30, 93, 245, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1181_33246: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%")
  },
  TouchableOpacity_1181_33247: {
    width: wp("30%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    justifyContent: "flex-start"
  },
  Text_1181_33247: {
    color: "rgba(30, 93, 245, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1181_33248: {
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
  View_I1181_33248_362_15638: {
    flexGrow: 1,
    width: wp("17%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    top: hp("2%")
  },
  ImageBackground_I1181_33248_362_15639: {
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
  ImageBackground_I1181_33248_362_15643: {
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
  ImageBackground_I1181_33248_362_15647: {
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
  View_I1181_33248_362_15654: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%")
  },
  ImageBackground_I1181_33248_362_15655: {
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
});

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Blank);