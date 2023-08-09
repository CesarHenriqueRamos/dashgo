import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { Logo } from "./Logo";
import { SearchBox } from "./SearchBox";
import { NotificationNav } from "./NotificationNav";
import { Profile } from "./Profile";
import { useSidebarDrawer } from "@/src/context/SidebarDrawerContext";
import { RiMenuLine } from "react-icons/ri";

export function Header() {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    });
    const { onOpen } = useSidebarDrawer();
    return (
        <Flex
            w="100%"
            as="header"
            maxW={1480}
            h="20"
            mx="auto"
            mt="4"
            align="center"
            px="6">
            {!isWideVersion && (
                <IconButton
                    aria-label="Open Navigation"
                    icon={<Icon as={RiMenuLine} />}
                    fontSize="24"
                    variant="unstyled"
                    onClick={onOpen}
                    mr="2">
                </IconButton>
            )

            }
            <Logo />
            {isWideVersion && <SearchBox />}
            <Flex
                align="center"
                ml="auto">
                <NotificationNav />
                <Profile showProfileData={isWideVersion} />
            </Flex>
        </Flex>
    )
}