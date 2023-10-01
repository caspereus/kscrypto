import {
  HStack, Image, Text, VStack,
} from '@gluestack-ui/themed';
import { type ComponentProps } from 'react';
import FeatherIcon from '@expo/vector-icons/Feather';
import Separator from '../shared/Separator';

export type HeaderProps = ComponentProps<typeof HStack>;

export default function Header(props: HeaderProps) {
  return (
    <VStack>
      <HStack padding="$4" backgroundColor="$white" justifyContent="space-between" {...props}>
        <Image
          source={require('../../../assets/logo.png')}
          height={20}
          width={80}
          resizeMode="cover"
          alt="Logo pintu"
        />
        <HStack space="lg">
          <FeatherIcon name="mail" size={20} />
          <HStack
            space="sm"
            alignItems="center"
            backgroundColor="$coolGray100"
            borderRadius="$full"
            paddingRight="$2"
          >
            <Image
              height={20}
              width={20}
              size="sm"
              alt="PTU Logo"
              borderRadius={60}
              source={require('../../../assets/icon.png')}
            />
            <Text color="$blue600" size="xs" bold>Stake PTU</Text>
          </HStack>
        </HStack>
      </HStack>
      <Separator />
    </VStack>
  );
}
