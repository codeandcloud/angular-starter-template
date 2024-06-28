import { Route } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

export const PAGE_ROUTES: Route[] = [
  {
    path: '',
    children: [
      {
        path: 'about-us',
        component: AboutUsComponent,
        title: 'About Us',
      },
      {
        path: 'contact-us',
        component: ContactComponent,
        title: 'Contact Us',
      },
      {
        path: '',
        component: HomeComponent,
        title: `Quantum Edge Labs is more than an IT solutions provider, we're the innovation architects shaping tech around your unique needs. We don't host our own party, we invite you to be the centrepiece. It's your business, your vision — and our solutions start and end with you.`,
      },
    ],
  },
];
