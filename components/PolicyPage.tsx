import React from 'react';

type PolicyType = 'terms' | 'privacy' | 'cookie' | 'acceptable-use';

interface PolicyPageProps {
  policyType: PolicyType;
  onBack: () => void;
}

const PolicyPage: React.FC<PolicyPageProps> = ({ policyType, onBack }) => {
  const renderPolicy = () => {
    switch (policyType) {
      case 'terms':
        return (
          <div className="bg-white p-10 rounded-xl shadow-lg">
            <button
              onClick={onBack}
              className="inline-block mb-5 text-primary hover:text-accent transition-colors font-medium"
            >
              ← Back to SubTranslate
            </button>

            <h1 className="text-3xl font-bold text-primary border-b-4 border-primary pb-3 mb-5">Terms of Service</h1>
            <p className="text-gray-600 italic mb-5">Last Updated: November 6, 2025</p>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-5">
              <p className="text-sm">
                <strong>Important:</strong> By using SubTranslate, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree, please do not use our service.
              </p>
            </div>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">1. Acceptance of Terms</h2>
            <p className="mb-4">These Terms of Service ("Terms") govern your use of SubTranslate, operated by Varabit Web Design & Development ("Company," "we," "us," or "our"). By accessing or using our service, you agree to be bound by these Terms and all applicable laws and regulations.</p>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">2. Description of Service</h2>
            <p className="mb-4">SubTranslate is an AI-powered subtitle translation tool that uses Google Gemini AI to translate subtitle files (.srt format). The service allows users to:</p>
            <ul className="list-disc ml-6 mb-4">
              <li>Upload subtitle files for translation</li>
              <li>Select source and target languages</li>
              <li>Receive translated subtitle files</li>
              <li>Download the translated content</li>
            </ul>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">3. User Requirements</h2>
            <ul className="list-disc ml-6 mb-4">
              <li>You must be at least 13 years old to use this service</li>
              <li>You must provide a valid Google Gemini API key</li>
              <li>You are responsible for maintaining the security of your API key</li>
              <li>You must comply with all applicable laws and regulations</li>
            </ul>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">4. User Conduct</h2>
            <p className="mb-4">You agree NOT to use the service to:</p>
            <ul className="list-disc ml-6 mb-4">
              <li>Translate content that infringes on intellectual property rights</li>
              <li>Process illegal, harmful, threatening, or abusive content</li>
              <li>Violate any applicable laws or regulations</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Reverse engineer, decompile, or disassemble any part of the service</li>
              <li>Use the service for any commercial purposes without written permission</li>
              <li>Distribute malware or other malicious code</li>
            </ul>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">5. Intellectual Property Rights</h2>
            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">5.1 Your Content</h3>
            <p className="mb-4">You retain all rights to the subtitle files you upload. By using our service, you grant us a limited, non-exclusive license to process your files solely for the purpose of providing the translation service.</p>

            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">5.2 Our Service</h3>
            <p className="mb-4">The SubTranslate service, including its design, functionality, and underlying technology, is owned by Varabit Web Design & Development and is protected by copyright, trademark, and other intellectual property laws.</p>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">6. API Key and Third-Party Services</h2>
            <ul className="list-disc ml-6 mb-4">
              <li>You are responsible for obtaining and maintaining your own Google Gemini API key</li>
              <li>Your use of Google Gemini is subject to Google's Terms of Service and Privacy Policy</li>
              <li>We do not store your API key on our servers</li>
              <li>API usage and associated costs are between you and Google</li>
            </ul>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">7. Service Availability</h2>
            <ul className="list-disc ml-6 mb-4">
              <li>We strive to maintain 99.9% uptime but do not guarantee uninterrupted service</li>
              <li>We may temporarily suspend service for maintenance, updates, or repairs</li>
              <li>We reserve the right to modify or discontinue the service at any time</li>
              <li>We are not liable for any service interruptions or data loss</li>
            </ul>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">8. Disclaimers</h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
              <p className="font-semibold mb-2">THE SERVICE IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND.</p>
              <p className="mb-2">We specifically disclaim all warranties, including but not limited to:</p>
              <ul className="list-disc ml-6">
                <li>Merchantability and fitness for a particular purpose</li>
                <li>Non-infringement of third-party rights</li>
                <li>Accuracy or completeness of translations</li>
                <li>Uninterrupted or error-free operation</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">9. Limitation of Liability</h2>
            <p className="mb-4">TO THE MAXIMUM EXTENT PERMITTED BY LAW, Varabit Web Design & Development SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO:</p>
            <ul className="list-disc ml-6 mb-4">
              <li>Loss of profits, data, or business opportunities</li>
              <li>Service interruptions or failures</li>
              <li>Unauthorized access to or alteration of your data</li>
              <li>Third-party actions or content</li>
            </ul>
            <p className="mb-4">Our total liability shall not exceed the amount you paid to use the service (which is currently free).</p>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">10. Indemnification</h2>
            <p className="mb-4">You agree to indemnify and hold harmless Varabit Web Design & Development, its officers, directors, employees, and agents from any claims, damages, losses, or expenses (including reasonable attorney fees) arising from your use of the service, your content, or your violation of these Terms.</p>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">11. Termination</h2>
            <ul className="list-disc ml-6 mb-4">
              <li>You may stop using the service at any time</li>
              <li>We may terminate or suspend access immediately, without prior notice, for any reason</li>
              <li>Upon termination, your right to use the service ceases immediately</li>
              <li>Provisions of these Terms that by their nature should survive termination shall survive</li>
            </ul>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">12. Governing Law</h2>
            <p className="mb-4">These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Varabit Web Design & Development operates, without regard to conflict of law principles.</p>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">13. Changes to Terms</h2>
            <p className="mb-4">We reserve the right to modify these Terms at any time. We will notify users of material changes by posting the updated Terms on this page. Your continued use of the service after changes constitutes acceptance of the new Terms.</p>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">14. Severability</h2>
            <p className="mb-4">If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary so that these Terms shall otherwise remain in full force and effect.</p>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">15. Contact Information</h2>
            <p className="mb-4">If you have any questions about these Terms of Service, please contact us:</p>
            <ul className="list-disc ml-6 mb-4">
              <li>Email: legal@varabit.com</li>
              <li>Website: <a href="https://varabit.com/contact" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent">https://varabit.com/contact</a></li>
            </ul>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">16. Acknowledgment</h2>
            <p className="mb-4">By using SubTranslate, you acknowledge that you have read these Terms of Service, understood them, and agree to be bound by them.</p>
          </div>
        );

      case 'privacy':
        return (
          <div className="bg-white p-10 rounded-xl shadow-lg">
            <header className="pb-4 mb-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <div className="text-2xl font-bold text-primary">SubTranslate</div>
              </div>
            </header>

            <button
              onClick={onBack}
              className="inline-block mb-5 text-primary hover:text-accent transition-colors font-medium"
            >
              ← Back to SubTranslate
            </button>

            <h1 className="text-3xl font-bold text-primary border-b-4 border-primary pb-3 mb-5">Privacy Policy</h1>
            <p className="text-gray-600 italic mb-5">Last Updated: November 6, 2025</p>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">1. Introduction</h2>
            <p className="mb-4">Varabit Web Design & Development ("we," "our," or "us") operates SubTranslate, an AI-powered subtitle translation service. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our service.</p>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">2. Information We Collect</h2>

            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">2.1 Information You Provide</h3>
            <ul className="list-disc ml-6 mb-4">
              <li><strong>API Keys:</strong> We do not store your Google Gemini API key on our servers. It remains in your browser's local storage only.</li>
              <li><strong>Subtitle Files:</strong> Uploaded files are processed in real-time and are not stored on our servers after translation.</li>
            </ul>

            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">2.2 Automatically Collected Information</h3>
            <ul className="list-disc ml-6 mb-4">
              <li><strong>Usage Data:</strong> Anonymous analytics to improve service performance (if enabled)</li>
              <li><strong>Device Information:</strong> Browser type, version, and operating system</li>
              <li><strong>Log Data:</strong> IP address, access times, and pages viewed (for security purposes)</li>
            </ul>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">3. How We Use Your Information</h2>
            <ul className="list-disc ml-6 mb-4">
              <li>Provide and maintain our translation service</li>
              <li>Process your subtitle files using Google Gemini AI</li>
              <li>Improve our service performance and user experience</li>
              <li>Respond to your requests and support needs</li>
              <li>Ensure security and prevent fraud</li>
            </ul>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">4. Data Sharing and Disclosure</h2>
            <p className="mb-2"><strong>We do not sell, trade, or rent your personal information.</strong></p>
            <p className="mb-4">We may share information in the following circumstances:</p>
            <ul className="list-disc ml-6 mb-4">
              <li><strong>With Google Gemini:</strong> Your subtitle content and API key are sent directly to Google's Gemini API for translation. Please review <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent">Google's Privacy Policy</a>.</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
              <li><strong>Service Providers:</strong> With trusted third parties who assist in operating our service (under strict confidentiality agreements)</li>
            </ul>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">5. Data Security</h2>
            <p className="mb-4">We implement industry-standard security measures to protect your information:</p>
            <ul className="list-disc ml-6 mb-4">
              <li>HTTPS encryption for all data transmission</li>
              <li>No persistent storage of your files or API keys on our servers</li>
              <li>Regular security audits and updates</li>
              <li>Access controls and authentication for our systems</li>
            </ul>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">6. Your Rights and Choices</h2>
            <ul className="list-disc ml-6 mb-4">
              <li><strong>Local Storage:</strong> You can clear your API key from your browser at any time</li>
              <li><strong>File Deletion:</strong> Your files are automatically deleted after processing</li>
              <li><strong>Data Access:</strong> Contact us to request information about data we may have collected</li>
              <li><strong>Opt-out:</strong> You can stop using our service at any time</li>
            </ul>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">7. Cookies and Local Storage</h2>
            <p className="mb-4">We use browser local storage to store your API key (if you choose). We do not use traditional cookies for tracking. See our <button onClick={() => {}} className="text-primary hover:text-accent underline">Cookie Policy</button> for more details.</p>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">8. Children's Privacy</h2>
            <p className="mb-4">Our service is not intended for children under 13. We do not knowingly collect personal information from children under 13. If you believe we have collected such information, please contact us immediately.</p>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">9. International Data Transfers</h2>
            <p className="mb-4">Your data may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information in accordance with this privacy policy.</p>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">10. Changes to This Policy</h2>
            <p className="mb-4">We may update this Privacy Policy from time to time. We will notify users of any material changes by posting the new policy on this page and updating the "Last Updated" date.</p>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">11. Contact Us</h2>
            <p className="mb-4">If you have questions about this Privacy Policy, please contact us:</p>
            <ul className="list-disc ml-6 mb-4">
              <li>Email: privacy@varabit.com</li>
              <li>Website: <a href="https://varabit.com/contact" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent">https://varabit.com/contact</a></li>
            </ul>
          </div>
        );

      case 'cookie':
        return (
          <div className="bg-white p-10 rounded-xl shadow-lg">
            <button
              onClick={onBack}
              className="inline-block mb-5 text-primary hover:text-accent transition-colors font-medium"
            >
              ← Back to SubTranslate
            </button>

            <h1 className="text-3xl font-bold text-primary border-b-4 border-primary pb-3 mb-5">Cookie Policy</h1>
            <p className="text-gray-600 italic mb-5">Last Updated: November 6, 2025</p>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">1. What Are Cookies and Local Storage?</h2>
            <p className="mb-4">Cookies are small text files that are placed on your device when you visit a website. Local storage is a similar technology that allows websites to store information directly in your browser. These technologies help websites remember information about your visit and improve your browsing experience.</p>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">2. How We Use Cookies and Local Storage</h2>
            <p className="mb-4">SubTranslate uses browser local storage (not traditional cookies) for the following purposes:</p>

            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">2.1 Essential Functionality</h3>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
              <p className="text-sm">
                <strong>API Key Storage:</strong> We use your browser's local storage to save your Google Gemini API key when you choose to store it. This allows you to use the service without re-entering your key each time.
              </p>
            </div>
            <ul className="list-disc ml-6 mb-4">
              <li><strong>Purpose:</strong> To remember your API key for convenience</li>
              <li><strong>Data Stored:</strong> Your Google Gemini API key (encrypted in your browser)</li>
              <li><strong>Retention:</strong> Until you clear it or your browser storage is cleared</li>
              <li><strong>You Can:</strong> Disable this by not checking "Remember API key" or by clearing your browser storage</li>
            </ul>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">3. Types of Storage We Use</h2>
            <div className="overflow-x-auto mb-4">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left text-primary">Type</th>
                    <th className="border border-gray-300 px-4 py-2 text-left text-primary">Purpose</th>
                    <th className="border border-gray-300 px-4 py-2 text-left text-primary">Duration</th>
                    <th className="border border-gray-300 px-4 py-2 text-left text-primary">Required</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Local Storage (API Key)</td>
                    <td className="border border-gray-300 px-4 py-2">Store your API key for convenience</td>
                    <td className="border border-gray-300 px-4 py-2">Until cleared by user</td>
                    <td className="border border-gray-300 px-4 py-2">No (optional)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">Session Storage</td>
                    <td className="border border-gray-300 px-4 py-2">Temporary data during translation</td>
                    <td className="border border-gray-300 px-4 py-2">Until tab is closed</td>
                    <td className="border border-gray-300 px-4 py-2">Yes (for functionality)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Traditional Cookies</td>
                    <td className="border border-gray-300 px-4 py-2">None currently used</td>
                    <td className="border border-gray-300 px-4 py-2">N/A</td>
                    <td className="border border-gray-300 px-4 py-2">N/A</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">4. Third-Party Cookies</h2>
            <p className="mb-4">Some third-party services we use may set their own cookies:</p>
            <ul className="list-disc ml-6 mb-4">
              <li><strong>Google Gemini API:</strong> May set cookies for authentication and rate limiting (subject to Google's policies)</li>
              <li><strong>Tailwind CSS:</strong> Loaded from CDN, may set minimal tracking cookies</li>
              <li><strong>Font Services:</strong> Google Fonts may set cookies for performance</li>
            </ul>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">5. Your Choices Regarding Storage</h2>

            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">5.1 Managing Local Storage</h3>
            <p className="mb-4">You can control what information is stored in your browser:</p>
            <ul className="list-disc ml-6 mb-4">
              <li><strong>Chrome:</strong> Settings → Privacy and Security → Site Settings → Storage</li>
              <li><strong>Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</li>
              <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
              <li><strong>Edge:</strong> Settings → Site Permissions → Storage</li>
            </ul>

            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">5.2 Disabling Local Storage</h3>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
              <p className="text-sm">
                <strong>Note:</strong> If you disable local storage, you will need to re-enter your API key each time you use the service. Some features may not work properly.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">5.3 Deleting Stored Data</h3>
            <p className="mb-4">To delete your stored API key:</p>
            <ul className="list-disc ml-6 mb-4">
              <li>Use the "Change API Key" button in the application</li>
              <li>Clear your browser's local storage manually</li>
              <li>Use your browser's "Clear browsing data" option</li>
            </ul>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">6. Impact of Disabling Storage</h2>
            <p className="mb-4">If you choose to disable or clear local storage:</p>
            <ul className="list-disc ml-6 mb-4">
              <li>You will need to enter your API key every time you use the service</li>
              <li>Your session will not be remembered between browser sessions</li>
              <li>Some performance optimizations may not be available</li>
              <li>The core translation functionality will still work</li>
            </ul>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">7. Security Considerations</h2>
            <ul className="list-disc ml-6 mb-4">
              <li>Your API key is stored locally in your browser and is not transmitted to our servers</li>
              <li>We recommend using a dedicated API key for development/testing purposes</li>
              <li>Never share your API key with others</li>
              <li>Consider rotating your API key regularly</li>
            </ul>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">8. Do Not Track (DNT)</h2>
            <p className="mb-4">Currently, we do not respond to Do Not Track (DNT) signals because:</p>
            <ul className="list-disc ml-6 mb-4">
              <li>We use minimal tracking (only local storage for your API key)</li>
              <li>No cross-site tracking occurs</li>
              <li>We do not use third-party analytics that support DNT</li>
            </ul>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">9. Changes to This Cookie Policy</h2>
            <p className="mb-4">We may update this Cookie Policy from time to time to reflect changes in our practices or for legal compliance. We will notify users of material changes by updating the "Last Updated" date on this page.</p>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">10. Contact Us</h2>
            <p className="mb-4">If you have questions about our Cookie Policy, please contact us:</p>
            <ul className="list-disc ml-6 mb-4">
              <li>Email: privacy@varabit.com</li>
              <li>Website: <a href="https://varabit.com/contact" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent">https://varabit.com/contact</a></li>
            </ul>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">11. Quick Summary</h2>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
              <ul className="list-disc ml-6">
                <li>✅ We use <strong>local storage</strong> (not cookies) to save your API key</li>
                <li>✅ This storage is <strong>optional</strong> - you can disable it</li>
                <li>✅ We do <strong>not</strong> use tracking cookies for advertising</li>
                <li>✅ Your API key <strong>never</strong> touches our servers</li>
                <li>✅ You can <strong>clear it anytime</strong> from your browser</li>
              </ul>
            </div>
          </div>
        );

      case 'acceptable-use':
        return (
          <div className="bg-white p-10 rounded-xl shadow-lg">
            <button
              onClick={onBack}
              className="inline-block mb-5 text-primary hover:text-accent transition-colors font-medium"
            >
              ← Back to SubTranslate
            </button>

            <h1 className="text-3xl font-bold text-primary border-b-4 border-primary pb-3 mb-5">Acceptable Use Policy</h1>
            <p className="text-gray-600 italic mb-5">Last Updated: November 6, 2025</p>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-5">
              <p className="text-sm">
                <strong>Important:</strong> This Acceptable Use Policy ("AUP") supplements our Terms of Service. By using SubTranslate, you agree to comply with these guidelines. Violations may result in immediate termination of service.
              </p>
            </div>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">1. Purpose</h2>
            <p className="mb-4">This AUP establishes guidelines for the acceptable use of SubTranslate to ensure a safe, legal, and fair environment for all users. The policy helps protect users, maintain service quality, and comply with legal requirements.</p>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">2. Permitted Uses</h2>
            <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
              <h3 className="text-lg font-semibold text-green-800 mb-2">✅ You MAY use SubTranslate for:</h3>
              <ul className="list-disc ml-6">
                <li>Translating your own subtitle files</li>
                <li>Translating content you have permission to translate</li>
                <li>Educational and research purposes</li>
                <li>Personal, non-commercial subtitle translation</li>
                <li>Legitimate business subtitle translation (with proper rights)</li>
                <li>Learning about AI-powered translation technology</li>
                <li>Testing the service with appropriate test content</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">3. Prohibited Uses</h2>
            <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
              <h3 className="text-lg font-semibold text-red-800 mb-2">❌ You MAY NOT use SubTranslate to:</h3>

              <h3 className="text-lg font-semibold text-red-800 mt-4 mb-2">3.1 Illegal Activities</h3>
              <ul className="list-disc ml-6 mb-3">
                <li>Translate copyrighted material without proper authorization</li>
                <li>Translate content that violates intellectual property rights</li>
                <li>Process content related to illegal activities</li>
                <li>Violate any applicable laws, regulations, or third-party agreements</li>
                <li>Engage in piracy or unauthorized distribution of content</li>
              </ul>

              <h3 className="text-lg font-semibold text-red-800 mt-4 mb-2">3.2 Harmful or Abusive Content</h3>
              <ul className="list-disc ml-6 mb-3">
                <li>Hate speech, harassment, or discriminatory content</li>
                <li>Violent or threatening material</li>
                <li>Adult or sexually explicit content</li>
                <li>Content that promotes self-harm or suicide</li>
                <li>Malware, viruses, or malicious code</li>
                <li>Spam or unwanted bulk content</li>
              </ul>

              <h3 className="text-lg font-semibold text-red-800 mt-4 mb-2">3.3 Technical Abuse</h3>
              <ul className="list-disc ml-6 mb-3">
                <li>Reverse engineering or attempting to extract source code</li>
                <li>Automated scraping or bulk processing without permission</li>
                <li>Attempting to overwhelm or crash the service</li>
                <li>Using multiple API keys to circumvent rate limits</li>
                <li>Sharing or distributing API keys</li>
                <li>Attempting unauthorized access to our systems</li>
              </ul>

              <h3 className="text-lg font-semibold text-red-800 mt-4 mb-2">3.4 Commercial Misuse</h3>
              <ul className="list-disc ml-6">
                <li>Reselling the service without explicit written permission</li>
                <li>Using the service to build competing products</li>
                <li>Commercial use without proper attribution or licensing</li>
                <li>Using the service in violation of Google's Gemini API terms</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">4. Content Ownership and Copyright</h2>
            <ul className="list-disc ml-6 mb-4">
              <li><strong>Your Content:</strong> You must own or have rights to translate all content you submit</li>
              <li><strong>No Infringement:</strong> Do not translate copyrighted material without proper authorization</li>
              <li><strong>Attribution:</strong> Respect original creator rights and attributions</li>
              <li><strong>DMCA Compliance:</strong> We comply with the Digital Millennium Copyright Act</li>
            </ul>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">5. Rate Limits and Resource Usage</h2>
            <ul className="list-disc ml-6 mb-4">
              <li>Use the service responsibly and within reasonable limits</li>
              <li>Do not attempt to bypass or overwhelm rate limits</li>
              <li>Large batch translations should be processed in reasonable timeframes</li>
              <li>We reserve the right to limit or throttle excessive usage</li>
            </ul>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">6. User Conduct</h2>
            <ul className="list-disc ml-6 mb-4">
              <li>Be respectful to other users and our team</li>
              <li>Do not attempt to trick or deceive the system</li>
              <li>Report bugs responsibly through proper channels</li>
              <li>Do not engage in competitive intelligence or industrial espionage</li>
              <li>Maintain the security of your API key</li>
            </ul>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">7. Third-Party Services</h2>
            <ul className="list-disc ml-6 mb-4">
              <li>You must comply with Google Gemini API Terms of Service</li>
              <li>You are responsible for all costs associated with your Google API key</li>
              <li>We are not responsible for Google API availability or policies</li>
              <li>Review <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent">Google's Terms of Service</a></li>
            </ul>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">8. Monitoring and Enforcement</h2>

            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">8.1 Monitoring</h3>
            <p className="mb-4">We may monitor use of the service to:</p>
            <ul className="list-disc ml-6 mb-4">
              <li>Ensure compliance with this AUP</li>
              <li>Detect and prevent abuse</li>
              <li>Improve service quality</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">8.2 Violation Response</h3>
            <div className="bg-red-50 border-2 border-red-500 p-5 rounded-lg mb-4">
              <h3 className="text-lg font-semibold text-red-800 mb-2">Actions We May Take:</h3>
              <ul className="list-disc ml-6">
                <li><strong>Warning:</strong> Initial notification of violation</li>
                <li><strong>Content Removal:</strong> Request to remove problematic content</li>
                <li><strong>Account Suspension:</strong> Temporary suspension of service</li>
                <li><strong>Account Termination:</strong> Permanent removal of access</li>
                <li><strong>Legal Action:</strong> For serious or repeated violations</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">9. Reporting Violations</h2>
            <p className="mb-4">If you encounter content or behavior that violates this AUP, please report it:</p>
            <ul className="list-disc ml-6 mb-4">
              <li>Email: abuse@varabit.com</li>
              <li>Include: Description of violation, evidence, and your contact information</li>
              <li>We will investigate and take appropriate action</li>
            </ul>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">10. False or Malicious Reports</h2>
            <ul className="list-disc ml-6 mb-4">
              <li>False reports may result in restrictions on your account</li>
              <li>We verify reports before taking action</li>
              <li>Good faith reports are always protected</li>
            </ul>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">11. Appeals Process</h2>
            <p className="mb-4">If you believe we took action in error:</p>
            <ul className="list-disc ml-6 mb-4">
              <li>Contact us at: legal@varabit.com</li>
              <li>Provide: Your account details and explanation</li>
              <li>We will review your appeal within 5-7 business days</li>
              <li>Our decision is final</li>
            </ul>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">12. Updates to This Policy</h2>
            <ul className="list-disc ml-6 mb-4">
              <li>We may update this AUP to reflect changes in law or service</li>
              <li>Material changes will be posted on this page</li>
              <li>Continued use constitutes acceptance of updates</li>
            </ul>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">13. Contact Information</h2>
            <p className="mb-4">For questions about this Acceptable Use Policy:</p>
            <ul className="list-disc ml-6 mb-4">
              <li>Email: legal@varabit.com</li>
              <li>Website: <a href="https://varabit.com/contact" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent">https://varabit.com/contact</a></li>
            </ul>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">14. Quick Reference</h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
              <h3 className="text-lg font-semibold text-yellow-800 mb-2">Remember:</h3>
              <ul className="list-disc ml-6">
                <li>✅ Only translate content you have rights to</li>
                <li>✅ Respect intellectual property</li>
                <li>✅ Use the service responsibly</li>
                <li>❌ No illegal, harmful, or abusive content</li>
                <li>❌ No technical abuse or system overload</li>
                <li>❌ No commercial misuse without permission</li>
              </ul>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-5">
      <div className="max-w-4xl mx-auto">
        {renderPolicy()}
      </div>
    </div>
  );
};

export default PolicyPage;
