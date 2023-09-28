import { HStack, Image } from "@gluestack-ui/themed";
import { ComponentProps } from "react";
import FeatherIcon from '@expo/vector-icons/Feather';


export type HeaderProps = ComponentProps<typeof HStack>

export default function Header(props: HeaderProps) {
  return (
    <HStack padding="$4" backgroundColor="$white" justifyContent="space-between" {...props}>
      <Image
        source={require('../../../assets/logo.webp')}
        height={20}
        width={80}
        resizeMode="cover"
        alt="Logo pintu"
      />
      <HStack>
        <FeatherIcon name="mail" size={20} />
      </HStack>
    </HStack>
  )
}