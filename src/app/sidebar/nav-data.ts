import { InvokeFunctionExpr } from "@angular/compiler";


export const navbarData = [
    {
        link: 'dashboard',
        icon:  'fa-solid fa-dashboard',
        label: 'Dashboard'
    },
    {
        link: 'user-management',
        icon: 'fa-solid fa-chalkboard-user',
        label: 'User Management',
        items: [
            {
                child_link: 'teachers',
                icon: 'fa-solid fa-circle',
                label: 'Teachers'
            },
            {
               child_link: 'students',
                icon: 'fa fa-circle',
                label: 'Students'
            }
        ]
    },
    {
        link: 'assessment-modules',
        icon: 'fa-solid fa-home',
        label: 'Assessment Modules'
    },
    {
        link: 'test-report',
        icon: 'fa-solid fa-file',
        label: 'Test Report',
        items: [
            {
                child_link: 'test-report',
                icon: 'fa fa-home',
                label: 'Test Report'
            },
            {
                child_link: 'candidate-report',
                icon: 'fa fa-circle',
                label: 'Candidate Report'
            },
            {
                child_link: 'test-feedback',
                icon: 'fa fa-home',
                label: 'Test Feedback'
            },
        ]
    },
    {
        link: 'payment',
        icon: 'fa-solid fa-credit-card',
        label: 'Payments'
    },
    {
        link: 'notification',
        icon: 'fa-solid fa-bell',
        label: 'Notification'
    },
    {
        link: 'setting',
        icon: 'fa-solid fa-gear',
        label: 'Settings',

    },

];