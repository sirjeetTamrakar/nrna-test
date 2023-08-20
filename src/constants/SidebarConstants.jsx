import ActiveDashboardIcon from 'assets/activeIcons/dashboard.svg';
import ActiveSettingsIcon from 'assets/activeIcons/settings.svg';
import Advice from 'assets/icon/advice.svg';
import Candidate from 'assets/icon/candidate.svg';
import Contact from 'assets/icon/contact.svg';
import DashboardIcon from 'assets/icon/dashboard.svg';
import Events from 'assets/icon/events.svg';
import Country from 'assets/icon/ncc.svg';
import News from 'assets/icon/news.svg';
import Profile from 'assets/icon/profile.svg';
import Survey from 'assets/icon/survey.svg';
import Team from 'assets/icon/team.svg';

import SettingsIcon from 'assets/icon/settings.svg';
import UserManagement from 'assets/icon/user-management.svg';

export const SidebarConstants = [
  {
    header: 'MAIN',
    items: [
      {
        label: 'Dashboard',
        url: '/dashboard',
        icon: DashboardIcon,
        activeIcon: ActiveDashboardIcon,
        children: []
      },
      {
        label: 'User Management',
        url: '/dashboard/user-management',
        icon: UserManagement,
        activeIcon: ActiveSettingsIcon,
        children: [
          {
            label: 'Member',
            url: '/dashboard/user-management/member'
          }
          // {
          //   label: 'Permission',
          //   url: '/dashboard/user-management/member'
          // }
        ]
      },
      {
        label: 'News',
        url: '/dashboard/news',
        icon: News,
        activeIcon: ActiveDashboardIcon,
        children: []
      },
      {
        label: 'Events',
        url: '/dashboard/events',
        icon: Events,
        activeIcon: ActiveDashboardIcon,
        children: []
      },
      {
        label: 'Contact',
        url: '/dashboard/contact',
        icon: Contact,
        activeIcon: ActiveDashboardIcon,
        children: []
      },
      {
        label: 'Profile',
        url: '/dashboard/profile',
        icon: Profile,
        activeIcon: ActiveDashboardIcon,
        children: []
      },
      {
        label: 'Advice',
        url: '/dashboard/advice',
        icon: Advice,
        activeIcon: ActiveDashboardIcon,
        children: []
      },
      {
        label: 'NCC',
        url: '/dashboard/ncc',
        icon: Country,
        activeIcon: ActiveDashboardIcon,
        children: []
      },
      {
        label: 'Our Team',
        url: '/dashboard/our-team',
        icon: Team,
        activeIcon: ActiveDashboardIcon,
        children: []
      },
      {
        label: 'Candidate',
        url: '/dashboard/candidate',
        icon: Candidate,
        activeIcon: ActiveDashboardIcon,
        children: []
      },
      {
        label: 'Survey',
        url: '/dashboard/survey',
        icon: Survey,
        activeIcon: ActiveSettingsIcon,
        children: [
          {
            label: 'Questions',
            url: '/dashboard/survey/site'
          },
          {
            label: 'Result',
            url: '/dashboard/survey/result'
          },
          {
            label: 'Participants',
            url: '/dashboard/survey/participants'
          }
        ]
      },
      {
        label: 'Settings',
        url: '/dashboard/settings',
        icon: SettingsIcon,
        activeIcon: ActiveSettingsIcon,
        children: [
          {
            label: 'Site Setting',
            url: '/dashboard/settings/site'
          },
          {
            label: 'Banner',
            url: '/dashboard/settings/banner'
          }
        ]
      }
    ]
  }
];
