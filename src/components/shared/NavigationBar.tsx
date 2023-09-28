import { HStack, Icon, Text } from "@gluestack-ui/themed";
import { CommonActions, useNavigation } from "@react-navigation/native";
import { ArrowLeft } from 'lucide-react-native';
import { TouchableOpacity } from "react-native";

export type NavigationBarProps = {
  title?: string;
  onBack?: () => void;
}

export default function NavigationBar({ title, onBack }: NavigationBarProps) {
  const navigation = useNavigation()
  const onBackPressed = () => {
    onBack && onBack()

    if (navigation.canGoBack()) {
      navigation.goBack()
      return;
    }

    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          { name: 'Home' },
        ],
      })
    );
  }

  return (
    <HStack backgroundColor="$white" padding="$4" alignItems="center" justifyContent="space-between">
      <TouchableOpacity onPress={onBackPressed}>
        <Icon as={ArrowLeft} w="$6" h="$6" />
      </TouchableOpacity>
      <Text color="$black" bold>
        {title}
      </Text>
      <HStack minWidth="$6" />
    </HStack>
  )
}