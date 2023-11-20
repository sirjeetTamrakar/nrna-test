import ActiveDashboardIcon from 'assets/activeIcons/dashboard.svg';
import ActiveSettingsIcon from 'assets/activeIcons/settings.svg';
import Advice from 'assets/icon/advice.svg';
import Business from 'assets/icon/business.svg';
import Candidate from 'assets/icon/candidate.svg';
import Contact from 'assets/icon/contact.svg';
import DashboardIcon from 'assets/icon/dashboard.svg';
import DownloadIcon from 'assets/icon/download.png';
import EmailTemplateActive from 'assets/icon/email-template-active.svg';
import EmailTemplate from 'assets/icon/email-template.svg';
import Events from 'assets/icon/events.svg';
import NbnsIcon from 'assets/icon/nbns.svg';
import Country from 'assets/icon/ncc.svg';
import News from 'assets/icon/news.svg';
import Profile from 'assets/icon/profile.svg';
import SettingsIcon from 'assets/icon/settings.svg';
import Survey from 'assets/icon/survey.svg';
import Team from 'assets/icon/team.svg';
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
        memberProfile: 'memberProfile',
        memberProfileNCC: 'memberProfileNCC',
        adminProfile: 'adminProfile',
        activeIcon: ActiveDashboardIcon,
        roles: [Roles.Admin, Roles.SuperAdmin, Roles.Member, Roles.NCC],
        children: []
      },
      {
        label: 'User Management',
        url: '/dashboard/user-management',
        icon: UserManagement,
        activeIcon: ActiveSettingsIcon,
        memberProfileNCC: 'memberProfileNCC',
        adminProfile: 'adminProfile',
        roles: [Roles.Admin, Roles.SuperAdmin, Roles.NCC],
        children: [
          {
            label: 'Member',
            url: '/dashboard/user-management/member',
            roles: [Roles.Admin, Roles.SuperAdmin, Roles.NCC],
            memberProfileNCC: 'memberProfileNCC',
            adminProfile: 'adminProfile'
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
        memberProfile: 'memberProfile',
        memberProfileNCC: 'memberProfileNCC',
        adminProfile: 'adminProfile',
        roles: [Roles.Admin, Roles.SuperAdmin, Roles.Member, Roles.NCC],
        children: [
          {
            label: 'My News List',
            url: '/dashboard/news/my-news-list',
            memberProfile: 'memberProfile',
            memberProfileNCC: 'memberProfileNCC',
            adminProfile: 'adminProfile',
            roles: [Roles.Admin, Roles.SuperAdmin, Roles.NCC, Roles.Member]
          },
          {
            label: 'All News List',
            url: '/dashboard/news/all-news-list',
            memberProfile: 'memberProfile',
            memberProfileNCC: 'memberProfileNCC',
            adminProfile: 'adminProfile',

            roles: [Roles.Admin, Roles.SuperAdmin]
          },
          {
            label: 'News Management',
            url: '/dashboard/news/news-management',
            memberProfile: 'memberProfile',
            memberProfileNCC: 'memberProfileNCC',
            adminProfile: 'adminProfile',
            roles: [Roles.Admin, Roles.SuperAdmin, Roles.NCC, Roles.Member]
          }
        ]
      },
      {
        label: 'Events',
        url: '/dashboard/events',
        icon: Events,
        activeIcon: ActiveDashboardIcon,
        memberProfileNCC: 'memberProfileNCC',
        adminProfile: 'adminProfile',
        roles: [Roles.Admin, Roles.SuperAdmin, Roles.NCC],
        children: []
      },
      {
        label: 'Contact',
        url: '/dashboard/contact',
        icon: Contact,
        memberProfile: 'memberProfile',
        activeIcon: ActiveDashboardIcon,
        memberProfileNCC: 'memberProfileNCC',
        adminProfile: 'adminProfile',
        roles: [Roles.Admin, Roles.SuperAdmin, Roles.Member, Roles.NCC],
        children: []
      },
      {
        label: 'Downloads',
        url: '/dashboard/downloads',
        icon: DownloadIcon,
        memberProfile: 'memberProfile',
        activeIcon: ActiveDashboardIcon,
        memberProfileNCC: 'memberProfileNCC',
        adminProfile: 'adminProfile',
        roles: [Roles.Admin, Roles.SuperAdmin, Roles.Member, Roles.NCC],
        children: []
      },
      {
        label: 'Profile',
        url: '/dashboard/profile',
        icon: Profile,
        memberProfile: 'memberProfile',
        activeIcon: ActiveDashboardIcon,
        roles: [Roles.Member, Roles.NCC],
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
        memberProfileNCC: 'memberProfileNCC',
        adminProfile: 'adminProfile',
        roles: [Roles.Admin, Roles.SuperAdmin, Roles.NCC],
        children: [
          {
            label: 'Team',
            url: '/dashboard/our-team',
            memberProfileNCC: 'memberProfileNCC',
            adminProfile: 'adminProfile',

            roles: [Roles.Admin, Roles.SuperAdmin, Roles.NCC]
          },
          {
            label: 'Department',
            url: '/dashboard/our-team/department',
            memberProfileNCC: 'memberProfileNCC',
            adminProfile: 'adminProfile',

            roles: [Roles.Admin, Roles.SuperAdmin, Roles.NCC]
          }
        ]
      },
      {
        label: 'Candidate',
        url: '/dashboard/candidate',
        icon: Candidate,
        activeIcon: ActiveDashboardIcon,
        memberProfileNCC: 'memberProfileNCC',
        adminProfile: 'adminProfile',

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
            label: 'Survey List',
            url: '/dashboard/survey/site',
            roles: [Roles.Admin, Roles.SuperAdmin]
          },
          {
            label: 'Result',
            url: '/dashboard/survey/result',
            roles: [Roles.Admin, Roles.SuperAdmin]
          }
          // {
          //   label: 'Participants',
          //   url: '/dashboard/survey/participants',
          //   roles: [Roles.Admin, Roles.SuperAdmin]
          // }
        ]
      },
      {
        label: 'Business',
        url: '/dashboard/business',
        icon: Business,
        activeIcon: ActiveSettingsIcon,

        memberProfile: 'memberProfile',
        roles: [Roles.Admin, Roles.SuperAdmin, Roles.Member, Roles.NCC],
        children: [
          {
            label: 'Category',
            url: '/dashboard/business/category',
            memberProfile: 'memberProfile',

            roles: [Roles.Admin, Roles.SuperAdmin, Roles.NCC]
          },
          {
            label: 'Business List',
            url: '/dashboard/business/business-list',
            memberProfile: 'memberProfile',

            roles: [Roles.Admin, Roles.SuperAdmin, Roles.Member, Roles.NCC]
          },

          {
            label: 'Contact',
            url: '/dashboard/business/contact',
            memberProfile: 'memberProfile',

            roles: [Roles.Admin, Roles.SuperAdmin, Roles.Member, Roles.NCC]
          },
          {
            label: 'Business Mangement',
            url: '/dashboard/business/business-management',
            memberProfile: 'memberProfile',

            roles: [Roles.Admin, Roles.SuperAdmin, Roles.Member, Roles.NCC]
          }
        ]
      },
      {
        label: 'NBNS',
        url: '/dashboard/nbns',
        icon: NbnsIcon,
        activeIcon: ActiveSettingsIcon,
        // memberProfileNCC: 'memberProfileNCC',
        // adminProfile: 'adminProfile',

        roles: [Roles.Admin, Roles.SuperAdmin],
        children: [
          {
            label: 'NBNS Settings',
            url: '/dashboard/nbns/nbns-settings',
            roles: [Roles.Admin, Roles.SuperAdmin]
          },
          {
            label: 'NBNS Banner',
            url: '/dashboard/nbns/nbns-banner',
            roles: [Roles.Admin, Roles.SuperAdmin]
          },
          {
            label: 'NBNS Followers',
            url: '/dashboard/nbns/nbns-followers',
            roles: [Roles.Admin, Roles.SuperAdmin]
          }
        ]
      },
      {
        label: 'Email Template',
        url: '/dashboard/email-template',
        icon: EmailTemplate,
        memberProfile: 'memberProfile',
        memberProfileNCC: 'memberProfileNCC',
        adminProfile: 'adminProfile',
        activeIcon: EmailTemplateActive,
        roles: [Roles.Admin, Roles.SuperAdmin, Roles.Member, Roles.NCC],
        children: [
          {
            label: 'Business Email Template',
            url: '/dashboard/email-template/business-template',
            memberProfile: 'memberProfile',
            memberProfileNCC: 'memberProfileNCC',
            adminProfile: 'adminProfile',
            roles: [Roles.Admin, Roles.SuperAdmin, Roles.Member, Roles.NCC]
          },
          {
            label: 'NBNS Email Template',
            url: '/dashboard/email-template/nbns-template',
            memberProfile: 'memberProfile',
            memberProfileNCC: 'memberProfileNCC',
            adminProfile: 'adminProfile',
            roles: [Roles.Admin, Roles.SuperAdmin]
          }
        ]
      },
      {
        label: 'Settings',
        url: '/dashboard/settings',
        icon: SettingsIcon,
        activeIcon: ActiveSettingsIcon,
        memberProfileNCC: 'memberProfileNCC',
        adminProfile: 'adminProfile',

        roles: [Roles.Admin, Roles.SuperAdmin, Roles.NCC],
        children: [
          {
            label: 'NRNA Settings',
            url: '/dashboard/settings/site',
            // memberProfileNCC: 'memberProfileNCC',
            adminProfile: 'adminProfile',

            roles: [Roles.Admin, Roles.SuperAdmin, Roles.NCC]
          },
          {
            label: 'NRNA Banner',
            url: '/dashboard/settings/banner',
            memberProfile: 'memberProfile',
            // memberProfileNCC: 'memberProfileNCC',
            adminProfile: 'adminProfile',

            roles: [Roles.Admin, Roles.SuperAdmin, Roles.NCC]
          },
          {
            label: 'NCC Setting',
            url: '/dashboard/settings/ncc-site',
            // memberProfileNCC: 'memberProfileNCC',

            roles: [Roles.Admin, Roles.SuperAdmin]
          },
          {
            label: 'Business Setting',
            url: '/dashboard/settings/business-site',
            // memberProfileNCC: 'memberProfileNCC',

            roles: [Roles.Admin, Roles.SuperAdmin]
          },

          // {
          //   label: 'NBNS Settings',
          //   url: '/dashboard/settings/nbns',
          //   roles: [Roles.Admin, Roles.SuperAdmin]
          // },
          // {
          //   label: 'NBNS Banner',
          //   url: '/dashboard/settings/nbns-banner',
          //   roles: [Roles.Admin, Roles.SuperAdmin]
          // },
          {
            label: 'News Category',
            url: '/dashboard/news/category',
            roles: [Roles.Admin, Roles.SuperAdmin]
          },
          {
            label: 'Events Category',
            url: '/dashboard/events/category',
            roles: [Roles.Admin, Roles.SuperAdmin]
          }
        ]
      }
    ]
  }
];
