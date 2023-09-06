import ActiveDashboardIcon from 'assets/activeIcons/dashboard.svg';
import ActiveSettingsIcon from 'assets/activeIcons/settings.svg';
import Advice from 'assets/icon/advice.svg';
import Business from 'assets/icon/business.svg';
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
import { Roles } from './RoleConstant';

export const SidebarConstants = [
  {
    header: 'MAIN',
    items: [
      {
        label: 'Dashboard',
        url: '/dashboard',
        icon: DashboardIcon,
        activeIcon: ActiveDashboardIcon,
        roles: [Roles.Admin, Roles.SuperAdmin, Roles.Member, Roles.NCC],
        children: []
      },
      {
        label: 'User Management',
        url: '/dashboard/user-management',
        icon: UserManagement,
        activeIcon: ActiveSettingsIcon,
        roles: [Roles.Admin, Roles.SuperAdmin],
        children: [
          {
            label: 'Member',
            url: '/dashboard/user-management/member',
            roles: [Roles.Admin, Roles.SuperAdmin]
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
        roles: [Roles.Admin, Roles.SuperAdmin, Roles.Member, Roles.NCC],
        children: []
      },
      {
        label: 'Events',
        url: '/dashboard/events',
        icon: Events,
        activeIcon: ActiveDashboardIcon,
        roles: [Roles.Admin, Roles.SuperAdmin, Roles.NCC],
        children: []
      },
      {
        label: 'Contact',
        url: '/dashboard/contact',
        icon: Contact,
        activeIcon: ActiveDashboardIcon,
        roles: [Roles.Admin, Roles.SuperAdmin, Roles.Member, Roles.NCC],
        children: []
      },
      {
        label: 'Profile',
        url: '/dashboard/profile',
        icon: Profile,
        activeIcon: ActiveDashboardIcon,
        roles: [Roles.Member],
        children: []
      },
      {
        label: 'Advice',
        url: '/dashboard/advice',
        icon: Advice,
        activeIcon: ActiveDashboardIcon,
        roles: [Roles.Admin, Roles.SuperAdmin],
        children: []
      },
      {
        label: 'NCC',
        url: '/dashboard/ncc',
        icon: Country,
        activeIcon: ActiveDashboardIcon,
        roles: [Roles.Admin, Roles.SuperAdmin],
        children: []
      },
      {
        label: 'Our Team',
        url: '/dashboard/our-team',
        icon: Team,
        activeIcon: ActiveDashboardIcon,
        roles: [Roles.Admin, Roles.SuperAdmin, Roles.NCC],

        children: []
      },
      {
        label: 'Candidate',
        url: '/dashboard/candidate',
        icon: Candidate,
        activeIcon: ActiveDashboardIcon,
        roles: [Roles.Admin, Roles.SuperAdmin, Roles.NCC],
        children: []
      },
      {
        label: 'Survey',
        url: '/dashboard/survey',
        icon: Survey,
        activeIcon: ActiveSettingsIcon,
        roles: [Roles.Admin, Roles.SuperAdmin],
        children: [
          {
            label: 'Questions',
            url: '/dashboard/survey/site',
            roles: [Roles.Admin, Roles.SuperAdmin]
          },
          {
            label: 'Result',
            url: '/dashboard/survey/result',
            roles: [Roles.Admin, Roles.SuperAdmin]
          },
          {
            label: 'Participants',
            url: '/dashboard/survey/participants',
            roles: [Roles.Admin, Roles.SuperAdmin]
          }
        ]
      },
      {
        label: 'Business',
        url: '/dashboard/business',
        icon: Business,
        activeIcon: ActiveSettingsIcon,
        roles: [Roles.Admin, Roles.SuperAdmin, Roles.Member, Roles.NCC],
        children: [
          {
            label: 'Category',
            url: '/dashboard/business/category',
            roles: [Roles.Admin, Roles.SuperAdmin]
          },
          {
            label: 'Business',
            url: '/dashboard/business',
            roles: [Roles.Admin, Roles.SuperAdmin, Roles.Member]
          },
          {
            label: 'Contact',
            url: '/dashboard/business/contact',
            roles: [Roles.Admin, Roles.SuperAdmin, Roles.Member]
          }
        ]
      },
      {
        label: 'Settings',
        url: '/dashboard/settings',
        icon: SettingsIcon,
        activeIcon: ActiveSettingsIcon,
        roles: [Roles.Admin, Roles.SuperAdmin, Roles.NCC],
        children: [
          {
            label: 'Site Setting',
            url: '/dashboard/settings/site',
            roles: [Roles.Admin, Roles.SuperAdmin, Roles.NCC]
          },
          {
            label: 'Banner',
            url: '/dashboard/settings/banner',
            roles: [Roles.Admin, Roles.SuperAdmin, Roles.NCC]
          }
        ]
      }
    ]
  }
];
