
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ContentPageLayout } from "@/components/layout/content-page-layout";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy - aonflow',
    description: 'Our privacy policy page provides clarity and reassurance regarding the handling of personal information. Discover how we collect, use, and safeguard data to protect your privacy.',
    alternates: {
        canonical: 'https://www.aonflow.com/privacy-policy',
    },
};

export default function PrivacyPolicyPage() {
  return (
    <ContentPageLayout
      title="Privacy Policy"
      subtitle="Updated 23rd June 2023"
    >
      <Card className="bg-white/50 backdrop-blur-sm">
        <CardContent className="pt-6">
          <p className="text-muted-foreground mb-4">
            This Privacy Policy details the ways in which Dax Software Solutions, Inc. (referred to as “Aonflow”, "we" or "us") collects, uses, shares, and safeguards personal information about individuals (referred to as "you" or "yours") when you utilize our websites and services.
          </p>
          <p className="text-muted-foreground mb-4">
            This Privacy Policy does not cover the ways in which we handle the personal information of business customers who subscribe to Aonflow's business integration and automation Service, or end users who access the Aonflow Services through a third party with an embedding license agreement with us. We handle the said information as a service provider/processor and our handling of the same is guided by our agreement with these business customers.
          </p>
          <p className="text-muted-foreground">
            It is important to read this Privacy Policy before submitting any personal information to Aonflow. If you have any questions, please contact us. By giving us your personal information, you are consenting to the practices outlined in this Privacy Policy. If you do not agree with the terms of this Privacy Policy, please do not provide us with any personal information.
          </p>
        </CardContent>
      </Card>
      
      <Card className="bg-white/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>1. Definitions</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4 text-muted-foreground list-disc pl-5">
            <li><strong>Services or Service</strong> refers to the websites as well as Aonflow's platform, tools, documentation, educational systems, and related services for application integration and automation.</li>
            <li><strong>Sites</strong> include www.aonflow.com and any other websites under the Aonflow.com domain.</li>
            <li><strong>Users</strong> include individuals who use or interact with the Sites.</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="bg-white/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>2. Personal Information We Collect</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            We gather personal information about you when you voluntarily provide it to us and when third parties such as our business partners or service providers give it to us. The following sections describe the types of data we collect:
          </p>
          <h3 className="font-bold mb-2 text-foreground">A. Contact and Related Information</h3>
          <p className="text-muted-foreground mb-4">
            We may collect contact information and other personal information from website visitors from different sources, including offline marketing activities. You can provide this information to us by submitting it. In some cases, we may gather information about you from other sources, such as third parties from whom we purchase personal information, and from publicly available information, such as information published on social media sites, to the extent permitted by applicable law, and we may combine that information with personal information provided by you.
          </p>
          <p className="text-muted-foreground mb-4">The personal information may include:</p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
            <li>Name</li>
            <li>Phone number</li>
            <li>Title/Role</li>
            <li>Company name</li>
            <li>Physical Address</li>
            <li>Additional email addresses</li>
            <li>Social media IDs and profiles</li>
            <li>IP address</li>
            <li>Device ID</li>
            <li>Browsing and/or search history</li>
          </ul>
          <p className="text-muted-foreground mb-4">For example, we may collect this information when you:</p>
           <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
            <li>Provide contact information online, such as when you download or subscribe to Aonflow content, register for an Aonflow event, attend a webinar, or take a course.</li>
            <li>Visit a website and the information is supplied to us by a cookie or other tracking technology. A cookie is a small text file that collects and tracks certain technical information. For more information about the information collected from cookies and related tracking technologies, as well as your rights and options with respect to these technologies, please see our Cookie Policy.</li>
          </ul>

          <h3 className="font-bold mb-2 text-foreground">B. Form, Chat, and Email Data</h3>
          <p className="text-muted-foreground mb-4">
            You may voluntarily submit personal information to us through web forms and other online communication systems such as email and chat applications, and we will keep and use this information. This can include your name, job title, company name, address, phone number, and email address.
          </p>
          <p className="text-muted-foreground mb-4">
            The websites include public blogs and community forums where you may submit content. If you choose to post in a public area of our websites, any personal information or other content that you voluntarily disclose becomes available to both Aonflow and the general public.
          </p>

          <h3 className="font-bold mb-2 text-foreground">C. Usage Data</h3>
           <p className="text-muted-foreground mb-4">
            Aonflow automatically collects and stores non-identifiable and aggregated data, statistics and metrics derived from Users’ activities when they visit Aonflow’s Sites. This includes using Google Analytics, a web analytics service provided by Google, Inc. (“Google”) that uses cookies to analyze how users use the Site and improve their experience. For more information on how Google uses this information, click here. You can find more information about cookies and similar technologies in our Cookie Policy.
          </p>
          <p className="text-muted-foreground">
            Aonflow also keeps system log files which may include internet protocol addresses, browsers, internet service providers, pages visited within Aonflow’s Sites, referring/exit pages, search terms, operating system, date/time stamp, and clickstream data.
          </p>
        </CardContent>
      </Card>
      
      <Card className="bg-white/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>3. The Use & Sharing of Personal Information</CardTitle>
        </CardHeader>
        <CardContent>
            <h3 className="font-bold mb-2 text-foreground">Use by Aonflow</h3>
            <p className="text-muted-foreground mb-4">Aonflow gathers and keeps personal information for the following reasons:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                <li>To send marketing communications to you (if you have not chosen to opt out of receiving them. For more information, please refer to section 5 ('Correcting, Updating or Deleting Your Information');</li>
                <li>To be able to respond to inquiries that you submit to us;</li>
                <li>To analyze and review the usage of our website for internal purposes, in order to enhance our marketing efforts and outreach to visitors and potential customers, and to improve the content and features of our website; fulfill legal requirements, lawful requests and legal process, such as responding to subpoenas or requests from government authorities;</li>
                <li>To safeguard our intellectual property rights and your or others’ privacy rights in relation to the use of our websites, (including by initiating and defending legal actions);</li>
                <li>To evaluate our internal processes to ensure they conform to legal requirements and internal policies; and to prevent, detect, investigate and deter fraudulent, harmful, unauthorized, unethical or illegal activity, including cyberattacks and identity theft.</li>
            </ul>
            <p className="text-muted-foreground mb-4">If provided, Aonflow may utilize your phone number to contact you through calls or texts to provide support to you.</p>

            <h3 className="font-bold mb-2 text-foreground">A. Third-Party Service Providers</h3>
            <p className="text-muted-foreground mb-4">
              Aonflow shares personal information with its affiliates and other third-party service providers (such as learning management systems, support services, and hosting partners) to provide the necessary technology and services to operate the website and provide a high-quality user experience.
            </p>
            <p className="text-muted-foreground mb-4">
              Aonflow may also store personal information in internal third-party marketing, customer relationship management (“CRM”) programs, and mail-management software to facilitate interactions with users or potential customers and for Aonflow’s sales and marketing purposes.
            </p>
            <p className="text-muted-foreground mb-4">
              When Aonflow shares personal information with third parties acting as service providers or "agents" working on behalf of Aonflow, it requires them to properly safeguard personal information and treat it as confidential.
            </p>

            <h3 className="font-bold mb-2 text-foreground">B. Other Information Sharing</h3>
            <p className="text-muted-foreground mb-4">
                Apart from the aforementioned reasons, we may disclose personal information in response to legal requests such as subpoenas, court orders, or legal process, or to assert or protect our legal rights or defend against legal claims. Additionally, we may share such personal information if we believe it is necessary to investigate, prevent or take action regarding illegal activities, suspected fraud, situations that may pose threat to the safety of any person, or as otherwise mandated by law.
            </p>
            <p className="text-muted-foreground mb-4">
                If we are involved in a merger, acquisition, financing due diligence, reorganization, bankruptcy, receivership, dissolution, or sale of all or a portion of our assets, (collectively a “Transaction”), your personal information and other information may be shared during the process with representatives or counterparties and others assisting with the Transaction and transferred to a successor or affiliate as part of that Transaction along with other assets.
            </p>
            <p className="text-muted-foreground">
                Furthermore, we may share information, including personal information with our and other Affiliates as updated periodically for operational, administrative, marketing, and support purposes.
            </p>
        </CardContent>
      </Card>

      <Card className="bg-white/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>4. Links to Other Websites</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            The website contains links to other websites and applications, including those operated by affiliates and other third parties. Aonflow does not control and is not responsible for the privacy practices or content of these websites and applications owned or operated by third parties. Your browsing and interactions on any third-party website or service, including those that have a link on our website, are subject to the terms and conditions and policies of that third party. We advise you to read the privacy statements and other terms and conditions of third-party websites linked to the website.
          </p>
        </CardContent>
      </Card>
      
      <Card className="bg-white/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>5. Correction, Updation, and Deletion of Your Information</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            We have implemented internal policies for the deletion of data that customers provide to us or that we obtain from other sources as mentioned in Section 2A. We will also respond to requests to delete personal information that may be held within our systems, to the extent possible and with the limitation that some information may need to be retained for legal or archival purposes(see the “Data Retention” section of this Policy for further details). Note that if you remove or request the removal of information that you posted in a public area of the Service, copies may remain viewable in cached and archived pages of the Service, or if other Users have copied or saved that information. Therefore, in some cases, we may not be able to delete your personal information completely.
          </p>
          <p className="text-muted-foreground">
            To request to remove, delete, correct, or update your personal information, please reach out to us at contact@aonflow.com.
          </p>
          <p className="text-muted-foreground mt-4">
            Additionally, if you are an Aonflow User and would like to stop receiving marketing communications from Aonflow, please reach out to us at contact@aonflow.com or follow the unsubscribe instructions provided in the marketing emails. Users in the EU and some other regions have more specific and additional rights regarding their personal information: refer to sections 10 and 11 for more information.
          </p>
        </CardContent>
      </Card>
      
      <Card className="bg-white/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>6. Data Retention</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Aonflow will keep your personal information for a period of time that is consistent with the original purpose of collecting it (as described in the "The Use & Sharing of Personal Information" section) or for as long as necessary to comply with legal obligations, maintain accurate accounting, financial and other operational records, or resolve disputes. The retention time of personal information is determined based on the amount, nature, and sensitivity of the personal information, the potential risk of harm from unauthorized use or disclosure of the personal information, whether we can achieve the purposes of the processing through other means, and on the basis of applicable legal requirements (such as applicable statutes of limitation). Once the retention period has expired, your personal information will be deleted.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-white/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>7. Data Breach Notification & Incident Management</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            If Aonflow is made aware of and determines that an incident involving personal information qualifies as a breach of security leading to the misappropriation, accidental or unlawful destruction, loss, alteration, unauthorized disclosure of, or access to, personal information that compromises the security, confidentiality or integrity of such personal information, Aonflow will promptly investigate any such incident and take all necessary measures within 48 hours to contain and mitigate the effects of the breach. This may include, but is not limited to, blocking access to affected systems or accounts, changing passwords, and notifying the relevant authorities, as required by applicable law.
          </p>
          <p className="text-muted-foreground mb-4">
            In the event of a data breach that may affect our users, Aonflow will notify affected users as soon as possible, providing details of the breach, the type of information that may have been compromised, and any steps that users can take to protect themselves.
          </p>
          <p className="text-muted-foreground mb-4">
            Please note that while Aonflow takes all reasonable measures to protect personal information, no data transmission over the internet can be guaranteed to be completely secure. Therefore, Aonflow cannot guarantee the security of any information transmitted to or from the site, and users do so at their own risk.
          </p>
          <p className="text-muted-foreground">
            If you have any questions or concerns about our data breach notification and incident management policies, please contact us at Dax Software Solutions, Inc. 6303 Owensmouth Ave, 10th floor, Woodland Hills, CA 91367.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-white/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>8. International Transfers</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Aonflow may store and process user data in various locations within and outside of the US. Some personal information may be transferred to the US or other countries for processing, including chat messages and emails sent to us. Information regarding specific data protection rights of users in the UK and European Economic Area (EEA) can be found in section 12.
          </p>
        </CardContent>
      </Card>
      
      <Card className="bg-white/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>9. Security Measures</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            We take steps to protect personal information using appropriate technical and organizational measures based on the type of information and processing activity. However, it is not possible for any internet or email transmission to be completely secure. Therefore, special care should be taken when deciding what information is being sent to us via e-mail or chat. The user is responsible for selecting and using any privacy settings or security features on the sites or any third-party applications.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-white/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>10. Children's Personal Information</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Aonflow does not collect any personal information from children under the age of thirteen (13). Parents and legal guardians should monitor their children's Internet usage and instruct them not to provide personal information on our website without permission. If a child under 13 has provided personal information to Aonflow, please contact us and we will make efforts to delete that information from our databases.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-white/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>11. Notice to California Residents</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            Residents of California are entitled to request a notice from us that identifies the categories of personal information that we share with our affiliates and/or third parties for marketing purposes, along with the contact information for these affiliates and/or third parties, according to California Civil Code sections 1798.83-1798.84. To request a copy of this notice, California residents can send a written request to contact@aonflow.com or to Dax Software Solutions, Inc., 6303 Owensmouth Ave, 10th floor, Woodland Hills, CA 91367, mentioning “Attn: Legal” in the subject line.
          </p>
          <p className="text-muted-foreground mb-4">
            In addition, as per the California Consumer Privacy Act of 2018 (“CCPA”), we are obliged to provide California residents with information about how we gather, utilize and share their personal data, as well as the rights and options available to them in relation to our handling of their personal information. This act defines “personal information as any data that can be linked, directly or indirectly, to a specific individual or household and can identify, describe, or be associated with that person or household.”
          </p>
          <p className="text-muted-foreground mb-4">
            This CCPA notice does not apply to individuals who are interacting with Aonflow in their capacity as representatives of a business that provides services to or receives services from Aonflow.
          </p>
          <h3 className="font-bold mb-2 text-foreground">Collection, Use, and Disclosure of Personal Information</h3>
          <p className="text-muted-foreground mb-4">
            The way we gather and utilize personal information, as well as the types of information we collect, is outlined in the "Personal Information We Collect" section of the Services Privacy Policy. The reasons for using and sharing this information can be found in the "Use and Sharing of Personal Information" section of the Privacy Policy.
          </p>
          <h3 className="font-bold mb-2 text-foreground">California Privacy Rights</h3>
          <p className="text-muted-foreground mb-4">
            California residents, as per the provisions of the law and subject to any exceptions, have the following privacy rights in relation to the personal information we collect from them:
          </p>
          <ul className="space-y-2 text-muted-foreground list-disc pl-5 mb-4">
            <li>The right to request and receive information about the types of personal information that Aonflow has collected about them, where that information came from, why it was collected, and who it was shared with.</li>
            <li>The right to request the deletion of any personal information that has been collected about an individual by Aonflow.</li>
            <li>The right to choose not to/opt out to have your personal information sold, with the clarification that Aonflow does not engage in the sale of personal information as defined by the California Consumer Privacy Act and its supplementary regulations.</li>
            <li>The right to not be discriminated against for exercising your privacy rights as provided by California law.</li>
            <li>The right to have protection against the relinquishing or giving up of any rights related to the personal information collected by us.</li>
          </ul>
          <p className="text-muted-foreground mb-4">
            You can contact us to exercise your rights under the CCPA by emailing to contact@aonflow.com. You can do this yourself or through an authorized agent who meets CCPA requirements. When you exercise your rights, we may need to contact you to verify your identity and gather additional information to process your request. We will not fulfill your request unless we have enough information to verify that you are the person whose information you are requesting and enough details to process the request.
          </p>
          <p className="text-muted-foreground">
            Please Note: Our websites do not currently respond to browser "Do Not Track" signals and we collect and use data as outlined in this Privacy Policy regardless of whether a DNT signal is received. If this changes in the future, we will update this Privacy Policy to reflect it.
          </p>
        </CardContent>
      </Card>
      
      <Card className="bg-white/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>12. Notice to European Users</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            If you are a User located within the European Economic Area (EEA) or the United Kingdom, additional provisions in regard to the handling of your personal data apply. Aonflow is responsible for the collection and management of your personal information.
          </p>
          <h3 className="font-bold mb-2 text-foreground">A. Legal Bases For Processing</h3>
          <p className="text-muted-foreground mb-4">We must specify the legal reasons for handling personal data concerning you. We handle personal data for the following reasons:</p>
          <ul className="space-y-2 text-muted-foreground list-disc pl-5 mb-4">
            <li><strong>Legitimate Interest:</strong> We process certain types of personal data when we believe it serves our interests or those of others, or your own interests. We will only use our legitimate interests as a reason for processing personal data after considering the impact on individuals and balancing it against our own interests and rights.</li>
            <li><strong>Profile Data</strong></li>
            <li><strong>Online Email, Chat Data, and Form</strong></li>
            <li><strong>Usage Data</strong></li>
          </ul>
          <p className="text-muted-foreground mb-4">These legitimate interests include:</p>
          <ul className="space-y-2 text-muted-foreground list-disc pl-5 mb-4">
            <li>Providing the Sites to Users: processing personal data in order to provide access to the website and its features to users.</li>
            <li>Responding to inquiries, comments, feedback or questions: processing personal data in order to respond to and communicate with users who reach out to us with queries or feedback.</li>
            <li>Managing relationship with Users: processing personal data to manage our relationship with users, this includes sending information related to changes in policies and asking users to leave reviews or take surveys.</li>
            <li>Providing personalized and customized content: processing personal data to provide users with tailored content and information.</li>
            <li>Gaining insights and making improvements: processing personal data to gain insights about and make improvements to our business, products, and services.</li>
            <li>Administering and protecting our business: processing personal data to ensure the security of our IT systems and prevent fraud, criminal activity, or misuse of our Sites.</li>
            <li>Compliance with legal obligations and protecting rights: processing personal data to comply with legal obligations and protect our rights, privacy, safety or property, and/or that of our affiliates, you or other third parties.</li>
            <li><strong>Consent:</strong> processing personal data based on the explicit consent given by the user at the time of collection, such as in relation to the collection of information through the use of cookies and similar technologies other than strictly necessary technologies.</li>
            <li><strong>Other Processing Grounds:</strong> processing personal data to comply with legal obligations.</li>
          </ul>
          
          <h3 className="font-bold mb-2 text-foreground">B. Your Personal Data Rights</h3>
          <p className="text-muted-foreground mb-4">
            Processing personal data to provide users with certain rights regarding their personal data, such as the right to access, delete, and opt-out of the sale of personal information. Users can request these rights by emailing contact@aonflow.com. In certain situations, we may require additional information from you in order to confirm your identity and understand the nature of your request. This information may include personal data.
          </p>
          <ul className="space-y-2 text-muted-foreground list-disc pl-5 mb-4">
            <li><strong>Access:</strong> You can ask for more information about how we handle your personal data and request a copy of it by contacting us at contact@aonflow.com.</li>
            <li><strong>Rectification:</strong> If you think any personal data we have about you is incorrect or incomplete, you can ask us to correct or complete it by contacting us at contact@aonflow.com.</li>
            <li><strong>Erasure:</strong> You can request that we delete some or all of your personal data from our systems.</li>
            <li><strong>Withdrawal of Consent:</strong> If we are processing your personal data based on your consent, you have the right to withdraw your consent at any time.</li>
            <li><strong>Objection:</strong> You can contact us to let us know that you object to us using or sharing your personal data for certain purposes by sending a request to contact@aonflow.com.</li>
            <li><strong>Restriction of Processing:</strong> You can ask us to stop processing your personal data by sending a request to contact@aonflow.com.</li>
            <li><strong>Right to File Complaint:</strong> You have the right to file a complaint about our handling of your personal data with your local regulator. If you are from the UK and believe that we handle your personal data in accordance with applicable laws relating to personal data in the UK, you may direct questions or complaints to the concerned supervisory authority.</li>
          </ul>

          <h3 className="font-bold mb-2 text-foreground">C. Transfer of Personal Data</h3>
          <p className="text-muted-foreground">
            Our Site is accessible in various regions, including the United States, the EEA and the UK. However, as described in section 3, some personal data may be collected, transferred to, and stored by us in the United States, and by service providers based in the United States, as necessary for providing the Site and for the business purposes outlined in this Privacy Policy. Data protection laws in the US may be less stringent or different from where you live. Where required by law, we will ensure that the recipient of your personal data offers an adequate level of protection and security, for example, by entering into standard contractual clauses or an alternative mechanism for data transfer as approved by the European Commission (Art. 46 GDPR) or other applicable regulators.
          </p>
        </CardContent>
      </Card>
      
      <Card className="bg-white/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>13. Modifications/Amendments to the Privacy Policy</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            We may update this policy occasionally at our discretion. We will update the date at the top of the policy when changes are made. Any updates to the policy take effect immediately after being posted. If there are any significant changes, we will notify you through email or by posting a notice on the website. We recommend checking this page regularly for updates on our privacy practices. By continuing to use the website, you agree to any changes made to the policy. Your only option if you do not agree with the policy is to stop using the website.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-white/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>14. Contact Us</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            If you have questions or queries with respect to this Policy or about Aonflow’s privacy practices, or wish to file any complaint, please send your inquiries to contact@aonflow.com. We will respond to your inquiries in a timely manner and will do our best to address any concerns you may have about our privacy practices.
          </p>
          <p className="text-muted-foreground">
            You may also write to:<br/>
            Dax Software Solutions, Inc.<br/>
            Attention: Aonflow Privacy Team<br/>
            6303 Owensmouth Ave, 10th floor, Woodland Hills, CA 91367<br/>
            Email address: contact@aonflow.com
          </p>
        </CardContent>
      </Card>

      <div className="text-center my-12">
        <h2 className="text-2xl font-bold">Aonflow Service Privacy Policy</h2>
        <p className="text-muted-foreground">Updated 23rd June 2023</p>
      </div>

       <Card className="bg-white/50 backdrop-blur-sm">
        <CardContent className="pt-6">
            <p className="text-muted-foreground mb-4">
                This Privacy Policy does not cover how we handle the personal information of consumers or end customers of our business customers. In that case, we process that information on behalf of our business customers as a service provider/processor, and it is subject to the agreement between us and our business customers.
            </p>
            <p className="text-muted-foreground mb-4">
                It is important for you to read the Services Privacy Policy before using our Services, or before submitting any personal information to Aonflow. If you have any questions, please contact us. By using the Services or providing personal information to us, you are agreeing to the practices described in this policy. If you do not agree with this policy, please do not use the Services or provide any personal information to us.
            </p>
            <p className="text-muted-foreground">
                This Services Privacy Policy is an important part of our Terms of Service, which can be found on the following page: https://www.aonflow.com/terms-of-use
            </p>
        </CardContent>
      </Card>

       <Card className="bg-white/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>1. Definitions</CardTitle>
        </CardHeader>
        <CardContent>
            <p className="text-muted-foreground">
                The term "Services" or "Service" refers to the websites under the Aonflow.com domain, as well as Aonflow's platform for application integration and automation, tools, mobile apps, educational systems, and related services. These websites include www.aonflow.com. "Users" refers to both subscribers of Aonflow's SaaS application integration platform, and those who use or otherwise interact with the websites and services. Any other capitalized terms that are not defined above can be found in the https://www.aonflow.com/terms-of-use.
            </p>
        </CardContent>
      </Card>

       <Card className="bg-white/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>2. Personal Information We Collect</CardTitle>
        </CardHeader>
        <CardContent>
            <p className="text-muted-foreground mb-4">We gather personal information about you in a variety of ways, including when you directly provide it to us, when third parties like our business partners or service providers give it to us, or when it is automatically collected in connection with your use of our Services. The following sections explain the types of data we gather:</p>
            
            <h3 className="font-bold mb-2 text-foreground">"Essential Account Data"</h3>
            <p className="text-muted-foreground mb-4">Is information that we receive directly from you when you create an account, including but not limited to your name, email address, and password.</p>

            <h3 className="font-bold mb-2 text-foreground">Profile Information and Billing Information</h3>
            <p className="text-muted-foreground mb-4">We may gather contact information and other personal information related to the current and potential customers from various sources, including offline marketing efforts. You may voluntarily give us this information by submitting it to us. Additionally, we may collect information about you from other sources, including third-party companies we purchase personal information from, and publicly available information such as what is posted on social media sites, subject to the applicable laws and regulations. We may also combine this information with the personal information that you have provided. This personal information may include:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                <li>Name</li>
                <li>Phone number</li>
                <li>Role/Title</li>
                <li>Company name</li>
                <li>Physical Address</li>
                <li>Additional email addresses</li>
                <li>Social media profiles & IDs</li>
                <li>Photographs that you submit to us</li>
                <li>IP address</li>
                <li>ID of your Device</li>
                <li>Browsing and/or search history</li>
            </ul>
            <p className="text-muted-foreground mb-4">We may collect personal information when:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                <li>You fill in the optional fields of an Aonflow Account profile</li>
                <li>You provide contact information online, such as when filing a support ticket, subscribing toAonflow’s newsletter, registering for an Aonflow event, or taking a course.</li>
                <li>You visit a website and information is supplied to us by a cookie or other tracking technology.</li>
            </ul>
            <p className="text-muted-foreground mb-4">We maintain a record of Service subscriptions, invoices, billing, and payment information for all paying users.</p>
            <p className="text-muted-foreground mb-4">Note: See our Cookie Policy for a description of the information collected from cookies and related tracking technologies, and your rights and options with respect to these technologies.</p>
            <p className="text-muted-foreground mb-4">For users who pay using a credit card, a third-party payment sub-processor listed on https://www.aonflow.com/sub-processors will handle the credit card information. We will gather and link the payment information with a Subscription ID, but we do not keep or store any credit card information with us. If you have any queries about how our sub-processor safeguards the data it receives from users, please refer to its website at https://www.aonflow.com/sub-processors.</p>

            <h3 className="font-bold mb-2 text-foreground">Connection Data</h3>
            <p className="text-muted-foreground mb-4">If you access our website or service through a third-party service (such as logging in with Google or Salesforce credentials) or connect an application to Aonflow, such a third-party may share certain information about your use of their service with Aonflow. This information could include but is not limited to: the user ID associated with your account, an access token necessary to access that service, any information that you have allowed the third-party service to share with us, and any information you have made public in connection with that third-party service, such as a user profile. The type and amount of information we would receive shall depend on the policies and settings of your account with the said third-party service provider.</p>
            
            <h3 className="font-bold mb-2 text-foreground">Email, Chat Data, Form</h3>
            <p className="text-muted-foreground mb-4">You may choose to give us information through various means such as web forms and online communication systems including email and chat applications. This information may include personal details such as your name, job title, company name, address, phone number, and email address. This information will be retained and processed by us.</p>
            <p className="text-muted-foreground mb-4">Our Service and Sites have publicly accessible blogs and community forums where you can submit content. If you decide to post in a public area of our Service or Sites, any personal information or other content that you voluntarily share will become available to both Aonflow and the general public.</p>

            <h3 className="font-bold mb-2 text-foreground">Usage Data</h3>
            <p className="text-muted-foreground mb-4">Aonflow will collect and compile statistical and other information related to the performance, operation, and usage of the platform by account holders, as well as data related to identifiable users' usage of features and functionality within the Aonflow platform. "Usage Data," which includes both Clause and Clause is used to provide the services during the agreement and for creating statistical analyses, research and product development purposes, both during and after the term of the agreement. It is important to note that Usage Data does not include any data processed on the Aonflow platform. Aonflow shall own and retain all the rights to the Usage Data, and may use it during and after the term for the purposes of operating, maintaining, improving the platform and fulfilling its obligations.</p>
            <p className="text-muted-foreground">Aonflow also keeps system log files that may include information such as internet protocol addresses, browser types, internet service providers, pages visited within Aonflow's websites, referring/exit pages, search terms, operating systems, date/time stamps, and clickstream data.</p>
        </CardContent>
      </Card>
      
       <Card className="bg-white/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>3. The Use & Sharing of Personal Information: Usage by Aonflow</CardTitle>
        </CardHeader>
        <CardContent>
          <h3 className="font-bold mb-2 text-foreground">A. Usage by Aonflow</h3>
          <p className="text-muted-foreground mb-4">Aonflow collects and maintains personal information to:</p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
            <li>Provide its service to users;</li>
            <li>Provide support and maintenance for the services;</li>
            <li>Provide personalized content to users;</li>
            <li>Contact and communicate with you about the service and your use of the service, including by sending you announcements, updates, security alerts, and support and administrative messages;</li>
            <li>Initiate billing or payments for Aonflow products and/or services, according to the terms of your payment agreement with us;</li>
            <li>Send you marketing information, depending on whether you have opted out of receiving such communications;</li>
            <li>Troubleshoot problems and provide support;</li>
            <li>Analyze usage of our services for internal purposes, to improve our marketing, outreach to customers, and improve the content and functionality of the service;</li>
            <li>Comply with applicable laws, lawful requests, and legal process, such as to respond to subpoenas or requests from government authorities;</li>
            <li>Protect our intellectual property rights, your or others’ privacy rights in connection with your use of the services, (including by making and defending legal);</li>
            <li>Audit our internal processes for compliance with legal and contractual requirements and internal policies;</li>
            <li>Enforce our Terms of Services;</li>
            <li>Prevent, identify, investigate and deter fraudulent, harmful, unauthorized, unethical or illegal activity, including cyberattacks and identity theft.</li>
          </ul>
          <p className="text-muted-foreground mb-4">Please note that we will never email you to ask for your account information. If you receive such an email, please forward it to contact@aonflow.com.</p>
          <p className="text-muted-foreground">If provided, Aonflow may use your cell phone number to contact you via call or text message in order to provide the service.</p>

          <h3 className="font-bold my-4 text-foreground">B. Educational Certifications</h3>
          <p className="text-muted-foreground">When you take part in any program or request certification in any educational offerings provided by Aonflow, we may, with your consent, show information about your participation and completion of activities for certification purposes. This information may be shared by Aonflow for marketing or promotional purposes, and may be disclosed to other users, including the admin in your company, organization or team, who are also part of the services, as allowed by law.</p>
          
          <h3 className="font-bold my-4 text-foreground">C. Testimonials</h3>
          <p className="text-muted-foreground">Occasionally, we may post testimonials from users on our websites that may include personal information. Before posting any personal information along with your testimonial, we will always obtain your consent.</p>

          <h3 className="font-bold my-4 text-foreground">D. Third-Party Service Providers</h3>
          <p className="text-muted-foreground mb-4">Aonflow shares personal information with its affiliates and third-party service providers such as credit card processors, learning management systems, support services and hosting partners to provide the necessary hardware, software, networking, storage and other services required to operate the service and maintain a high-quality user experience.</p>
          <p className="text-muted-foreground">Aonflow may store personal information in internal third-party marketing, customer relationship management (“CRM”) programs and mail-management software for the purpose of facilitating interactions with users or potential customers and for Aonflow’s sales and marketing purposes.</p>
          <p className="text-muted-foreground">When Aonflow shares personal information with third parties who are acting as service providers or "agents" on behalf of Aonflow, it requires them to protect the personal information and treat it as confidential.</p>

          <h3 className="font-bold my-4 text-foreground">E. Other Information Sharing</h3>
          <p className="text-muted-foreground mb-4">In addition to the purposes described above, we may also reveal personal information in response to legal requests, such as court orders or subpoenas, or to protect our rights or defend against legal claims. Moreover, we may share such personal information if it is necessary to investigate, prevent, or take action against illegal activities, suspected fraud, or threats to the safety of individuals, or to comply with our terms of service or other laws.</p>
          <p className="text-muted-foreground mb-4">If you are involved in an acquisition, a merger, financing due diligence, reorganization, bankruptcy, receivership, dissolution, sale of assets, or transition of service to another provider (referred to as a "Transaction"), your personal information and other information may be shared with parties involved in the transaction, such as representatives and counterparties, and may be transferred to a successor company or affiliate as part of the assets being transferred during the Transaction.</p>
          <p className="text-muted-foreground">We may also share data, including personal information, with our and other affiliate companies as updated regularly for administrative, operational, support, and marketing purposes.</p>
        </CardContent>
      </Card>

      <Card className="bg-white/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>4. Links to Other Websites</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Our Service includes links to websites and apps that are not operated by us, including those run by our affiliates and other third parties. We don't have control over the privacy policies or content of those websites and apps. Your interactions and browsing on any third-party website or service, including those that have a link on our website, are subject to that third party's terms and policies. We recommend you to read the privacy statements and other terms and conditions of third-party websites and apps linked to our Service every time you leave our Service to access such third-party websites.</p>
        </CardContent>
      </Card>

      <Card className="bg-white/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>5. Correction, Updation, or Deletion of Your Information</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">You can update or change the personal information you have provided to us by logging into the Service</p>
          <p className="text-muted-foreground mb-4">We have implemented internal procedures for the removal of customer data from accounts following the termination of a customer's subscription to our Service. We will also address requests to delete personal information that may be stored within our systems, to the extent that it is feasible, with the understanding that certain information may need to be retained (see the "Data Retention" section of this Policy for more information). It is important to note that if you remove or request the removal of information you posted in a public area of the Service, copies of that information may still be visible in cached or archived pages of the Service, or if other users have copied or saved that information. As a result, in some cases, we may not be able to completely delete or remove your personal information.</p>
          <p className="text-muted-foreground mb-4">To request the deletion, removal, correction, or updating of your personal information, please contact us at contact@aonflow.com.</p>
          <p className="text-muted-foreground mb-4">Additionally, If you are an Aonflow user and you want to opt-out of marketing communications from Aonflow, please contact us at contact@aonflow.com, or follow the unsubscribe instructions in the marketing emails. Users in the EU and some other jurisdictions have specific rights related to their personal information. See sections 10 and 11 for more information regarding the same.</p>
          <p className="text-muted-foreground">In some cases, such as instances of embedded functionality or when Aonflow does not have a direct relationship with the end-customers of a corporate user, we may process the personal data of our corporate user's end-customers on behalf of the corporate user in our capacity as a service provider/processor. If your data has been submitted to us by or on behalf of an Aonflow corporate user, and you would like to exercise any rights you may have under applicable data protection laws, please contact the relevant corporate user directly. As we only have access to the customer's data with their instructions, if you wish to make your request directly to us, please provide the name of the Aonflow corporate user who submitted your data to us. We will then forward your request to that corporate user, and provide them with any necessary support to respond to your request in accordance with our contract with the relevant corporate user.</p>
        </CardContent>
      </Card>
      
      <Card className="bg-white/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>6. Data Retention</CardTitle>
        </CardHeader>
        <CardContent>
            <p className="text-muted-foreground mb-4">Aonflow will keep your personal information for a period of time that is appropriate for the original purpose of collecting it (refer to the "Use and Sharing of Personal Information" section above), or as long as required to comply with our legal requirements, maintain accurate financial and other operational records, resolve disputes and implement our agreements.</p>
            <p className="text-muted-foreground mb-4">We decide on the appropriate retention period for personal information based on the quantity, type and sensitivity of the personal information being processed, the potential risk of harm from unauthorized use or disclosure of the personal information, whether we can achieve the purposes of the processing through other means, and on the basis of legal requirements (such as legal time limits).</p>
            <p className="text-muted-foreground mb-4">After the retention period expires, your personal information will be deleted.</p>
            <p className="text-muted-foreground">Details about retention periods for different parts of an Aonflow Account can be found in the Data Retention section of our online documentation. You can also reach out to us if you have any queries.</p>
        </CardContent>
      </Card>

      <Card className="bg-white/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>7. Data Breach Notification & Incident Management</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">If Aonflow discovers and determines that an incident which involves personal information constitutes a security breach that results in the wrongful access, alteration, destruction, loss, or unauthorized disclosure of personal information that compromises the security, confidentiality or integrity of such personal information, Aonflow will notify the Aonflow account holder within 48 hours of such breach.</p>
        </CardContent>
      </Card>

      <Card className="bg-white/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>8. International Transfers</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Aonflow provides an option to host and process customer data in certain non-U.S. locations. When selected, all Account Data (as defined in the agreement), including Account configurations, meta-data, and definitions of Recipes and related assets, and Transaction Data (as defined in the agreement), will be stored solely in the customer's selected region. However, some personal information may still be transferred to the U.S. or other places for processing, including chat messages, payment information, support tickets, e-mails to Aonflow support, Usage Data, information posted to blogs, and information collected in connection with our educational offerings. Additionally, recipes and connectors made public by an Aonflow user will be available globally. For more information that applies to users in the UK and EEA, please refer to Section 11.</p>
        </CardContent>
      </Card>
      
      <Card className="bg-white/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>9. Security Measures</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">We strive to protect personal information by using appropriate technical and organizational measures based on the type of personal information and the relevant processing activity, as outlined on our Security page. However, no internet or email transmission can ever be completely secure or error-free. In particular, emails sent to us may not be secure. Therefore, you should take extra care in deciding what information you wish to send us via email. It is your responsibility to choose and use any privacy settings or security capabilities within the Service, or Third-Party Applications.</p>
        </CardContent>
      </Card>

      <Card className="bg-white/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>10. Notice to California Residents</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">As per California Civil Code Sections 1798.83-1798.84, California residents have the right to request a notice from us that identifies the categories of personal information that we share with our affiliates and/or third parties for marketing purposes, along with the contact information for those affiliates and/or third parties. If you are a California resident and would like to receive this notice, please submit a written request to: contact@aonflow.com or Dax Software Solutions, Inc. 6303 Owensmouth Ave, 10th floor, Woodland Hills, CA 91367 mentioning “Attention: Legal” in the subject line.</p>
          <p className="text-muted-foreground mb-4">Furthermore, as per the California Consumer Privacy Act of 2018 (“CCPA”), we are obliged to provide this CCPA Notice to California residents to explain how we collect, use, and share their personal information, and the rights and choices we offer California residents regarding our handling of their personal information, which the CCPA currently defines as “information that identifies, relates to, describes, is reasonably capable of being associated with, or could reasonably be linked, directly or indirectly, with a particular consumer or household.”</p>
          <p className="text-muted-foreground mb-4">This CCPA Notice does not apply to individuals who engage with Aonflow in their capacity as representatives of businesses that may provide services to Aonflow, or to which Aonflow may provide its Services.</p>
          <p className="text-muted-foreground mb-4">Personal Information Collection, Use, and Disclosure We explain how we gather personal information, the types of personal information we gather, and the reasons we use and share this information in the "Personal Information We Collect" and "Use and Sharing of Personal Information" sections of our Services Privacy Policy.</p>
          <p className="text-muted-foreground mb-4">California Privacy Rights: California residents, to the extent allowed by law and subject to applicable exceptions, have the right to:</p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
              <li>Request information about the categories of personal information that Aonflow has collected about them.</li>
              <li>Request for specific pieces of personal information that Aonflow has collected about them, categories of sources from which the personal information was collected, the business or commercial purpose for collecting personal information, and categories of third parties with whom the business shares personal information.</li>
              <li>Request that any personal information collected about them by us be deleted.</li>
              <li>Opt-out of the sale of personal information. Note that we do not sell personal information we collect from you, as per the definition of "sale" in the CCPA and its supplementary regulations.</li>
              <li>California residents are protected against discrimination for exercising their rights.</li>
              <li>California residents have the right to protection against waiver of rights.</li>
          </ul>
          <p className="text-muted-foreground mb-4">You can exercise the rights described above by sending an email to contact@aonflow.com. You may exercise these rights on your own or through an authorized agent who meets the agency requirements of the CCPA. Once you exercise your rights, you consent to receive communication from us seeking information from you to verify your identity as the consumer from whom we have collected the personal information and any other information that is reasonably required to enable us to fulfill your request. We will not be able to fulfill your request unless you have provided sufficient information for us to reasonably verify that you are the consumer from whom we have collected personal information, as well as sufficient details necessary to help us handle the request.</p>
          <p className="text-muted-foreground">Please note that the Sites do not respond to browser "Do Not Track" (DNT) signals, and will operate as described in this Services Privacy Policy regardless of whether or not a DNT signal is received. In case we respond to DNT signals in the future, we will provide the details of how we do so in this Services Privacy Policy.</p>
        </CardContent>
      </Card>
      
      <Card className="bg-white/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>11. Notice to European Users</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">If you are a User located in the European Economic Area (the “EEA”) or the United Kingdom (the “UK”), the following provisions are in addition to the other policies in this Services Privacy Policy. Dax Software Solutions, Inc. is responsible for your personal data.</p>
          
          <h3 className="font-bold mb-2 text-foreground">A. Legal Bases For Processing</h3>
          <p className="text-muted-foreground mb-4">We are obligated to identify the legal grounds for processing personal data about you. We process personal data in the following ways:</p>
          <p className="text-muted-foreground mb-4"><strong>Contractual Necessity:</strong> We process certain categories of personal data as a matter of "contractual necessity", meaning that we need to process the data to fulfill our obligations under our Terms of Service with you, which allows us to provide you with the Services. When we process data due to contractual necessity, if you do not provide this personal data, you will be unable to use some or all parts of the Services that require this data.</p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
              <li>Essential Account Data</li>
              <li>Essential First-Party Cookies</li>
              <li>Billing Data</li>
              <li>Connection Data</li>
              <li>Email,Online Form, and Chat Data used for support services</li>
              <li>Usage Data required for billing purposes</li>
              <li>Account information for third-party services (e.g., if a User logs into the Services using a third party such as Google or Office 365).</li>
          </ul>
          
          <p className="text-muted-foreground mb-4"><strong>Legitimate Interest:</strong> We handle certain types of personal information if we believe it benefits us or others, or aligns with your interests. We will only use this legal basis after evaluating the impact on individuals and ensuring that our interests and rights outweigh any potential negative effects.</p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
            <li>Profile Data</li>
            <li>Email, Chat Data, and Online Form</li>
            <li>Usage Data</li>
          </ul>
          <p className="text-muted-foreground mb-4">These legitimate interests include:</p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
            <li>Providing the Sites to Users: processing personal data in order to provide access to the website and its features to users.</li>
            <li>Responding to inquiries, comments, feedback or questions: processing personal data in order to respond to and communicate with users who reach out to us with queries or feedback.</li>
            <li>Managing relationship with Users: processing personal data to manage our relationship with users, this includes sending information related to changes in policies and asking users to leave reviews or take surveys.</li>
            <li>Providing personalized and customized content: processing personal data to provide users with tailored content and information.</li>
            <li>Gaining insights and making improvements: processing personal data to gain insights about and make improvements to our business, products, and services.</li>
            <li>Administering and protecting our business: processing personal data to ensure the security of our IT systems and prevent fraud, criminal activity, or misuse of our Sites.</li>
            <li>Compliance with legal obligations and protecting rights: processing personal data to comply with legal obligations and protect our rights, privacy, safety or property, and/or that of our affiliates, you or other third parties.</li>
          </ul>
          <p className="text-muted-foreground mb-4"><strong>Consent:</strong> processing personal data based on the explicit consent given by the user at the time of collection, such as in relation to the collection of information through the use of cookies and similar technologies other than strictly necessary technologies.</p>
          <p className="text-muted-foreground mb-4"><strong>Other Processing Grounds:</strong> processing personal data to comply with legal obligations.</p>

          <h3 className="font-bold mb-2 text-foreground">B. Your Personal Data Rights</h3>
          <p className="text-muted-foreground mb-4">Processing personal data to provide users with certain rights regarding their personal data, such as the right to access, delete, and opt-out of the sale of personal information. Users can request these rights by emailing contact@aonflow.com. In certain situations, we may require additional information from you in order to confirm your identity and understand the nature of your request. This information may include personal data.</p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
            <li><strong>Access:</strong> You can ask for more information about how we handle your personal data and request a copy of it by contacting us at contact@aonflow.com.</li>
            <li><strong>Rectification:</strong> If you think any personal data we have about you is incorrect or incomplete, you can ask us to correct or complete it by contacting us at contact@aonflow.com.</li>
            <li><strong>Erasure:</strong> You can request that we delete some or all of your personal data from our systems.</li>
            <li><strong>Withdrawal of Consent:</strong> If we are processing your personal data based on your consent, you have the right to withdraw your consent at any time.</li>
            <li><strong>Objection:</strong> You can contact us to let us know that you object to us using or sharing your personal data for certain purposes by sending a request to contact@aonflow.com.</li>
            <li><strong>Restriction of Processing:</strong> You can ask us to stop processing your personal data by sending a request to contact@aonflow.com.</li>
            <li><strong>Right to File Complaint:</strong> You have the right to file a complaint about our handling of your personal data with your local regulator. If you are from the UK and believe we handle your personal data in accordance with UK data protection laws, you can contact the Information Commissioner's Office.</li>
          </ul>

          <h3 className="font-bold mb-2 text-foreground">C. Transfer of Personal Data</h3>
          <p className="text-muted-foreground">Our Site is accessible in various regions, including the United States, the EEA, and the UK. However, as described in section 3, some personal data may be collected, transferred to, and stored by us in the United States, and by service providers based in the United States, as necessary for providing the Site and for the business purposes outlined in this Privacy Policy. Data protection laws in the US may be less strict or different from where you live. Where required by law, we will ensure that the recipient of your personal data offers an adequate level of protection and security, for example, by entering into standard contractual clauses or an alternative mechanism for data transfer as approved by the European Commission (Art. 46 GDPR) or other applicable regulators. Additionally, we transfer some of your personal information as deemed essential for fulfilling our obligations under the contract. (For more details on the specific type of personal information, refer to Section 11.A above.)</p>
        </CardContent>
      </Card>
      
      <Card className="bg-white/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>12. Amendments/Modifications to the Services Privacy Policy</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">We reserve the right to update and modify the policy at any time, and the date of the last update will be reflected at the top of the policy. Any changes made will be effective immediately upon posting. If significant changes are made to the policy, we will make an effort to notify users via email or a prominent notice on the website before the changes take effect. It is recommended that users review the policy periodically to stay informed about the company's privacy practices. By continuing to use the Service after updates to the Services Privacy Policy have been made, you are agreeing to be bound by any changes made to the Policy. If you do not agree to the terms of the Policy, your only option is to stop using the Service in its entirety.</p>
        </CardContent>
      </Card>

       <Card className="bg-white/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>13. Contact Us</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">If you have questions or queries with respect to this Policy or about Aonflow’s privacy practices, or wish to file any complaint, please send your inquiries to contact@aonflow.com. We will respond to your inquiries in a timely manner and will do our best to address any concerns you may have about our privacy practices.</p>
          <p className="text-muted-foreground">
            You may also write to:<br/>
            Dax Software Solutions, Inc.<br/>
            Attention: Aonflow Privacy Team<br/>
            6303 Owensmouth Ave, 10th floor, Woodland Hills, CA 91367<br/>
            Email address: contact@aonflow.com
          </p>
        </CardContent>
      </Card>

    </ContentPageLayout>
  );
}

    
