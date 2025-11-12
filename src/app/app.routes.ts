import { Routes } from '@angular/router';
import { LegalNotice } from './pages/legal-notice/legal-notice';
import { PrivacyPolicy } from './pages/privacy-policy/privacy-policy';
import { App } from './app';

export const routes: Routes = [
    {
        path: '',
        component: App
    },
    
    {
        path:'legal-notice',
        component: LegalNotice,
    },
    {
        path: 'privacy-policy',
        component: PrivacyPolicy,
    }
];
