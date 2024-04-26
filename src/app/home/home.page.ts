import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  locationName: string;

  constructor(private http: HttpClient, private router: Router) {
    this.locationName = '';
  }

  submitLocation() {
    console.log('Submitted location:', this.locationName);
    
    // Make API call using HttpClient
    this.http.get('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/' +this.locationName +'?unitGroup=us&key=3C8TRCWYPKSPU83H6U8CJ5CUR&contentType=json')
      .subscribe(response => {
        // Handle API response
        this.navigateToDetailPage(response);
        
      }, error => {
        // Handle API error
        console.error('API error:', error);
        // Perform error handling or display error message
      });
  }

  navigateToDetailPage(responseData: any) {
    // Pass the response data to the detail page
    this.router.navigate(['/detail'], { state: { data: responseData } });
  }
}