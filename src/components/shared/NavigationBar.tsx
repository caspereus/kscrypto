import {
  HStack, Text, VStack, styled,
} from '@gluestack-ui/themed';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { ArrowLeft, Bookmark } from 'lucide-react-native';
import { TouchableOpacity } from 'react-native';
import Separator from './Separator';

export interface NavigationBarProps {
  title?: string;
  onBack?: () => void;
}

const BackIcon = styled(ArrowLeft, {
  height: '$5',
  width: '$5',
  color: '$black',
});

const BookmarkIcon = styled(Bookmark, {
  height: '$5',
  width: '$5',
  color: '$black',
});

export default function NavigationBar({ title, onBack }: NavigationBarProps) {
  const navigation = useNavigation();
  const onBackPressed = () => {
    if (onBack !== undefined) {
      onBack();
    }

    if (navigation.canGoBack()) {
      navigation.goBack();
      return;
    }

    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          { name: 'Home' },
        ],
      }),
    );
  };

  return (
    <VStack>
      <HStack
        backgroundColor="$white"
        alignItems="center"
        justifyContent="space-between"
        paddingHorizontal="$4"
        paddingVertical="$4"
      >
        <TouchableOpacity onPress={onBackPressed}>
          <BackIcon />
        </TouchableOpacity>
        <Text color="$black" bold>
          {title}
        </Text>
        <HStack minWidth="$6">
          <BookmarkIcon />
        </HStack>
      </HStack>
      <Separator />
    </VStack>
  );
}
