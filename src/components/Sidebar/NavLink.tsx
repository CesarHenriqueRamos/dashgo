import { Icon, Link as ChakraLink, Text, LinkProps as ChakraLinksProps } from '@chakra-ui/react'
import { ElementType } from 'react';
import { ActiveLink } from '../ActiveLink';

interface NavLinkProps extends ChakraLinksProps {
    title: string;
    icon: ElementType;
    href:string;
}
export function NavLink({ title, icon, href, ...rest }: NavLinkProps) {
    return (
        <ActiveLink href={href}>
            <ChakraLink display="flex" alignItems="center" {...rest}>
                <Icon as={icon} fontSize="20" />
                <Text ml="4" fontWeight="medium">{title}</Text>
            </ChakraLink>
        </ActiveLink>
    )
}