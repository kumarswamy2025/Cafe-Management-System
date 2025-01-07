import { Injectable } from "@angular/core"

// creating memu interface and exporting this 
export interface Menu{
    state:string,
    name:string,
    role:string,
    icon:string
} 
// creating menu items 
const MENUITEMS=[
    {
        state:'dashboard',
        name:"Dashboard",
        icon:"dashboard",
        // Note: dashboard is common for user and admin so leave it blank 
        role:''
    },
    {
        state:'category',
        name:"Manage Category",
        icon:"category",
        // Note: category is only for admins  
        role:'admin'
    }
]

/**
 * In Angular, the @Injectable() decorator is used to define a class as a service and make it available for dependency injection.
 * 
 * 
 * Purpose of @Injectable():
 *  1. Marks a Class as a Service: It tells Angular that the class is a service that can be injected into components or other services.
 *  2. Allows Dependency Injection: It enables the class to inject dependencies (other services, for example) into itself.
 *  3. Register in Dependency Injection System: It registers the service in Angular's dependency injection system so that instances of the service can be provided to components, directives, or other services. 
 * 
 */


@Injectable()

export class MenuItems{

    getMenuItems():Menu[]{
        return MENUITEMS

    }

}
