import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
  } from "@/components/ui/sidebar"
  
  export function AppSidebar() {
    return (
      <Sidebar>
        <SidebarHeader >
          <div className="ml-2 font-bold">png2webp</div>
          </SidebarHeader>
        <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Settings</SidebarGroupLabel>
          <SidebarGroupContent>
         
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
        <SidebarFooter />
      </Sidebar>
    )
  }
  