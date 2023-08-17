import ActiveDashboardIcon from 'assets/activeIcons/dashboard.svg';
import ActiveSettingsIcon from 'assets/activeIcons/settings.svg';
import DashboardIcon from 'assets/icon/dashboard.svg';
import SettingsIcon from 'assets/icon/settings.svg';

export const SidebarConstants = [
  {
    header: 'MAIN',
    items: [
      {
        label: 'Dashboard',
        url: '/',
        icon: DashboardIcon,
        activeIcon: ActiveDashboardIcon,
        children: []
      },
      {
        label: 'User Management',
        url: '/dashboard/user-management',
        icon: SettingsIcon,
        activeIcon: ActiveSettingsIcon,
        children: [
          {
            label: 'Member',
            url: '/dashboard/user-management/member'
          },
          {
            label: 'Permission',
            url: '/dashboard/user-management/member'
          }
        ]
      },
      {
        label: 'News',
        url: '/dashboard/news',
        icon: DashboardIcon,
        activeIcon: ActiveDashboardIcon,
        children: []
      },
      {
        label: 'Events',
        url: '/dashboard/events',
        icon: DashboardIcon,
        activeIcon: ActiveDashboardIcon,
        children: []
      },
      {
        label: 'Contact',
        url: '/dashboard/contact',
        icon: DashboardIcon,
        activeIcon: ActiveDashboardIcon,
        children: []
      },
      {
        label: 'Profile',
        url: '/dashboard/profile',
        icon: DashboardIcon,
        activeIcon: ActiveDashboardIcon,
        children: []
      },
      {
        label: 'Settings',
        url: '/settings',
        icon: SettingsIcon,
        activeIcon: ActiveSettingsIcon,
        children: [
          {
            label: 'Site Setting',
            url: '/settings/site'
          },
          {
            label: 'Banner',
            url: '/settings/banner'
          }
        ]
      }
    ]
  }
];
