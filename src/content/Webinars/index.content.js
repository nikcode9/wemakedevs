import { IndividualWebinarPageFAQ } from '@/content/Webinars/IndividualWebinarPageContent';
import SimplifiedDeploymentWebinar from '@/content/Webinars/SimplifiedDeployment';
import ZeroDowmtime from '@/content/Webinars/ZeroDowntimeKubeslice';
import BPFWebinar from './BPFWebinar';
import ChatOpsWebinar from './ChatOpsWebinar';
import GopherWebinar from './GopherWebinar';
import NoCodeApproachWebianr from './NoCodeApproachWebianr';

const WebinarPageContent = {
  header: [
    {
      name: 'About',
      href: '#about',
    },
    {
      name: 'Upcoming',
      href: '#upcoming',
    },
    {
      name: 'Past',
      href: '#past',
    },
    {
      name: 'Join',
      href: '#join',
    },
    {
      name: 'FAQ',
      href: '#faq',
    },
  ],
  faq: IndividualWebinarPageFAQ,
};

export default WebinarPageContent;

export const webinar = [
  {
    img: BPFWebinar.poster,
    title: BPFWebinar.name,
    description: BPFWebinar.description,
    time: BPFWebinar.time,
    slug: BPFWebinar.slug,
    details: BPFWebinar,
  },
  {
    img: NoCodeApproachWebianr.poster,
    title: NoCodeApproachWebianr.name,
    description: NoCodeApproachWebianr.description,
    time: NoCodeApproachWebianr.time,
    slug: NoCodeApproachWebianr.slug,
    details: NoCodeApproachWebianr,
  },
  {
    img: GopherWebinar.poster,
    title: GopherWebinar.name,
    description: GopherWebinar.description,
    time: GopherWebinar.time,
    slug: GopherWebinar.slug,
    details: GopherWebinar,
  },

  {
    img: SimplifiedDeploymentWebinar.poster,
    title: SimplifiedDeploymentWebinar.name,
    description: SimplifiedDeploymentWebinar.description,
    time: SimplifiedDeploymentWebinar.time,
    slug: SimplifiedDeploymentWebinar.slug,
    details: SimplifiedDeploymentWebinar,
  }, 

  {
    img: ChatOpsWebinar.poster,
    title: ChatOpsWebinar.name,
    description: ChatOpsWebinar.description,
    time: ChatOpsWebinar.time,
    slug: ChatOpsWebinar.slug,
    details: ChatOpsWebinar,
  },  
  {
    img: ZeroDowmtime.poster,
    title: ZeroDowmtime.name,
    description: ZeroDowmtime.description,
    time: ZeroDowmtime.time,
    slug: ZeroDowmtime.slug,
    details: ZeroDowmtime,
  },
];
