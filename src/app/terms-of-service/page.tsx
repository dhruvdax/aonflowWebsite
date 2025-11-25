
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ContentPageLayout } from "@/components/layout/content-page-layout";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms of Use & Service - aonflow',
    description: "Read the terms and conditions that govern your use of Aonflow's website and services.",
    alternates: {
        canonical: 'https://www.aonflow.com/terms-of-use',
    },
};

export default function TermsOfServicePage() {
  return (
    <ContentPageLayout
      title="Terms of Use & Service"
      subtitle="Updated 23rd June 2023"
    >
      <Card className="bg-white/50 backdrop-blur-sm">
        <CardContent className="pt-6">
          <p className="text-muted-foreground mb-4">
            This Agreement which consists of the "Terms of Use & Service'' and the Order Form, governs the use of the Aonflow Platform by the concerned account holder identified in the said Order Form, or by any individual or entity who opens an account or accesses the Aonflow Platform ("Account Holder"). This Agreement is the entire legal agreement between the Account Holder and Dax Software Solutions, Inc (referred to as "Aonflow") respect to the Account Holder’s  use of the Aonflow Platform. The parties agree as follows:
          </p>
          <p className="text-muted-foreground">
            This shall constitute a legally binding and enforceable contract between Dax Software Solutions, Inc. Aonflow and the person or entity (referred to as "Customer") using or accessing the services provided on the Aonflow Platform . By accessing or using the Aonflow Platform or related services, submitting an order form, or submitting registration information to open an account, the Account Holder acknowledges that the Account Holder has read, understands, and agrees to be bound by the Agreement (including all of the terms and conditions specified or referenced in this Agreement). Additionally, it shall be presumed that the concerned Account Holder / Customer has the authority to enter into this Agreement, and the represented entity shall be bound by the terms of this Agreement. If the said Account Holder / Customer does not agree to all the terms and conditions contained in this Agreement, or does not have the requisite authority to do so, the same or the entity they represent shall not be permitted to access or use the services provided on the Aonflow Platform in any manner whatsoever. This Agreement shall fully apply to the initial purchase(s) of the said service(s), and related support services, as well as any future purchases) made by the Account Holder / Customer..
          </p>
        </CardContent>
      </Card>
      
      <Card className="bg-white/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>1. Definitions</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4 text-muted-foreground list-disc pl-5">
            <li><strong>The "Aonflow Platform"</strong> means Aonflow's software platform and related interfaces, software development kits, services, and Documentation that provides Account Holder with access to certain products and services designed to connect applications and automate workflows.</li>
            <li><strong>"Recipe"</strong> means a set of commands given to the Aonflow Platform that instructs the Aonflow Platform to carry out certain actions across software applications based on the occurrence of a designated trigger event.</li>
            <li><strong>"Connectors"</strong> are instructions that allow the transfer of data between software applications through the Aonflow Platform using software scripts or application programming interfaces (“APIs”).</li>
            <li><strong>"Task(s)"</strong> means a unit of work performed each time a Recipe does an action (e.g., fetching data from an application by making an API call).</li>
            <li><strong>"Transaction"</strong> means the processing that occurs each time a Recipe job is run. Recipes and Connectors can be developed by Aonflow, the Account Holder, or third-party providers, including other users of the Aonflow Platform ("Users").</li>
            <li><strong>"Documentation"</strong> refers to the user guide, materials, description of the functionality and features of the Aonflow Platform that is made publicly available at a specific website. Aonflow may update the Documentation from time to time during the term of the Agreement, provided that such updates shall not result in a material degradation of the functionality, performance, availability, security or stability of the Aonflow Platform.</li>
            <li><strong>"Order Form"</strong> refers to the applicable order form entered into between the concerned Account Holder and Aonflow.</li>
            <li><strong>"Subscription"</strong> refers to the Account Holder’s subscription plan for the Aonflow Platform as set forth in the applicable Order Form.</li>
            <li><strong>"Professional Services”</strong> refer to implementation services that Aonflow provides to the Account Holder related to the Aonflow Platform, detailed in a mutually agreed upon Statement Of Work (“SOW”) referencing this Agreement or the applicable Order Form.</li>
          </ul>
        </CardContent>
      </Card>
      
      <Card className="bg-white/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>2. Use of Platform</CardTitle>
        </CardHeader>
        <CardContent>
          <h3 className="font-bold mb-2 text-foreground">Usage of Aonflow Platform:</h3>
          <p className="text-muted-foreground mb-4">
            Aonflow retains the ownership and all rights arising out of, accruing from or in connection with the Aonflow Platform, includingl its derivatives, features, modifications, and updates. However, during the Subscription Term, it is hereby agreed that Aonflow shall grant the Account Holder a worldwide, non-exclusive, non-transferable, non-sublicensable, revocable, limited license (for internal use only), to use the Aonflow Platform in compliance with this Agreement and the applicable Order Form. However, the Account Holder may be permitted to give access of the Aonflow platform to its authorized users ( limited to Account Holder's employees, agents, and consultants, necessary for Account Holder's own internal business operations, collectively, "Personnel"), for using the same on the Account Holder’s behalf through Account Holder's account on the Aonflow Platform ("Account"), subject to the said Personnel’s complaince with the terms of this Agreement . Account Holder is wholly responsible to ensure that all Personnel comply with the terms and conditions of this Agreement. Except as otherwise stated in this section and in Section 3 (Ownership; Licenses) of this Agreement, Aonflow does not grant Account Holder any licenses, express or implied, to the intellectual property of Aonflow or its licensors.
          </p>
          <h3 className="font-bold mb-2 text-foreground">Account Holder Responsibilities:</h3>
          <p className="text-muted-foreground mb-4">Account Holder acknowledges and agrees that:</p>
          <ul className="space-y-2 text-muted-foreground list-disc pl-5 mb-4">
            <li>The Account Holder and its Personnel's ability to use the Aonflow Platform is dependent on the Account Holder maintaining access to internet services, telecommunications, software, and hardware. The Account Holder shall be entirely responsible for obtaining and maintaining all necessary telecommunications, internet services, hardware and software required to access and utilize the Aonflow Platform. The Account Holder acknowledges that the use of the Aonflow Platform is entirely dependent on having access to these services. Aonflow is not responsible for any loss or corruption of content, lost communications or any other loss or damage arising from any internet services and telecommunications.</li>
            <li>The Account Holder and Personnel are obligated and required to create and maintain unique login credentials (referred to as "Access Credentials") for their use of the Aonflow Platform. They shall keep these Access Credentials confidential, and the Account Holder will be entirely and solely responsible for any actions done, performed or executed by using the Account Holder’s and its Personnel's Access Credentials.</li>
            <li>The Aonflow Platform operates or uses APIs and/or other services provided by third parties. Account Holders may use their or other third-party applications, APIs, interfaces, software, services, products, or websites that work with the Aonflow Platform (collectively referred to as "Third-Party Applications"). The Account Holder is fully responsible for acquiring the license and rights to use the Third-Party Applications, and following the terms and conditions along with the privacy policy of such Third-Party Applications. The Account Holder is solely responsible for any loss of data or other damages it may suffer as a result of using the said Third-Party Applications. Aonflow does not warrant or support any Third-Party Applications, or control the privacy practices of any Third-Party Application to which data may be sent or from which data may be retrieved, whether or not they are recommended by Aonflow or designated by Aonflow as preferred, certified or otherwise, and shall have no responsibility, liability or indemnification obligations for any claims, losses or damages arising out of or in connection with the Account Holder's use of any Third-Party Applications. Except as explicitly stated in this Agreement or the applicable Order Form, Aonflow does not guarantee compatibility with any Third-Party Applications, and Aonflow shall not be responsible for any changes or new developments in such Third-Party Applications which may interrupt the Account Holder's use or interaction with the Aonflow Platform.</li>
            <li>When using the Aonflow Platform, the Account Holder represents and warrants that they have obtained and will maintain all necessary authorizations, licenses, consents and approvals to use, process and transmit the Account Holder Data (as defined in Section 3(a)) through the Aonflow Platform. Additionally, the Account Holder represents that Aonflow is authorized to perform any transactions initiated through instructions given to Aonflow via the Account or through any other means, regardless of whether these may contain Personal Data, and may cross international borders. The Account Holder is solely responsible for the accuracy, quality, and legality of the Account Holder Data, the means by which it was acquired, and its use. The Account Holder must comply with all applicable privacy and data protection laws that govern the collection, use and transfer of such data.</li>
          </ul>
          <h3 className="font-bold mb-2 text-foreground">Data and Accounts Deletion:</h3>
          <p className="text-muted-foreground mb-4">An Account on the Aonflow Platform consists of: Account meta-data, configurations, definitions of Connectors and related assets (collectively referred to as "Account Data"), and records of processing of Account Holder Data on the Aonflow Platform (referred to as "Transaction Data").</p>
           <ul className="space-y-2 text-muted-foreground list-decimal pl-5 mb-4">
            <li>All Transaction Data in the Account will be deleted within thirty (30) days from the date it was processed, or as configured by the Account Holder in their Account in accordance with the Account Holder's Subscription as specified in the Order Form, if applicable.</li>
            <li>The Account Holder has the option to delete Account Data, Account Holder Data, and Transaction Data at itsr own discretion.</li>
            <li>Upon request by the Account Holder, Aonflow will delete the Account, including all associated Account Data and Account Holder Data on the Aonflow Platform within thirty (30) days, unless otherwise required by applicable laws or government authorities. If the Account Holder does not request for the Account to be deleted, Aonflow will destroy the Accounts, including all associated Account Data and Account Holder Data on the Aonflow Platform, left in their system within ninety (90) days after the termination or expiration of this Agreement.</li>
           </ul>
          <h3 className="font-bold mb-2 text-foreground">Community Connectors:</h3>
          <p className="text-muted-foreground mb-4">Community Connectors refer to any Connectors created and made public by third parties. They will be available to all customers and are provided "AS-IS", (“the “Community Recipes and Connectors”). Aonflow will not be held liable for the Account Holder's use of Community Connectors, and will not provide any indemnity, warranties or representations for the same.</p>
          <h3 className="font-bold mb-2 text-foreground">Suspension:</h3>
          <p className="text-muted-foreground mb-4">Aonflow reserves the right to suspend the Account Holder's and/or Personnel's access to and use of the Aonflow Platform at any time, if Aonflow determines in its sole discretion that the Account Holder and/or its Personnel have breached this Agreement, which includes but is not limited to; (i) any late payments; (ii) violation of the restrictions set forth in Sections 2(b) (Account Holder Affiliates) or Section 4 (Compliance with Laws; Restrictions); or (iii) are engaging in any actions that threaten the security, integrity, availability or stability of the Aonflow Platform. Any suspension under this section shall not excuse the Account Holder from the Account Holder’s obligations to make payments under this Agreement.</p>
          <h3 className="font-bold mb-2 text-foreground">Professional Services:</h3>
          <p className="text-muted-foreground">Aonflow will perform Professional Services as described in a SOW or an Order Form, which may specify additional terms or milestones for the Professional Services. The Account Holder will provide Aonflow with the necessary materials and resources in a timely manner that are needed for such Professional Services, and Aonflow will use these materials and resources solely for the purpose of providing Professional Services. Within any limits specified in the SOW or the Order Form, the Account Holder will reimburse Aonflow for any reasonable travel and lodging expenses incurred in providing the said Professional Services. The Connectors, and other deliverables that Aonflow provides as part of Professional Services are licensed to the Account Holder in the same manner as Community Connectors under Section 3(b)(i) below, and the Account Holder may use them only in connection with their authorized use of the Aonflow Platform under this Agreement.</p>
        </CardContent>
      </Card>
      
      <Card className="bg-white/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>3. Ownership & Licenses</CardTitle>
        </CardHeader>
        <CardContent>
          <h3 className="font-bold mb-2 text-foreground">Data of Account Holder</h3>
          <p className="text-muted-foreground mb-4">
            The Account Holder retains all rights, titles and interests in and to all documents, messages, graphics, images, files, data and other information that is transmitted and processed through the Aonflow Platform by the Account Holder (collectively referred to as "Account Holder Data"), provided that the Account Holder grants Aonflow a worldwide, royalty-free, fully sublicensable (solely to Aonflow's sub-processors, non-exclusive license to use the Account Holder Data solely for the purposes of providing the Aonflow Platform to the Account Holder in fulfilling its obligations under this Agreement. Apart from the limited licenses granted in this Agreement, Aonflow will not acquire any right, interest, or title in any Account Holder Data.
          </p>
          <h3 className="font-bold mb-2 text-foreground">Connectors</h3>
          <p className="text-muted-foreground mb-4">
            Aonflow will own and retain all rights, interests, and titles in and to all Connectors and any derivatives on the Aonflow Platform, excluding any Connectors created by the Account Holder. During the Subscription Term, Aonflow shall grant the Account Holder a limited, non-exclusive license to create, use and share Connectors with other Users, as well as a limited, non-exclusive sublicense to duplicate and modify Community Connectors.
          </p>
          <ul className="space-y-2 text-muted-foreground list-decimal pl-5 mb-4">
            <li>By default, Connectors created by the Account Holder are private by default in the Account, the sequitur of which is that only the Account Holder has access to the same. Aonflow will not reuse or resell any private Recipe or any private Connector created by the Account Holder, which shall be considered as Confidential Information of the said Account Holder under Section 6 below.</li>
            <li>The Account Holder at its sole discretion can choose to share its private Connectors with other Users by marking them as "Public" . By doing this, the Account holder grants Aonflow an irrevocable, perpetual, transferable, sublicensable and worldwide license to those Connectors that are marked as Public to view, use, copy, modify, and distribute them. These Connectors will then become part of the Community Connectors.</li>
            <li>The Account Holder agrees that it will not bring or assert any claims against Aonflow or any Users for infringement or misappropriation of any intellectual property rights to any Connectors independently developed by Aonflow or Users, which are similar or the same as any Connectors created by the Account Holder during the term of the Agreement.</li>
          </ul>
          <h3 className="font-bold mb-2 text-foreground">Feedback</h3>
          <p className="text-muted-foreground mb-4">
            In regards to any feedback, ideas, suggestions, enhancement requests, recommendations, or other information provided by the Account Holder or its Personnel in relation to the Aonflow Platform, including any features and functionality, connectors (collectively referred to as "Feedback"), the Account Holder grants Aonflow a non-exclusive, worldwide, perpetual, irrevocable, freely sublicensable and fully transferable license to make, use, sell, reproduce, create derivatives of, display or otherwise use the Feedback.
          </p>
          <h3 className="font-bold mb-2 text-foreground">Data Usage</h3>
          <p className="text-muted-foreground mb-4">
            Aonflow will gather data and statistics on how the platform is being used, including how the Account Holder is using it, and how individual users interact with the features and functionality within the platform. This data is referred to as "Data Usage" and shall include both (i) information related to performance and operation, and (ii) data on identifiable User interactions. However, the same shall not include any Account Holder Data processed on the Aonflow Platform. Aonflow will own and retain all rights, titles, and interest in and to the Data Usage and may use the same for maintaining, operating, improving and fulfilling obligations hereunder during and after the Term.
          </p>
          <h3 className="font-bold mb-2 text-foreground">Use of Marks</h3>
          <p className="text-muted-foreground">
            Both parties give each other permission to use their respective trade names, trademarks, or logos (collectively referred to as "Marks") for promoting the Aonflow Platform, and identifying the Account Holder as a User during the Term of the Agreement. This use can include displaying the marks on its website and in marketing materials. The use of these Marks must be in accordance with the applicable laws and must correctly attribute ownership of such Marks. If a party objects to the other's use of the said Marks, such party shall immediately stop using them on its website and all marketing materials, and seek permission for any future use of the same. Aonflow may at any point of time ask the Account Holder to participate in (i) case studies, (ii) issue press releases, (iii) collaborate on media communications and (iv) speak at events, and such engagement should be agreed upon in writing beforehand. Any benefits resulting from the use of the Marks will go to the party owning the Marks.
          </p>
        </CardContent>
      </Card>
      
      <Card className="bg-white/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>4. Compliance with Restrictions, Laws & Regulations</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">Account Holder must not, and must not authorize any third party to, in any manner whatsoever:</p>
          <ul className="space-y-2 text-muted-foreground list-disc pl-5 mb-4">
            <li>Interfere or try to interfere with the proper functioning of the Aonflow Platform, or any other User's use of the Aonflow Platform, including by exploiting server capacity;</li>
            <li>Use the Aonflow Platform for any fraudulent or illegal purpose;</li>
            <li>Decompile, disassemble, reverse engineer or attempt to discover the source code or underlying structure of the Aonflow Platform, or any software or data related to it, provided that reverse engineering is only prohibited to the extent that it is not allowed by the applicable law(s);</li>
            <li>Duplicate, change, modify or create derivative works of the Aonflow Platform or any software, source code, object code, underlying structure, design, look and feel, expression, ideas or algorithms or documentation related to the Aonflow Platform, or use it in a way that violates the restrictions set in this Agreement, including building products or services that are in competition to the Aonflow Platform or using similar ideas, features, or functions of the Aonflow Platform;</li>
            <li>Sell, rent, distribute, pledge, assign or transfer or encumber rights to the Aonflow Platform;</li>
            <li>Remove or alter any proprietary notices or labels from the Aonflow Platform or any part of it;</li>
            <li>Bypass any measures Aonflow may use to prevent or restrict access to the Aonflow Platform or other accounts, computer systems, or networks related to it;</li>
            <li>Scan or test the vulnerability of the Aonflow Platform or related products and services without Aonflow's prior written consent;</li>
            <li>Use the Aonflow Platform in violation of any applicable law(s), treaty or regulation(s), including any export control, sanctions or other laws and regulations of State of California or any other jurisdiction, or a third party's proprietary or contractual rights.</li>
          </ul>
          <p className="text-muted-foreground">Account Holder acknowledges and agrees that they can only use the Aonflow Platform for their own internal business operations, and no right is granted hereunder to use the Aonflow Platform for the benefit of third parties, such as in a service bureau, time-sharing, or managed Aonflow arrangement. It is only the Account Holder and its Personnel who are allowed / authorized to access the Aonflow Platform. The said platform cannot be used for benchmarking, comparing or competing purposes, unless Aonflow has given permission to that effect in writing.</p>
        </CardContent>
      </Card>
      
      <Card className="bg-white/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>5. Terms of Payment</CardTitle>
        </CardHeader>
        <CardContent>
           <h3 className="font-bold mb-2 text-foreground">Fees:</h3>
           <p className="text-muted-foreground mb-4">Account Holder must pay all charges to Aonflow anually in advance, except if specified differently in the applicable Order Form. The charges are based on the subscription chosen as outlined in the said Order Form. All payments are final and cannot be refunded, and payment responsibilities cannot be canceled. Account Holder cannot decrease the scope of the subscription it has bought, and the charges that come with it during the term of the subscription.</p>
           <h3 className="font-bold mb-2 text-foreground">Payment Terms:</h3>
           <p className="text-muted-foreground mb-4">The due date for fees is thirty (30) days after the invoice date, unless stated otherwise in the applicable Order Form. The Account Holder is fully responsible for providing complete and accurate billing and contact information to Aonflow, and would continue to under a bounden obligaion of informing Aonflow of any changes.</p>
           <h3 className="font-bold mb-2 text-foreground">Late Payments:</h3>
           <p className="text-muted-foreground mb-4">If payment is not received by the due date, a late fee may be applied and will accrue interest on a monthly basis at either 1.5% or the highest legal rate, starting from the day payment was due and continuing until the full amount is received by Aonflow.</p>
           <h3 className="font-bold mb-2 text-foreground">Taxes:</h3>
           <p className="text-muted-foreground mb-4">The Fees must be paid in full and do not include any taxes, levies, duties or other similar charges imposed by any Government at any level, such as value-added taxes, sales taxes, or withholding taxes, that are applicable to any location, assessable by any locality, state, provincial, federal or foreign jurisdiction (collectively termed as “Taxes”). The Account Holder shall be solely responsible for paying all taxes related to the Fees they owe, and if Aonflow has to pay or collect taxes that the Account Holder is responsible for, including any penalties or interest in that regard, the Account Holder will be billed for that amount. However, if the Account Holder can provide a valid tax exemption certificate from the appropriate authority, they may not be responsible for paying the said taxes. Aonflow will be responsible for paying any taxes that are assessable against Aonflow based on Aonflow’s net income.</p>
           <h3 className="font-bold mb-2 text-foreground">Usage Analysis:</h3>
           <p className="text-muted-foreground">Aonflow may perform an analysis of usage at any time during the Term of this Agreement. If the analysis shows that the Account Holder's usage of the Aonflow Platform goes beyond the consumption limit outlined in the corresponding Order Form, Aonflow will provide a new Order Form for the extra consumption reflected in such "Usage Analysis". Unless otherwise stated in the Order Form, the fees for this additional usage will be based on Aonflow's current unit costs. The Account holder agrees to pay for this excess usage in accordance with the payment terms outlined in section 5(b) of the Agreement.</p>
        </CardContent>
      </Card>
      
      <Card className="bg-white/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>6. Confidentiality</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">"Confidential Information" refers to any non-public details related to a Disclosing Party's (the “Disclosing Party”) technology, prices, or business that are shared with the other party, referred to as the “Receiving Party” herein. The same shall include information that is labeled as "confidential" or "proprietary" in writing at the time of disclosure, or that can be reasonably assumed to be confidential or proprietary information or be confidential information of the Disclosing Party. During the Term of this Agreement, and for a period of three (3) years following the end of this Agreement, the Receiving Party will protect the Confidential Information of the Disclosing Party with the same level of care that it uses to protect its own similar information, which shall be no less than reasonable care. Neither party will reveal any Confidential Information, except for the specific purposes outlined in this Agreement, or other than to its agents, employees or representatives who must know the said Confidential Information for fulfilling their duties under this Agreement. The confidentiality obligations as outlined in this Agreement shall be binding upon such agents, employees and representatives as well. The Receiving Party must take responsibility for any breaches and/or violations of confidentiality obligations by its ‘agents’, ‘employees’ and ‘representatives’.</p>
          <p className="text-muted-foreground mb-4">The foregoing limitations and restrictions do not apply to any information that: (i) the Receiving Party has developed alone without making use of or having access to the Disclosing Party's Confidential Information; (ii) has become openly known without the Receiving Party's violation of this clause; (iii) has been legitimately acquired by the Receiving Party from a third party authorized to do so, without any obligations of secrecy; (iv) has been officially approved for release by the Disclosing Party; or (v) was already known by the Receiving Party before it was acquired from the Disclosing Party with no requirement of confidentiality. The release or disclosure of the Confidential Information by the Receiving Party will not be seen as a violation of this section if such disclosure is mandated by law, either to a governmental entity or otherwise, so long as the Receiving Party promptly notifies the Disclosing Party of the said requirement in writing before the disclosure, assists in obtaining an order to protect the information from public disclosure (if legally permissible) and will only disclose that portion of Confidential Information that is legally required to be disclosed.</p>
          <p className="text-muted-foreground">With the exception of any records that are legally or archivally required to be kept, all Confidential Information within any copies and records held by the Receiving Party must be returned or destroyed on the Disclosing Party's written request, such as a notice of termination of this Agreement. However, any archived computer system backups made in accordance with reasonable disaster recovery procedures may still contain the Confidential Information, though the concerned Party l shall continue to remain bound by the obligations contained in this Agreement. The Parties acknowledge and agree that any violation of this section may lead to irreparable harm to the Disclosing Party, for which compensation in terms of money would not suffice, and that the Disclosing Party is entitled to seek punitive measures, such as specific performance and restraining orders, for securing itself against any breach, or imminent breach of this section.</p>
        </CardContent>
      </Card>
      
      <Card className="bg-white/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>7. Data Protection, Security, Privacy</CardTitle>
        </CardHeader>
        <CardContent>
          <h3 className="font-bold mb-2 text-foreground">Services Privacy Policy:</h3>
          <p className="text-muted-foreground mb-4">Personnel's use of the Aonflow Platform is subject to the Privacy Policy included in this Agreement, which can be found at https://www.aonflow.com/privacy-policy which is hereby incorporated by reference into this Agreement, and all references to the “Terms of Service” in the said Privacy Policy shall mean this Agreement.</p>
          <h3 className="font-bold mb-2 text-foreground">Data Protection Laws:</h3>
          <p className="text-muted-foreground mb-4">Both parties shall abide with the General Data Protection Regulation (EU) 2016/679 (or the relevant amendments, replacements, repeals or consolidations applicable thereto) and shall promptly notify the other if there is any perceived non-conformity with any applicable data protection laws, and mutually work to rectify any breach of such laws. In addition, the parties shall notify each other in advance of any other data protection laws, rules, or regulations that may become applicable to Aonflow's processing of Account Holder Data under this Agreement, and cooperate to amend this Agreement or the DPA as necessary. To the extent, the Account Holder is the Controller and Aonflow is the Processor of Personal Data which is subject to the Data Protection Laws (as per the Data Processing Addendum located at the "DPA"), hereby makes the DPA part of this Agreement for the Processing of such Personal Data.</p>
          <h3 className="font-bold mb-2 text-foreground">Security:</h3>
          <p className="text-muted-foreground">Aonflow will ensure data security is maintained in conformity to industry standards. An overview of the security measures in place, including technical and organizational tools for safeguarding the privacy and confidentiality of Account Holder information can be found at https://www.aonflow.com/security-policy Aonflow will also maintain security incident management policies and procedures, and promptly notify the Account Holder in the unfortunate event of an accidental or unlawful destruction, loss, alteration, unauthorized disclosure or access of the Account Holder Data (“Data Breach”). Aonflow will take appropriate remedial steps based on its security incident management policies and procedures in order to identify and address the cause of the Data Breach.</p>
        </CardContent>
      </Card>

      <Card className="bg-white/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>8. Warranties, Representations</CardTitle>
        </CardHeader>
        <CardContent>
          <h3 className="font-bold mb-2 text-foreground">Mutual Warranties</h3>
          <p className="text-muted-foreground mb-4">Without limiting any other representation, warranty under this Agreement, each party represents and warrants to the other that it: (i) has the authority to enter this Agreement; (ii) this Agreement is a valid and binding legal obligation; (iii) will employ industry standard procedures to prevent viruses, malicious code, and other harmful materials from entering the Aonflow Platform; and (iv) has obtained, and will keep during the duration of this Agreement, all necessary licenses, authorizations, approvals, and consents to enter, exercise its rights, and comply with all applicable laws, rules, and regulations.</p>
          <h3 className="font-bold mb-2 text-foreground">Aonflow Warranties</h3>
          <p className="text-muted-foreground mb-4">Aonflow guarantees that during the subscription period, the Aonflow Platform will run in accordance with the provided documentation; in the case of any non-compliance, the exclusive remedy is that Aonflow shall correct the issue(s) within Thirty (30) days of receiving a written notice intimating Aonflow of the said issue(s), or, if Aonflow cannot fix the non-conformance in a commercially reasonable way, the Account Holder can end the relevant Order Form, and Aonflow will return any unused, pre-paid fees after the termination becomes effective. It is to be noted that the only remedy for a violation of Exhibit A – Service Level Agreement, concerning the Service Commitment, is the one stated in the Service Level Agreement.</p>
          <p className="text-muted-foreground mb-4">Aonflow warrants that it has all the authorization and permission necessary to provide the Aonflow Platform, and further guarantees that the Aonflow Platform does not and will not breach or misappropriate any third party's intellectual property rights. The sole remedy for any breach of these warranties is indemnity as indicated in Section 10(b) (Indemnification).</p>
          <p className="text-muted-foreground mb-4">Aonflow guarantees that any Professional Services provided will be done in a competent and professional manner in compliance with industry standards and matches the requirements in the SOW; if this warranty is breached, the only remedy available to Account Holder is for Aonflow to rectify the issue(s) within thirty (30) days of getting written notice of the said issue(s). If this is not possible in a reasonable manner, thr Account Holder may, in appropriate circumstances, have the liberty to terminate the SOW, and receive a refund of any pre-paid fees for the SOW from the date of termination.</p>
          <p className="text-muted-foreground font-bold">AONFLOW DOES NOT GUARANTEE THAT THE PLATFORM WILL BE PROBLEM-FREE OR UNINTERRUPTED, NOR THAT IT WILL MEET THE ACCOUNT HOLDER'S REQUIREMENTS AT ALL TIMES. AONFLOW IS NOT RESPONSIBLE FOR ANY ISSUES RELATED TO THE PLATFORM'S PERFORMANCE, OPERATION OR SECURITY CAUSED BY THE ACCOUNT HOLDER'S DATA, THIRD-PARTY APPLICATIONS, OR OTHER SERVICES PROVIDED BY THIRD PARTIES. TO THE GREATEST EXTENT ALLOWED BY LAW, THESE WARRANTIES ARE EXCLUSIVE AND AONFLOW DOES NOT MAKE ANY OTHER WARRANTIES, EITHER EXPRESS OR IMPLIED, WITH RESPECT TO THE PLATFORM, EXPLICITLY DECLINING ANY IMPLIED WARRANTIES OR CONDITIONS OF MERCHANTABILITY, SATISFACTORY QUALITY, OR SUITABILITY FOR A PARTICULAR PURPOSE.</p>
        </CardContent>
      </Card>

      <Card className="bg-white/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>9. Limitation of Liability</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">TO THE FULLEST EXTENT NOT PROHIBITED BY APPLICABLE LAW(S), INCLUDING BUT NOT LIMITED TO NEGLIGENCE, SYSTEM FAILURE OR NETWORK OUTAGE, NEITHER PARTY OR ITS AFFILIATES SHALL BE HELD LIABLE FOR ANY SPECIAL, INDIRECT, INCIDENTAL, CONSEQUENTIAL, PUNITIVE, RELIANCE, EXEMPLARY DAMAGES, OR ANY LOSS OF REVENUE, PROFITS (EXCLUDING FEES UNDER THIS AGREEMENT), SALES, DATA, GOODWILL OR REPUTATION RESULTING FROM THIS AGREEMENT, EVEN IF SUCH PARTY OR ITS AUTHORIZED REPRESENTATIVE HAS BEEN INFORMED OF THE POSSIBILITY OF SUCH DAMAGES.</p>
          <p className="text-muted-foreground">TO THE MAXIMUM EXTENT AS ALLOWED BY LAW, NEITHER PARTY OR ITS AFFILIATES SHALL BE LIABLE TO THE OTHER FOR ANY DAMAGES, LOSSES, AND CAUSES OF ACTION THAT MAY ARISE IN CONNECTION WITH THIS AGREEMENT, WHETHER IT BE CONTRACTUAL OR TORTUOUS (INCLUDING NEGLIGENCE, WARRANTY, OR OTHERWISE), THAT SURPASS THE TOTAL AMOUNT PAID OR PAYABLE IN THE TWELVE (12) MONTHS IMMEDIATELY PRECEDING THE INCIDENT CAUSING SUCH LIABILITY.</p>
        </CardContent>
      </Card>

      <Card className="bg-white/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>10. Indemnification</CardTitle>
        </CardHeader>
        <CardContent>
          <h3 className="font-bold mb-2 text-foreground">Indemnification by Account Holder:</h3>
          <p className="text-muted-foreground mb-4">Account Holder agrees to protect, reimburse and maintain Aonflow, its related businesses and every single of its and its Affiliates’ representatives, executives, agents and employees free from any liabilities, claims and expenses determined by a court or concurred to pursuant to a settlement understanding achieved with an independent outsider, that come from or concern any outsider claim (i) asserting that any Account Holder Data infringes, encroaches or misappropriates such third party's licensed innovation rights, exclusive rights or any applicable law, or (ii) emerging from Account Holder's utilization of the Aonflow Platform in violation of this Agreement, the Documentation, or applicable law.</p>
          <h3 className="font-bold mb-2 text-foreground">Indemnification by Aonflow:</h3>
          <p className="text-muted-foreground mb-4">Aonflow shall indemnify, defend and hold Account Holder, its Affiliates and each of its and its Affiliates’ officers, directors, agents and employees harmless from all liabilities, claims and expenses arising from or relating to any third-party claim against Account Holder which is based upon a third-party allegation that the Aonflow Platform (excluding Account Holder Data and the Connectors created by the Account Holder or any third party) has infringed or misappropriated any intellectual property rights of such third-party, and shall pay any costs or damages attributed to such claim as finally awarded by a court or agreed to as part of a settlement. The damages payable hereunder shall mean reasonable compensation only, as computed in accordance with applicable law(s).</p>
          <p className="text-muted-foreground mb-4">In the event of a claim of infringement or misappropriation of rights covered under this section is made or threatened, Aonflow reserves the right to, at its sole discretion: (A) replace or modify the Aonflow Platform with a non-infringing, functionally equivalent alternative; (B) obtain the necessary rights for Account Holder to continue using the Aonflow Platform; or (C) in the event that Aonflow is unable to fulfill its indemnification obligation, terminate this Agreement without any penalty, and provide a refund for any unused, prepaid fees for the remainder of the unexpired Subscription Term to the Account Holder.</p>
          <p className="text-muted-foreground mb-4">Aonflow shall be exempt from any liability under this section if any third-party claims are based on (A) contravention of this Agreement or the accompanying Documentation or directions provided to the Account Holder by Aonflow; (B) any info, technology, data or materials (or any part or combination of such) not created or provided by Aonflow; (C) any part of the Aonflow Platform which has been changed after being given by Aonflow; (D) a combination of the Aonflow Platform with other Third-Party Applications, merchandise, procedures, components or other technology not given by Aonflow (where the claim is related to or emerges from such mix); or (E) wherever the Account Holder continues the allegedly infringing activity after being informed of the same, or after being informed of modifications that would have avoided the alleged infringement.</p>
          <p className="text-muted-foreground mb-4">THIS SECTION OUTLINES THE FULL EXTENT OF AONFLOW’S AND ITS LICENSORS OBLIGATION WITH RESPECT TO ANY ALLEGED OR ACTUAL INFRINGEMENT OR MISAPPROPRIATION OF INTELLECTUAL PROPERTY RIGHTS IN RELATION TO THE AONFLOW PLATFORM.</p>
          <p className="text-muted-foreground">These indemnification obligations are contingent upon the party seeking indemnity: (i) promptly providing written notice of any claim, notwithstanding any failure to do so that may not excuse the indemnifying party of its responsibilities. Furthermore, the indemnifying party is to be solely responsible for the defense and resolution of the claim, however, the indemnified party is to give its written consent before any settlement is made (which is not to be unreasonably withheld); (ii) the indemnifying party must be given all reasonable assistance with such defense and resolution, with the indemnified party being able to retain independent counsel at their own expense to assess the infringement claim(s).</p>
        </CardContent>
      </Card>

       <Card className="bg-white/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>11. Term, Termination</CardTitle>
        </CardHeader>
        <CardContent>
          <h3 className="font-bold mb-2 text-foreground">Term</h3>
          <p className="text-muted-foreground mb-4">The Term of this Agreement shall take effect on the Effective Date and will remain in effect until the Aonflow Platform is no longer provided to the Account Holder under this Agreement and the applicable Order Form. The Subscription Term will begin and last for the duration specified in the Order Form between Aonflow and the Account Holder, and shall be terminated earlier only in accordance with this Agreement. Each Subscription Term shall be automatically extended for successive one (1) year periods at the then-current pricing of the Account Holder's Subscription (the "Renewal Period"), unless either party provides the other with written notice of non-renewal at least thirty (30) days prior to the end of the then-current Subscription Term, including the initial Subscription Term or Renewal Period, as applicable.</p>
          <h3 className="font-bold mb-2 text-foreground">Termination</h3>
          <p className="text-muted-foreground mb-4">Either Party may terminate/end this Agreement: (i) with a thirty (30) day written notice due to the other party's material breach of this Agreement that is not remedied during the 30-day notice period; (ii) right away with written notification of the initiation of insolvency, receivership or bankruptcy proceedings against the other party that are not dismissed within sixty (60) days of submission; (iii) if the other party assigns their belongings for the benefit of creditors; or (iv) if the other party dissolves or stops doing business.</p>
          <h3 className="font-bold mb-2 text-foreground">Effects of Termination</h3>
          <p className="text-muted-foreground mb-4">Upon the termination or expiration of this Agreement, all legal rights granted to the Account Holder shall immediately cease to exist and the Account Holder shall discontinue all use of the Aonflow Platform, and delete or destroy all copies of the Documentation in itsr possession. In the case of termination by the Account Holder, Aonflow will refund any unutilized pre-paid fees following the effective date of the termination. The termination of this Agreement will also result in the termination of all ongoing Order Forms; however, the cancellation or alteration of a single Order Form shall not lead to the termination or amendment of this Agreement.</p>
          <h3 className="font-bold mb-2 text-foreground">Survival</h3>
          <p className="text-muted-foreground">The provisions of Sections 3 (Ownership, Licenses), 4 (Compliance with Laws; Restrictions), 5 (Terms of Payment), 6 (Confidentiality), 8(b)(iii) (Aonflow Warranties), 9 (Limitation of Liability), 10 (Indemnification), 11(c) (Effects of Termination), 12 (Governing Law), 13 (Arbitration), 14 (Trial and Non-Paid Accounts), and 18 (Miscellaneous) of this Agreement shall remain in full force and effect following the termination or expiration of this Agreement.</p>
        </CardContent>
      </Card>
      
      <Card className="bg-white/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>12. Governing Law</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">This Agreement shall be enforced and interpreted in accordance with the laws of the State of California with no effect given to the principles of conflicts of law, and Aonflow shall have the right to pursue payment of Fees due under this Agreement from any court of competent jurisdiction.</p>
        </CardContent>
      </Card>
      
      <Card className="bg-white/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>13. Dispute Resolution and Arbitration</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">In the event of a dispute arising out of or relating to this Agreement, the parties shall enter into good faith, informal dispute resolution for a period of thirty (30) days. The party claiming the dispute will provide written notice to the other intimating the latter about the same. Within five (5) business days of receipt of said notice, the parties shall commence good faith discussions. Prior to initiating arbitration, both parties must strive to resolve the dispute informally for a minimum of thirty (30) days, unless immediate action is required to prevent irreparable harm or preserve rights or remedies. In the event that the parties are unable to settle the dispute informally, binding arbitration shall be conducted in accordance with the then-current Rules of the International Centre for Dispute Resolution of the American Arbitration Association, and in accordance with the terms of this Agreement and the substantive law of the State of California, disregarding its conflict of laws principles. The binding arbitration will take place at DAX Software Solutions Inc., 6303 Owensmouth Ave, 10th floor, Woodland Hills, CA 91367 and be conducted by a single arbitrator in accordance with the law. Both parties will bear the costs of the arbitration, with the prevailing party receiving compensation for their costs and reasonable attorneys' fees.</p>
        </CardContent>
      </Card>
      
      <Card className="bg-white/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>14. Trial and Non-Paid Accounts</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">Not with standing any other provision/clause in this Agreement, any Trial or Non-Paid Account on the Aonflow Platform shall be subject to the following conditions:</p>
          <h3 className="font-bold mb-2 text-foreground">Limited License</h3>
          <p className="text-muted-foreground mb-4">During the terms, Aonflow grants to the Account Holder a non-exclusive, non-transferable, non-sublicensable and limited license to use the Aonflow Platform with limited features and Transactions as provided by Aonflow, or as specified in the Order Form (if any), exclusively for Account Holder's internal evaluation in a non-commercial setting and not for general production use.</p>
          <h3 className="font-bold mb-2 text-foreground">Limited Liability</h3>
          <p className="text-muted-foreground mb-4">The Trial and Non-Paid Accounts are provided "AS-IS" and no warranties or indemnification provisions of this Agreement shall apply to these Accounts. Section 8 (Representations and Warranties) shall not be applicable to the Trial and Non-Paid Accounts. Aonflow and its Affiliates shall not be liable for any special, indirect, incidental, consequential, punitive, reliance, or exemplary damages that result from this Agreement, even if Aonflow or its authorized representative has been advised of the possibility of such damages; in no event shall Aonflow or its Affiliates be liable to Account Holder for any damages, losses, and causes of action arising out of or relating to the Trial or Non-Paid Account (whether in contract or tort, including negligence, warranty, or otherwise) in the aggregate exceeding. $100 USD</p>
          <h3 className="font-bold mb-2 text-foreground">Term; Termination</h3>
          <p className="text-muted-foreground">(i) The Terms of the Trial will last for thirty (30) days from the Effective Date, which may be extended by Aonflow in writing. In addition to Section 10(b) (Indemnification by Aonflow) of this Agreement, Aonflow reserves the right to terminate Account Holder's access to the Aonflow Platform upon expiration of the Trial period or if Aonflow reasonably determines Account Holder has breached this Agreement or poses a threat to the security, integrity or availability of the Aonflow Platform. Should the parties not reach a business agreement concerning the use of the Aonflow Platform during the course of the Trial period, the Trial period shall stand lapsed automatically. Where the Trial period has concluded without a commercial agreement, the Trial will then be classified as a Non-Paid Account. (ii) Aonflow holds the right to discontinue any Non-Paid Account and/or delete any Non-Paid Account for any purpose or reason without any additional duty to the Non-Paid Account Holder.</p>
        </CardContent>
      </Card>
      
      <Card className="bg-white/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>15. Export Compliance</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">The Aonflow Platform and derivatives of it are subject to the export controls and sanctions laws and regulations of the United States and other countries (the “Export Controls”). All parties must observe the said Export Controls. The Account Holder shall not access or use the Aonflow Platform in such a way that would cause any of the parties to fail to comply with the Export Controls, such as by accessing or using the Aonflow Platform in a country or region subject to US sanctions, or for any restricted purpose (e.g. nuclear, chemical, biological weapons proliferation, or missile-related development).</p>
        </CardContent>
      </Card>
      
      <Card className="bg-white/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>16. Non-Sanctioned Status</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">Account Holder warrants that none of its executive officers, directors, or any individual, entity, or organization with any ownership/controlling interest in the Account Holder (“Connected Persons”) are subject to any law, regulation, or executive order prohibiting Aonflow from dealing with them; this includes, but is not limited to, those on the U.S. Department of the Treasury’s Office of Foreign Assets Control’s Specially Designated National and Blocked Persons List. Account Holder hereby acknowledges and agrees that, if at any point during the duration of this Agreement or any Order Form, Account Holder or any Connected Person is identified as, or becomes, an individual, entity, or organization with whom Aonflow is prohibited from dealing in accordance with this section, Account Holder must immediately notify Aonflow in writing of the same. In case the Account Holder fails to do so within a period of thirty (30) days from the date it has been so identified, penal action in accordance with applicable law(s) shall be taken by Aonflow against the said Account Holder. In addition to the same, Aonflow reserves the right to terminate this Agreement and any related Order Form without fault or liability, effective immediately. In such circumstances, Account Holder will be responsible for paying any Fees due prior to the termination date, and will not be entitled to a refund for any pre-paid, unused Fees, unless prohibited by law.</p>
          <p className="text-muted-foreground">Furthermore, neither party has received or been presented with anything that is unlawful or inappropriate such as a bribe, kickback, payment, gift, or anything of value from an employee or agent of the other party related to this Agreement. Reasonable gifts and entertainment given in the regular course of business activities are not in violation of the above mentioned prohibition.</p>
        </CardContent>
      </Card>
      
      <Card className="bg-white/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>17. Force Majeure</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Neither the party shall be held accountable for any failure to perform or delays in performance when resulted from an armed conflict, aggression, or damage caused deliberately; a natural event; power outage not caused by the obligated side; government regulations (including the forbidding or cancellation of any export, import or other permit); or any other occurrence beyond the control of the responsible party, (“Force Majeure”). Both the sides will make an effort to reduce the impact of the Force Majeure situation. If the event remains for more than thirty (30) days, either side may end the services not completed and the relevant Order Forms in writing. This Section does not excuse either side from taking necessary steps to pursue its standard disaster recovery protocols, or the Account Holder's commitment to pay for the services.</p>
        </CardContent>
      </Card>
      
      <Card className="bg-white/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>18. Miscellaneous</CardTitle>
        </CardHeader>
        <CardContent>
          <h3 className="font-bold mb-2 text-foreground">Assignment</h3>
          <p className="text-muted-foreground mb-4">This Agreement and any associated rights and obligations cannot be transferred or given to another party without the written consent of the other party, except in the case of an assignment to a successor or an acquirer of the assigning party's business or assets related to this Agreement and associated Order Form. The assigning party must notify the other party in writing. Any attempt to assign without complying with the aforementioned shall be null and void.</p>
          <h3 className="font-bold mb-2 text-foreground">Independent Contractors</h3>
          <p className="text-muted-foreground mb-4">Aonflow and Account Holder are both independent contractors, and there is no relationship of agency, representation, or partnership between them. Each party is solely responsible for all actions and inactions of their own personnel, except to the extent provided in this Agreement to the contrary. Neither party is obligated to provide employee-related benefits to the personnel of the other party, nor are they responsible for any withholding taxes associated with services performed in accordance with this Agreement.</p>
          <h3 className="font-bold mb-2 text-foreground">Amendments</h3>
          <p className="text-muted-foreground mb-4">This Agreement may only be modified/amended/changed/altered by a written document signed by an authorized representative of each party. Cognizance of conduct or oral agreements cannot be taken for effecting any amendment to the terms of this Agreement.</p>
          <h3 className="font-bold mb-2 text-foreground">Successors</h3>
          <p className="text-muted-foreground mb-4">This Agreement will be binding upon and inure to the benefit of the parties’ respective assigns and successors</p>
          <h3 className="font-bold mb-2 text-foreground">Order of Precedence</h3>
          <p className="text-muted-foreground mb-4">In case of any conflict or dispute between (a) this Agreement and the Order Form, and any relevant purchase order issued by the Account Holder, precedence shall be given in the following order: (i) the Order Form, (ii) this Agreement, then (iii) any Purchase Order; (b) this Agreement and the DPA, the DPA shall take precedence; and (c) this Agreement and any exhibit attached hereto, the exhibit shall be given priority.</p>
          <h3 className="font-bold mb-2 text-foreground">Notices</h3>
          <p className="text-muted-foreground mb-4">Any notice required under this Agreement must be in writing, and in the case of the Account Holder, the same shall be sent to the email address linked to the account. In the case of Aonflow, the same shall be sent to legal@aonflow.com, or if sent via a nationally recognized express delivery service, delivery of such notice shall be deemed to have taken place upon receipt by the Aonflow Legal Team, 6303 Owensmouth Ave, 10th floor, Woodland Hills, CA 91367.</p>
          <h3 className="font-bold mb-2 text-foreground">Waiver</h3>
          <p className="text-muted-foreground mb-4">If there is a waiver by the innocent party on any violation of the agreement, such a waiver shall not affect its rights to take action for future violations and it will not change the agreement.If any part of this Agreement is deemed to be illegal, invalid, or unenforceable under any applicable law, that part will be removed and replaced with a new provision that closely reflects the original intent of the parties, while the rest of the Agreement will still be in effect.</p>
          <h3 className="font-bold mb-2 text-foreground">Counterparts</h3>
          <p className="text-muted-foreground mb-4">This Agreement may be executed in any number of counterparts, each of which is considered to be the original, but all copies together will be considered as the same and one instrument.</p>
          <h3 className="font-bold mb-2 text-foreground">No Third Party Beneficiaries</h3>
          <p className="text-muted-foreground mb-4">The parties recognize that the agreements outlined in this Agreement are exclusively for the benefit of the parties, those who succeed them, and those who are permitted to take their place. Nothing in this Agreement, whether explicitly stated or implied, grants any individual or organization, other than the parties, their successors, and permitted assigns, any legal or equitable rights to enforce any provision of this Agreement.</p>
          <h3 className="font-bold mb-2 text-foreground">Attorneys’ Fees</h3>
          <p className="text-muted-foreground mb-4">Should any legal action or proceeding be brought to enforce or interpret any provisions of this Agreement, the prevailing party shall be entitled to recover, in addition to other costs, reasonable attorney fees incurred in connection with said suit, action or arbitration, as well as any appeals.</p>
          <h3 className="font-bold mb-2 text-foreground">Entire Agreement</h3>
          <p className="text-muted-foreground">This Agreement, including all of its appendices, exhibits, schedules, and any additional agreements hereto entered into between the parties, constitutes the full and complete understanding of the parties with regard to the subject matter of this Agreement. This Agreement supersedes and replaces any previous or contemporaneous communications, whether written or oral, related to the subject matter of this Agreement. The parties acknowledge that they have not relied on any representations or warranties regarding the subject matter of this Agreement that are not explicitly stated in this Agreement. Aonflow reserves the right to change the terms and conditions of this Agreement at its discretion, which will be effective for any renewal of subscription terms. The customer is responsible for reviewing this Agreement regularly, and CONTINUED USE OF THE SERVICE INDICATES ACCEPTANCE OF ANY CHANGES MADE. If the customer objects to any changes made to the Agreement during their subscription term, the customer's exclusive remedy is to terminate the Agreement and stop using the Service. Any terms or conditions stated in any customer purchase order or other documentation will not be part of this Agreement and will not have any effect.</p>
        </CardContent>
      </Card>
    </ContentPageLayout>
  );
}
