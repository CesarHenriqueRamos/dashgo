import { Icon, Link, Text, LinkProps as ChakraLinksProps } from '@chakra-ui/react'
import { ElementType } from 'react';

interface NavLinkProps extends ChakraLinksProps{
    title:string;
    icon:ElementType;
}
export function NavLink({title,icon, ...rest}:NavLinkProps) {
    return (
        <Link display="flex" alignItems="center" {...rest}>
            <Icon as={icon} fontSize="20" />
            <Text ml="4" fontWeight="medium">{title}</Text>
        </Link>
    )
}