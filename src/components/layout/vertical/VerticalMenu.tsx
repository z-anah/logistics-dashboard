// MUI Imports
import Chip from '@mui/material/Chip'
import { useTheme } from '@mui/material/styles'

// Third-party Imports
import PerfectScrollbar from 'react-perfect-scrollbar'

// Type Imports
import type { VerticalMenuContextProps } from '@menu/components/vertical-menu/Menu'

// Component Imports
import { Menu, SubMenu, MenuItem, MenuSection } from '@menu/vertical-menu'

// Hook Imports
import useVerticalNav from '@menu/hooks/useVerticalNav'

// Styled Component Imports
import StyledVerticalNavExpandIcon from '@menu/styles/vertical/StyledVerticalNavExpandIcon'

// Style Imports
import menuItemStyles from '@core/styles/vertical/menuItemStyles'
import menuSectionStyles from '@core/styles/vertical/menuSectionStyles'

type RenderExpandIconProps = {
  open?: boolean
  transitionDuration?: VerticalMenuContextProps['transitionDuration']
}

const RenderExpandIcon = ({ open, transitionDuration }: RenderExpandIconProps) => (
  <StyledVerticalNavExpandIcon open={open} transitionDuration={transitionDuration}>
    <i className='ri-arrow-right-s-line' />
  </StyledVerticalNavExpandIcon>
)

const VerticalMenu = ({ scrollMenu }: { scrollMenu: (container: any, isPerfectScrollbar: boolean) => void }) => {
  // Hooks
  const theme = useTheme()
  const { isBreakpointReached, transitionDuration } = useVerticalNav()

  const ScrollWrapper = isBreakpointReached ? 'div' : PerfectScrollbar

  return (
    // eslint-disable-next-line lines-around-comment
    /* Custom scrollbar instead of browser scroll, remove if you want browser scroll only */
    <ScrollWrapper
      {...(isBreakpointReached
        ? {
            className: 'bs-full overflow-y-auto overflow-x-hidden',
            onScroll: container => scrollMenu(container, false)
          }
        : {
            options: { wheelPropagation: false, suppressScrollX: true },
            onScrollY: container => scrollMenu(container, true)
          })}
    >
      {/* Incase you also want to scroll NavHeader to scroll with Vertical Menu, remove NavHeader from above and paste it below this comment */}
      {/* Vertical Menu */}
      <Menu
        menuItemStyles={menuItemStyles(theme)}
        renderExpandIcon={({ open }) => <RenderExpandIcon open={open} transitionDuration={transitionDuration} />}
        renderExpandedMenuItemIcon={{ icon: <i className='ri-circle-line' /> }}
        menuSectionStyles={menuSectionStyles(theme)}
      >
        <MenuSection label='Dashboards'>
          <MenuItem href='/overview' icon={<i className='ri-dashboard-line' />}>
            Overview
          </MenuItem>
          <MenuItem href='/analytics' icon={<i className='ri-bar-chart-line' />}>
            Analytics
          </MenuItem>
        </MenuSection>

        <MenuSection label='Delivery Management'>
          <MenuItem href='/schedule' icon={<i className='ri-calendar-line' />}>
            Schedule
          </MenuItem>
          <MenuItem href='/delivery/list' icon={<i className='ri-truck-line' />}>
            Delivery List
          </MenuItem>
          <MenuItem href='/delivery/create' icon={<i className='ri-add-circle-line' />}>
            Create Delivery
          </MenuItem>
          <MenuItem href='/drivers/list' icon={<i className='ri-user-2-line' />}>
            Driver List
          </MenuItem>
          <MenuItem href='/vehicles/list' icon={<i className='ri-car-line' />}>
            Vehicle List
          </MenuItem>
          <MenuItem href='/customers/list' icon={<i className='ri-team-line' />}>
            Customer List
          </MenuItem>
        </MenuSection>

        <MenuSection label='Reports'>
          <MenuItem href='/reports/delivery' icon={<i className='ri-file-chart-line' />}>
            Delivery Reports
          </MenuItem>
          <MenuItem href='/reports/performance' icon={<i className='ri-line-chart-line' />}>
            Performance Reports
          </MenuItem>
        </MenuSection>

        <MenuSection label='Communication'>
          <MenuItem href='/chat/inbox' icon={<i className='ri-message-3-line' />}>
            Message Center
          </MenuItem>
        </MenuSection>

        <MenuSection label='Settings'>
          <MenuItem href='/settings/profile' icon={<i className='ri-user-settings-line' />}>
            Profile Settings
          </MenuItem>
          <MenuItem href='/settings/app' icon={<i className='ri-settings-4-line' />}>
            App Settings
          </MenuItem>
        </MenuSection>
      </Menu>
    </ScrollWrapper>
  )
}

export default VerticalMenu
