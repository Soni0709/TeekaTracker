"use client"

import { ArrowRightIcon, ChartBarIcon, CheckCircleIcon, ShieldCheckIcon } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { ClipboardDocumentListIcon, UserGroupIcon } from "./icons"


export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                {/* <div className="h-8 w-8 bg-indigo-800 rounded-full"></div> */}
                <img src="/logo.png" alt="Logo" className="h-8 w-8" />

                <span className="ml-4 text-xl font-bold text-gray-900">TeekaSetu</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <a href="#features" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-indigo-800">
                Features
              </a>
              <a href="#benefits" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-indigo-800">
                Benefits
              </a>
              {/* <a href="#testimonials" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-indigo-800">
                Testimonials
              </a> */}
              <Link
                to="/login"
                className="ml-4 px-4 py-2 text-sm font-medium text-white bg-indigo-800 hover:bg-indigo-900 rounded-md"
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                className="px-4 py-2 text-sm font-medium text-indigo-800 border border-indigo-800 hover:bg-indigo-50 rounded-md"
              >
                Sign Up
              </Link>
            </div>
            <div className="flex md:hidden items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md text-gray-700 hover:text-indigo-800 focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#features"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-800 hover:bg-gray-50 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#benefits"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-800 hover:bg-gray-50 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Benefits
              </a>
              {/* <a
                href="#testimonials"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-800 hover:bg-gray-50 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Testimonials
              </a> */}
              <Link
                to="/login"
                className="block px-3 py-2 text-base font-medium text-indigo-800 hover:bg-indigo-50 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                className="block px-3 py-2 text-base font-medium text-white bg-indigo-800 hover:bg-indigo-900 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Main Section */}
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <div className="relative pt-6 px-4 sm:px-6 lg:px-8"></div>

            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-2xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-5xl">
                  <span className="block xl:inline">Streamline Vaccination</span>{" "}
                  <span className="block text-indigo-800 xl:inline">Management & Tracking</span>
                </h1>
                <p className="mt-4 text-lg text-orange-600 font-semibold italic">
  "हर टीका, हर जीवन की सुरक्षा।"
</p>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  A comprehensive solution for healthcare workers and administrators to efficiently track, manage, and
                  analyze vaccination data across regions.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link
                      to="/signup"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-800 hover:bg-indigo-900 md:py-4 md:text-lg md:px-10"
                    >
                      Get Started
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link
                      to="/login"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-900 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                    >
                      Sign In
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-46 w-full object-cover sm:h-72 md:h-76 lg:w-full lg:h-full"
            src="\indian-tone.png"
            alt="Healthcare worker administering vaccine"
          />
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-800 font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Comprehensive Vaccination Management
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Our platform provides all the tools you need to efficiently manage vaccination programs at any scale.
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <ChartBarIcon className="h-6 w-6" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Interactive Dashboard</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Visualize vaccination data with interactive charts and graphs. Monitor coverage rates, track progress,
                  and identify areas needing attention.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <ClipboardDocumentListIcon className="h-6 w-6" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Vaccination Records</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Easily record and manage vaccination details including beneficiary information, vaccine type, dose,
                  and location data.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <UserGroupIcon className="h-6 w-6" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Role-Based Access</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Different access levels for administrators and health workers ensure data security while enabling
                  efficient collaboration.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <ShieldCheckIcon className="h-6 w-6" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Secure Data Storage</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Built on Supabase with robust security measures to ensure all vaccination and personal data remains
                  protected and compliant.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* Screenshot Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Powerful Tools for Vaccination Management</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Our intuitive interface makes managing vaccination programs simple and efficient.
            </p>
          </div>
          <div className="mt-10">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="\global-vaccine-progress.png"
                alt="Vaccination Dashboard Screenshot"
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div id="benefits" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-800 font-semibold tracking-wide uppercase">Benefits</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose TeekaSetu?
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Our platform is designed to solve real challenges in vaccination program management.
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {[
                {
                  title: "Increased Efficiency",
                  description: "Reduce administrative burden with streamlined data entry and automated reporting.",
                },
                {
                  title: "Better Coverage Tracking",
                  description: "Identify under-vaccinated areas and populations to improve vaccination coverage.",
                },
                {
                  title: "Data-Driven Decisions",
                  description: "Make informed decisions based on real-time analytics and comprehensive reports.",
                },
                {
                  title: "Improved Coordination",
                  description:
                    "Enable better coordination between health workers across different regions and facilities.",
                },
              ].map((benefit, index) => (
                <div key={index} className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-100 text-indigo-800">
                      <CheckCircleIcon className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">{benefit.title}</h3>
                    <p className="mt-2 text-base text-gray-500">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials
      <div id="testimonials" className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Trusted by Healthcare Professionals</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              See what our users have to say about TeekaSetu
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                quote:
                  "TeekaSetu has transformed how we manage our district's vaccination program. The analytics have helped us identify and address coverage gaps.",
                author: "Dr. Sarah Johnson",
                role: "District Health Officer",
              },
              {
                quote:
                  "The interface is intuitive and makes recording vaccinations quick and easy, even in remote areas with limited connectivity.",
                author: "Michael Chen",
                role: "Field Health Worker",
              },
              {
                quote:
                  "Being able to generate reports instantly has saved our team countless hours and improved our reporting accuracy significantly.",
                author: "Priya Patel",
                role: "Immunization Program Manager",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="px-6 py-8">
                  <div className="flex items-center mb-4">
                    <div className="h-10 w-10 rounded-full bg-indigo-200 flex items-center justify-center text-indigo-500">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div className="ml-3">
                      <h3 className="text-lg font-medium text-gray-900">{testimonial.author}</h3>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}

      {/* CTA Section */}
      <div className="bg-indigo-900">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to get started?</span>
            <span className="block text-indigo-200">Sign up today and transform your vaccination management.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                to="/signup"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-800 bg-white hover:bg-indigo-50"
              >
                Get started
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-800 hover:bg-indigo-900"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex justify-center md:justify-start">
              <div className="flex items-center">
                <div className="h-8 w-8 bg-indigo-800 rounded-full"></div>
                <span className="ml-2 text-xl font-bold text-gray-900">TeekaSetu</span>
              </div>
            </div>
            <div className="mt-8 md:mt-0">
              <p className="text-center text-base text-gray-500">
                &copy; {new Date().getFullYear()} TeekaSetu. All rights reserved.
              </p>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between">
            <div className="flex space-x-6 md:order-2">
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Privacy Policy</span>
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Terms of Service</span>
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Contact</span>
                Contact
              </a>
            </div>
            <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
              Designed for healthcare professionals and administrators.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
