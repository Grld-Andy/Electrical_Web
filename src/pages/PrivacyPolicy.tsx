import React from "react";
import { motion } from "framer-motion";
import PageHeader from "@/components/ui/PageHeader";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-gray-50">
      {/* Page Header */}
      <PageHeader text="Privacy Policy" />

      <div className="container mx-auto px-6 py-20 max-w-4xl">
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl font-black mb-4">
            <span className="text-gray-800">Protecting Your Privacy</span>{" "}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Lymfz Engineering Limited is committed to protecting your privacy and
            safeguarding personal and business information in compliance with
            Ghanaian data protection regulations. This Privacy Policy outlines
            how we collect, use, and safeguard data when you engage with us.
          </p>
        </motion.div>

        {/* Sections */}
        <div className="space-y-8">
          {[
            {
              title: "1. Introduction",
              body: `Lymfz Engineering Limited ("we", "our") is an Electrical Engineering
              company registered in Ghana under the Companies Code 1963 (Act 179).
              This Privacy Policy explains how we handle your information when
              providing services, executing projects, or engaging in
              communications.`,
            },
            {
              title: "2. Information We Collect",
              body: `We may collect:`,
              list: [
                "Business and contact details (name, company, email, phone).",
                "Technical/project data for electrical works and supplies.",
                "Financial or transactional information for contracts.",
                "Compliance and regulatory data as required by law.",
              ],
            },
            {
              title: "3. How We Use Your Information",
              body: `Your data may be used to:`,
              list: [
                "Process contractor and supplier applications.",
                "Execute engineering projects and deliver services.",
                "Communicate about inquiries, projects, or contracts.",
                "Comply with legal and regulatory requirements.",
              ],
            },
            {
              title: "4. Sharing of Information",
              body: `We do not sell personal information. However, we may share data with:`,
              list: [
                "Partners, subcontractors, and suppliers for project execution.",
                "Regulatory/government authorities where legally required.",
                "Service providers supporting IT, logistics, and compliance.",
              ],
            },
            {
              title: "5. Data Security",
              body: `Safety and security are core values at Lymfz Engineering Limited. We
              employ strict technical and organizational safeguards to protect
              against unauthorized access, misuse, or loss.`,
            },
            {
              title: "6. Data Retention",
              body: `Information is retained only as long as necessary to fulfill
              project, contractual, and legal obligations. Once no longer needed,
              data is securely deleted or archived.`,
            },
            {
              title: "7. Your Rights",
              body: `In line with Ghana's Data Protection Act, you have the right to:`,
              list: [
                "Access the personal data we hold about you.",
                "Request correction of inaccurate information.",
                "Request deletion of personal information, where applicable.",
                "Withdraw consent for data processing (subject to legal/contractual requirements).",
              ],
            },
            {
              title: "8. International Transfers",
              body: `Where international partners are involved, your data may be
              transferred outside Ghana. We ensure safeguards are in place to
              maintain protection.`,
            },
            {
              title: "9. Updates to This Policy",
              body: `We may update this Privacy Policy to reflect legal, operational,
              or service-related changes. Please check this page periodically.`,
            },
            {
              title: "10. Contact Us",
              body: `For any inquiries about this Privacy Policy, contact us at:`,
              contact: true,
            },
          ].map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow p-8"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {section.title}
              </h3>
              <p className="text-gray-600 mb-4">{section.body}</p>

              {section.list && (
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  {section.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}

              {section.contact && (
                <div className="mt-4 text-gray-700">
                  <p>
                    <strong>Lymfz Engineering Limited</strong>
                  </p>
                  <p>5 Good Street, Amasaman, Accra, Ghana</p>
                  <p>
                    Email:{" "}
                    <a
                      href="mailto:Lymfzengineering@gmail.com"
                      className="text-blue-600 hover:underline"
                    >
                      Lymfzengineering@gmail.com
                    </a>
                  </p>
                  <p>Phone: +233 249811204</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
