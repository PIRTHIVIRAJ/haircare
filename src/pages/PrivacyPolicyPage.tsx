import SEOHead from "@/components/SEOHead";
import ContentPageLayout from "@/components/ContentPageLayout";
import Breadcrumb from "@/components/Breadcrumb";

const PrivacyPolicyPage = () => {
  return (
    <>
      <SEOHead 
        title="Privacy Policy | HairCare.ai"
        description="Learn how HairCare.ai collects, uses, and protects your personal information. Our commitment to your privacy and data security."
        canonicalUrl="https://haircare.ai/privacy-policy"
      />
      
      <ContentPageLayout>
        <div className="max-w-3xl mx-auto">
          <Breadcrumb items={[{ label: "Privacy Policy" }]} />
          
          <header className="mb-10">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground">
              Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
            </p>
          </header>

          <div className="prose prose-lg max-w-none text-foreground">
            <section className="mb-10">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">Introduction</h2>
              <p className="text-muted-foreground mb-4">
                HairCare.ai is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our AI-powered hair and scalp health advisory services.
              </p>
              <p className="text-muted-foreground mb-4">
                Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">Information We Collect</h2>
              
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">Information You Provide</h3>
              <p className="text-muted-foreground mb-4">
                When you interact with our AI assistant or use our services, you may voluntarily provide information about your hair concerns, scalp conditions, and related health queries. This information is used solely to provide personalised guidance and improve our services.
              </p>
              
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">Automatically Collected Information</h3>
              <p className="text-muted-foreground mb-4">
                We may automatically collect certain information when you visit our website, including:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                <li>Device and browser information</li>
                <li>IP address and approximate location</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website addresses</li>
                <li>Operating system and platform</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                <li>Provide personalised hair and scalp health guidance through our AI assistant</li>
                <li>Improve and optimise our website and services</li>
                <li>Analyse usage patterns to enhance user experience</li>
                <li>Maintain the security and integrity of our platform</li>
                <li>Respond to your enquiries and provide support</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">Data Storage and Security</h2>
              <p className="text-muted-foreground mb-4">
                We implement appropriate technical and organisational security measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is completely secure.
              </p>
              <p className="text-muted-foreground mb-4">
                Conversations with our AI assistant may be stored temporarily to provide contextual responses during your session. We do not permanently store personal health information unless you create an account and explicitly consent to such storage.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">Cookies and Tracking Technologies</h2>
              <p className="text-muted-foreground mb-4">
                We use cookies and similar tracking technologies to collect and store information about your interactions with our website. These help us:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                <li>Remember your preferences and settings</li>
                <li>Understand how you use our website</li>
                <li>Improve our services based on usage patterns</li>
                <li>Provide relevant content</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                You can control cookie settings through your browser preferences. Disabling cookies may affect certain functionality of our website.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">Third-Party Services</h2>
              <p className="text-muted-foreground mb-4">
                We may use third-party services that collect, monitor, and analyse data to improve our services. These third parties have their own privacy policies addressing how they use such information.
              </p>
              <p className="text-muted-foreground mb-4">
                We do not sell, trade, or otherwise transfer your personal information to outside parties for marketing purposes.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">Your Rights</h2>
              <p className="text-muted-foreground mb-4">
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                <li>The right to access your personal data</li>
                <li>The right to correct inaccurate data</li>
                <li>The right to request deletion of your data</li>
                <li>The right to restrict or object to processing</li>
                <li>The right to data portability</li>
                <li>The right to withdraw consent</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                To exercise any of these rights, please contact us using the information provided below.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">Children's Privacy</h2>
              <p className="text-muted-foreground mb-4">
                Our services are not intended for individuals under the age of 16. We do not knowingly collect personal information from children. If we become aware that we have collected personal information from a child without parental consent, we will take steps to remove that information.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">Changes to This Policy</h2>
              <p className="text-muted-foreground mb-4">
                We may update this privacy policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new privacy policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
              <p className="text-muted-foreground mb-4">
                If you have questions or concerns about this privacy policy or our data practices, please contact us through our website.
              </p>
            </section>
          </div>
        </div>
      </ContentPageLayout>
    </>
  );
};

export default PrivacyPolicyPage;
