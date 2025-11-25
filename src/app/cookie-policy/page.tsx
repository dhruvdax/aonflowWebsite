
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ContentPageLayout } from "@/components/layout/content-page-layout";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Cookie Policy | Your Guide to Our Cookie Use',
    description: "Learn how Aonflow uses cookies to enhance your experience and how you can manage your preferences.",
    alternates: {
        canonical: 'https://www.aonflow.com/cookie-policy',
    },
};

export default function CookiePolicyPage() {
  return (
    <ContentPageLayout 
      title="Cookie Policy"
      subtitle="Updated 23rd June 2023"
    >
      <Card className="border-0 bg-white/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>Tracking Tools</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            We and our third parties collect personal information about users over time and across different websites when you use the Aonflow platform. We use various common tracking tools such as browser cookies, web beacons, and other similar technologies. These tools may be placed and used on our sites or apps by our vendors or third parties. In this policy, "we" and "us" refers to Aonflow, Inc. and our affiliates, as well as our vendors and third parties who are authorized to place tools on our sites or apps.
          </p>
        </CardContent>
      </Card>

      <Card className="border-0 bg-white/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>Why Use Tracking Tools</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            Aonflow uses certain cookies, known as "essential cookies" that are necessary for the proper functioning of the service, such as maintaining a user's session while they are logged in. Additionally, Aonflow uses tracking tools for other purposes, like interest-based advertising, which involves displaying ads to users based on information collected about them, over time across various sites or platforms. This may include showing ads after a user leaves the Aonflow website to encourage them to return, as well as ads that are relevant to their browsing habits or online activities. These ads may be displayed or served on websites, or in emails by Aonflow or third parties, and may relate to Aonflow's products or other companies’ products.
          </p>
          <p className="text-muted-foreground mb-4">
            Aonflow may also employ various tracking tools for various purposes, such as:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Identifying new or returning visitors to our website</li>
            <li>Enhancing our website and gaining a better understanding of user activity on our platforms</li>
            <li>Connecting with third-party social media websites</li>
            <li>Monitoring user behavior and browsing activity over time on multiple websites or platforms</li>
            <li>Gaining insight into the preferences of our customers and website visitors.</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="border-0 bg-white/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>Gathering Insights For Interest-Based Advertising</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            We gather the information that is relevant to you by using tracking tools such as cookies and web beacons when you interact with us, our affiliates and other third parties. This information is used to understand your purchases, browsing behaviors, location, and other activities on our platforms, or third-party platforms. We also work with third parties who may link your name or email address to other information they collect, including past purchases made offline, online or online usage information.
          </p>
        </CardContent>
      </Card>
      <Card className="border-0 bg-white/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>Controlling Specific Tracking Tools</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Users can manage the cookies set by Aonflow on its website by visiting the Cookie Settings link on the homepage. Additionally, users can control cookies through their web browser, by visiting the FTC's online guide. However, disabling certain cookies may prevent some features on our Platform or website from working.
          </p>
          <p className="text-muted-foreground mt-4">
            Additionally, some browsers have "do not track" features that allow users to prevent websites from tracking them, but Aonflow does not currently respond to these signals. Choices regarding cookie management are specific to the browser and device used.
          </p>
        </CardContent>
      </Card>
      <Card className="border-0 bg-white/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>How To Control Interest-Based Advertising?</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Consumers have the option to opt-out of having their online behavior tracked and used for advertising through the Self-Regulatory Program for Online Behavioral Advertising. This can be done by visiting the Digital Advertising Alliance's WebChoices Tool and following the instructions provided. It is important to note that not all companies that use advertising cookies participate in this program.
          </p>
          <p className="text-muted-foreground mt-4">
            Additionally, the choices made are specific to both the browser and device being used.
          </p>
        </CardContent>
      </Card>
    </ContentPageLayout>
  );
}
