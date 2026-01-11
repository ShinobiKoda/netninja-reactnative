import { globalStyles } from "@/styles/global";
import { RouteProp, useRoute } from "@react-navigation/native";
import { Text, View } from "react-native";
import Card from "./Card";

type ReviewDetailsParams = {
  title: string;
  body: string;
  rating: number;
};

const ReviewDetails = () => {
  const route =
    useRoute<RouteProp<Record<string, ReviewDetailsParams>, string>>();
  const { title, body, rating } = route.params;

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.titleText}>{title}</Text>
        <Text style={globalStyles.paragraph}>{body}</Text>
        <Text style={globalStyles.titleText}>Rating: {rating}</Text>
      </Card>
    </View>
  );
};

export default ReviewDetails;
