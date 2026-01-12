import SEOHead from "@/components/SEOHead";
import ContentPageLayout from "@/components/ContentPageLayout";
import Breadcrumb from "@/components/Breadcrumb";

const TermsOfServicePage = () => {
  return (
    <>
      <SEOHead 
        title="Terms of Service | HairCare.ai"
        description="Read the terms and conditions governing your use of HairCare.ai's AI-powered hair and scalp health advisory platform."
        canonicalUrl="https://haircare.ai/terms-of-service"
      />
      
      <ContentPageLayout>
        <div className="max-w-3xl mx-auto">
          <Breadcrumb items={[{ label: "Terms of Service" }]} />
          
          <header className="mb-10">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
              Terms of Service
            </h1>
            <p className="text-muted-foreground">
              Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
            </p>
          </header>

          <div className="prose prose-lg max-w-none text-foreground">
            <section className="mb-10">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">Agreement to Terms</h2>
              <p className="text-muted-foreground mb-4">
                By accessing or using HairCare.ai, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">Description of Service</h2>
              <p className="text-muted-foreground mb-4">
                HairCare.ai is an AI-powered educational platform that provides information and guidance about hair and scalp health. Our services include:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                <li>Educational content about hair loss, scalp conditions, and hair care</li>
                <li>An AI assistant that provides personalised guidance based on user queries</li>
                <li>Resources and articles about hair health topics</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">Medical Disclaimer</h2>
              <p className="text-muted-foreground mb-4 font-semibold">
                HairCare.ai is not a medical service. The information and guidance provided on this platform are for educational purposes only and should not be considered medical advice, diagnosis, or treatment.
              </p>
              <p className="text-muted-foreground mb-4">
                You acknowledge and agree that:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                <li>Our AI assistant and content are not substitutes for professional medical advice</li>
                <li>You should always consult a qualified healthcare provider for medical concerns</li>
                <li>You should not disregard professional medical advice based on information from HairCare.ai</li>
                <li>You should not delay seeking medical attention because of something you have read on this platform</li>
                <li>We do not diagnose medical conditions or prescribe treatments</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                If you experience sudden or severe hair loss, scalp symptoms, or any health concerns, please consult a healthcare professional immediately.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">Use of the Platform</h2>
              <p className="text-muted-foreground mb-4">
                You agree to use HairCare.ai only for lawful purposes and in accordance with these Terms. You agree not to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                <li>Use the platform in any way that violates applicable laws or regulations</li>
                <li>Attempt to gain unauthorised access to our systems or networks</li>
                <li>Interfere with or disrupt the integrity or performance of the platform</li>
                <li>Use automated systems to access the platform without permission</li>
                <li>Transmit any harmful code, viruses, or malicious software</li>
                <li>Impersonate any person or entity or misrepresent your affiliation</li>
                <li>Use the platform for commercial purposes without authorisation</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">Intellectual Property</h2>
              <p className="text-muted-foreground mb-4">
                All content on HairCare.ai, including text, graphics, logos, images, and software, is the property of HairCare.ai or its content suppliers and is protected by copyright and other intellectual property laws.
              </p>
              <p className="text-muted-foreground mb-4">
                You may view and print content from this website for personal, non-commercial use only. You may not reproduce, distribute, modify, display, perform, or create derivative works from our content without our express written permission.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">AI Assistant Limitations</h2>
              <p className="text-muted-foreground mb-4">
                Our AI assistant is designed to provide helpful information based on general knowledge about hair and scalp health. However:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                <li>AI responses may not always be accurate, complete, or up-to-date</li>
                <li>The AI cannot examine you physically or access your medical records</li>
                <li>Responses are based on the information you provide and may vary</li>
                <li>The AI may have limitations in understanding complex or unusual cases</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                We continuously work to improve our AI, but we cannot guarantee the accuracy of all responses.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">Limitation of Liability</h2>
              <p className="text-muted-foreground mb-4">
                To the fullest extent permitted by law, HairCare.ai and its operators shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                <li>Your use of or inability to use the platform</li>
                <li>Any information obtained from the platform</li>
                <li>Any decisions made based on content from the platform</li>
                <li>Unauthorised access to your data or transmissions</li>
                <li>Errors, mistakes, or inaccuracies in content</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                In no event shall our total liability exceed the amount you have paid to use our services, if any.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">Disclaimer of Warranties</h2>
              <p className="text-muted-foreground mb-4">
                The platform is provided "as is" and "as available" without warranties of any kind, either express or implied. We do not warrant that:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                <li>The platform will be uninterrupted, secure, or error-free</li>
                <li>Results obtained from using the platform will be accurate or reliable</li>
                <li>Any errors in the platform will be corrected</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">Indemnification</h2>
              <p className="text-muted-foreground mb-4">
                You agree to indemnify and hold harmless HairCare.ai and its operators from any claims, damages, losses, or expenses arising from your use of the platform or violation of these Terms.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">Changes to Terms</h2>
              <p className="text-muted-foreground mb-4">
                We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to the website. Your continued use of the platform after any changes constitutes acceptance of the new Terms.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">Termination</h2>
              <p className="text-muted-foreground mb-4">
                We may terminate or suspend your access to the platform at any time, without prior notice or liability, for any reason, including breach of these Terms.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">Governing Law</h2>
              <p className="text-muted-foreground mb-4">
                These Terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">Severability</h2>
              <p className="text-muted-foreground mb-4">
                If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force and effect.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">Contact</h2>
              <p className="text-muted-foreground mb-4">
                If you have any questions about these Terms of Service, please contact us through our website.
              </p>
            </section>
          </div>
        </div>
      </ContentPageLayout>
    </>
  );
};

export default TermsOfServicePage;
