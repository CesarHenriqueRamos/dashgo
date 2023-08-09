import { Stack } from "@chakra-ui/react";
import { NavSection } from "./NavSection";
import { NavLink } from "./NavLink";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";

export function SidebarNav() {
    return (
        <Stack spacing="12" align="flex-start">
            <NavSection title="GERAL">
                <NavLink title="Dashboard" icon={RiDashboardLine} />
                <NavLink title="Usuários" icon={RiContactsLine} />
            </NavSection>
            <NavSection title="AUTOMAÇÃO">
                <NavLink title="Formularios" icon={RiInputMethodLine} />
                <NavLink title="Automação" icon={RiGitMergeLine} />
            </NavSection>
        </Stack>
    )
}