import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ServiceComponent } from './pages/service/service.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { BlogComponent } from './pages/blog/blog.component';
import { PostComponent } from './pages/post/post.component';
import { Component } from '@angular/core';
import { ListBlogComponent } from './pages/dashboard/blog/list-blog/list-blog.component';
import { CreateBlogComponent } from './pages/dashboard/blog/create-blog/create-blog.component';
import { EditBlogComponent } from './pages/dashboard/blog/edit-blog/edit-blog.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { MPublicComponent } from './layout/m-public/m-public.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { authGuard } from './core/guards/auth.guard';
import { loginGuard } from './core/guards/login.guard';

export const routes: Routes = [

    {
        path:'',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: '',
        component: MPublicComponent,
        children: [
    
        {
        path: 'home',
        component: HomeComponent,
        },
        {
         path: 'about',
         component: AboutComponent
        },
        {
         path: 'service',
         component: ServiceComponent
        },
        {
         path: 'contact',
         component: ContactComponent
        }
        ]
    },
    {
        path: 'blog',
        children: [

            {   path: '',
                component: BlogComponent,
            },
            {
               path: 'post/:id',
                component: PostComponent
            }
        ]
    },
    {
        path: 'auth',
        component: AuthLayoutComponent,
        canActivate:[loginGuard],
        children: [
            {
                path:'login',
                component : LoginComponent
            },
            {
                path: 'register',
                component: RegisterComponent
            }
        ]
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate:[authGuard],
        children: [
            {
                path:'blog/list',
                component : ListBlogComponent
            },
            {
                path: 'blog/create',
                component: CreateBlogComponent
            },
            {
                path: 'blog/edit/:id',
                component: EditBlogComponent
            }
        ]
    },
    {
        path:'**',
        component: NotFoundComponent
    }
];
