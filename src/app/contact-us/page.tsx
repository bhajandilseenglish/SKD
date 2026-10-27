import React from "react";
import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import { siteConfig } from "@/data/siteData";
import { MapPin, Phone, Mail, Clock, ExternalLink, MessageCircle, Building } from "lucide-react";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata: Metadata = {
  title: "Contact Us & Campus Location | SKD Group of Institutions Chandigarh",
  description:
    "Get in touch with SKD Group of Institutions in Chandigarh at Godrej Eternia, Industrial Area Phase 1. Call +91 80548 11313 or book an in-person counselling visit.",
  alternates: {
    canonical: "/contact-us",
  },
};

export default function ContactPage() {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    siteConfig.contact.whatsappMessage
  )}`;

  return (
    <>
      <Breadcrumb items={[{ label: "Contact Us" }]} />

      <div className="space-y-16 pb-20">
        <section className="bg-gradient-to-b from-[#F5F8FC] to-white py-14 border-b border-[#E5EBF2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-blue-50 text-[#2457D6] rounded-full text-xs font-semibold mb-3">
              <MapPin className="w-3.5 h-3.5" />
              <span>Chandigarh Tricity Center</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#10213B] tracking-tight">
              Contact & Visit Our Campus
            </h1>
            <p className="text-base text-[#66758C] mt-3 leading-relaxed">
              We are located at Godrej Eternia, Industrial Area Phase 1, Chandigarh. Visit our center for in-person counselling or reach our admissions desk anytime.
            </p>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Contact Cards */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white p-7 rounded-2xl border border-[#E5EBF2] shadow-sm space-y-4">
                <div className="flex items-start space-x-3.5">
                  <div className="p-3 bg-amber-50 text-[#D9A441] rounded-xl shrink-0 mt-0.5">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#10213B]">Official Campus Address</h3>
                    <p className="text-xs sm:text-sm text-[#66758C] mt-1 leading-relaxed">
                      {siteConfig.address.full}
                    </p>
                    <a
                      href="https://maps.google.com/?q=Godrej+Eternia+Chandigarh+Plot+70+Industrial+Area+Phase+1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-xs font-bold text-[#2457D6] hover:underline mt-2"
                    >
                      <span>Open in Google Maps</span>
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-start space-x-3.5">
                  <div className="p-3 bg-blue-50 text-[#2457D6] rounded-xl shrink-0 mt-0.5">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#10213B]">Call Admissions Desk</h3>
                    <div className="space-y-1 mt-1 text-xs sm:text-sm">
                      <p>
                        <a
                          href={`tel:${siteConfig.contact.primaryPhoneRaw}`}
                          className="font-bold text-[#172B45] hover:text-[#2457D6]"
                        >
                          {siteConfig.contact.primaryPhone}
                        </a>{" "}
                        (General Inquiries)
                      </p>
                      <p>
                        <a
                          href={`tel:${siteConfig.contact.secondaryPhoneRaw}`}
                          className="font-bold text-[#172B45] hover:text-[#2457D6]"
                        >
                          {siteConfig.contact.secondaryPhone}
                        </a>{" "}
                        (Counselling Desk)
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-start space-x-3.5">
                  <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl shrink-0 mt-0.5">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#10213B]">WhatsApp Support</h3>
                    <p className="text-xs text-[#66758C] mt-1">
                      Quick chat with academic advisors.
                    </p>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-xs font-bold text-emerald-600 hover:underline mt-1"
                    >
                      <span>Start WhatsApp Conversation</span>
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-start space-x-3.5">
                  <div className="p-3 bg-purple-50 text-purple-600 rounded-xl shrink-0 mt-0.5">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#10213B]">Campus Visiting Hours</h3>
                    <p className="text-xs text-[#66758C] mt-1">
                      Monday to Saturday: 9:00 AM – 7:00 PM <br />
                      Sunday: By Prior Appointment Only
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Contact Form */}
            <div className="lg:col-span-7">
              <EnquiryForm source="Contact Us Page" />
            </div>
          </div>
        </section>

        {/* Embedded Google Map Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl overflow-hidden border border-[#E5EBF2] shadow-sm">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center">
              <div>
                <h3 className="text-lg font-bold text-[#10213B]">
                  Interactive Campus Map & Directions
                </h3>
                <p className="text-xs text-[#66758C]">
                  Godrej Eternia, Plot No. 70, Industrial Area Phase 1, Chandigarh
                </p>
              </div>
              <a
                href="https://maps.google.com/?q=Godrej+Eternia+Chandigarh+Plot+70+Industrial+Area+Phase+1"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#2457D6] text-white rounded-xl text-xs font-bold hover:bg-[#1B45B3] transition-colors"
              >
                Directions
              </a>
            </div>

            <div className="relative h-96 w-full bg-slate-100">
              <iframe
                title="SKD Group of Institutions Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.4199182390197!2d76.801648!3d30.704627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fece357a79e4d%3A0xe6700c8fca3856b3!2sGodrej%20Eternia!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
