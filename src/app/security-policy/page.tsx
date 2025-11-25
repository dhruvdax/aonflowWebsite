
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ContentPageLayout } from "@/components/layout/content-page-layout";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Security Policy | Your data is Safe with aonflow',
    description: "Learn how Aonflow protects your data with a robust security policy designed to safeguard privacy and maintain compliance.",
    alternates: {
        canonical: 'https://www.aonflow.com/security-policy',
    },
};

export default function SecurityPolicyPage() {
  return (
    <ContentPageLayout
      title="Security Policy"
    >
      <Card className="bg-white/50 backdrop-blur-sm">
        <CardContent className="pt-6">
          <p className="text-muted-foreground">
            Aonflow is dedicated to ensuring the security and reliability of its integration and business automation service through the use of best-in-class security tools, technologies, and practices to maintain the confidentiality of customer information and ensure its availability when required.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-white/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>Compliance</CardTitle>
        </CardHeader>
        <CardContent>
          <h3 className="font-bold mb-2 text-foreground">1. SOC 2 Type 2</h3>
          <p className="text-muted-foreground mb-4">
            Aonflow has undergone a thorough Service Organization Controls 2 (SOC 2) Type 2 audit by a third-party evaluator certified by the American Institute of CPAs (AICPA) using the Trust Services Principles set by the AICPA to assess the effectiveness of the company's controls related to security, availability, processing integrity, online privacy, and confidentiality. Audit reports can be provided to current and potential customers under a non-disclosure agreement.
          </p>

          <h3 className="font-bold mb-2 text-foreground">2. PCI</h3>
          <p className="text-muted-foreground mb-4">
            Aonflow utilizes a PCI Compliant Level 1 audited payment processor, Stripe, to handle credit card payments for its services.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-white/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>3. Physical Security & Hosting Environment</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Aonflow's hosting is done on public cloud infrastructure provided by Amazon Web Services (AWS) that adhere to strict security standards for their data centers. More information about the security measures implemented by AWS can be found on their website: Aonflow supports hosting in various cloud regions, at the customer’s option.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-white/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>4. Network Security</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            The Aonflow website can only be accessed using HTTPS. This ensures that all traffic is encrypted and protected against unauthorized third-party interception. Aonflow adheres to current best practices for security, including the use of robust encryption algorithms with a key length of at least 128 bits.
          </p>
          <p className="text-muted-foreground mb-4">
            Aonflow also employs secure protocols for communication with external systems, such as HTTPS, SFTP, and FTPS. To connect to on-premise systems, an on-premises agent must be installed behind the firewall and it communicates with Aonflow over an encrypted link using the TLS 1.2 protocol.
          </p>
          <p className="text-muted-foreground">
            Aonflow implements a multi-tier architecture that separates internal application systems from the public internet. Public traffic to the website is routed through a Web Application Firewall (WAF) before being directed to internal systems running on private subnets. All network traffic, both internal and external, use secure encrypted protocols. Access to the network, both within the data center and between the data center and external services, is restricted by firewall and routing rules. Network access is logged in a centralized secure logging system.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-white/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>5. Authentication</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            Clients can access Aonflow using a password that is known only to them. Standards for password length, complexity, and expiration are strictly enforced. Passwords are not stored, instead, as per standard practice, only a secure hash of the password is saved in the database. This is computationally expensive, and the use of a "salting" method makes it hard for brute-force guessing attempts to be successful, and extremely difficult to reverse engineer the password even if the hash value is obtained by an unauthorized party.
          </p>
          <p className="text-muted-foreground mb-4">
            Aonflow users have the option to set up Two-Factor Authentication on their accounts through authenticator apps such as Google Authenticator, Microsoft Authenticator, or Authy. Additionally, the platform supports automatic session logout after a specified period of time with a configurable timeout range of 15 minutes to 14 days, allowing enterprises to set the appropriate timeout period according to their security needs.
          </p>
          <p className="text-muted-foreground mb-4">
            Aonflow allows integration with third-party Single Sign-On (SSO) systems that comply with the Security Assertion Markup Language (SAML) standard. This enables enterprises to manage access to Aonflow and other enterprise applications, as well as implement customized authentication schemes and policies. Aonflow recommends the use of SAML for authentication as a best practice.
          </p>
          <p className="text-muted-foreground mb-4">
            When Aonflow establishes connections to remote systems with user-supplied credentials, OAuth2 is used whenever possible, in which case no credentials need to be saved in the Aonflow system. However, if the remote system necessitates the storage of credentials, they are encrypted using a 256-bit key for added security.
          </p>
          <p className="text-muted-foreground">
            Aonflow recommends that customers use an integration-specific user identity (ISU) with the suitable entitlements/scopes for connection authentication for applications that are part of the recipes, as a best practice.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-white/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>6. Application Development & Testing</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Aonflow has a thorough software development process that takes into account security and privacy. The process includes design and code reviews as well as unit and integration testing. Additionally, the development team receives regular training on Secure Coding Practices, including avoidance of the most common web application vulnerabilities as identified by OWASP Top Ten.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-white/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>7. Vulnerability & Penetration Testing</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Aonflow regularly performs internal testing for vulnerabilities and also has hired a qualified third-party to perform regular platform-level vulnerability and penetration tests. The results are evaluated and vulnerabilities are addressed according to the level of risk and severity.
          </p>
        </CardContent>
      </Card>
      
      <Card className="bg-white/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>8. Data Privacy</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Aonflow has a publicly available privacy policy that outlines the types of personal information we collect, our management of this information, and the privacy rights of our customers.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-white/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>9. Transaction Data Retention and At-Rest Protection</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            All information on the Aonflow platform is encrypted both at rest and in transit. Data stored in the Aonflow system is encrypted at rest using a strong (AES-256) encryption algorithm. Aonflow has advanced key management features for securing customer data which includes double-encryption of transaction data. All data is encrypted with a global key managed by our cloud providers and these keys are rotated at least once a year. In addition, Aonflow encrypts data with secondary tenant-specific keys which are linked to the configured retention period for the data. A new key is generated on an hourly basis, and it is used to encrypt all data for a single customer within that hourly period. At the end of the configured retention interval, the key is deleted, effectively erasing the data by making it unreadable, and also reclaiming the data storage.
          </p>
          <p className="text-muted-foreground">
            Aonflow's Enterprise Key Management feature enables customers to use their own master encryption keys, managed within their AWS account, for encrypting data in the Aonflow platform. Aonflow also maintains a log of transactions for a limited period of time for the purpose of providing visibility into system activity, facilitating testing and debugging, allowing for the re-running of failed transactions, and supporting long-running transactions. The maximum retention period varies by Aonflow plan and the same could be configured in some plans. If desired, zero retention can be selected on a per-recipe basis, in which case data will be temporarily held in memory during processing. Additionally, Aonflow offers an optional add-on feature that allows for streaming transaction logs and audit history to an external customer-provided HTTPS endpoint for longer-term retention and/or analysis.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-white/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>10. Data Masking</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Aonflow offers the capability to mask sensitive data for added security. This feature is available on certain Aonflow plans and can be applied to specific steps in an Aonflow recipe (triggers or actions). Input and output of a masked step are not visible in the job history view within the Aonflow User Interface. Although masked trigger data must be persisted to support retry of a failed recipe, when masking is enabled for subsequent steps (action steps), data from those steps is only temporarily stored in memory.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-white/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>11. High Availability</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            Aonflow is created to provide high availability and robustness against service disruptions. Technical measures that are implemented to ensure high availability include operating Aonflow services on redundant clusters, using multiple redundant cloud Availability Zones, and continuously replicating the application database to a standby system.
          </p>
          <p className="text-muted-foreground">
            Aonflow has also implemented a Business Continuity and Disaster Recovery program which includes measures not only to guarantee the high availability of Aonflow's IT assets, but also contingency planning for possible disruptions or in case of natural disasters.
          </p>
        </CardContent>
      </Card>
      
      <Card className="bg-white/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>12. Incident Response</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            Aonflow has implemented a range of security and monitoring tools for its production systems. The systems are monitored 24/7 for security status, and automated alerts are set up for security and performance issues.
          </p>
          <p className="text-muted-foreground">
            Although Aonflow does not expect any breaches of its systems, it has put in place a Security Incident Response Plan that outlines roles, responsibilities, and procedures in the event of an actual or suspected security incident.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-white/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>13. Our Organization</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            All employees are subject to background checks that cover education, employment, and criminal history to the extent allowed by applicable local law(s). To work at Aonflow, employees are required to acknowledge in writing their roles and responsibilities for protecting user data and privacy. Aonflow follows the principle of least privilege for access, and all access and authorization rights are reviewed regularly. Access or authorization rights shall be withdrawn or modified promptly upon termination, or change of role. A mandatory information security training program is provided to all employees, and knowledgeable full-time security personnel are on staff.
          </p>
        </CardContent>
      </Card>
      
      <Card className="bg-white/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>14. Vulnerability Disclosure</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Aonflow encourages reports of vulnerabilities or other security issues. However, please note that our main focus is on issues that may impact authenticated users of our services rather than issues related to our public-facing sites, which are frequently hosted by third parties not associated with our services. Additionally, automated scanning of our sites is generally not allowed and may be blocked if detected. Vulnerability reports will be acknowledged and reporters will be apprised of the status of their report. Reports can be sent to contact@aonflow.com.
          </p>
        </CardContent>
      </Card>
    </ContentPageLayout>
  );
}
