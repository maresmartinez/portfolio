import { Component, OnInit } from '@angular/core';
import { TechnicalReport } from '../../models/TechnicalReport';

@Component({
  selector: 'app-reportoverviewlist',
  templateUrl: './reportoverviewlist.component.html',
  styleUrls: ['./reportoverviewlist.component.css']
})
export class ReportoverviewlistComponent implements OnInit {

  reports: TechnicalReport[];

  constructor() { }

  ngOnInit() {
    // TODO: Replace with dynamic way to populate reports... not sure how to do that yet
    this.reports = [
      {
        id: 1,
        title: 'Create a Raspberry Pi Web Server',
        description: 'Tutorial exploring the concepts behind HTTP and TCP. The practical portion shows how to install '
        + 'Apache2 onto a raspberry pi and turn it into a web server. After the web server is up and running, it is '
        + 'then visited by a client and the process is captured in Wireshark. The report explains the purpose of each '
        + 'of the packets.',
        routerLink: '/technicalwriting/raspberrypi',
        imgSrc: '/assets/images/CreateARaspberryPiWebServer/image009.png',
        imgAlt: 'Raspberry Pi terminal showing the file structure of a virtual directory for a website'
      },
      {
        id: 2,
        title: 'Set Up Active Directory Domain Services',
        description: 'Tutorial that gives instructions on how to transition a Windows Server 2012 GUI down to core, '
        + 'and then install Active Directory using PowerShell. It also shows how to create Active Directory '
        + 'Organizational Units, Security Groups, and Users.',
        routerLink: '/technicalwriting/setupadds',
        imgSrc: '/assets/images/SetUpADDS/image021.png',
        imgAlt: 'Prompts to enter the current password, and two fields to enter the new password, which should match'
      },
      {
        id: 3,
        title: 'Using Windows Domain Services',
        description: 'Tutorial that explains what Windows Domain Services (WDS) is, how it works, and specific use '
        + 'cases for it. The practical portion shows how to install Active Directory, configure DNS and DHCP, and add '
        + 'WDS. It also shows how to capture an image from another device, and push it to a blank computer.',
        routerLink: '/technicalwriting/usingwds',
        imgSrc: '/assets/images/UsingWDS/image016.png',
        imgAlt: 'Active Directory window to add roles and features. The role Windows Deployment Services is highlighted.'
      },
      {
        id: 4,
        title: 'Active Directory Domain Services Multi-Server Forest',
        description: 'Tutorial that shows how to set up an Active Directory forest that contains multiple domain '
        + 'controllers. It also gives the instructions for how to configure Active Directory Sites and Services with '
        + 'multiple subnets, inter-site transports, and locations. Finally, the domain will also be populated with '
        + 'Organizational Units, Security Groups, and Users using a domain controller in each different location.',
        routerLink: '/technicalwriting/addsforest',
        imgSrc: '/assets/images/ADDSForest/image001.png',
        imgAlt: 'Network diagram showing three sites, each with two servers, a switch, and one client. They are all '
        + 'connected to a router which is connected to another router which represents the Sheridan college network.'
      }
    ];
  }

}
