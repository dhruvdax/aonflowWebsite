
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ContentPageLayout } from "@/components/layout/content-page-layout";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Embedded Software Policy | How We Protect Your Data and Devices',
    description: "Discover how Aonflow's embedded software policy ensures your data and devices remain safe through rigorous standards and practices.",
    alternates: {
        canonical: 'https://www.aonflow.com/embedded-software-policy',
    },
};

export default function EmbeddedSoftwarePolicyPage() {
  return (
    <ContentPageLayout
      title="Embedded Software Policy"
    >
      <Card className="bg-white/50 backdrop-blur-sm">
        <CardContent className="pt-6">
          <p className="text-muted-foreground mb-4">
            These Embedded Software Supplemental Terms (“Embedded Terms”) are added to the Customer Agreement between you (the “Customer”) and the entity providing access to the Embedded Software (the “Company”). These terms only apply to the Embedded Software hosted by Dax Software Solutions, Inc. (referred to as “Aonflow”). These Embedded Terms, together with the Customer Agreement, govern all integrations to and from the Company Service using the Embedded Software.
          </p>
          <p className="text-muted-foreground">
            By using or accessing the Embedded Software to create an account, the customer agrees to the Embedded Terms, which supplements the Customer Agreement between the customer and the company. These Embedded Terms apply specifically to the Embedded Software provided by Aonflow, and take precedence over the Customer Agreement in case of any inconsistencies with respect to the Embedded Software. The Embedded Terms take effect on the date the customer accepts them through the methods specified.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-white/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>Definitions</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4 text-muted-foreground list-disc pl-5">
            <li><strong>"Embedded Terms"</strong> means the additional terms and conditions specific to the Embedded Software as outlined in this document.</li>
            <li><strong>"Access Credentials"</strong> refers to the unique login information required to access the Embedded Software through the customer's account.</li>
            <li><strong>"Account"</strong> refers to the specific accounts made by the customer on the Embedded Software that may be managed by the Company.</li>
            <li><strong>"Account Data"</strong> refers to the settings, additional information, and instructions for the automated processes within the Accounts.</li>
            <li><strong>"Company Service"</strong> refers to the services and products offered by the Company to the Customer, as outlined in the Customer Agreement, but does not include the Aonflow Platform, pre-made processes, connectors, the Embedded Software, and any related products or services provided by Aonflow.</li>
            <li><strong>"Connectors"</strong> refers to nodes that allow for the transfer of data between software applications through the Aonflow Platform, which acts as a bridge and cannot function independently of the Aonflow Platform.</li>
            <li><strong>"Customer Agreement"</strong> refers to the Agreement and Order Forms between the Company and the Customer, which outlines the provision of the Embedded Software as part of the Company Service to the Customer.</li>
            <li><strong>"Customer Data"</strong> refers to all documents, messages, graphics, images, files, data, and other information processed through the Embedded Software by the Customer. It does not include Usage Data.</li>
            <li><strong>"Embedded Agreement"</strong> refers to the agreement between the company and Aonflow that governs the provision of the Embedded Software to the company for its obligations in the Customer Agreement.</li>
            <li><strong>"Embedded Software"</strong> refers to the limited-use license of the Aonflow Platform that is embedded into the Company Service and accessed by the customer via the Company under the Customer Agreement and Embedded Terms.</li>
            <li><strong>"Personnel"</strong> refers to authorized users of the Customer (limited to the Customer's employees, contractors, and agents) who access the Embedded Software on behalf of the Customer for internal business operation.</li>
          </ul>
        </CardContent>
      </Card>
      
      <Card className="bg-white/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>Usage of Embedded Software</CardTitle>
        </CardHeader>
        <CardContent>
            <p className="text-muted-foreground mb-4">Aonflow retains all ownership rights to the Aonflow Platform, Embedded Software, and any related updates or modifications. During the duration of the Customer Agreement, the customer is granted the right to use the Embedded Software through the Company Service for their internal business operations, on a worldwide, non-transferable, non-sublicensable, and revocable basis, provided that they comply with the Customer Agreement and Embedded Terms. When using the Embedded Software, it is mandatory to have the Company Services as the endpoint, meaning that one connection in each recipe must be one of the Company Services.</p>
            <p className="text-muted-foreground mb-4">As part of the license agreement, the customer may permit their employees (Personnel) to use the Embedded Software through their account(s) as long as they comply with the terms outlined in these Embedded Terms. The customer is responsible for ensuring that all employees adhere to these terms and will be held accountable for any actions taken by their employees in relation to the Embedded Software.</p>
            <p className="text-muted-foreground">The customer is not granted any additional rights, titles, or interests in the intellectual property of Aonflow or its licensors, apart from what is explicitly stated in these Embedded Terms and Section 7. If the customer wants to use the Aonflow Platform or any of its features or services that are not included in the Embedded Software, they should visit the Aonflow website and directly contract with Aonflow for those features or services.</p>
        </CardContent>
      </Card>

      <Card className="bg-white/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>Customer’s Responsibility; Restrictions</CardTitle>
        </CardHeader>
        <CardContent>
            <h3 className="font-bold mb-2 text-foreground">Restrictions</h3>
            <p className="text-muted-foreground mb-4">The customer is not authorized, nor can allow any third party, to:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                <li>Interfere or attempt to interfere with the proper functioning of the Aonflow Platform or any other user's use of the Aonflow Platform, including through overusing server capacity;</li>
                <li>Use the Aonflow Platform for any fraudulent or illegal purposes;</li>
                <li>Reverse engineer, decompile, disassemble or otherwise attempt to discover the source code, object code or underlying structure, ideas or algorithms of the Aonflow Platform or any software or data related to the Aonflow Platform;</li>
                <li>Copy, alter, modify, or create derivative works of the Aonflow Platform or any software, source code, object code or underlying structure, design, look and feel, expression, ideas or algorithms, or documentation related to the Aonflow Platform, or otherwise use the Aonflow Platform in any way that violates the use restrictions contained in these Embedded Terms or the documentation, including building any products or services that are competitive to the Aonflow Platform, or using similar ideas, features, functions of the Aonflow Platform;</li>
                <li>Sell, rent, lease, distribute, pledge, assign, or otherwise transfer or encumber rights to the Aonflow Platform;</li>
                <li>Remove or otherwise alter any proprietary notices or labels from the Aonflow Platform or any portion thereof;</li>
                <li>Bypass any measures Aonflow may use to prevent or restrict access to the Aonflow Platform (or other accounts, computer systems or networks connected to the Aonflow Platform);</li>
                <li>Scan or test vulnerability of the Aonflow Platform or related products and services without Aonflow’s prior written consent;</li>
                <li>Use the Aonflow Platform in violation of any applicable local, state, national and foreign law(s), treaty or regulation(s), including any export control, sanctions regulations or other laws and regulations of the United States or any other jurisdiction, or a third party’s proprietary or contractual rights.</li>
            </ul>
            <p className="text-muted-foreground mb-4">Aonflow competitors or individuals acting on behalf of an Aonflow competitor may not access the Aonflow Platform. The Aonflow Platform may not be accessed for the benefit of third parties, including as service bureau, time-sharing or managed Aonflow arrangement, or for any benchmarking, comparative or competitive purposes unless pre-authorized in writing by Aonflow.</p>

            <h3 className="font-bold mb-2 text-foreground">Third-Party Applications</h3>
            <p className="text-muted-foreground mb-4">The Customer is allowed to use third-party applications, but they are fully responsible for obtaining the necessary licenses and adhering to their terms and conditions and privacy policies. The Customer and the Company are also solely responsible for any data loss or other damages that may result from using these third-party applications. Aonflow will not be held liable for any issues that arise from the customer's use of these third-party applications. Aonflow does not provide any warranties or support for third-party applications and does not have control over its privacy practices. Aonflow does not guarantee compatibility with any third-party applications and is not responsible for any changes to these third-party applications that may disrupt the customer's use or interaction with the Embedded Software.</p>

            <h3 className="font-bold mb-2 text-foreground">Access Credentials</h3>
            <p className="text-muted-foreground">The customer is responsible for creating and maintaining their own access credentials, and must always ensure that they are kept secret and confidential. The customer will also be held responsible for any activities that take place by use of their access credentials.</p>
        </CardContent>
      </Card>
      
      <Card className="bg-white/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>No Warranty</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground font-bold">
            AONFLOW DOES NOT PROVIDE ANY GUARANTEES, EITHER EXPLICITLY STATED OR IMPLIED, REGARDING ANY ASPECT OF THEIR SERVICES, INCLUDING ADVERTISING AND OTHER SERVICES. AONFLOW SPECIFICALLY DISCLAIMS ANY IMPLIED WARRANTIES OR CONDITIONS SUCH AS NON-INFRINGEMENT, MERCHANTABILITY, AND FITNESS FOR A SPECIFIC PURPOSE. ADDITIONALLY, AONFLOWDOES NOT GUARANTEE ANY SPECIFIC OUTCOMES OR RESULTS FROM USING THEIR PLATFORM AND THE CUSTOMER TAKES FULL RESPONSIBILITY WITH RESPECT THERETO FOR ANY RISKS ASSOCIATED WITH ITS USE.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-white/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>Indemnification</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            The customer is responsible for defending, compensating, and protecting Aonflow, its affiliate companies, and all of their officers, directors, agents and employees from any liabilities, claims and expenses (including reasonable attorneys' fees) that result from or are related to any claim made by a third party, including but not limited to: (i)allegations that any data provided by the customer infringes or misappropriates the third party's intellectual property rights, proprietary rights or any applicable law, or (ii) allegations arising from the customer's use of the Embedded Software in violation of these Embedded Terms or applicable law.
          </p>
        </CardContent>
      </Card>
      
      <Card className="bg-white/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>Limitation of Liability</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground font-bold">
            NEITHER PARTY OR ITS AFFILIATES WILL BE HELD LIABLE FOR ANY SPECIAL, INDIRECT, INCIDENTAL, CONSEQUENTIAL, PUNITIVE, RELIANCE, OR EXEMPLARY DAMAGES THAT RESULT FROM THESE EMBEDDED TERMS, TO THE EXTENT THAT IT IS NOT PROHIBITED BY LAW, EVEN IF THAT PARTY OR ITS AUTHORIZED REPRESENTATIVE WAS AWARE OF THE POSSIBILITY OF SUCH DAMAGES. THIS INCLUDES, BUT IS NOT LIMITED TO, INSTANCES OF NEGLIGENCE, SYSTEM FAILURE OR NETWORK OUTAGE. FURTHERMORE, AONFLOW'S TOTAL LIABILITY FOR ANY CLAIMS WILL NOT EXCEED THE AMOUNT OF $100 USD.
          </p>
        </CardContent>
      </Card>
      
      <Card className="bg-white/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>Ownership, Licenses</CardTitle>
        </CardHeader>
        <CardContent>
            <h3 className="font-bold mb-2 text-foreground">Customer Data</h3>
            <p className="text-muted-foreground mb-4">The customer shall retain full ownership and control over the Customer Data. During the duration of the Customer Agreement, Aonflow will have the worldwide, non-exclusive right to use the Customer Data free of charge, and with the ability to allow its sub-processors to use it as well, in order to provide the Embedded Software in compliance with these Embedded Terms and to fulfill its obligations outlined in this agreement. A list of sub-processors can be found at https://www.aonflow.com/sub-processors.</p>

            <h3 className="font-bold mb-2 text-foreground">Connectors</h3>
            <p className="text-muted-foreground mb-4">Aonflow shall have ownership and control over all Connectors and any derivatives of them on the Aonflow Platform, except for any Connectors created by the Customer. During the subscription term of the Customer Agreement, the Customer will have a non-exclusive right to use, make and share Connectors with other users. Connectors created by the Customer are private by default in the account, meaning that only the said customer has access to them within its account. Aonflow will not resell or reuse any private Recipe or any private Connector created by the Customer. The customer has the option to share the private Connectors with other users by marking them "public", and by doing so, the Customer grants Aonflow an irrevocable, perpetual, transferable, sublicensable, and worldwide license under any rights the customer owns in those Connectors to view, use, copy, modify and distribute those Connectors. Those Connectors would be part of the Community Connectors . The Customer agrees not to assert any claim or prosecute any action against Aonflow, or any users for infringement or misappropriation of any intellectual property rights of the Connectors created by the said customer resulting from Connectors that are developed by Aonflow, or users which are similar to, or the same as any Connectors created by the customer.</p>
            
            <h3 className="font-bold mb-2 text-foreground">Feedback</h3>
            <p className="text-muted-foreground mb-4">In regards to any suggestions, ideas, enhancement requests, feedback, recommendations or other information provided by the customer or any other party related to the Aonflow Platform, including any features and/or functionality of the Aonflow Platform, Connectors (collectively referred to as "Feedback"), the customer grants Aonflow a non-exclusive, worldwide, perpetual, irrevocable, freely sublicensable and fully transferable license to make, use, sell, reproduce, create derivatives of, display or otherwise implement the Feedback. Aonflow will not publicly associate such Feedback with the customer without obtaining prior written consent.</p>
        </CardContent>
      </Card>
      
      <Card className="bg-white/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>Data; Deletion of Data</CardTitle>
        </CardHeader>
        <CardContent>
            <h3 className="font-bold mb-2 text-foreground">Customer Data Processing</h3>
            <p className="text-muted-foreground mb-4">The Customer guarantees, promises, and agrees that it has obtained and will continue to maintain all necessary licenses, authorizations, approvals, and consents to use, transmit, and process Customer Data through the Embedded Software. The customer shall be fully responsible for the accuracy, quality, and legality of the Customer Data; the means by which the said customer acquired the Customer Data and the customer's use of the Customer Data (even if it contains personal data and crosses international borders); and that it shall comply with all applicable privacy and data protection laws in the collection, use, and transfer of Customer Data.</p>
            
            <h3 className="font-bold mb-2 text-foreground">Usage Data</h3>
            <p className="text-muted-foreground mb-4">Aonflow is allowed to use Usage Data during and after the term of the Customer Agreement for the purpose of implementing, maintaining, and improving the Aonflow Platform and fulfilling its obligations outlined in this Agreement.</p>

            <h3 className="font-bold mb-2 text-foreground">Account and Data Deletion</h3>
            <p className="text-muted-foreground mb-4">All Transaction Data in the account would be deleted within 30 days from its processing date, or in accordance with the company's subscription with Aonflow. The Customer has the ability to delete Account Data, Customer Data, and Transaction Data at their own discretion, or could request the company to do so. Upon receiving such a request, Aonflow shall delete the accounts (including all associated Account Data and Customer Data on the Aonflow Platform) within thirty (30) days, unless required by applicable laws or governmental authorities. In the event that the company does not request Aonflow to delete the account, Aonflow may destroy the accounts (including all associated Account Data and Customer Data on the Embedded Software) left in Aonflow's system after termination or expiration of these Embedded Terms.</p>
        </CardContent>
      </Card>

      <Card className="bg-white/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>Company Service</CardTitle>
        </CardHeader>
        <CardContent>
            <p className="text-muted-foreground mb-4">Even though the Customer may have access to the Embedded Software through the Company Service, the Company shall remain the sole and only provider of the Company Service. The Company and the Customer are only entering into a contractual relationship in relation to the Company Service. In case the Company stops operations or fails to provide the Company Service, Aonflow shall not be able to provide the Customer Service to the Company, or to refund any fees paid by the said customer to the company.</p>
            
            <h3 className="font-bold mb-2 text-foreground">Support</h3>
            <p className="text-muted-foreground mb-4">The Company is responsible for providing all technical support, answering questions, addressing complaints, and handling any claims related to the Company Services and the Embedded Software. The Customer is not permitted to contact Aonflow for any technical support, questions, complaints, or claims regarding the Company Services and Embedded Software.</p>

            <h3 className="font-bold mb-2 text-foreground">Data Processing</h3>
            <p className="text-muted-foreground">Before handling any personal data through the Embedded Software, the customer is required to enter into a data processing agreement with the Company in accordance with the appropriate data protection and privacy regulations for handling such personal data. Aonflow will also enter into a data processing agreement with the Company.</p>
        </CardContent>
      </Card>

      <Card className="bg-white/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>Suspension & Termination</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            The customer's access to or use of the Embedded Software (including all rights granted under these Embedded Terms) may be terminated or suspended if: (a)the customer or any personnel act in violation of these Embedded Terms or are found to be engaging in actions that threaten the security, integrity, availability or stability of the Aonflow Platform, (b) the Embedded Agreement has expired or has been terminated, or (c) the Company is in violation of the Embedded Agreement (including not making payments to Aonflow on time).
          </p>
        </CardContent>
      </Card>
    </ContentPageLayout>
  );
}
