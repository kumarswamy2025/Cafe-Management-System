import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { SnackbarService } from '../snackBarService/snackbar.service';
import { jwtDecode } from 'jwt-decode';
import { GlobalConstants } from 'src/app/shared/global-constant';

@Injectable({
  providedIn: 'root'
})
export class RouterGuadeService {

  constructor(
    private router: Router,
    private auth: AuthService,
    private snackBarService: SnackbarService


  ) { }

  // can activate service
  canActivate(route: ActivatedRouteSnapshot): boolean {
    /**
     * use of ActivatedRouteSnapshot:
     *   1. In Angular, the ActivatedRouteSnapshot is part of the Angular Router module. 
     *   2. It represents the state of the route at a specific moment in time.
     *   3. This is often used in scenarios where you need to access route data, parameters, or query parameters in resolvers, guards, or directly within the component.
     * 
     * Common Use Cases:
     *  1. Accessing Route Parameters: Retrieve dynamic parameters from the route, such as IDs or slugs.
     *  2. Accessing Query Parameters: Get query parameters passed in the URL.
     *  3. Accessing Route Data: Retrieve static data defined in the route configuration.
     *  4. Guards and Resolvers: Evaluate conditions based on route state before navigation
     * 
     * 
     */

    //  data is passed in route [Note:refer app-routing.module.ts file]
    let expectedRoleArray = route.data

    expectedRoleArray = expectedRoleArray.expectedRole
    // taking token by local stoarage
    const token: any = localStorage.getItem('token');
    var tokenPlayLoad: any;
    try {
      //  decode token and storing in tokenPlayLoad variable
      tokenPlayLoad = jwtDecode(token)
    } catch (error) {
      
      const response="please login "
      this.snackBarService.openSnackBar(response, GlobalConstants.error)
      console.log("this is executed..");
      
      localStorage.clear();
      this.router.navigate(['/'])

    }
    let checkRole = false
    for (let i = 0; i < expectedRoleArray.length; i++) {

      if (expectedRoleArray[i] == tokenPlayLoad.role) {
        checkRole = true
      }

    }

    if (tokenPlayLoad.role == 'user' || tokenPlayLoad.role == 'admin') {
      if (this.auth.isAuthenticated() && checkRole) {
        return true;

      }
      else {

        this.snackBarService.openSnackBar(GlobalConstants.unauthorized, GlobalConstants.error);
        this.router.navigate(['/cafe/dashboard'])
        // this.router.navigate(['/'])

        return false

      }

    }
    else {
      this.router.navigate(['/'])
      localStorage.clear()
      return false
    }




  }










}
