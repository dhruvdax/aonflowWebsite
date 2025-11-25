
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ContentPageLayout } from "@/components/layout/content-page-layout";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Community Policy & Compliance | Aonflow',
    description: "Understand the guidelines and expectations that govern interactions within Aonflow's community to ensure respectful and compliant participation.",
    alternates: {
        canonical: 'https://www.aonflow.com/community-policy',
    },
};

export default function CommunityPolicyPage() {
  return (
    <ContentPageLayout
      title="Community Policy"
    >
      <Card className="bg-white/50 backdrop-blur-sm">
        <CardContent className="pt-6">
          <p className="text-muted-foreground mb-4">
            At Dax Software Solutions, Inc. (referred to as “Aonflow”, “us” or “we”), we encourage the users of our platform and related services (together, the “Service”) to share with other Aonflow users through our Community sharing features (the “Community”) which constitutes of Connectors (“Community Connector(s)”) and Recipes (“Community Recipe(s)”) (together, the “Community Listing” or “Listing”).
          </p>
          <p className="text-muted-foreground mb-4">
            At Dax Software Solutions, Inc. (referred to as “Aonflow”, “us” or “we”) we support the sharing of information and resources among users of our platform and services (together referred to as the “Services”) through the Community feature (referred to as the “Community”), which includes Community Connectors (referred to as the “Connectors”) and resources within the Community (together referred to as the “Listing” or “Community Listing”).
          </p>
          <p className="text-muted-foreground mb-4">
            We reserve the right to take any necessary action against any developer who creates a Community listing (the “Developer”) if they violate our policy, in order to protect all users of the Community (the “User”), both directly and indirectly.
          </p>
          <p className="text-muted-foreground mb-4">
            As an individual (“You” and as applicable, the “Developer” or the “User”) on behalf of the company, or legal entity that uses the Community and creates a Community listing, are required to follow our Terms of Use & Service https://www.aonflow.com/terms-of-use (the “Terms of Use & Service”), any other relevant documentation and policies, and this Community Policy. By using the Community, you agree to abide by any updates or modifications made to the aforesaid agreements or Policy, as the case may be. Any terms not defined in this Policy shall have the meaning provided in the Terms of Use & Service. Your continued use of the Community indicates your acceptance of any changes made to the said agreements or Policy.
          </p>
          <p className="text-muted-foreground">
            The use of the Community is governed (by this Policy in conjunction with the Terms of Use & Service, together forming the “Agreement”).
          </p>
        </CardContent>
      </Card>

      <Card className="bg-white/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>1. For Users</CardTitle>
        </CardHeader>
        <CardContent>
            <p className="text-muted-foreground mb-4">If you choose to use any Community Listing;</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>You understand and agree that the Community Listing is managed by the developer and any Community connectors will be installed in your workspace.</li>
                <li>The Community Listings are provided as is, and Aonflow is not responsible for any issues arising from their use. Aonflow does not provide any warranties, representations, or guarantees for Community Listings and does not offer any guarantee of support from the developer. It is recommended that you thoroughly investigate a Community Listing before using it and its updates.</li>
                <li>Aonflow does not provide any assurance of support or assistance from the Developer.</li>
            </ul>
        </CardContent>
      </Card>

      <Card className="bg-white/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>2. For Developers</CardTitle>
        </CardHeader>
        <CardContent>
            <p className="text-muted-foreground mb-4">You will not take any legal action or assert any claim against Aonflow or other users for any infringement or misappropriation of any Community Listings created by you.</p>
            <p className="text-muted-foreground mb-4">This policy does not prevent Aonflow or other users from creating any community listings that are identical or similar to other listings created by other developers or users.</p>
            <p className="text-muted-foreground mb-4">In the event that you decide to create a Community Listing:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>When you create a Community Listing, it will be classified as a Community Connector and would be available for others to view the Community. You hereby understand and accept that other users have the right to use, make changes to, and distribute these Community Listings.</li>
                <li>You guarantee, represent, and warrant that you have obtained and will continue to hold all the necessary rights, ownership, and interests to create the Community Listing, including all intellectual property rights such as patents, trademarks, trade secrets, copyrights, and other proprietary rights, pertaining to (i) the Community Listing you create and (ii) the trade names, trademarks, service marks, logos, and domain names associated with that Community Listing (referred to as "Marks").</li>
                <li>You guarantee that the Community Listing created by you does not and will not infringe Aonflow's or any third party's proprietary rights or intellectual property. You further represent and warrant that you shall not make any statements to the contrary, including any statements that imply an Aonflow endorsement, partnership, affiliation or certification.</li>
                <li>You give Aonflow a worldwide, permanent, transferable, sublicensable, and royalty-free license to any rights you may own in the Community Listing you create, which includes (a) using, modifying, and distributing the Community Listing, (b) displaying and performing it in connection with the operation, improvement, and marketing of the Service and Community, and conducting a Security Review on the Community Listing at Aonflow's discretion, and (c) allowing Aonflow to use the trade names, trademarks, service marks, logos, and domain names associated with the Community Listing, but Aonflow must comply with any trademark usage policies you have communicated to it.</li>
                <li>You are required to provide and keep up-to-date contact information to Aonflow so that it can reach out to you for customer support and legal purposes.</li>
            </ul>
             <p className="text-muted-foreground my-4">The Community Listings and Developers are prohibited from :</p>
             <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Interfering with the performance of the Service, appropriate support or assistance, or the security of the Services in any way.</li>
                <li>Collecting, storing, using, or allowing or assisting any person or entity to collect, store or use any documents, messages, graphics, images, files, content, data, and other information uploaded, posted, transmitted, or processed by Users via the Services or through the Community Listing, including account configuration, recipe definitions, metadata, and data processing on the Service, whether identifiable or not and in aggregate or not, in any way (including using your access to Aonflow APIs) for any purposes (including using data to contact any Users).</li>
                <li>Prohibiting any action that degrades or compromises the performance, support, or security of the Service or Community.</li>
                <li>Using misleading or deceptive statements about the functionality, performance, origin, or data use of the Community Listing</li>
                <li>Transmitting or introducing any viruses or malicious code that may damage, interfere with, intercept, or expropriate any system or data.</li>
                <li>Providing unauthorized access to the Service or bypassing access restrictions</li>
                <li>Using APIs or any open source software that is unpublished, or any other software which, as a condition of its development, use, or redistribution, requires that such software, any modifications or changes to that software and/or any other software with which it is integrated or combined be disclosed or distributed in source code form.</li>
                <li>Asserting in the code of any Community Listing that it is under any license terms incompatible with the Policy.</li>
                <li>Misrepresenting that the Community Listings are produced or authorized by Aonflow or another person(s), company(ies), legal entity(ies), or individual(s).</li>
            </ul>
            <p className="text-muted-foreground mt-4">Aonflow and its designated personnel may conduct security checks on the Community Listings you create whenever they wish to do so, and in any manner they deem fit. It is your responsibility to properly protect and backup any data or equipment used in connection with the security check. You cannot hold Aonflow responsible for any lost data, delays, incorrect results, work delays or lost profits resulting from the security check. By agreeing to this policy, you acknowledge that Aonflow does not guarantee, warrant or provide any support for Community Connectors.</p>
        </CardContent>
      </Card>
      
      <Card className="bg-white/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>3. General Use of the Community</CardTitle>
        </CardHeader>
        <CardContent>
            <p className="text-muted-foreground mb-4">Users and Developers must obey all relevant laws and regulations in every location where the Community Connectors are accessible and are to abide by this Policy and any other agreements with Aonflow or third parties regarding the usage of the Service, the portal, and the Connectors.</p>
            <p className="text-muted-foreground mb-4">All Users and Developers are not allowed to and prohibited from:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                <li>Facilitating violations of the law.</li>
                <li>Engaging in any illegal activities.</li>
                <li>Performing any fraudulent or malicious actions, or providing harmful content or information to the Service.</li>
                <li>Violating any intellectual property or proprietary rights, including those of Aonflow, its licensors, or other Users and Developers.</li>
            </ul>
            <h3 className="font-bold mb-2 text-foreground">Data breach</h3>
            <p className="text-muted-foreground mb-4">You must immediately contact us at contact@aonflow.com if you become aware of any unauthorized access, destruction, loss, alteration, or disclosure of data through the Service, the Community, or any Community Listing. You must also work with Aonflow to help resolve the issue and take all necessary steps to prevent it from occurring again. This is to ensure the security and privacy of all Users is protected.</p>
            <h3 className="font-bold mb-2 text-foreground">Marks</h3>
            <p className="text-muted-foreground mb-4">Users acknowledge, understand, and agree that the trademarks used in this Community and for each Community Connector are only used to show that the Community Connectors are meant to be integrated with products or services from the respective trademark owners. Unless otherwise stated in the description of the Community Connectors, this Community and the Community Connectors are not officially approved or endorsed by the trademark owners and are not guaranteed to be compatible with the trademark owners' products or services.</p>
            <h3 className="font-bold mb-2 text-foreground">Connectors Discontinuance</h3>
            <p className="text-muted-foreground">Users acknowledge, understand, and agree that if the creator of a third-party application stops making it available to work with the Aonflow platform, Aonflow will not be able to ensure the continued connection to that application, and the corresponding connector (including Aonflow-created and community-created connectors) may stop working and lose their integration capabilities.</p>
        </CardContent>
      </Card>
      
      <Card className="bg-white/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>4. Warranty Disclaimer</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            THE AGREEMENT ONLY INCLUDES EXPRESS WARRANTIES FROM AONFLOW. AONFLOW DOES NOT MAKE ANY ADDITIONAL WARRANTIES, EXPRESSED OR IMPLIED, REGARDING ANY MATTER, INCLUDING ADVERTISING AND OTHER SERVICES. AONFLOW EXPRESSLY AND SPECIFICALLY DISCLAIMS ANY IMPLIED WARRANTIES OR CONDITIONS OF NON-INFRINGEMENT, MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. AONFLOW DOES NOT GUARANTEE ANY RESULTS OF OR USE OF THE AONFLOW PLATFORM AND THE ACCOUNT HOLDER ASSUMES ALL RISK AND RESPONSIBILITY WITH RESPECT THERETO.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-white/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>5. Indemnity</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            You agree to hold harmless, protect, defend, and indemnify Aonflow, its affiliates, and their respective officers, directors, agents, and employees from any legal claims or expenses (including reasonable attorney's fees) paid or payable to an unaffiliated third party that arises from or is related to any allegations of intellectual property infringement, or misappropriation by the Community Connectors you create, disputes between you and a user of your Community Connector, or any use of the Service, this Portal or Community Connectors that violates the Agreement or applicable laws.
          </p>
        </CardContent>
      </Card>
      
      <Card className="bg-white/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>6. Limitation of Liability</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            IN NO EVENT WILL AONFLOW BE LIABLE FOR ANY SPECIAL, INCIDENTAL, INDIRECT, PUNITIVE, OR CONSEQUENTIAL DAMAGES WHATSOEVER, INCLUDING, WITHOUT LIMITATION, DAMAGES RESULTING FROM DELAY OF DELIVERY, FOR LOSS OF DATA, BUSINESS, GOODWILL OR PROFITS, FOR BUSINESS INTERRUPTION OR ANY OTHER COMMERCIAL DAMAGES OR LOSSES, RELATED TO OR ARISING OUT OF THIS POLICY, OR YOUR USE OR THE INABILITY TO USE THE SERVICE, HOWEVER, CAUSED, WHETHER UNDER A THEORY OF CONTRACT, WARRANTY, TORT (INCLUDING NEGLIGENCE), PRODUCTS LIABILITY, OR OTHERWISE, EVEN IF AONFLOW HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES, AND NOTWITHSTANDING THE FAILURE OF ESSENTIAL PURPOSE OF ANY REMEDY. IN NO EVENT SHALL AONFLOW’S TOTAL LIABILITY TO YOU UNDER THIS AGREEMENT FOR ALL DAMAGES EXCEED THE AMOUNT OF $50 USD.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-white/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>7. Removals</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Aonflow reserves the right to take action, including removing or suspending access to the Service and/or Community, removing Community Listings, or taking legal action, if a violation of this policy is found, without prior notice. This may include removing Community Listings that are found to violate third-party intellectual property rights or proprietary rights, violate any laws, or violate the Agreement. If we determine that any aspect of the Community Listing or its associated marks created by you infringe the intellectual property rights of others, (a) violate any laws, or is subject to an injunction; or (b) breach the Agreement, we reserve the right to remove the said listing from the Community, and may suspend or bar the developer or user from the Community without any notice. Aonflow reserves the right to suspend or bar any Developers or Users from the Community at its sole discretion.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-white/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>8. Authority</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            You assure and pledge that (a) You possess the complete power and authorization to accept the Agreement on behalf of the individual, company, or legal entity that uses the Community and creates or uses Community Listings; (b) The Agreement is a valid and binding commitment for you and the individual, company, or legal entity you represent; (c) You have acquired and will continue to maintain throughout the agreed upon period all necessary licenses, permissions, approvals, and consent to enter into and fulfill your obligations according to the Agreement in compliance with all relevant laws, rules, and regulations.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-white/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>9. Modifications</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            We reserve the right to make changes to this Policy at any time whatsoever and without prior notice. It is your responsibility to regularly check for updates and changes. We may notify you of any significant changes through email or by posting a notice on the Aonflow platform. By continuing to use the Community or any Community Connectors, you are agreeing to the updated and modified terms.
          </p>
          <p className="text-muted-foreground">
            Aonflow may provide you with specific services, products, or features to use in connection with the Community or any Community Listings you create. However, Aonflow has the right to change, suspend, or stop providing these services, products, or features at any time without notice or liability. Additionally, Aonflow may limit access to certain features or materials and is not obligated to provide updates, improvements, or corrections.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-white/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>10. Miscellaneous</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            You acknowledge and agree this Agreement does not establish a legal partnership or agency relationship between you and Aonflow, and you are not authorized to represent otherwise.
          </p>
          <p className="text-muted-foreground">
            Aonflow reserves the right to develop, acquire, license, market, promote or distribute products, software or technologies that perform the same or similar functions as your Community Listing, without any limitations set by this Agreement.
          </p>
        </CardContent>
      </Card>
    </ContentPageLayout>
  );
}
