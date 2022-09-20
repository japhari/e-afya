import { Injectable } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { MatIconRegistry } from "@angular/material/icon";

@Injectable({
  providedIn: "root",
})
export class IconService {
  constructor(
    private domSanitizer: DomSanitizer,
    private matIconRegistry: MatIconRegistry
  ) {
    // Client Registration Module Icons
    matIconRegistry.addSvgIcon(
      "video",
      domSanitizer.bypassSecurityTrustResourceUrl(
        "../../../assets/svg-icons/video.svg"
      )
    );
    matIconRegistry.addSvgIcon(
      "add",
      domSanitizer.bypassSecurityTrustResourceUrl(
        "../../../assets/svg-icons/plus-sign.svg"
      )
    );
    matIconRegistry.addSvgIcon(
      "pharmacy",
      domSanitizer.bypassSecurityTrustResourceUrl(
        "../../../assets/svg-icons/pharmacy.svg"
      )
    );

    matIconRegistry.addSvgIcon(
      "sales",
      domSanitizer.bypassSecurityTrustResourceUrl(
        "../../../assets/svg-icons/sales.svg"
      )
    );

    matIconRegistry.addSvgIcon(
      "nurse",
      domSanitizer.bypassSecurityTrustResourceUrl(
        "../../../assets/svg-icons/nurse.svg"
      )
    );

    matIconRegistry.addSvgIcon(
      "bed",
      domSanitizer.bypassSecurityTrustResourceUrl(
        "../../../assets/svg-icons/bed.svg"
      )
    );

    matIconRegistry.addSvgIcon(
      "ward",
      domSanitizer.bypassSecurityTrustResourceUrl(
        "../../../assets/svg-icons/ward_management.svg"
      )
    );
    matIconRegistry.addSvgIcon(
      "dispensing",
      domSanitizer.bypassSecurityTrustResourceUrl(
        "../../../assets/svg-icons/dispensing.svg"
      )
    );
    matIconRegistry.addSvgIcon(
      "billing",
      domSanitizer.bypassSecurityTrustResourceUrl(
        "../../../assets/svg-icons/billing.svg"
      )
    );

    matIconRegistry.addSvgIcon(
      "triage",
      domSanitizer.bypassSecurityTrustResourceUrl(
        "../../../assets/svg-icons/triage.svg"
      )
    );

    matIconRegistry.addSvgIcon(
      "configuration",
      domSanitizer.bypassSecurityTrustResourceUrl(
        "../../../assets/svg-icons/configuration.svg"
      )
    );

    matIconRegistry.addSvgIcon(
      "patient_registration",
      domSanitizer.bypassSecurityTrustResourceUrl(
        "../../../assets/svg-icons/patient-registrations.svg"
      )
    );

    matIconRegistry.addSvgIcon(
      "reports",
      domSanitizer.bypassSecurityTrustResourceUrl(
        "../../../assets/svg-icons/reports.svg"
      )
    );

    matIconRegistry.addSvgIcon(
      "opd",
      domSanitizer.bypassSecurityTrustResourceUrl(
        "../../../assets/svg-icons/opd.svg"
      )
    );
    matIconRegistry.addSvgIcon(
      "system_administration",
      domSanitizer.bypassSecurityTrustResourceUrl(
        "../../../assets/svg-icons/settings.svg"
      )
    );
  }

  customerIcons = [];
}
