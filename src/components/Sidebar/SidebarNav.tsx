import { Stack } from "@chakra-ui/react";
import { NavSection } from "./NavSection";
import { NavLink } from "./NavLink";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";

export function SidebarNav() {
    return (
        <Stack spacing="12" align="flex-start">
            <NavSection title="GERAL">
                <NavLink href="/dashboard" title="Dashboard" icon={RiDashboardLine} />
                <NavLink href="/users" title="Usuários" icon={RiContactsLine} />
            </NavSection>
            <NavSection title="AUTOMAÇÃO">
                <NavLink href="/forms" title="Formularios" icon={RiInputMethodLine} />
                <NavLink href="/automation" title="Automação" icon={RiGitMergeLine} />
            </NavSection>
        </Stack>
    )
}